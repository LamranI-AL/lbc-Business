/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Simuler les icônes
const Award = ({ className }: any) => (
  <div className={`${className} font-bold`}>🏆</div>
);
const UserCheck = ({ className }: any) => (
  <div className={`${className} font-bold`}>👤</div>
);
const Cog = ({ className }: any) => (
  <div className={`${className} font-bold`}>⚙️</div>
);
const GraduationCap = ({ className }: any) => (
  <div className={`${className} font-bold`}>🎓</div>
);
const Home = ({ className }: any) => (
  <div className={`${className} font-bold`}>🏠</div>
);
const Shield = ({ className }: any) => (
  <div className={`${className} font-bold`}>🛡️</div>
);
const CheckCircle = ({ className }: any) => (
  <div className={`${className} font-bold`}>✓</div>
);
const MapPin = ({ className }: any) => (
  <div className={`${className} font-bold`}>📍</div>
);

// Simuler le composant Button
const Button = ({ children, className, onClick }: any) => (
  <button
    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${className}`}
    onClick={onClick}>
    {children}
  </button>
);

export default function Services() {
  const scrollToPricing = () => {
    console.log("Navigation vers /pricing");
  };

  const scrollToAbout = () => {
    console.log("Navigation vers /about");
  };

  const benefits = [
    { icon: Award, title: "PRODUITS MÉDICAUX HAUT DE GAMME" },
    { icon: UserCheck, title: "SUIVI PERSONNALISÉ" },
    { icon: Cog, title: "TECHNOLOGIES DE POINTE" },
    { icon: GraduationCap, title: "MÉDECINS ET PRATICIENS EXPERTS" },
    { icon: Home, title: "CADRE UNIQUE" },
    { icon: Shield, title: "PRIX JUSTES ET FACILITÉS DE PAIEMENT" },
    { icon: CheckCircle, title: "GARANTIE DE RÉSULTATS PARFAITS" },
    { icon: MapPin, title: "ACCESSIBILITÉ GÉOGRAPHIQUE" },
  ];

  return (
    <>
      {/* About Section */}
      <section
        id="services"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <h2 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              Center médical d'épilation Laser Body Center
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Chez Laser Body Center, nous utilisons exclusivement les lasers
              Candela, la référence mondiale en épilation durable. Contrairement
              aux autres technologies (laser diode et lumière pulsée), le
              Candela agit en profondeur pour détruire définitivement le
              follicule pileux, là où les alternatives ne font que ralentir
              temporairement la repousse.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/3.jpg"
                alt="Équipement laser médical avancé"
                className="rounded-2xl shadow-xl w-full h-auto object-cover border-2 border-purple-100"
                style={{ height: "400px" }}
                height={500}
                width={500}
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-2xl text-gray-800 mb-6">
                LASER BODY CENTER : CONFORT, EFFICACITÉ ET SUIVI MÉDICAL ASSURÉS
              </h3>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Laser Body Center, les experts du laser médical, le vrai.
                  Depuis plusieurs années, nous proposons à nos patient.e.s les
                  meilleures solutions en matière d'épilation laser.
                </p>

                <p>
                  En plus de la qualité de nos prestations, nous respectons un
                  protocole sanitaire strict : personnel formé pour notre
                  activité et respecte à toutes nos consignes, des tests de
                  contrôle tous les 3 mois.
                </p>

                <p>
                  À Laser body centre nous nous devons de respecter des
                  standards efficaces, performants et sécurisés, votre peau est
                  en de bonnes mains.
                </p>
              </div>

              <Link href="/about">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={scrollToAbout}>
                  EN SAVOIR PLUS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <h2 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              POURQUOI CHOISIR LASER BODY CENTER
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group hover:border-purple-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                QUEL EST LE PRIX D'UNE ÉPILATION AU LASER ?
              </h3>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Concernant le prix et techniques d'épilation notamment sur la
                  zone d'épilation, par lumière pulsée, le prix d'une séance
                  d'épilation est de moitié moins cher que l'épilation laser.
                  Cependant, sur le long terme, il vous faut deux fois plus de
                  séances.
                </p>

                <p>
                  Pour répondre aux questions, découvrez tous nos forfaits par
                  zone d'épilation adaptés à votre budget et vos besoins.
                  L'épilation laser représente un investissement rentable sur le
                  long terme.
                </p>
              </div>

              <Link href="/tarifs">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={scrollToPricing}>
                  NOS TARIFS
                </Button>
              </Link>
            </div>

            <div>
              <Image
                src="/1.jpg"
                alt="Traitement laser professionnel"
                className="rounded-2xl shadow-xl w-full h-auto object-cover border-2 border-purple-100"
                style={{ height: "400px" }}
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Right side - Image */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
              <img
                src="/4.jpg"
                alt="Femme souriante et confiante"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "500px" }}
              />
            </div>

            {/* Left side - Content */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                VOTRE PREMIÈRE CONSULTATION EST
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent block">
                  OFFERTE !
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Il s'agit d'une consultation médicale obligatoire. Cette
                consultation de diagnostic permettra à l'une de nos spécialistes
                de vous proposer des conseils et un suivi personnalisés. Votre
                devis vous sera délivré à la suite de cette première
                consultation médicale. Cette consultation est offerte et ne vous
                engage à rien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg">
                  RAPPELEZ-MOI !
                </button>
                <Link href="/rendz-vous">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md transform hover:scale-105">
                    PRENDRE RDV EN LIGNE
                  </button>
                </Link>
              </div>

              {/* Badges de confiance avec thème violet */}
              <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <span className="text-sm font-medium">FDA Approuvé</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">⚡</span>
                  </div>
                  <span className="text-sm font-medium">
                    Résultats garantis
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">★</span>
                  </div>
                  <span className="text-sm font-medium">+10k clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section bonus - Avantages du laser Candela */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              TECHNOLOGIE CANDELA - LA DIFFÉRENCE
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Découvrez pourquoi le laser Candela est la référence mondiale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">90%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Efficacité Prouvée
              </h3>
              <p className="text-gray-600">
                90-95% de destruction folliculaire après une série complète
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Double Longueur d'Onde
              </h3>
              <p className="text-gray-600">
                Alexandrite (755nm) + Nd:YAG (1064nm) pour tous types de peaux
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">5+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Résultats Durables
              </h3>
              <p className="text-gray-600">
                75% des patients sans repousse après 5 ans (études cliniques)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
