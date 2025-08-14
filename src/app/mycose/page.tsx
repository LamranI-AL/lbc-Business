/** @format */
"use client";
import React, { useState } from "react";
import {
  Zap,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  Award,
  Calendar,
  Phone,
  Target,
  ThermometerSun,
  Microscope,
  XCircle,
  TrendingUp,
  Heart,
} from "lucide-react";
import Link from "next/link";

const treatmentSteps = [
  {
    step: 1,
    title: "Consultation & Diagnostic",
    description:
      "Examen médical approfondi et prélèvement pour confirmer la présence de mycose",
    icon: Microscope,
    duration: "30 min",
  },
  {
    step: 2,
    title: "Préparation de l'Ongle",
    description:
      "Nettoyage, désinfection et limage pour optimiser la pénétration laser",
    icon: Target,
    duration: "10 min",
  },
  {
    step: 3,
    title: "Traitement Laser Candela",
    description:
      "Application précise du laser à 100°C pour détruire définitivement le champignon",
    icon: Zap,
    duration: "15 min",
  },
  {
    step: 4,
    title: "Suivi Post-Traitement",
    description: "Conseils d'hygiène et planification des séances suivantes",
    icon: Calendar,
    duration: "10 min",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Aucun effet secondaire systémique",
  },
  {
    icon: Clock,
    title: "Traitement Rapide",
    description: "15 minutes par séance seulement",
  },
  {
    icon: CheckCircle,
    title: "Indolore",
    description: "Sensation de chaleur légère uniquement",
  },
  {
    icon: Award,
    title: "Efficacité Prouvée",
    description: "95% de succès avec technologie Candela",
  },
];

const pricingData = [
  {
    title: "Consultation Initiale",
    description: "Diagnostic professionnel complet",
    price: null,
    promoPrice: 50,
    sessions: "1 séance",
    popular: false,
  },
  {
    title: "Traitement Laser Mycose",
    description: "Par ongle traité",
    price: null,
    promoPrice: 40,
    sessions: "À partir de 40€",
    popular: true,
  },
  {
    title: "Consultation de Suivi",
    description: "Contrôle post-traitement",
    price: null,
    promoPrice: "Offerte",
    sessions: "Incluse",
    popular: false,
  },
];

