/** @format */
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Calendar,
  Navigation,
  Zap,
  Shield,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Type pour les props (simplifié pour l'exemple)
type LocationWithAgents = {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
  email?: string;
  isActive: boolean;
  workingHours?: Record<string, { start: string; end: string }> | null;
  assignedServices?: Array<{ id: string; name: string; color: string }>;
  coordinates?: { lat: number; lng: number };
  rating?: number;
  reviewsCount?: number;
  isPremium?: boolean;
};

type Props = {
  location: LocationWithAgents;
  onBookingClick: () => void;
};

function LocationCard({ location, onBookingClick }: Props) {
  // Image optimisée pour centres médicaux
  const defaultImage =
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=300&fit=crop";

  // Fonction pour formater les heures d'ouverture
  const formatWorkingHours = (
    workingHours: Record<string, { start: string; end: string }> | null,
  ) => {
    if (!workingHours) return "Horaires sur demande";

    const days = [
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
      "dimanche",
    ];
    const todayIndex = new Date().getDay() - 1;
    const today = days[todayIndex >= 0 ? todayIndex : 6];

    const todayHours = workingHours[today];
    if (todayHours) {
      return `Aujourd'hui: ${todayHours?.start} - ${todayHours?.end}`;
    }

    // Afficher les premiers horaires disponibles
    const firstDay = Object.keys(workingHours)[0];
    const firstHours = workingHours[firstDay];
    return `${firstDay}: ${firstHours?.start} - ${firstHours?.end}`;
  };

  // Services par défaut si non fournis
  const defaultServices = [
    { id: "1", name: "Épilation Laser", color: "#8B5CF6" },
    { id: "2", name: "Détatouage", color: "#EC4899" },
    { id: "3", name: "Rajeunissement", color: "#06B6D4" },
  ];

  const services = location.assignedServices || defaultServices;
  const rating = location.rating || 4.9;
  const reviewsCount = location.reviewsCount || 127;

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-2 border-gray-100 hover:border-purple-200 max-w-md mx-auto">
      {/* Badge Premium si applicable */}
      {location.isPremium && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <Award className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}

      {/* Image d'en-tête avec overlay gradient */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={defaultImage}
          alt={`Centre ${location.name} - Laser Body Center`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <Badge
            className={`${
              location.isActive
                ? "bg-green-500/90 text-white border-green-400"
                : "bg-red-500/90 text-white border-red-400"
            } backdrop-blur-sm`}>
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                location.isActive ? "bg-green-200" : "bg-red-200"
              }`}></div>
            {location.isActive ? "Ouvert" : "Fermé"}
          </Badge>
        </div>

        {/* Nom du centre en overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
            {location.name}
          </h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-white text-sm font-medium">
              {rating} ({reviewsCount} avis)
            </span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Adresse avec icône */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-medium">{location.address}</p>
            <p className="text-gray-600 text-sm">
              {location.city}, {location.postalCode}
            </p>
            <p className="text-gray-500 text-xs">{location.country}</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-3">
          {location.phone && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <a
                href={`tel:${location.phone}`}
                className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors hover:underline">
                {location.phone}
              </a>
            </div>
          )}

          {location.email && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <a
                href={`mailto:${location.email}`}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors hover:underline">
                {location.email}
              </a>
            </div>
          )}
        </div>

        {/* Horaires d'ouverture */}
        <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg border border-gray-200">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Horaires</p>
            <p className="text-xs text-gray-600">
              {formatWorkingHours(location.workingHours as any)}
            </p>
          </div>
        </div>

        {/* Services disponibles */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-purple-600" />
            Services disponibles
          </h3>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 3).map((service) => (
              <Badge
                key={service.id}
                className="text-white border-0"
                style={{ backgroundColor: service.color }}>
                {service.name}
              </Badge>
            ))}
            {services.length > 3 && (
              <Badge
                variant="outline"
                className="text-gray-600 border-gray-300">
                +{services.length - 3} autres
              </Badge>
            )}
          </div>
        </div>

        {/* Avantages du centre */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-2 bg-green-50 rounded-lg border border-green-200">
            <Shield className="w-3 h-3 text-green-600 mx-auto mb-1" />
            <span className="text-xs text-green-700 font-medium">Sécurisé</span>
          </div>
          <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
            <Award className="w-3 h-3 text-blue-600 mx-auto mb-1" />
            <span className="text-xs text-blue-700 font-medium">Certifié</span>
          </div>
          <div className="text-center p-2 bg-purple-50 rounded-lg border border-purple-200">
            <Zap className="w-3 h-3 text-purple-600 mx-auto mb-1" />
            <span className="text-xs text-purple-700 font-medium">Moderne</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <Button
            onClick={onBookingClick}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            <Calendar className="mr-2 h-5 w-5" />
            Réserver ma consultation
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Promotion banner si applicable */}
        {location.isActive && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-orange-800">
              🎉 Consultation ce mois-ci !
            </p>
            <p className="text-xs text-orange-600">
              Offre valable pour tous nouveaux clients
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default LocationCard;
