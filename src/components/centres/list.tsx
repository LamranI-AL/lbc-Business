/** @format */
"use client";
import { getAllLocations } from "@/actions/locations";
import { BookingFormData, LocationWithAgents, User, Service } from "@/types"; // Assurez-vous d'importer Service
import React, { useEffect, useState } from "react";
import Card from "./card";
import BookingForm from "../Booking/BookingForm";
import { addBooking, addQuickBooking } from "@/actions/Bookings";
import { addUser } from "@/actions/users";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// NOTE: Les fonctions d'authentification et getProfile sont retirées pour la clarté,
// car elles ne sont pas utilisées dans la logique de réservation actuelle.

type Props = {};

export default function CentresList({}: Props) {
  const [locations, setLocations] = useState<LocationWithAgents[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationWithAgents | null>(null);

  // Configuration EmailJS
  const EMAILJS_CONFIG = {
    serviceId: "service_at6461b",
    clientTemplateId: "template_xltq8x8", // Template pour le client
    adminTemplateId: "template_ln85erd", // Template pour l'admin
    publicKey: "ulbiD1ZFPgCTfKbGW",
  };

  // Initialiser EmailJS une seule fois
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  // ==================================================================
  // FONCTION D'ENVOI D'EMAIL ADAPTÉE À VOTRE NOUVEAU TEMPLATE
  // ==================================================================
  const sendBookingEmails = async (
    bookingData: BookingFormData,
    newBookingId: string,
  ) => {
    try {
      // --- Préparation pour l'email admin (qui a toujours besoin de tous les détails) ---

      // 1. Préparer les paramètres pour le TEMPLATE CLIENT (version simplifiée)
      // Les clés correspondent à votre nouveau template HTML.
      // `services_list` et `total` ont été supprimés.
      const clientParams = {
        client_first_name: `${bookingData.clientFirstName} ${bookingData.clientLastName}`,
        email: bookingData.clientEmail,
        location: selectedLocation?.name || "notre centre",
        selected_date: bookingData.selectedDate,
        selected_time: bookingData.selectedTime,
        services_details: bookingData.selectedServices,
      };

      // 2. Préparer les paramètres pour le TEMPLATE ADMIN (version détaillée)
      // L'admin reçoit toujours toutes les informations.
      const adminParams = {
        client_first_name: `${bookingData.clientFirstName} ${bookingData.clientLastName}`,
        email: "epilbodyfr@gmail.com",
        client_email: bookingData.clientEmail,
        client_phone: bookingData.clientPhone,
        location: selectedLocation?.name || "notre centre",
        selected_date: bookingData.selectedDate,
        selected_time: bookingData.selectedTime,
        total: bookingData.totalAmount, // L'admin voit le total
        booking_id: newBookingId,
      };

      // 3. Créer et envoyer les promesses d'envoi
      console.log(
        "📧 Préparation de l'envoi (simplifié) au client...",
        clientParams,
      );
      const sendClientEmail = emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.clientTemplateId,
        clientParams,
      );

      console.log(
        "📧 Préparation de l'envoi (détaillé) à l'admin...",
        adminParams,
      );
      const sendAdminEmail = emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.adminTemplateId,
        adminParams,
      );

      await Promise.all([sendClientEmail, sendAdminEmail]);

      console.log("✅ Emails client et admin envoyés avec succès !");
      return true;
    } catch (error) {
      console.error("❌ Erreur critique lors de l'envoi des emails:", error);
      if (error instanceof Error) {
        alert(`Erreur d'envoi d'email: ${error.message}`);
      } else {
        const emailError = error as { status: number; text: string };
        alert(
          `Erreur d'envoi d'email: ${emailError.text || "Erreur inconnue"}`,
        );
      }
      return false;
    }
  };

  // ==================================================================
  // FONCTION DE GESTION DE LA RÉSERVATION CORRIGÉE
  // ==================================================================
  const handleBooking = async (bookingData: BookingFormData) => {
    if (!selectedLocation) {
      alert("Erreur: Aucun lieu sélectionné.");
      return;
    }

    console.log("Tentative de réservation pour:", bookingData);

    try {
      // Étape 1: Créer ou récupérer l'utilisateur
      const newClientPayload: User | any = {
        email: bookingData.clientEmail,
        firstName: bookingData.clientFirstName,
        lastName: bookingData.clientLastName,
        phone: bookingData.clientPhone,
        role: "user" as const, // Forcer le type
        isActive: true,
        createdAt: new Date(),
        lastLogin: new Date(),
      };
      const userResponse = await addUser(newClientPayload);

      if (!userResponse.success || !userResponse.id) {
        throw new Error(
          userResponse.error || "Impossible de créer le profil client.",
        );
      }
      const userId = userResponse.id;
      console.log("👤 Utilisateur créé/trouvé avec l'ID:", userId);

      // Étape 2: Créer l'objet de réservation avec les bonnes données
      const bookingPayload = {
        ...bookingData,
        userId: userId, // Utiliser le VRAI ID utilisateur
        locationId: selectedLocation.id,
        status: "pending" as const,
        client: {
          // Utiliser les VRAIES données client
          id: userId,
          firstName: bookingData.clientFirstName,
          lastName: bookingData.clientLastName,
          email: bookingData.clientEmail,
          phone: bookingData.clientPhone,
        },
        location: {
          id: selectedLocation.id,
          name: selectedLocation.name,
        },
        startTime: new Date(
          `${bookingData.selectedDate}T${bookingData.selectedTime}`,
        ),
        endTime: new Date(
          /* Calculez la vraie heure de fin si possible */ `${bookingData.selectedDate}T${bookingData.selectedTime}`,
        ),
      };

      const bookingResponse = await addQuickBooking(bookingPayload as any); // Le 'as any' est à améliorer en typant correctement addBooking

      if (!bookingResponse.success || !bookingResponse.id) {
        throw new Error(
          bookingResponse.error ||
            "La réservation n'a pas pu être enregistrée en base de données.",
        );
      }

      console.log("✅ Réservation enregistrée avec l'ID:", bookingResponse.id);

      // Étape 3: Envoyer les emails de confirmation
      const emailsSent = await sendBookingEmails(
        bookingData,
        bookingResponse.id,
      );

      if (emailsSent) {
        alert("🎉 Réservation confirmée ! Un email vous a été envoyé.");
      } else {
        alert(
          "⚠️ Votre réservation est enregistrée, mais nous avons eu un problème pour envoyer l'email de confirmation. Nous vous contacterons manuellement.",
        );
      }

      setSelectedLocation(null); // Fermer le formulaire
    } catch (error) {
      console.error("❌ Erreur dans le processus de réservation:", error);
      alert(
        `Une erreur est survenue: ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`,
      );
    }
  };

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await getAllLocations();
      if (response.success) {
        setLocations(response?.locations || []);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      <div className="container mx-auto px-4 py-8">
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

        {locations.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Chargement
            </h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Nous recherchons les centres{" "}
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Laser Body Center
              </span>{" "}
              près de chez vous...
            </p>
          </div>
        )}

        {selectedLocation && (
          <BookingForm
            location={selectedLocation}
            onBookingSubmit={handleBooking as any} // Plus besoin de 'as any' si le type est correct
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>
    </div>
  );
}