export default function MycosePage() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/20 text-white mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm">
            <Microscope className="w-4 h-4 mr-1" />
            Traitement Médical Avancé
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Mycose des Ongles
            <span className="block text-yellow-300">
              Traitement Laser Candela Définitif
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            <strong>Enfin une solution efficace !</strong> Notre laser médical
            Candela atteint 100°C pour détruire définitivement le champignon là
            où les vernis et crèmes échouent.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Understanding Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Qu'est-ce que l'Onychomycose ?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  ⚠️ Une Infection Tenace et Disgracieuse
                </h3>
                <p className="text-red-700 leading-relaxed">
                  L'onychomycose est une contamination des ongles par des
                  champignons qui se logent
                  <strong> sous et dans l'ongle</strong>, rendant les
                  traitements topiques (vernis, crèmes) souvent inefficaces car
                  ils n'atteignent pas la source du problème.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Signes visibles :
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Décoloration : blanc, jaune, vert ou noir",
                    "Épaississement et déformation de l'ongle",
                    "Fragilité : cassure ou décollement",
                    "Douleur au toucher ou à la pression",
                    "Mauvaise odeur due aux champignons",
                  ].map((symptom, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Pourquoi les Traitements Classiques Échouent ?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Vernis Antifongiques
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ne pénètrent pas assez profondément
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Médicaments Oraux
                    </h4>
                    <p className="text-sm text-gray-600">
                      Effets secondaires hépatiques importants
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Laser Candela
                    </h4>
                    <p className="text-sm text-gray-600">
                      Atteint directement la source du champignon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Traitement Laser Candela Révolutionnaire
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Notre laser médical génère une chaleur précise de{" "}
            <strong>100°C pendant quelques secondes</strong>
            pour détruire définitivement le champignon sans endommager les
            tissus sains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentSteps.map((step, index) => (
              <div
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-purple-300 rounded-xl overflow-hidden bg-white">
                <div className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-900">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {step.description}
                  </p>

                  <div className="text-purple-600 border border-purple-300 px-3 py-1 rounded-full text-sm inline-flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Treatment Benefits */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="text-center mb-8">
              <ThermometerSun className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Principe Révolutionnaire du Laser
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                <strong>Élévation contrôlée à 100°C :</strong> Le laser cible
                précisément le champignon en chauffant la zone infectée pour le
                détruire définitivement, sans affecter les tissus sains
                environnants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results & Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Résultats et Délais de Guérison
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  ✅ Résultats Prouvés
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li>
                    <strong>95% de taux de succès</strong> avec la technologie
                    Candela
                  </li>
                  <li>
                    <strong>Aucun effet secondaire</strong> contrairement aux
                    médicaments oraux
                  </li>
                  <li>
                    <strong>Traitement de tous les ongles</strong> en une seule
                    séance
                  </li>
                  <li>
                    <strong>Prévention des récidives</strong> efficace
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Timeline de Guérison :
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>Immédiat :</strong> Champignon détruit par la
                      chaleur
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>3-6 mois :</strong> Ongle sain commence à
                      repousser
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>6-12 mois :</strong> Ongle complètement renouvelé
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Prévention des Récidives
              </h3>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Conseils d'hygiène essentiels :
                </h4>
                {[
                  "Laver et sécher soigneusement les pieds quotidiennement",
                  "Porter des chaussures aérées et changer de chaussettes",
                  "Utiliser des produits antifongiques préventifs",
                  "Désinfecter les instruments de pédicure",
                  "Éviter de marcher pieds nus en lieux publics humides",
                  "Laver les chaussettes à minimum 60°C",
                ].map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div
          className="mb-16"
          id="tarifs-mycose">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tarifs Traitement Mycose Laser Candela
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Investissement unique</strong> pour des résultats
              définitifs - contrairement aux traitements répétitifs qui coûtent
              plus cher sur le long terme.
            </p>
          </div>

          {/* Price Comparison */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
              💰 Tarifs Transparents et Simples
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <h4 className="font-bold text-gray-900 mb-3">
                  Consultation Initiale
                </h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">50€</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Diagnostic complet</p>
                  <p>• Plan de traitement</p>
                  <p>• Devis personnalisé</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-500 text-center">
                <h4 className="font-bold text-purple-800 mb-3">
                  Traitement Laser
                </h4>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  40€
                </div>
                <div className="space-y-2 text-sm text-purple-700">
                  <p>• Par ongle traité</p>
                  <p>• Laser Candela médical</p>
                  <p>• Résultats définitifs</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <h4 className="font-bold text-gray-900 mb-3">
                  Consultation Suivi
                </h4>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  Offerte
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Contrôle post-traitement</p>
                  <p>• Conseils prévention</p>
                  <p>• Suivi à long terme</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-blue-700">
                <strong>Exemple :</strong> 3 ongles affectés = 50€
                (consultation) + 120€ (3×40€) = 170€ total
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="text-center">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Inclus dans Tous nos Forfaits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Consultation Médicale
                  </h4>
                  <p className="text-sm text-gray-600">
                    Diagnostic professionnel avec prélèvement si nécessaire
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Suivi Personnalisé
                  </h4>
                  <p className="text-sm text-gray-600">
                    Rendez-vous de contrôle et ajustement du traitement
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Garantie Résultats
                  </h4>
                  <p className="text-sm text-gray-600">
                    Séances supplémentaires offertes si nécessaire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Retrouvez des Ongles Sains Définitivement
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Ne laissez plus la mycose gâcher votre quotidien. Notre laser
            Candela vous offre une solution définitive en quelques séances
            seulement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
                <Calendar className="w-5 h-5 mr-2" />
                Consultation
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                epilbodyfr@gmail.com
              </button>
            </Link>
          </div>

          <p className="text-sm text-purple-200 mt-6">
            Consultation offerte • Diagnostic professionnel • Traitement le jour
            même possible
          </p>
        </div>
      </div>
    </div>
  );
}
