/** @format */
"use client";
import { Award, Facebook, FactoryIcon, Instagram, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";

// Composant icône TikTok personnalisé
const TikTokIcon = ({ className }: any) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686c-1.24-.694-2.036-2.008-2.036-3.486V2.5H14.81v11.672c0 1.653-1.347 3-3 3s-3-1.347-3-3 1.347-3 3-3c.339 0 .663.056.967.159V8.456c-.31-.043-.627-.065-.967-.065-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6V7.737c1.235.896 2.743 1.424 4.379 1.424v-2.743c-.828 0-1.584-.297-2.179-.732z" />
  </svg>
);

// Composant icône Snapchat personnalisé
const SnapchatIcon = ({ className }: any) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.166 3c-4.95 0-8.33 4.239-8.33 8.621 0 1.952.58 3.754 1.557 5.279-1.158.19-1.946.568-2.377.932-.51.433-.626.861-.35 1.298.391.617 1.286.77 2.017.842.17.017.334.026.484.026.464 0 .86-.092 1.188-.222.515.726 1.208 1.319 2.047 1.732.83-.16 1.525-.498 2.086-.977.561.479 1.256.817 2.087.977.839-.413 1.532-1.006 2.047-1.732.328.13.724.222 1.188.222.15 0 .314-.009.484-.026.73-.072 1.626-.225 2.016-.842.276-.437.16-.865-.35-1.298-.43-.364-1.218-.742-2.376-.932.977-1.525 1.557-3.327 1.557-5.279C20.497 7.239 17.117 3 12.166 3zm0 1.5c4.031 0 6.831 3.388 6.831 7.121 0 1.668-.518 3.255-1.438 4.644-.146.22-.112.504.084.691.766.73 1.369.98 1.605 1.13-.065.033-.202.063-.46.091-.133.014-.278.023-.427.023-.277 0-.542-.055-.773-.142-.283-.106-.61-.067-.856.103-.652.45-1.358.759-2.086.895-.745-.13-1.455-.44-2.109-.895-.246-.17-.573-.209-.856-.103-.23.087-.496.142-.773.142-.149 0-.294-.009-.427-.023-.258-.028-.395-.058-.46-.091.236-.15.839-.4 1.605-1.13.196-.187.23-.471.084-.691-.92-1.389-1.438-2.976-1.438-4.644 0-3.733 2.8-7.121 6.831-7.121z" />
  </svg>
);
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
                  <Link href="/tarifs">Épilation Laser Candela</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/tarifs">Épilation Visage</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/tarifs">Épilation Corps</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/tarifs">Épilation Maillot</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/tarifs">Voire plus...</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">INFORMATIONS</h4>
              <ul className="space-y-2 text-purple-300">
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/tarifs">Tarifs & Forfaits</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/pourquoi-lbc">Technologie Candela</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/contact">Consultation</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/about">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">SUIVEZ-NOUS</h4>
              <div className="flex space-x-4 mb-4">
                <Link href="https://www.tiktok.com/@laser.body.center">
                  <button className="w-10 h-10 bg-black  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                    <TikTokIcon className="w-5 h-5 text-white" />
                  </button>
                </Link>

                <Link href="https://www.instagram.com/laserbody.center/">
                  <button className="w-10 h-10 bg-pink-500 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                </Link>

                <Link href="https://www.snapchat.com/add/laserbodycente?share_id=wP5ic4cjFRU&locale=fr-FR">
                  <button className="w-10 h-10 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                    <SnapchatIcon className="w-5 h-5 text-white" />
                  </button>
                </Link>
              </div>
              <p className="text-purple-300 text-sm">
                Rejoignez notre communauté pour des conseils et offres
                exclusives
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-300 border-opacity-30 bg-black bg-opacity-30">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-purple-300 text-sm">
                <Link href="https://sbmaac.com/">
                  © 2025 S B MAAC. Tous droits réservés.
                </Link>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/Mentions-legales">
                  <button className="text-purple-300 hover:text-white transition-colors">
                    Mentions légales
                  </button>
                </Link>

                <Link href="/Politique-de-confidentialite">
                  <button className="text-purple-300 hover:text-white transition-colors">
                    Politique de confidentialité
                  </button>
                </Link>
                <Link href="/CGU">
                  <button className="text-purple-300 hover:text-white transition-colors">
                    Conditions Générales d'Utilisation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
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
        `}
      </style>
    </footer>
  );
}
