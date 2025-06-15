/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Simuler les icônes
const FileText = ({ className }: any) => (
  <div className={`${className}`}>📄</div>
);
const Shield = ({ className }: any) => <div className={`${className}`}>🛡️</div>;
const Lock = ({ className }: any) => <div className={`${className}`}>🔒</div>;
const Scale = ({ className }: any) => <div className={`${className}`}>⚖️</div>;
const Globe = ({ className }: any) => <div className={`${className}`}>🌐</div>;
const CheckCircle = ({ className }: any) => (
  <div className={`${className}`}>✅</div>
);
const Info = ({ className }: any) => <div className={`${className}`}>ℹ️</div>;
const Mail = ({ className }: any) => <div className={`${className}`}>📧</div>;

export default function CGUPage() {
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
      title: "Objet des CGU",
      content:
        "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site internet www.laserbodycenter.fr, édité par Laser Body Center, dont les coordonnées sont précisées dans les mentions légales. Toute navigation sur ce site implique l'acceptation pleine et entière des présentes CGU.",
    },
    {
      id: 2,
      title: "Accès au site",
      content:
        "Le site est accessible 24h/24, 7j/7, sauf cas de force majeure, interruptions programmées ou non pour des besoins de maintenance ou de mise à jour. Laser Body Center ne saurait être tenu responsable de tout dommage résultant de l'indisponibilité du site.",
    },
    {
      id: 3,
      title: "Services proposés",
      content:
        "Le site laserbodycenter.fr a pour vocation de : Présenter les activités, technologies et engagements du centre • Proposer la prise de rendez-vous en ligne • Permettre aux utilisateurs de poser des questions via formulaire • Informer sur les tarifs, centres et prestations. Ces services sont proposés à titre informatif. Ils ne constituent en aucun cas un acte médical en ligne.",
    },
    {
      id: 4,
      title: "Propriété intellectuelle",
      content:
        "L'ensemble des éléments présents sur le site (textes, images, vidéos, logos, design, architecture, base de données...) sont la propriété exclusive de Laser Body Center, sauf mention contraire. Toute reproduction, diffusion ou utilisation non autorisée est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
    },
    {
      id: 5,
      title: "Données personnelles",
      content:
        "L'utilisation du site peut entraîner la collecte de données personnelles (formulaire de contact, réservation, cookies...). Leur traitement est régi par notre Politique de confidentialité, conforme au RGPD. L'utilisateur dispose de droits d'accès, de rectification, de suppression et d'opposition à tout moment.",
      contact: "dpo@laserbodycenter.fr",
    },
    {
      id: 6,
      title: "Responsabilités",
      content:
        "Laser Body Center s'efforce de fournir des informations exactes, à jour et accessibles. Toutefois : Le site peut contenir des erreurs ou omissions • Les informations ne remplacent en aucun cas un avis médical • L'utilisateur est seul responsable de l'usage qu'il fait des contenus et services du site. En aucun cas Laser Body Center ne pourra être tenu responsable des conséquences de l'utilisation du site par l'utilisateur.",
    },
    {
      id: 7,
      title: "Liens hypertextes",
      content:
        "Le site peut contenir des liens vers d'autres sites. Laser Body Center ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu, politique de confidentialité ou fonctionnement.",
    },
    {
      id: 8,
      title: "Modifications des CGU",
      content:
        "Laser Body Center se réserve le droit de modifier les présentes CGU à tout moment et sans préavis. Les utilisateurs sont invités à les consulter régulièrement.",
    },
    {
      id: 9,
      title: "Loi applicable & juridiction",
      content:
        "Les présentes CGU sont soumises à la loi française. Tout litige relatif à leur interprétation ou à leur exécution sera de la compétence exclusive des tribunaux français.",
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
              <span className="text-sm font-medium">Document Légal</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              CONDITIONS GÉNÉRALES
              <span className="block text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text">
                D'UTILISATION
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Conditions régissant l'utilisation du site
              <span className="font-semibold text-white">
                {" "}
                www.laserbodycenter.fr
              </span>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/20 max-w-2xl mx-auto"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="space-y-8"
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

                <p className="text-gray-700 leading-loose text-lg mb-6 font-light">
                  {section.content}
                </p>

                {section.contact && (
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                          Contact DPO
                        </div>
                        <div className="text-gray-800 font-medium text-lg">
                          {section.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
              Une navigation claire, une confiance totale.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold mb-2">
                  Conformité RGPD
                </div>
                <div className="text-sm text-gray-300">
                  Protection des données garantie
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold mb-2">
                  Données sécurisées
                </div>
                <div className="text-sm text-gray-300">
                  Chiffrement et sécurité maximale
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold mb-2">
                  Cadre légal français
                </div>
                <div className="text-sm text-gray-300">
                  Juridiction française exclusive
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
                Nous contacter
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
