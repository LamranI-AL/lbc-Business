/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Simuler les icônes
const Award = ({ className }: any) => <div className={`${className}`}>🏆</div>;
const Shield = ({ className }: any) => <div className={`${className}`}>🛡️</div>;
const Microscope = ({ className }: any) => (
  <div className={`${className}`}>🔬</div>
);
const Zap = ({ className }: any) => <div className={`${className}`}>⚡</div>;
const Target = ({ className }: any) => <div className={`${className}`}>🎯</div>;
const Clock = ({ className }: any) => <div className={`${className}`}>⏱️</div>;
const CheckCircle = ({ className }: any) => (
  <div className={`${className}`}>✅</div>
);
const Phone = ({ className }: any) => <div className={`${className}`}>📞</div>;
const Calendar = ({ className }: any) => (
  <div className={`${className}`}>📅</div>
);
const Star = ({ className }: any) => <div className={`${className}`}>⭐</div>;

export default function EpilationLaserPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Ultra Premium */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-800 via-gray-700 to-slate-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-500/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-l from-gray-400/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 via-transparent to-gray-500/5"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants as any}>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-300/30">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Centre Médical • Technologie FDA
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  ÉPILATION LASER
                  <span className="block text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text">
                    DÉFINITIVE
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  La technologie{" "}
                  <span className="font-semibold text-white">
                    Candela GentleMax Pro Plus™
                  </span>
                  pour des résultats permanents en toute sécurité médicale.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
                variants={itemVariants as any}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-gray-300" />
                  </div>
                  <span className="text-lg">
                    Consultation médicale gratuite
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-lg">
                    FDA Approuvé & Certifié médical
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-gray-300" />
                  </div>
                  <span className="text-lg">
                    15+ années d'expertise reconnue
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-8"
                variants={itemVariants as any}>
                <Link href="/rendz-vous">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl">
                    PRENDRE RENDEZ-VOUS
                  </button>
                </Link>
                <button className="border-2 border-gray-300/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  01 23 45 67 89
                </button>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              variants={itemVariants as any}>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-gray-300/20">
                <div className="text-center space-y-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                    <Microscope className="w-16 h-16 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Candela GentleMax Pro Plus™
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      La référence mondiale de l'épilation laser médicale.
                      Technologie exclusive pour tous types de peau.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300 mb-2">
                        755nm
                      </div>
                      <div className="text-sm text-gray-400">Alexandrite</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-400 mb-2">
                        1064nm
                      </div>
                      <div className="text-sm text-gray-400">Nd:YAG</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
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
              L'épilation laser en chiffres
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants as any}>
              Des données qui parlent d'elles-mêmes
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {[
              {
                number: "11,000+",
                label: "Épilations par femme",
                sublabel: "durant sa vie",
              },
              {
                number: "10,000€",
                label: "Budget total",
                sublabel: "méthodes classiques",
              },
              {
                number: "95%",
                label: "Efficacité",
                sublabel: "technologie Candela",
              },
              {
                number: "6-8",
                label: "Séances",
                sublabel: "pour des résultats définitifs",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants as any}
                whileHover={{ y: -5 }}>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text mb-3">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants as any}>
              Technologie Candela GentleMax Pro Plus™
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants as any}>
              La plateforme laser la plus avancée au monde, exclusive chez Laser
              Body Center. Conçue pour traiter efficacement tous les types de
              peau en toute sécurité médicale.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.div variants={itemVariants as any}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Double longueur d'onde
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">755</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Alexandrite 755 nm
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Technologie optimale pour les peaux claires à mates.
                        Absorption maximale de la mélanine pour une efficacité
                        remarquable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1064</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Nd:YAG 1064 nm
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Spécialement conçu pour les peaux foncées et bronzées.
                        Pénétration profonde et sécurité maximale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants as any}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "75% plus rapide",
                    desc: "Traitement optimisé",
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Précision maximale",
                    desc: "Ciblage folliculaire",
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Sécurité absolue",
                    desc: "Protocole médical",
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Résultats durables",
                    desc: "Efficacité prouvée",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants as any}>
              Protocole médical personnalisé
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto"
              variants={itemVariants as any}>
              Un parcours de soins rigoureux et adapté à chaque patient
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {[
              {
                step: "01",
                title: "Consultation médicale",
                subtitle: "Offerte et obligatoire",
                points: [
                  "Évaluation du phototype",
                  "Analyse de la pilosité",
                  "Protocole personnalisé",
                  "Consentement éclairé",
                ],
              },
              {
                step: "02",
                title: "Traitement laser",
                subtitle: "6-8 séances espacées",
                points: [
                  "Durée : 10-45 minutes",
                  "Espacement : 4-6 semaines",
                  "Confort maximal (DCD™)",
                  "Suivi médical continu",
                ],
              },
              {
                step: "03",
                title: "Résultats définitifs",
                subtitle: "Peau parfaitement lisse",
                points: [
                  "Élimination progressive",
                  "Peau douce et nette",
                  "Liberté au quotidien",
                  "Investissement rentable",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
                variants={itemVariants as any}
                whileHover={{ y: -5 }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-500 to-gray-600 rounded-bl-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {phase.step}
                  </span>
                </div>

                <div className="pr-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 font-semibold mb-6">
                    {phase.subtitle}
                  </p>

                  <ul className="space-y-3">
                    {phase.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
