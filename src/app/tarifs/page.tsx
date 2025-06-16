/** @format */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Simuler les icônes
const Award = ({ className }: any) => <div className={`${className}`}>🏆</div>;
const Shield = ({ className }: any) => <div className={`${className}`}>🛡️</div>;
const Zap = ({ className }: any) => <div className={`${className}`}>⚡</div>;
const CheckCircle = ({ className }: any) => (
  <div className={`${className}`}>✅</div>
);
const Star = ({ className }: any) => <div className={`${className}`}>⭐</div>;
const Users = ({ className }: any) => <div className={`${className}`}>👥</div>;
const Heart = ({ className }: any) => <div className={`${className}`}>💖</div>;
const Clock = ({ className }: any) => <div className={`${className}`}>⏱️</div>;
const Euro = ({ className }: any) => <div className={`${className}`}>💰</div>;

export default function TarifsEpilationPage() {
  const [activeTab, setActiveTab] = useState("femme");

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

  const tarifsHomme = [
    { zone: "Torse", prix: "74.875", sessions: "1" },
    { zone: "Aisselles", prix: "37.875", sessions: "1" },
    { zone: "Oreilles", prix: "28.875", sessions: "1" },
    { zone: "Pommettes ou barbe", prix: "31.875", sessions: "1" },
    { zone: "Épaules", prix: "48.875", sessions: "1" },
    { zone: "Torse + abdomen", prix: "122.875", sessions: "1" },
    { zone: "abdomen", prix: "74.875", sessions: "1" },
    { zone: "Bas du dos", prix: "74.875", sessions: "1" },
    { zone: "Haut du dos", prix: "74.875", sessions: "1" },
    { zone: "Dos complet", prix: "122.875", sessions: "1" },
    { zone: "Demi-jambes", prix: "79.875", sessions: "1" },
    { zone: "Visage complet", prix: "59.875", sessions: "1" },
    { zone: "Bras complets", prix: "79.875", sessions: "1" },
    { zone: "Cuisses", prix: "108.875", sessions: "1" },
    { zone: "Jambes complètes", prix: "150.0", sessions: "1" },
  ];

  const tarifsFemme = [
    { zone: "Aisselles", prix: "27.87", sessions: "1" },
    { zone: "Maillot classique", prix: "27.875", sessions: "1" },
    { zone: "Demi-jambes", prix: "70.87", sessions: "1" },
    { zone: "Inter-sourcils", prix: "17.87", sessions: "1" },
    { zone: "Lèvre supérieure", prix: "17.87", sessions: "1" },
    { zone: "Menton", prix: "17.87", sessions: "1" },
    { zone: "Nuque", prix: "26.87", sessions: "1" },
    { zone: "Pommettes", prix: "26.87", sessions: "1" },
    { zone: "Visage complet", prix: "49.12", sessions: "1" },
    { zone: "Aisselles (bras)", prix: "27.875", sessions: "1" },
    // { zone: "Avant-bras", prix: "43.87", sessions: "1" },
    { zone: "Bras complets", prix: "63.87", sessions: "1" },
    { zone: "Aréoles des seins", prix: "17.87", sessions: "1" },
    { zone: "Ligne ombilicale", prix: "26.87", sessions: "1" },
    { zone: "Décolleté", prix: "49.87", sessions: "1" },
    { zone: "Abdomen / Ventre", prix: "34.87", sessions: "1" },
    { zone: "Torse", prix: "39.87", sessions: "1" },
    { zone: "Torse + abdomen", prix: "72.87", sessions: "1" },
    { zone: "Dos - bas", prix: "29.87", sessions: "1" },
    { zone: "Dos - haut", prix: "49.87", sessions: "1" },
    { zone: "Dos complet", prix: "76.87", sessions: "1" },
    { zone: "Maillot intégral", prix: "44.87", sessions: "1" },
    { zone: "Maillot échancré", prix: "33.87", sessions: "1" },
    { zone: "Maillot classique (intime)", prix: "27.87", sessions: "1" },
    { zone: "Fesses", prix: "32.87", sessions: "1" },
    { zone: "SIF", prix: "17.87", sessions: "1" },
    { zone: "Demi-jambes (jambes)", prix: "70.87", sessions: "1" },
    { zone: "Genoux", prix: "22.87", sessions: "1" },
    { zone: "Cuisses", prix: "78.87", sessions: "1" },
    { zone: "Jambes complètes", prix: "176.87", sessions: "1" },
    { zone: "Pieds", prix: "17.87", sessions: "1" },
  ];

  const currentTarifs = activeTab === "femme" ? tarifsFemme : tarifsHomme;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-l from-pink-600/10 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div variants={itemVariants as any}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Tarifs Transparents • Sans Surprise
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              TARIFS
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                ÉPILATION LASER
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Des prix justes et transparents pour une épilation définitive avec
              la technologie
              <span className="font-semibold text-white">
                {" "}
                Candela GentleMax Pro Plus™
              </span>
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={itemVariants as any}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Euro className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prix Fixes</h3>
              <p className="text-gray-300">
                Aucun coût caché, tarification transparente
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Paiement Facilité</h3>
              <p className="text-gray-300">
                Solutions de financement disponibles
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantie Résultats</h3>
              <p className="text-gray-300">
                Satisfaction garantie ou remboursé
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants as any}>
              Nos Tarifs par Zone
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              variants={itemVariants as any}>
              Prix tout compris avec la technologie Candela. Consultation
              médicale offerte.
            </motion.p>

            {/* Tab Navigation */}
            <motion.div
              className="flex justify-center mb-12"
              variants={itemVariants as any}>
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                <button
                  onClick={() => setActiveTab("femme")}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === "femme"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  <Heart className="w-6 h-6 inline mr-2" />
                  Femme
                </button>
                <button
                  onClick={() => setActiveTab("homme")}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === "homme"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  <Users className="w-6 h-6 inline mr-2" />
                  Homme
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={itemVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {/* Table Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="grid grid-cols-3 p-6">
                <div className="text-xl font-bold">Zone de traitement</div>
                <div className="text-xl font-bold text-center">
                  Nombre de séances
                </div>
                <div className="text-xl font-bold text-center">Prix</div>
                {/* <div className="text-xl font-bold text-center">Action</div> */}
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {currentTarifs.map((tarif, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 p-6 text-xs hover:bg-purple-50 transition-all duration-300 group"
                  variants={itemVariants as any}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}>
                  {/* Zone Name */}
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {tarif.zone}
                    </span>
                  </div>

                  {/* Sessions */}
                  <div className="text-center flex items-center justify-center">
                    <span className="bg-purple-100 text-purple-800 font-bold px-4 py-2 rounded-full">
                      {tarif.sessions} séances
                    </span>
                  </div>

                  {/* Prix */}
                  <div className="text-center flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                        {tarif.prix}€
                      </div>
                      {/* <div className="text-sm text-gray-500">
                        Forfait complet
                      </div> */}
                    </div>
                  </div>

                  {/* Action Button */}
                  {/* <div className="text-center flex items-center justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Réserver
                            </button>
                        </div> */}
                </motion.div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="bg-gray-50 p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Consultation médicale offerte
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Technologie Candela certifiée FDA
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Suivi médical inclus
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants as any}>
              Pourquoi choisir Laser Body Center ?
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Technologie #1 Mondiale",
                desc: "Candela GentleMax Pro Plus™, la référence FDA approuvée",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Sécurité Médicale",
                desc: "Centre médical agréé avec protocoles stricts",
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "15+ Années d'Expertise",
                desc: "Spécialistes reconnus en épilation laser",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Résultats Garantis",
                desc: "95% d'efficacité prouvée cliniquement",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants as any}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants as any}>
            Prêt(e) pour votre épilation définitive ?
          </motion.h2>

          <motion.p
            className="text-xl mb-12 opacity-90"
            variants={itemVariants as any}>
            Consultation médicale gratuite • Devis personnalisé • Financement
            disponible
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants as any}>
            <Link href="/rendz-vous">
              <button className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105">
                CONSULTATION
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                01 84 80 80 27
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
