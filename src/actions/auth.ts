/** @format */
"use server";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  where,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export type UserRole = "user" | "admin" | "superadmin";

export interface UserWithDetails {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  phone?: string;
  avatar?: string;
}

// REGISTER: Créer un nouvel utilisateur
export async function registerUser(userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: UserRole;
}) {
  try {
    // Créer l'utilisateur dans Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    );

    const user = userCredential.user;

    // Créer le profil utilisateur dans Firestore
    const userProfile: Omit<UserWithDetails, "id"> = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role || "user",
      isActive: true,
      phone: userData.phone || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Utiliser l'UID comme ID du document
    await setDoc(doc(db, "users", user.uid), userProfile);

    return {
      success: true,
      user: {
        id: user.uid,
        ...userProfile,
      },
    };
  } catch (error: any) {
    console.error("Error registering user:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de l'inscription",
    };
  }
}

// LOGIN: Connexion utilisateur
export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Récupérer les détails utilisateur
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      await signOut(auth);
      return {
        success: false,
        error: "Profil utilisateur introuvable",
      };
    }

    const userData = userDoc.data() as Omit<UserWithDetails, "id">;

    // Vérifier si l'utilisateur est actif
    if (!userData.isActive) {
      await signOut(auth);
      return {
        success: false,
        error: "Compte désactivé. Contactez l'administrateur.",
      };
    }

    // Mettre à jour la dernière connexion
    await updateDoc(doc(db, "users", user.uid), {
      lastLogin: new Date(),
      updatedAt: new Date(),
    });

    return {
      success: true,
      user: {
        id: user.uid,
        ...userData,
        lastLogin: new Date(),
      },
    };
  } catch (error: any) {
    console.error("Error logging in:", error);
    return {
      success: false,
      error: error.message || "Email ou mot de passe incorrect",
    };
  }
}

// LOGOUT: Déconnexion
export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error("Error logging out:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la déconnexion",
    };
  }
}

// ========== USER MANAGEMENT ==========

// READ: Obtenir l'utilisateur actuel
export async function getCurrentUser() {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: "Aucun utilisateur connecté" };
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      return { success: false, error: "Profil utilisateur introuvable" };
    }

    const userData = userDoc.data() as Omit<UserWithDetails, "id">;

    return {
      success: true,
      user: {
        id: user.uid,
        ...userData,
      },
    };
  } catch (error: any) {
    console.error("Error getting current user:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la récupération de l'utilisateur",
    };
  }
}

// READ: Vérifier l'authentification et les permissions
export async function checkAuthentication(requiredRole?: UserRole) {
  try {
    const user = auth.currentUser;
    if (!user) {
      return {
        success: false,
        error: "Non authentifié",
        isAuthenticated: false,
      };
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      return {
        success: false,
        error: "Profil utilisateur introuvable",
        isAuthenticated: false,
      };
    }

    const userData = userDoc.data() as Omit<UserWithDetails, "id">;

    // Vérifier si l'utilisateur est actif
    if (!userData.isActive) {
      return {
        success: false,
        error: "Compte désactivé",
        isAuthenticated: false,
      };
    }

    // Vérifier les permissions si un rôle est requis
    if (requiredRole) {
      const hasPermission = checkRolePermission(userData.role, requiredRole);
      if (!hasPermission) {
        return {
          success: false,
          error: "Permissions insuffisantes",
          isAuthenticated: true,
          hasPermission: false,
        };
      }
    }

    return {
      success: true,
      isAuthenticated: true,
      hasPermission: true,
      user: {
        id: user.uid,
        ...userData,
      },
    };
  } catch (error: any) {
    console.error("Error checking authentication:", error);
    return {
      success: false,
      error: error.message,
      isAuthenticated: false,
    };
  }
}

