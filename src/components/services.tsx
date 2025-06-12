/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  Award,
  UserCheck,
  Cog,
  GraduationCap,
  Home,
  Shield,
  CheckCircle,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  const scrollToPricing = () => {
    router.push("/pricing");
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-full"></div>
            </div>
            <h2 className="font-bold text-3xl text-gold-500 mb-4">
              Centre médical d'épilation Laser Body Center
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
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
                src="/epilation_laser.jpg"
                alt="Advanced laser equipment in medical setting"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-2xl text-gray-800 mb-6">
                LASER BODY CENTRE : CONFORT, EFFICACITÉ ET SUIVI MÉDICAL ASSURÉS
              </h3>

              <div className="space-y-4 text-gray-600">
                <p>
                  Maison du Laser, les experts du laser médical, le vrai. Depuis
                  plusieurs années, nous proposons à nos patient.e.s les
                  meilleures solutions en matière d’épilation laser.
                </p>

                <p>
                  En plus de la qualité de nos prestations, nous respectons un
                  protocole sanitaire strict : personnel formé pour notre
                  activité et respecte à toutes nos consignes, des tests de
                  contrôle tous les 3 mois.
                </p>

                <p>
                  À Laser body centre nous nous devons de respecter des tests
                  efficaces, performants et sécurisés, votre peau est en de
                  bonnes mains.
                </p>
              </div>

              <Button
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold"
                onClick={() => {
                  router.push("/about");
                }}>
                EN SAVOIR PLUS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-full"></div>
            </div>
            <h2 className="font-bold text-3xl text-gold-500 mb-4">
              POURQUOI CHOISIR LA MAISON DU LASER BOULEVARD VOLTAIRE 75011
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-bold text-2xl text-gold-500">
                QUEL EST LE PRIX D'UNE ÉPILATION AU LASER ?
              </h3>

              <div className="space-y-4 text-gray-600">
                <p>
                  Concernant le prix et techniques d'épilation notamment sur la
                  zone d'épilation, par lumière pulsée, le prix d'une séance
                  d'épilation est de moitié moins cher que l'épilation laser.
                  Cependant, sur le long terme, il vous faut deux fois plus de
                  séances.
                </p>

                <p>
                  Pour répondre aux questions, découvrez tous nos forfaits par
                  zone d'épilation et ne vous lancez pas dans la voie
                  d'épilation de votre épargne de rôde et de réduction.
                </p>
              </div>

              <Button
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold"
                onClick={scrollToPricing}>
                NOS TARIFS
              </Button>
            </div>

            <div>
              <img
                src="/epilation_laser1.jpg"
                alt="Professional laser treatment session"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="font-bold text-gold-300 text-3xl">
                VOTRE PREMIÈRE CONSULTATION EST OFFERTE !
              </h2>

              <p className="text-lg text-stone-500 opacity-90">
                Un premier rendez-vous avec une consultation médicale
                obligatoire. Lors de cette consultation de diagnostic, nous
                déterminerons avec vous les protocoles appropriés et les tarifs
                en fonction de la zone de votre choix pour notre épilation
                permanente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white bg-gold-400 text-gold-500 hover:bg-gray-100 font-semibold">
                  APPELEZ-MOI ! J'ACCEPTE*
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gold-500 font-semibold">
                  PRENEZ RDV EN LIGNE
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
                alt="Confident woman after successful treatment"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Right side - Image */}
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  // src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fp-y=0.3"
                  src="/woman.jpg"
                  alt="Femme souriante en débardeur turquoise"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            {/* Left side - Content */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                VOTRE PREMIÈRE CONSULTATION EST
                <span className="text-gold-500 block">OFFERTE !</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Il s'agit d'une consultation médicale obligatoire. Cette
                consultation de diagnostic permettra à l'une de nos spécialistes
                de vous proposer des conseils et un suivi personnalisés. Venez
                donc vous sera offerte à la suite de cette première consultation
                médicale. Cette consultation est offerte et ne vous engage à
                rien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300">
                  RAPPELEZ-MOI ! (GRATUIT)
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  PRENDRE RDV EN LIGNE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
