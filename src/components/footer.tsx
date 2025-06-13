/** @format */
"use client";
import { Award, Facebook, Instagram, Shield } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
              LASER BODY CENTER
            </h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Votre centre d'excellence en épilation laser médical depuis plus
              de 15 ans
            </p>
          </div>

          {/* Services Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h4 className="font-bold text-white mb-4">NOS SERVICES</h4>
              <ul className="space-y-2 text-purple-300">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Épilation Laser Candela
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Épilation Visage
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Épilation Corps
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Épilation Maillot
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Voire plus...
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">INFORMATIONS</h4>
              <ul className="space-y-2 text-purple-300">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Tarifs & Forfaits
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Technologie Candela
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Consultations
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  FAQ
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">SUIVEZ-NOUS</h4>
              <div className="flex space-x-4 mb-4">
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-purple-300 text-sm">
                Rejoignez notre communauté pour des conseils et offres
                exclusives
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 py-8 border-t border-purple-300 border-opacity-30">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-purple-400" />
              <div>
                <div className="font-semibold text-white">FDA Approuvé</div>
                <div className="text-purple-300 text-sm">Sécurité garantie</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-purple-400" />
              <div>
                <div className="font-semibold text-white">Centre Certifié</div>
                <div className="text-purple-300 text-sm">Qualité médicale</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">15+</span>
              </div>
              <div>
                <div className="font-semibold text-white">
                  15 Ans d'Expérience
                </div>
                <div className="text-purple-300 text-sm">Leader du marché</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-300 border-opacity-30 bg-black bg-opacity-30">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-purple-300 text-sm">
                © 2025 LASER BODY CENTER. Tous droits réservés.
              </div>
              <div className="flex space-x-6 text-sm">
                <button className="text-purple-300 hover:text-white transition-colors">
                  Mentions légales
                </button>
                <button className="text-purple-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </button>
                <button className="text-purple-300 hover:text-white transition-colors">
                  CGU
                </button>
                <button className="text-purple-300 hover:text-white transition-colors">
                  Plan du site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}
