/** @format */
"use client";
import { getAllLocations } from "@/actions/locations";
import { BookingFormData, LocationWithAgents } from "@/types";
import React, { useEffect, useState } from "react";
import Card from "./card";
import BookingForm from "../Booking/BookingForm";
import { addBooking, addQuickBooking } from "@/actions/Bookings";
import {
  checkAuthentication,
  //   createUser,
  getCurrentUser,
  googleAuth,
  loginUser,
  registerUser,
} from "@/actions/auth";
import { auth } from "@/lib/firebase"; // Import direct de Firebase auth
// import { getProfile } from "@/pages/Profile";
import { Loader2, Shield, Star } from "lucide-react";
export interface UserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  phone?: string;
  role?: string;
}
// Fonction séparée pour récupérer le profil
export const getProfile = async (): Promise<{
  user: UserData | null;
  success: boolean;
  error: string | null;
  loading: boolean;
}> => {
  try {
    const firebaseUser = auth.currentUser;

    if (!firebaseUser) {
      return {
        user: null,
        success: false,
        error: null,
        loading: false,
      };
    }

    // Essayer d'obtenir le profil complet depuis Firestore
    const result = await getCurrentUser();

    if (result.success && result.user) {
      return {
        user: result.user,
        success: true,
        error: null,
        loading: false,
      };
    } else {
      // Fallback avec les données Firebase Auth
      const fallbackUser: UserData = {
        id: firebaseUser.uid,
        email: firebaseUser.email || "",
        firstName: firebaseUser.displayName?.split(" ")[0] || "",
        lastName: firebaseUser.displayName?.split(" ").slice(1).join(" ") || "",
        avatar: firebaseUser.photoURL || undefined,
      };

      return {
        user: fallbackUser,
        success: true,
        error: null,
        loading: false,
      };
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du profil:", error);
    return {
      user: null,
      success: false,
      error: "Erreur lors du chargement du profil",
      loading: false,
    };
  }
};

type Props = {};

export default function CentresList({}: Props) {
  const [locations, setLocations] = useState<LocationWithAgents[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationWithAgents | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true); // Nouveau état
  const [currentUser, setCurrentUser] = useState<any>(null); // État utilisateur

  const handleGoogleLogin = async () => {
    try {
      setIsAuthenticating(true);

      // Tenter la connexion Google
      const googleResult = await googleAuth();

      if (googleResult.success) {
        console.log("Connexion Google réussie:", googleResult.user);
        console.log("Nouvel utilisateur:", googleResult);

        setShowLoginModal(false);

        // Message de bienvenue selon le statut
        if (googleResult) {
          alert("Bienvenue ! Votre compte a été créé avec succès.");
        } else {
          alert("Connexion réussie ! Vous pouvez maintenant réserver.");
        }

        return true;
      } else {
        console.error("Erreur Google Auth:", googleResult.error);
        alert(`Erreur de connexion: ${googleResult.error}`);
        return false;
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification:", error);
      alert("Erreur inattendue lors de la connexion");
      return false;
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleBooking = async (bookingData: BookingFormData) => {
    console.log("Tentative de réservation:", {
      location: selectedLocation?.name,
      services: bookingData.selectedServices,
      total: bookingData.totalAmount,
      client: `${bookingData.clientFirstName} ${bookingData.clientLastName}`,
      date: bookingData.selectedDate,
      time: bookingData.selectedTime,
    });

    const { user, success } = await getProfile();

    if (!user) {
      console.log("Utilisateur non authentifié - Affichage modal de connexion");
      setShowLoginModal(true);
      return;
    }

    console.log("Utilisateur authentifié:", user);

    try {
      // Créer la réservation rapide
      const quickBookingData = {
        ...bookingData,
        clientEmail: user.email,
        locationId: selectedLocation?.id,
        status: "pending",
        userId: user.id,
      };
      // add booking details
      const bookingDetails = {
        ...bookingData,
        locationId: selectedLocation?.id,
        services: bookingData.selectedServices,
        agents: [],
        client: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
        location: {
          id: selectedLocation?.id,
          name: selectedLocation?.name,
        },
        totalAmount: bookingData.totalAmount,
        notes: bookingData.notes,
        startTime: bookingData.selectedDate + " " + bookingData.selectedTime,
        endTime: bookingData.selectedDate + " " + bookingData.selectedTime,
        status: "pending",
        userId: user.id,
      };
      const responseFromBookingDetails = await addBooking(
        bookingDetails as any,
      );
      console.log("Réservation créée avec ID:", responseFromBookingDetails.id);

      const response = await addQuickBooking(quickBookingData as any);

      if (response.success) {
        console.log("Réservation créée avec ID:", response.id);
        setSelectedLocation(null);
        alert(
          "Réservation effectuée avec succès ! Vous recevrez une confirmation par email.",
        );
      } else {
        console.error("Erreur lors de la création:", response.error);
        alert(`Erreur lors de la réservation: ${response.error}`);
      }
    } catch (error) {
      console.error("Erreur inattendue:", error);
      alert("Erreur inattendue lors de la réservation");
    }
  };

  const LoginModal = () =>
    showLoginModal && (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-in zoom-in-95 duration-300">
          <div className="text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Connexion requise
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Connectez-vous pour réserver votre consultation chez{" "}
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Laser Body Center
              </span>
            </p>

            <div className="space-y-4">
              <button
                onClick={handleGoogleLogin}
                disabled={isAuthenticating}
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                {isAuthenticating ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="font-medium">Continuer avec Google</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setShowLoginModal(false)}
                className="w-full py-3 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
                disabled={isAuthenticating}>
                Annuler
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>100% Sécurisé</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 sur Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await getAllLocations();
      if (response.success) {
        setLocations(response?.locations || []);
      }
    };
    fetchLocations();
  }, []);

  // Vérifier l'authentification au chargement avec listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      console.log("Auth state changed:", firebaseUser?.email || "Non connecté");
      setIsAuthLoading(true);

      if (firebaseUser) {
        // Vérifier que le profil existe dans Firestore
        const currentUserResult = await getCurrentUser();
        if (currentUserResult.success) {
          console.log(
            "Utilisateur connecté avec profil:",
            currentUserResult.user?.email,
          );
          setCurrentUser(currentUserResult.user);
        } else {
          console.log("Utilisateur Firebase sans profil Firestore");
          setCurrentUser(null);
        }
      } else {
        console.log("Aucun utilisateur connecté");
        setCurrentUser(null);
      }

      setIsAuthLoading(false);
    });

    // Cleanup du listener
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      {/* Container with better spacing */}
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced grid with better spacing and hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="transform transition-all duration-300 hover:-translate-y-2">
              <Card
                location={location as any}
                onBookingClick={() => setSelectedLocation(location)}
              />
            </div>
          ))}
        </div>

        {/* Empty state with better design */}
        {locations.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Chargement
            </h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              {/* Nous recherchons les centres{" "} */}
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Laser Body Center
              </span>{" "}
              près de chez vous...
            </p>
          </div>
        )}

        {/* Booking Form Modal */}
        {selectedLocation && (
          <BookingForm
            location={selectedLocation}
            onBookingSubmit={handleBooking as any}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>

      {/* Enhanced Login Modal */}
      <LoginModal />
    </div>
  );
}
