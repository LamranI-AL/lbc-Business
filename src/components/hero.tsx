/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const [currentMonth, setCurrentMonth] = useState(6); // Juillet (index 6)
  // Correction: utilisation des noms complets des mois pour éviter les doublons
  const months = [
    { short: "J", full: "Janvier", id: "jan" },
    { short: "F", full: "Février", id: "feb" },
    { short: "M", full: "Mars", id: "mar" },
    { short: "A", full: "Avril", id: "apr" },
    { short: "M", full: "Mai", id: "may" },
    { short: "J", full: "Juin", id: "jun" },
    { short: "J", full: "Juillet", id: "jul" },
    { short: "A", full: "Août", id: "aug" },
    { short: "S", full: "Septembre", id: "sep" },
    { short: "O", full: "Octobre", id: "oct" },
    { short: "N", full: "Novembre", id: "nov" },
    { short: "D", full: "Décembre", id: "dec" },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonth((prev) => (prev + 1) % 12);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec parallax - Images réelles d'épilation laser */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}>
        {/* Image principale - Centre d'épilation laser professionnel */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('/epilation_laser.jpg')`,
          }}
        />

        {/* Superposition - Traitement laser en action */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-1/3 h-1/2 bg-cover bg-center opacity-25"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.25 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              clipPath: "polygon(100% 0%, 100% 100%, 70% 100%)",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-cover bg-center opacity-20"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              clipPath: "polygon(0% 0%, 30% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* Overlay dégradé optimisé pour l'épilation laser */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-800/50 to-amber-600/40"></div>
      </motion.div>

      {/* Particules dorées animées avec effet laser */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-70"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              y: [
                null,
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
              ],
              scale: [0, 1, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Logo décoratif avec thème laser */}
      <motion.div
        className="absolute top-10 left-10 z-10"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 45 }}>
        <div className="w-24 h-24 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 border-4 border-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/50 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 backdrop-blur-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <motion.div
              className="w-8 h-8 border-2 border-amber-300 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-300/30 to-yellow-400/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
              <motion.div
                className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/80"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 10px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 1)",
                    "0 0 10px rgba(251, 191, 36, 0.8)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contenu principal avec thème épilation laser */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Prix principal avec effet laser */}
        <motion.div
          className="text-8xl md:text-9xl font-bold mb-4 relative"
          variants={itemVariants as any}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <motion.span
            className="relative inline-block"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))",
            }}>
            -50%
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full shadow-lg shadow-amber-400/60"
              animate={{
                y: [-5, 5, -5],
                boxShadow: [
                  "0 0 15px rgba(251, 191, 36, 0.6)",
                  "0 0 25px rgba(251, 191, 36, 0.8)",
                  "0 0 15px rgba(251, 191, 36, 0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/60"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 10px rgba(253, 224, 71, 0.6)",
                  "0 0 15px rgba(253, 224, 71, 0.8)",
                  "0 0 10px rgba(253, 224, 71, 0.6)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          className="text-2xl md:text-4xl font-light mb-2 tracking-wide"
          variants={itemVariants as any}>
          {/* SUR TOUS LES FORFAITS */}
        </motion.h1>

        {/* Titre épilation laser avec effet brillant laser */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 relative"
          variants={itemVariants as any}
          style={{
            background:
              "linear-gradient(45deg, #fff, #fbbf24, #a855f7, #fbbf24, #fff)",
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          LASER BODY CENTRE
        </motion.h2>

        {/* Sous-titre avec informations techniques */}
        <motion.p
          className="text-xl md:text-2xl font-light mb-8 text-amber-100"
          variants={itemVariants as any}>
          Technologie FDA • Résultats permanents
        </motion.p>

        {/* Indicateurs de mois avec clés uniques */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          variants={itemVariants as any}>
          {months.map((month, index) => (
            <motion.span
              key={month.id} // Utilisation d'ID unique au lieu de la lettre
              className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${
                index === currentMonth
                  ? "text-amber-400 drop-shadow-lg"
                  : index < currentMonth
                  ? "text-amber-300"
                  : "text-white/70"
              }`}
              animate={
                index === currentMonth
                  ? {
                      scale: [1, 1.3, 1],
                      y: [0, -8, 0],
                      textShadow: [
                        "0 0 10px rgba(251, 191, 36, 0.8)",
                        "0 0 20px rgba(251, 191, 36, 1)",
                        "0 0 10px rgba(251, 191, 36, 0.8)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                y: -5,
                textShadow: "0 0 15px rgba(251, 191, 36, 0.9)",
              }}
              title={month.full}>
              {month.short}
            </motion.span>
          ))}
        </motion.div>

        {/* Boutons d'action avec thème laser */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants as any}>
          <Link href={"/centres"}>
            <motion.button
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg shadow-amber-500/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(251, 191, 36, 0.4)",
                filter: "drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}>
              PRENDRE RENDEZ-VOUS
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-amber-400/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(251, 191, 36, 1)",
                color: "rgba(17, 24, 39, 1)",
                boxShadow: "0 15px 35px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}>
              CONSULTATION
            </motion.button>
          </Link>
        </motion.div>

        {/* Badges de confiance pour épilation laser */}
        <motion.div
          className="flex justify-center items-center space-x-8 mt-8"
          variants={itemVariants as any}>
          {[
            { icon: "✓", text: "FDA Approuvé", color: "text-green-400" },
            { icon: "⚡", text: "Technologie Laser", color: "text-blue-400" },
            { icon: "★", text: "+10 000 clients", color: "text-amber-400" },
            { icon: "🛡️", text: "100% Sécurisé", color: "text-purple-400" },
          ].map((badge, index) => (
            <motion.div
              key={`badge-${index}`}
              className="flex items-center space-x-2 text-amber-200"
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}>
              <motion.div
                className={`w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/40 ${badge.color}`}
                animate={{
                  rotateY: [0, 360],
                  boxShadow: [
                    "0 0 10px rgba(251, 191, 36, 0.4)",
                    "0 0 15px rgba(251, 191, 36, 0.6)",
                    "0 0 10px rgba(251, 191, 36, 0.4)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
                <span className="text-xs font-bold text-gray-900">
                  {badge.icon}
                </span>
              </motion.div>
              <span className="text-sm font-medium">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator avec thème laser */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        variants={floatingVariants as any}>
        <motion.div
          className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center cursor-pointer shadow-lg shadow-amber-400/30"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
          }}>
          <motion.div
            className="w-1 h-3 bg-amber-400 rounded-full mt-2 shadow-lg shadow-amber-400/60"
            animate={{
              y: [0, 6, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
