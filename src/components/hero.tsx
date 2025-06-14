/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const [currentMonth, setCurrentMonth] = useState(6); // Juillet (index 6)
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Variants pour animations sophistiquées
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier easing
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br p-20 from-slate-900 via-purple-900 to-pink-900">
      {/* Background Pattern Sophistiqué */}
      <div className="absolute inset-0 p-20">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10 ">
          <div className="absolute top-0 left-0 w-100 h-100 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}></div>
          <div
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient Overlay Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-pink-900/70"></div>
      </div>

      {/* Particules Élégantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background:
                i % 3 === 0 ? "#9333EA" : i % 3 === 1 ? "#EC4899" : "#8B5CF6",
            }}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: [
                null,
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
              ],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Logo Premium */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}>
        <div className="w-20 h-20 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 border-3 border-white/30 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm bg-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contenu Principal */}
      <motion.div
        className="relative z-10 text-center text-white max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Badge Premium */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
          variants={itemVariants as any}
          whileHover={{ scale: 1.05, y: -2 }}>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white/90">
            ✨ Technologie Laser Candela • FDA Approuvé
          </span>
        </motion.div>

        {/* Prix Principal avec Design Épuré */}
        <motion.div
          className="relative mb-6"
          variants={itemVariants as any}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <motion.div
            className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))",
            }}>
            -50%
          </motion.div>

          {/* Éléments décoratifs modernes */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl"
            animate={{
              y: [-3, 3, -3],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* Titre Principal Sophistiqué */}
        <motion.h1
          className="text-xl md:text-3xl font-bold mb-2 tracking-widest text-gray-300 uppercase"
          variants={itemVariants as any}>
          LASER BODY CENTER
        </motion.h1>

        {/* Nom du Centre avec Animation Gradient */}
        <motion.h2
          className="text-4xl md:text-7xl font-bold mb-6 relative"
          variants={itemVariants as any}
          style={{
            background:
              "linear-gradient(45deg, #fff, #a855f7, #ec4899, #fff, #a855f7)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          LASER BODY CENTER
        </motion.h2>

        {/* Sous-titre Premium */}
        <motion.p
          className="text-lg md:text-xl font-light mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants as any}>
          Centre médical spécialisé • Résultats permanents garantis • Plus de 15
          ans d'expertise
        </motion.p>

        {/* Indicateurs de Mois Élégants */}
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          variants={itemVariants as any}>
          {months.map((month, index) => (
            <motion.div
              key={month.id}
              className={`relative w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-500 cursor-pointer ${
                index === currentMonth
                  ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-110"
                  : index < currentMonth
                  ? "bg-white/20 text-purple-200 backdrop-blur-sm"
                  : "bg-white/10 text-gray-400 backdrop-blur-sm"
              }`}
              animate={
                index === currentMonth
                  ? {
                      scale: [1.1, 1.2, 1.1],
                      boxShadow: [
                        "0 0 20px rgba(168, 85, 247, 0.5)",
                        "0 0 30px rgba(168, 85, 247, 0.8)",
                        "0 0 20px rgba(168, 85, 247, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.15, y: -3 }}
              title={month.full}>
              <span className="text-sm font-bold">{month.short}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Boutons CTA Premium avec Couleurs du Logo */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          variants={itemVariants as any}>
          {/* Bouton Principal - Violet du Logo */}
          <motion.button
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center space-x-2">
              <Link href="/rendz-vous">
                <span>PRENDRE RENDEZ-VOUS</span>
              </Link>
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.button>

          {/* Bouton Secondaire - Gris du Logo */}
          <motion.button
            className="group px-10 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-full font-semibold text-lg shadow-xl transition-all duration-300 border border-gray-400"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(107, 114, 128, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <span className="flex items-center space-x-2">
              <Link href="/contact">
                <span>CONSULTATION</span>
              </Link>
              <motion.div
                className="w-4 h-4 border-2 border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator Sophistiqué */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        variants={floatingVariants as any}>
        <motion.div
          className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center cursor-pointer backdrop-blur-sm bg-white/10"
          whileHover={{
            scale: 1.1,
            borderColor: "rgba(168, 85, 247, 0.8)",
            backgroundColor: "rgba(168, 85, 247, 0.1)",
          }}>
          <motion.div
            className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
}
