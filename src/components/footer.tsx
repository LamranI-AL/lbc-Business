/** @format */

"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Calendar, Facebook, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer
      id="footer"
      className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
            <div className="w-8 h-8 bg-gold-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Paris Locations */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-4">À PARIS</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Paris 11 - Voltaire</div>
              <div>100 bd Voltaire, 75011 Paris</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-4">INFORMATIONS</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="text-2xl font-bold text-gold-500">
                01 84 80 80 27
              </div>
              <div>(Coût d'un appel local vers un fixe)</div>
              <div>Du lundi au Samedi: 10h-20h</div>
              <div className="flex justify-center space-x-4 pt-4">
                <Facebook className="w-6 h-6 text-gold-500 cursor-pointer hover:text-gold-600" />
                <Instagram className="w-6 h-6 text-gold-500 cursor-pointer hover:text-gold-600" />
              </div>
            </div>
          </div>

          {/* Appointment CTA */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 rounded-full mb-4">
              <Calendar className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-4">PRENDRE RDV</h3>
            <Button
              className="w-full bg-gold-500 hover:bg-gold-600 p-8 text-white font-semibold"
              onClick={() => {
                router.push("/centres");
              }}>
              PRENEZ RDV DANS LE
              <br />
              CENTRE DE VOTRE CHOIX
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p>
            &copy; 2025 LASER BODY CENTRE. Tous droits réservés. | Mentions
            légales | Politique de confidentialité
          </p>
        </div>
      </div>
    </footer>
  );
}
