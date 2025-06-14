/** @format */
"use client";
import React from "react";
import { motion } from "framer-motion";

// Simuler les icônes
const Award = ({ className }: any) => <div className={`${className}`}>🏆</div>;
const Shield = ({ className }: any) => <div className={`${className}`}>🛡️</div>;
const Zap = ({ className }: any) => <div className={`${className}`}>⚡</div>;
const CheckCircle = ({ className }: any) => (
  <div className={`${className}`}>✅</div>
);
const XCircle = ({ className }: any) => (
  <div className={`${className}`}>❌</div>
);
const Star = ({ className }: any) => <div className={`${className}`}>⭐</div>;
const Microscope = ({ className }: any) => (
  <div className={`${className}`}>🔬</div>
);
const Target = ({ className }: any) => <div className={`${className}`}>🎯</div>;
const TrendingUp = ({ className }: any) => (
  <div className={`${className}`}>📈</div>
);
const AlertTriangle = ({ className }: any) => (
  <div className={`${className}`}>⚠️</div>
);
const Lightbulb = ({ className }: any) => (
  <div className={`${className}`}>💡</div>
);
const FileText = ({ className }: any) => (
  <div className={`${className}`}>📄</div>
);

export default function PourquoiChoisirPage() {
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
                La Seule Solution Définitive
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              POURQUOI LE LASER
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                CANDELA
              </span>
              <span className="block text-3xl lg:text-4xl mt-4">
                est la SEULE Solution Définitive ?
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
              Chez{" "}
              <span className="font-semibold text-white">
                Laser Body Center
              </span>
              , nous utilisons exclusivement les
              <span className="font-bold text-purple-300"> lasers Candela</span>
              , la référence mondiale en épilation durable. Contrairement aux
              autres technologies, le Candela agit en profondeur pour
              <span className="font-bold text-pink-300">
                {" "}
                détruire définitivement le follicule pileux
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
            variants={itemVariants as any}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Microscope className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Science Prouvée</h3>
              <p className="text-gray-300">
                Études cliniques validant l'efficacité
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Target className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Précision Maximale</h3>
              <p className="text-gray-300">Destruction ciblée du follicule</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Résultats Définitifs</h3>
              <p className="text-gray-300">90-95% d'efficacité prouvée</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Comparatif Section */}
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
              Comparatif Scientifique des Technologies
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants as any}>
              Efficacité, Durabilité, Résultats - Les faits parlent d'eux-mêmes
            </motion.p>
          </motion.div>

          {/* Technology Comparison Cards */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {/* Candela - Winner */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200 relative overflow-hidden"
              variants={itemVariants as any}>
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                ✅ RECOMMANDÉ
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Laser Candela
                </h3>
                <p className="text-green-600 font-semibold">
                  (Alexandrite/Nd:YAG)
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Taux de destruction : 90-95%
                    </div>
                    <div className="text-sm text-gray-600">
                      après série complète (6-8 séances)
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Longueur d'onde optimale
                    </div>
                    <div className="text-sm text-gray-600">
                      755 nm (peaux claires) & 1064 nm (peaux foncées)
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Preuves scientifiques
                    </div>
                    <div className="text-sm text-gray-600">
                      75% des patients sans repousse après 5 ans (Journal of
                      American Academy of Dermatology, 2021)
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      3x
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      Plus efficace que le laser diode
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Diode - Warning */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-orange-200 relative"
              variants={itemVariants as any}>
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                ⚠️ TEMPORAIRE
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Laser Diode
                </h3>
                <p className="text-orange-600 font-semibold">
                  Fausse Solution « Définitive »
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Taux de destruction : 30-50%
                    </div>
                    <div className="text-sm text-gray-600">
                      Le poil repousse après 1-2 ans
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Problème majeur
                    </div>
                    <div className="text-sm text-gray-600">
                      800-810 nm chauffe sans cibler le follicule
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Étude clinique
                    </div>
                    <div className="text-sm text-gray-600">
                      60% des patients voient la repousse (Journal of Cosmetic
                      Laser Therapy, 2023)
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-orange-700 font-medium">
                      Séances à vie nécessaires
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IPL - Not Recommended */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-red-200 relative"
              variants={itemVariants as any}>
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                ❌ INEFFICACE
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Lumière Pulsée
                </h3>
                <p className="text-red-600 font-semibold">
                  (IPL) - La Moins Efficace
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Taux de destruction : 10-30%
                    </div>
                    <div className="text-sm text-gray-600">
                      Résultats très temporaires
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Fonctionnement défaillant
                    </div>
                    <div className="text-sm text-gray-600">
                      Lumière dispersée sans ciblage précis
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Étude comparative
                    </div>
                    <div className="text-sm text-gray-600">
                      15% gardent un résultat après 1 an (British Journal of
                      Dermatology, 2022)
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      Mois
                    </div>
                    <div className="text-sm text-red-700 font-medium">
                      Repousse quasi systématique
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why People Believe Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants as any}>
              Pourquoi les Gens Croient à Tort ?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants as any}>
              Les raisons qui expliquent cette confusion sur le marché
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.div
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200"
              variants={itemVariants as any}>
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Effet Temporaire
              </h3>

              <p className="text-gray-700 text-center leading-relaxed">
                Le poil semble disparaître... mais il est juste{" "}
                <span className="font-bold text-orange-600">affaibli</span>.
                L'illusion d'efficacité trompe les patients.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200"
              variants={itemVariants as any}>
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Marketing Trompeur
              </h3>

              <p className="text-gray-700 text-center leading-relaxed">
                Certains centres promettent des résultats{" "}
                <span className="font-bold text-red-600">« définitifs »</span>
                sans preuves scientifiques solides.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200"
              variants={itemVariants as any}>
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Réduction ≠ Destruction
              </h3>

              <p className="text-gray-700 text-center leading-relaxed">
                Le diode et l'IPL{" "}
                <span className="font-bold text-purple-600">ralentissent</span>{" "}
                la pousse, mais ne suppriment pas le follicule.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={itemVariants as any}>
              Les Chiffres Parlent d'Eux-Mêmes
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              variants={itemVariants as any}>
              <div className="text-5xl font-bold mb-4">90-95%</div>
              <div className="text-xl font-semibold mb-2">Laser Candela</div>
              <div className="text-sm opacity-75">
                Taux de destruction folliculaire
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              variants={itemVariants as any}>
              <div className="text-5xl font-bold mb-4">30-50%</div>
              <div className="text-xl font-semibold mb-2">Laser Diode</div>
              <div className="text-sm opacity-75">Efficacité limitée</div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              variants={itemVariants as any}>
              <div className="text-5xl font-bold mb-4">10-30%</div>
              <div className="text-xl font-semibold mb-2">
                Lumière Pulsée (IPL)
              </div>
              <div className="text-sm opacity-75">Résultats temporaires</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.div
              className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
              variants={itemVariants as any}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Ne Vous Fiez Pas aux Apparences
                <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mt-2">
                  Optez pour la Science
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Candela = Résultats VRAIMENT Définitifs
                  </h3>
                  <p className="text-gray-700">Preuves cliniques à l'appui</p>
                </div>

                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <XCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Diode & IPL = Solution temporaire
                  </h3>
                  <p className="text-gray-700">Repousse garantie</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  💡 Choisissez l'expertise Laser Body Center
                </h3>
                <p className="text-xl">
                  La seule clinique qui utilise{" "}
                  <span className="font-bold">exclusivement</span> la
                  technologie Candela pour des résultats à vie.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl transform hover:scale-105">
                  PRENDRE RENDEZ-VOUS
                </button>

                <button className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300">
                  01 84 80 80 27
                </button>
              </div>

              <p className="text-xl font-bold text-gray-900 mt-8">
                Dites adieu aux poils pour de bon !
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
