/** @format */

// import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, AlertTriangle } from "lucide-react";
import type { Center } from "../shared/schema";

export default function Locations() {
  const centers: Center[] = [];
  const isLoading = false;

  if (isLoading) {
    return (
      <section
        id="locations"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des centres...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!centers || centers.length === 0) {
    return (
      <section
        id="locations"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">
              Aucun centre disponible pour le moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="locations"
      className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl text-gray-800 mb-6">
            PRENEZ RENDEZ-VOUS
            <br />
            DANS LE CENTRE DE VOTRE CHOIX !
          </h2>
        </div>

        {/* Urgent booking notice */}
        <div className="bg-red-500 text-white text-center py-12 rounded-2xl mb-16">
          <div className="text-yellow-300 mb-4">
            <AlertTriangle className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-2">POUR UN RDV RAPIDE,</h3>
          <h4 className="text-xl font-bold mb-2">APPELEZ LE 01 23 45 67 89</h4>
          <p className="text-lg mb-4">en cliquant sur le numéro !</p>
          <p className="text-xl font-bold mb-2">
            NOUS AVONS DES CRÉNEAUX DISPONIBLES
          </p>
          <p className="text-lg">NON VISIBLES SUR DOCTOLIB</p>
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Center locations */}
        <div className="space-y-16">
          {centers.map((center: Center, index: number) => (
            <div
              key={center.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 space-y-6">
                  <div className="flex items-center mb-6">
                    <MapPin className="w-6 h-6 text-gold-500 mr-4" />
                    <h3 className="font-bold text-2xl text-gray-800">
                      {center.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {center.address}
                      </p>
                      <p className="text-gray-600">{center.city}</p>
                    </div>

                    <div className="text-3xl font-bold text-gray-800">
                      {center.phone}
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                        PRENDRE RDV - {center.name.split(" - ")[1]}
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold">
                        DÉCOUVRIR LE CENTRE
                      </Button>
                    </div>

                    {center.metro && (
                      <div className="text-sm text-gray-600 space-y-1">
                        {center.metro.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                        {center.parking &&
                          center.parking
                            .split("\n")
                            .map((line, i) => <p key={i}>{line}</p>)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-100">
                  <img
                    src={
                      center.imageUrl ||
                      `https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`
                    }
                    alt={`Centre ${center.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