// UTILITY: Vérifier les permissions de rôle
function checkRolePermission(
  userRole: UserRole,
  requiredRole: UserRole,
): boolean {
  const roleHierarchy: Record<UserRole, number> = {
    user: 1,
    admin: 2,
    superadmin: 3,
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

// READ: Obtenir tous les utilisateurs (admin uniquement)
export async function getAllUsers() {
  try {
    // Vérifier les permissions
    const authCheck = await checkAuthentication("admin");
    if (!authCheck.success) {
      return authCheck;
    }

    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    const users: UserWithDetails[] = [];
    querySnapshot.forEach((doc) => {
      const userData = {
        id: doc.id,
        ...doc.data(),
      };
      users.push(userData as UserWithDetails);
    });

    return { success: true, users };
  } catch (error: any) {
    console.error("Error getting all users:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la récupération des utilisateurs",
    };
  }
}

// READ: Obtenir un utilisateur par ID
export async function getUserById(id: string) {
  try {
    const userDoc = await getDoc(doc(db, "users", id));

    if (!userDoc.exists()) {
      return { success: false, error: "Utilisateur introuvable" };
    }

    const userData = {
      id: userDoc.id,
      ...userDoc.data(),
    };

    return { success: true, user: userData as UserWithDetails };
  } catch (error: any) {
    console.error("Error getting user by ID:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la récupération de l'utilisateur",
    };
  }
}

// READ: Obtenir les utilisateurs par rôle
export async function getUsersByRole(role: UserRole) {
  try {
    // Vérifier les permissions
    const authCheck = await checkAuthentication("admin");
    if (!authCheck.success) {
      return authCheck;
    }

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("role", "==", role));
    const querySnapshot = await getDocs(q);

    const users: UserWithDetails[] = [];
    querySnapshot.forEach((doc) => {
      const userData = {
        id: doc.id,
        ...doc.data(),
      };
      users.push(userData as UserWithDetails);
    });

    return { success: true, users };
  } catch (error: any) {
    console.error("Error getting users by role:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la récupération des utilisateurs",
    };
  }
}

// UPDATE: Mettre à jour le profil utilisateur
export async function updateUserProfile(
  userId: string,
  updateData: Partial<UserWithDetails>,
) {
  try {
    // Vérifier que l'utilisateur peut modifier ce profil
    const currentUser = await getCurrentUser();
    if (!currentUser.success) {
      return currentUser;
    }

    // Seul l'utilisateur lui-même ou un admin peut modifier le profil
    if (
      currentUser.user!.id !== userId &&
      !checkRolePermission(currentUser.user!.role, "admin")
    ) {
      return {
        success: false,
        error: "Permissions insuffisantes pour modifier ce profil",
      };
    }

    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      ...updateData,
      updatedAt: new Date(),
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error updating user profile:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la mise à jour du profil",
    };
  }
}

// UPDATE: Changer le rôle d'un utilisateur (superadmin uniquement)
export async function updateUserRole(userId: string, newRole: UserRole) {
  try {
    // Vérifier les permissions superadmin
    const authCheck = await checkAuthentication("superadmin");
    if (!authCheck.success) {
      return authCheck;
    }

    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      role: newRole,
      updatedAt: new Date(),
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error updating user role:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la mise à jour du rôle",
    };
  }
}

// UPDATE: Activer/désactiver un utilisateur (admin uniquement)
export async function toggleUserStatus(userId: string, isActive: boolean) {
  try {
    // Vérifier les permissions admin
    const authCheck = await checkAuthentication("admin");
    if (!authCheck.success) {
      return authCheck;
    }

    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      isActive: isActive,
      updatedAt: new Date(),
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error toggling user status:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la modification du statut",
    };
  }
}

// PASSWORD: Réinitialiser le mot de passe
export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: "Email de réinitialisation envoyé",
    };
  } catch (error: any) {
    console.error("Error resetting password:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la réinitialisation",
    };
  }
}

// PASSWORD: Changer le mot de passe
export async function changePassword(newPassword: string) {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: "Aucun utilisateur connecté" };
    }

    await updatePassword(user, newPassword);
    return {
      success: true,
      message: "Mot de passe modifié avec succès",
    };
  } catch (error: any) {
    console.error("Error changing password:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la modification du mot de passe",
    };
  }
}

// DELETE: Supprimer un utilisateur (superadmin uniquement)
export async function deleteUser(userId: string) {
  try {
    // Vérifier les permissions superadmin
    const authCheck = await checkAuthentication("superadmin");
    if (!authCheck.success) {
      return authCheck;
    }

    // Supprimer de Firestore
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);

    // Note: Pour supprimer complètement de Firebase Auth,
    // il faut utiliser Firebase Admin SDK côté serveur

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting user:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la suppression de l'utilisateur",
    };
  }
}

// SEARCH: Rechercher des utilisateurs
export async function searchUsers(searchTerm: string) {
  try {
    // Vérifier les permissions admin
    const authCheck = await checkAuthentication("admin");
    if (!authCheck.success) {
      return authCheck;
    }

    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    const users: UserWithDetails[] = [];
    querySnapshot.forEach((doc) => {
      const rawUserData = doc.data();
      const fullName =
        `${rawUserData.firstName} ${rawUserData.lastName}`.toLowerCase();
      const email = rawUserData.email?.toLowerCase() || "";

      if (
        fullName.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase())
      ) {
        const userData = {
          id: doc.id,
          ...rawUserData,
        };
        users.push(userData as UserWithDetails);
      }
    });

    return { success: true, users };
  } catch (error: any) {
    console.error("Error searching users:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la recherche",
    };
  }
}

export async function googleAuth() {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error: any) {
    console.error("Error google auth:", error);
    return {
      success: false,
      error: error.message || "Erreur lors de la connexion avec Google",
    };
  }
}
