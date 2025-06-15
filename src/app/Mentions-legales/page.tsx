/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MentionsLegalesPage() {
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
      title: "Activité de l'entreprise",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            <strong className="font-semibold">Laser Body Center</strong> est un
            centre esthétique spécialisé dans l'épilation laser médicale.
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">
              Notre expertise :
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Actes réalisés par des professionnels qualifiés
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Respect des protocoles de sécurité et d'hygiène médicale
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Utilisation exclusive de la technologie{" "}
                  <strong>Candela GentleMax Pro Plus™</strong>, approuvée par la
                  FDA
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Développement & maintenance du site",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Ce site a été conçu et est maintenu par :
          </p>
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h4 className="text-2xl font-bold text-blue-900 mb-4">
              SBMAAC – Solutions digitales sur mesure
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-blue-700 font-medium mb-2">Email :</p>
                <p className="text-blue-800">contact@sbmaac.com</p>
              </div>
              <div>
                <p className="text-blue-700 font-medium mb-2">Site web :</p>
                <p className="text-blue-800">www.sbmaac.com</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Propriété intellectuelle",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Tous les contenus présents sur ce site sont la propriété exclusive
            de Laser Body Center, sauf mention contraire.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">
                Éléments protégés :
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-green-700">• Textes et rédactionnels</p>
                <p className="text-green-700">• Images et photographies</p>
                <p className="text-green-700">
                  • Vidéos et contenus multimédias
                </p>
                <p className="text-green-700">• Logos et éléments graphiques</p>
                <p className="text-green-700">• Design et architecture</p>
                <p className="text-green-700">• Code source</p>
              </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3">
                Strictement interdit :
              </h4>
              <p className="text-red-700 text-sm leading-relaxed">
                Toute reproduction, représentation, diffusion ou utilisation –
                même partielle – est strictement interdite sans autorisation
                écrite préalable.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Données personnelles & RGPD",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Laser Body Center s'engage à protéger la vie privée de ses
            visiteurs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">
                Nos engagements :
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-blue-700">
                  • Traitement confidentiel des données
                </p>
                <p className="text-blue-700">
                  • Usage limité à la relation commerciale
                </p>
                <p className="text-blue-700">
                  • Aucun transfert sans consentement
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">
                Vos droits RGPD :
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-green-700">• Droit d'accès</p>
                <p className="text-green-700">• Droit de rectification</p>
                <p className="text-green-700">• Droit à l'effacement</p>
                <p className="text-green-700">• Droit d'opposition</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 text-white">
            <h4 className="font-semibold text-white mb-3">Contact RGPD :</h4>
            <p className="text-gray-100">
              Pour toute demande, contactez notre responsable RGPD à :<br />
              <strong>Email :</strong> dpo@laserbodycenter.fr
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Cookies & traceurs",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Ce site utilise des cookies à des fins spécifiques :
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 text-center">
              <h4 className="font-semibold text-purple-900 mb-3">Navigation</h4>
              <p className="text-purple-700 text-sm">
                Fonctionnement optimal du site
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 text-center">
              <h4 className="font-semibold text-orange-900 mb-3">
                Mesure d'audience
              </h4>
              <p className="text-orange-700 text-sm">
                Google Analytics ou équivalent
              </p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200 text-center">
              <h4 className="font-semibold text-teal-900 mb-3">Préférences</h4>
              <p className="text-teal-700 text-sm">
                Gestion des paramètres utilisateur
              </p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <p className="text-blue-800 font-medium">
              Un bandeau vous permet de gérer vos préférences dès votre arrivée
              sur le site.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Clause de responsabilité",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-loose text-lg font-light">
            Malgré tout le soin apporté à la rédaction des contenus, certaines
            limitations s'appliquent :
          </p>
          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-yellow-800">
                  Laser Body Center ne saurait être tenu responsable d'une
                  erreur typographique ou d'un contenu obsolète
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-yellow-800">
                  Le site peut être suspendu ou modifié à tout moment, sans
                  préavis
                </p>
              </div>
            </div>
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
              <span className="text-sm font-medium">Informations Légales</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              MENTIONS
              <span className="block text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text">
                LÉGALES
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Informations légales concernant le site
              <span className="font-semibold text-white">
                {" "}
                www.laserbodycenter.fr
              </span>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/20 max-w-2xl mx-auto">
              <p className="text-gray-200">
                <span className="font-semibold">Dernière mise à jour :</span>{" "}
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
              La sécurité médicale au service de votre peau.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold mb-2">Transparence</div>
                <div className="text-sm text-gray-300">
                  Informations complètes et claires
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold mb-2">Conformité</div>
                <div className="text-sm text-gray-300">
                  Respect de la réglementation
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold mb-2">Sécurité</div>
                <div className="text-sm text-gray-300">
                  Protection de vos données
                </div>
              </div>
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
