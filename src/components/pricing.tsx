/** @format */

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Treatment } from "../shared/schema";

export default function Pricing() {
  const treatments: Treatment[] = [];
  const isLoading = false;

  if (isLoading) {
    return (
      <section
        id="pricing"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des tarifs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!treatments || treatments.length === 0) {
    return null;
  }

  // Group treatments by category
  const treatmentsByCategory = treatments.reduce(
    (acc: Record<string, Treatment[]>, treatment: Treatment) => {
      if (!acc[treatment.category]) {
        acc[treatment.category] = [];
      }
      acc[treatment.category].push(treatment);
      return acc;
    },
    {},
  );

  const categories = Object.keys(treatmentsByCategory);

  return (
    <section
      id="pricing"
      className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
            <div className="w-8 h-8 bg-gold-500 rounded-full"></div>
          </div>
          <h2 className="font-bold text-3xl text-gray-800 mb-4">
            TARIFS PAR ZONE / FORFAITS
          </h2>
          <p className="text-gray-600">
            Découvrez nos tarifs transparents et nos offres promotionnelles
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gold-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Zone</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Tarif normal
                    <br />
                    <span className="text-sm font-normal">8 séances</span>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    OFFRE SUMMER BODY -50%
                    <br />
                    <span className="text-sm font-normal">
                      FORFAIT 8 SÉANCES
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map((category) => (
                  <tbody key={category}>
                    <tr className="bg-gold-50">
                      <td
                        colSpan={3}
                        className="px-6 py-3 font-semibold text-gray-800">
                        {category}
                      </td>
                    </tr>
                    {treatmentsByCategory[category].map((treatment) => (
                      <tr
                        key={treatment.id}
                        className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-800">
                          {treatment.name}
                        </td>
                        <td className="px-6 py-4 text-center font-semibold">
                          {treatment.normalPrice} €
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-gold-600">
                          {treatment.promoPrice
                            ? `${treatment.promoPrice} €`
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold">
            <Download className="w-4 h-4 mr-2" />
            Télécharger la grille complète
          </Button>
        </div>
      </div>
    </section>
  );
}
