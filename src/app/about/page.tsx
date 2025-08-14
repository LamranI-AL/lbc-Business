/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Simuler les icônes
const Star = ({ className }: any) => (
  <div className={`${className} text-yellow-400`}>★</div>
);
const Shield = ({ className }: any) => <div className={`${className}`}>🛡️</div>;
const Heart = ({ className }: any) => <div className={`${className}`}>💜</div>;
const Award = ({ className }: any) => <div className={`${className}`}>🏆</div>;
const Clock = ({ className }: any) => <div className={`${className}`}>🕐</div>;
const MapPin = ({ className }: any) => <div className={`${className}`}>📍</div>;
const Phone = ({ className }: any) => <div className={`${className}`}>📞</div>;
const Calendar = ({ className }: any) => (
  <div className={`${className}`}>📅</div>
);
const Users = ({ className }: any) => <div className={`${className}`}>👥</div>;
const CheckCircle = ({ className }: any) => (
  <div className={`${className}`}>✅</div>
);

export default function AboutPage() {
  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            variants={itemVariants as any}
            initial="hidden"
            animate="visible">
            <Star className="w-5 h-5" />
            <span className="text-sm font-medium">
              Excellence • Innovation • Sécurité
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            variants={itemVariants as any}
            initial="hidden"
            animate="visible">
            QUI SOMMES-NOUS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed text-purple-100"
            variants={itemVariants as any}
            initial="hidden"
            animate="visible">
            L'excellence de l'épilation laser, dans un cadre médical sécurisé
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <motion.div
            className="text-center mb-20"
            variants={itemVariants as any}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                LASER BODY CENTER
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Chez Laser Body Center, nous plaçons votre peau et votre
                sécurité au cœur de notre expertise. Spécialisés dans
                l'épilation définitive, nous utilisons uniquement les{" "}
                <span className="font-semibold text-purple-600">
                  lasers Candela
                </span>
                , reconnus mondialement et approuvés par la FDA, pour garantir
                des résultats visibles, durables, et adaptés à chaque type de
                peau.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Contrairement aux techniques classiques comme la lumière
                  pulsée ou le laser diode, la{" "}
                  <span className="font-semibold text-purple-700">
                    technologie Alexandrite Candela
                  </span>{" "}
                  agit en profondeur, au niveau du bulbe, pour détruire
                  définitivement le follicule pileux, avec une précision
                  inégalée et un confort optimal.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants as any}
              whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Sécurité Maximale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Environnement médical encadré avec les normes d'hygiène les plus
                strictes. Équipements FDA approuvés pour votre tranquillité
                d'esprit.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants as any}
              whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Approche Personnalisée
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Consultation médicale offerte et protocole de soin adapté à
                votre peau, votre pilosité et vos attentes spécifiques.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants as any}
              whileHover={{ y: -5 }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Excellence Technique
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professionnelles formées aux dernières techniques d'épilation
                laser avec la technologie Candela de pointe.
              </p>
            </motion.div>
          </motion.div>

          {/* Notre Approche */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20"
            variants={itemVariants as any}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🧬</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Notre Approche
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Chaque traitement commence par une{" "}
                    <span className="font-semibold text-purple-600">
                      consultation médicale offerte
                    </span>
                    , durant laquelle l'une de nos praticiennes établit un
                    diagnostic personnalisé.
                  </p>
                  <p>
                    Ce premier échange nous permet de construire un protocole de
                    soin adapté à votre peau, votre pilosité et vos attentes.
                  </p>
                  <p>
                    Tous nos soins sont réalisés dans un environnement médical
                    encadré, par des professionnelles formées aux dernières
                    techniques d'épilation laser, dans le respect des normes
                    d'hygiène les plus strictes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Consultation offerte
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Années d'expertise
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Équipe Experte
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Nos praticiennes sont spécialement formées aux techniques
                    laser et vous accompagnent tout au long de votre parcours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notre Centre */}
          <motion.div
            className="bg-gradient-to-r from-purple-900 to-pink-900 text-white rounded-3xl p-12 lg:p-16 mb-20"
            variants={itemVariants as any}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🏥</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Un centre moderne, en plein cœur de Paris
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-purple-100">
                  Notre centre, situé au{" "}
                  <span className="font-semibold text-white">
                    15 Rue Raspail92270 Bois-Colombes, France
                  </span>
                  , vous accueille du lundi au samedi, de 10h à 20h.
                </p>
                <p className="text-purple-100">
                  L'espace a été pensé pour vous offrir un maximum de confort,
                  de confidentialité et de sécurité. L'ambiance est calme,
                  élégante, et propice à une expérience de soin haut de gamme.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="font-semibold mb-2">Localisation</div>
                  <div className="text-sm text-purple-200">
                    15 Rue Raspail92270 Bois-Colombes, France
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="font-semibold mb-2">Horaires</div>
                  <div className="text-sm text-purple-200">
                    Lun-Sam
                    <br />
                    10h - 20h
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-white rounded-3xl shadow-2xl p-12 lg:p-16"
            variants={itemVariants as any}>
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Phone className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Prendre rendez-vous
              </h2>
            </div>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Vous souhaitez en savoir plus ou démarrer votre traitement ?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/rendz-vous">
                <motion.button
                  className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}>
                  <Calendar className="w-6 h-6" />
                  <span>Prenez RDV en ligne</span>
                </motion.button>
              </Link>

              <motion.button
                className="flex items-center space-x-3 bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}>
                <Phone className="w-6 h-6" />
                <span>epilbodyfr@gmail.com</span>
              </motion.button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-center">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <p className="text-lg text-gray-600">
                Votre première consultation est{" "}
                <span className="font-semibold text-purple-600">
                  offerte et sans engagement
                </span>
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Laser Body Center – Parce que votre peau mérite l'excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
