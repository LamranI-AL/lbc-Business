/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sections = [
    {
      id: 1,
      title: "Qui est responsable du traitement de vos données ?",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-loose text-lg font-light">
            <strong className="font-semibold">Laser Body Center</strong>
            <br />
            [Forme juridique, ex : SAS au capital de XX €]
            <br />
            <strong>Siège social :</strong> [Adresse complète]
            <br />
            <strong>SIRET :</strong> [SIRET]
            <br />
            <strong>Email :</strong> contact@laserbodycenter.fr
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Quelles données collectons-nous ?",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Lors de votre navigation sur notre site, nous pouvons collecter :
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Données d'identification
              </h4>
              <p className="text-gray-600">
                Nom, prénom, numéro de téléphone, adresse email
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Données de réservation
              </h4>
              <p className="text-gray-600">
                Centre choisi, date et horaire de RDV
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Données de navigation
              </h4>
              <p className="text-gray-600">
                Adresse IP, type d'appareil, pages visitées
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Données de santé (sensibles)
              </h4>
              <p className="text-gray-600">
                Via formulaire ou consultation — uniquement si vous les
                fournissez volontairement
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-700 font-medium">
              Ces données sont strictement limitées à ce qui est nécessaire au
              bon fonctionnement de nos services.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Pourquoi utilisons-nous vos données ?",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Nous utilisons vos données uniquement dans les cas suivants :
          </p>
          <div className="space-y-3">
            {[
              "Pour répondre à vos demandes (formulaire de contact, rappel gratuit)",
              "Pour gérer vos rendez-vous",
              "Pour vous informer sur nos offres ou nouveautés, si vous avez donné votre consentement",
              "Pour améliorer la navigation sur notre site via des cookies",
              "Pour répondre à nos obligations légales en tant que professionnel de santé esthétique",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Qui peut accéder à vos données ?",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3">
                Vos données ne sont JAMAIS :
              </h4>
              <div className="space-y-2">
                <p className="text-red-700">• Revendues à des tiers</p>
                <p className="text-red-700">
                  • Transférées hors UE (sauf outils Google/Meta avec
                  protection)
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">
                Accès possible uniquement par :
              </h4>
              <div className="space-y-2">
                <p className="text-green-700">
                  • L'équipe interne Laser Body Center
                </p>
                <p className="text-green-700">
                  • Prestataires techniques sous contrat
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Combien de temps conservons-nous vos données ?",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3 ans</div>
              <p className="text-blue-700 text-sm">
                Après le dernier contact sans relation client
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                5-10 ans
              </div>
              <p className="text-purple-700 text-sm">
                Si acte médical réalisé (obligations légales)
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                13 mois
              </div>
              <p className="text-orange-700 text-sm">
                Maximum pour les cookies
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Vos droits",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Vous disposez à tout moment des droits suivants :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Droit d'accès",
              "Droit de rectification",
              "Droit d'effacement",
              "Droit à la portabilité",
              "Droit à la limitation du traitement",
              "Droit d'opposition du traitement",
              "Droit de retrait du consentement",
              "Droit de réclamation auprès de la CNIL",
            ].map((droit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{droit}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 text-white">
            <h4 className="font-semibold text-white mb-3">
              Pour toute demande :
            </h4>
            <p className="text-gray-100">
              Contactez notre Délégué à la Protection des Données (DPO)
              <br />
              <strong>Email :</strong> dpo@laserbodycenter.fr
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Politique sur les cookies",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Le site www.laserbodycenter.fr utilise des cookies pour :
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="font-semibold text-gray-900 mb-2">
                Fonctionnement
              </div>
              <p className="text-gray-600 text-sm">
                Bon fonctionnement du site
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="font-semibold text-gray-900 mb-2">
                Statistiques
              </div>
              <p className="text-gray-600 text-sm">Analyse de l'audience</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="font-semibold text-gray-900 mb-2">Expérience</div>
              <p className="text-gray-600 text-sm">Amélioration utilisateur</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <p className="text-blue-800 font-medium">
              Vous pouvez accepter ou refuser les cookies via le bandeau affiché
              lors de votre première visite.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Sécurité de vos données",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Nous mettons en place toutes les mesures techniques et
            organisationnelles nécessaires :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Hébergement sécurisé",
                desc: "Infrastructure protégée et certifiée",
              },
              {
                title: "Accès restreint",
                desc: "Contrôle d'accès aux données",
              },
              {
                title: "Chiffrement",
                desc: "Formulaires et transmissions sécurisés",
              },
              {
                title: "Formation",
                desc: "Sensibilisation de notre personnel",
              },
            ].map((mesure, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {mesure.title}
                </h4>
                <p className="text-gray-600">{mesure.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-800 via-gray-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-500/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-l from-gray-400/10 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div variants={itemVariants as any}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-300/30">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Protection des Données
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              POLITIQUE DE
              <span className="block text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text">
                CONFIDENTIALITÉ
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto mb-8">
              Chez{" "}
              <span className="font-semibold text-white">
                Laser Body Center
              </span>
              , la protection de vos données personnelles est une priorité. Nous
              nous engageons à traiter vos informations avec transparence,
              confidentialité et sécurité, en totale conformité avec le{" "}
              <span className="font-bold text-gray-200">
                RGPD (UE 2016/679)
              </span>
              .
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/20 max-w-2xl mx-auto">
              <p className="text-gray-200">
                <span className="font-semibold">Date de mise à jour :</span>{" "}
                13/06/2025
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-white rounded-3xl p-12 shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500"
                variants={itemVariants as any}
                whileHover={{ y: -4, scale: 1.01 }}>
                <div className="mb-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <span className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                      {section.id}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"></div>
                </div>

                <div className="text-gray-700">{section.content}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-gray-300/20"
            variants={itemVariants as any}>
            <h2 className="text-4xl font-bold mb-6">Laser Body Center</h2>

            <p className="text-2xl text-gray-200 mb-12 font-light">
              La sécurité de vos données est aussi importante que celle de votre
              peau.
            </p>

            <div className="bg-white/5 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-semibold mb-4">Mise à jour</h3>
              <p className="text-gray-200 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique à tout
                moment. Nous vous recommandons de la consulter régulièrement.
              </p>
              <p className="text-gray-300 mt-4 font-medium">
                Dernière mise à jour : 13/06/2025
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-8 justify-center"
            variants={itemVariants as any}>
            <Link href="/">
              <button className="bg-white text-gray-800 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105">
                Retour à l'accueil
              </button>
            </Link>

            <Link href="/contact">
              <button className="border-2 border-gray-300 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Contacte
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
