/** @format */
"use client";

import React, { useEffect, useState } from "react";
import { getQuickBookingsByEmail } from "@/actions/Bookings";
import { auth } from "@/lib/firebase";
// import { Link } from "wouter";
import { getServiceById } from "@/actions/services";
import ServiceDetails from "./ServiceDetails";
import Link from "next/link";

// Interface pour l'utilisateur
interface UserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  phone?: string;
  role?: string;
}

// Interface pour les réservations avec les vraies données
interface QuickBooking {
  id: string;
  selectedDate: string;
  selectedTime: string;
  selectedServices: string[]; // Array d'IDs de services
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  totalAmount: number;
  status: string;
  locationId: string;
  userId: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
}

export default function MyReservations() {
  const [bookings, setBookings] = useState<QuickBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  // Fonction pour récupérer les réservations
  const fetchUserBookings = async (email: string) => {
    if (!email) {
      console.error("Email requis pour récupérer les réservations");
      return;
    }

    try {
      console.log("Récupération des réservations pour:", email);
      setLoading(true);
      setError(null);

      const result = await getQuickBookingsByEmail(email);
      console.log("Résultat de la requête:", result);

      if (result.success) {
        const bookingsData = result.quickBookings || [];

        // Trier par date de création (plus récent en premier)
        const sortedBookings = bookingsData.sort(
          (a: QuickBooking, b: QuickBooking) => {
            const aTime = a.createdAt?.seconds || 0;
            const bTime = b.createdAt?.seconds || 0;
            return bTime - aTime;
          },
        );

        setBookings(sortedBookings);
        console.log("Réservations chargées:", sortedBookings.length);
      } else {
        setError(result.error || "Erreur lors du chargement des réservations");
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des réservations:", err);
      setError("Erreur inattendue lors du chargement");
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour récupérer le profil utilisateur
  const fetchUserProfile = async (firebaseUser: any) => {
    try {
      // Utiliser les données Firebase directement si pas de profil Firestore
      const userData: UserData = {
        id: firebaseUser.uid,
        email: firebaseUser.email || "",
        firstName: firebaseUser.displayName?.split(" ")[0] || "",
        lastName: firebaseUser.displayName?.split(" ").slice(1).join(" ") || "",
        avatar: firebaseUser.photoURL || undefined,
      };

      setUser(userData);
      console.log("Profil utilisateur récupéré:", userData);

      // Récupérer les réservations après avoir obtenu l'utilisateur
      if (userData.email) {
        await fetchUserBookings(userData.email);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération du profil:", err);
      setError("Erreur lors de la récupération du profil");
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (!mounted) return;

      setLoading(true);
      setError(null);

      if (firebaseUser) {
        console.log("Utilisateur connecté:", firebaseUser.email);
        await fetchUserProfile(firebaseUser);
      } else {
        console.log("Aucun utilisateur connecté");
        setUser(null);
        setBookings([]);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "converted":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "En attente";
      case "confirmed":
        return "Confirmée";
      case "cancelled":
        return "Annulée";
      case "converted":
        return "Traitée";
      case "completed":
        return "Terminée";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatCreatedDate = (timestamp: {
    seconds: number;
    nanoseconds: number;
  }) => {
    try {
      return new Date(timestamp.seconds * 1000).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Date inconnue";
    }
  };

  // Fonction pour obtenir le nom des services (temporaire - à remplacer par un appel API)
  // getserviceById

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Connexion requise
            </h2>
            <p className="text-gray-600 mb-6">
              Vous devez vous connecter pour voir vos réservations.
            </p>
          </div>
          <Link href="/auth">
            <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors">
              Se connecter
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="text-red-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Erreur de chargement</h2>
            <p className="text-red-500 mt-2">{error}</p>
            <p className="text-sm text-gray-600 mt-1">Email: {user.email}</p>
          </div>
          <button
            onClick={() => user.email && fetchUserBookings(user.email)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <svg
              className="w-20 h-20 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-1a4 4 0 014-4h4a4 4 0 014 4v1a4 4 0 11-8 0z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Aucune réservation
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Vous n'avez pas encore effectué de réservation. Découvrez nos
              centres et réservez votre premier rendez-vous !
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Prêt à commencer ?
            </h3>
            <p className="text-gray-600 mb-4">
              Explorez nos centres, choisissez vos services et réservez en
              quelques clics.
            </p>
          </div>

          <Link href="/centres">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Découvrir nos centres
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Mes réservations
        </h1>
        <p className="text-gray-600">
          Bonjour {user.firstName || user.email?.split("@")[0]}, voici vos
          réservations ({bookings.length})
        </p>
      </div>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {formatDate(booking.selectedDate)} à{" "}
                      {booking.selectedTime}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        booking.status,
                      )}`}>
                      {getStatusText(booking.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Réservé le {formatCreatedDate(booking.createdAt)}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600">
                    {booking.totalAmount.toFixed(2)}€
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Services sélectionnés
                  </h4>
                  <ServiceDetails booking={booking} />
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Informations
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Client:</span>{" "}
                      {booking.clientFirstName} {booking.clientLastName}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {booking.clientEmail}
                    </p>
                    {booking.clientPhone && (
                      <p>
                        <span className="font-medium">Téléphone:</span>{" "}
                        {booking.clientPhone}
                      </p>
                    )}
                    <p>
                      <span className="font-medium">ID Réservation:</span>{" "}
                      {booking.id}
                    </p>
                  </div>
                </div>
              </div>

              {booking.notes && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Notes</h4>
                  <p className="text-sm text-gray-600">{booking.notes}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/centres">
          <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Nouvelle réservation
          </button>
        </Link>
      </div>
    </div>
  );
}
