/** @format */
"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function HeroSectionWithSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(6);

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

  const slides = [
    {
      type: "original",
      content: {
        badge: "✨ Technologie Laser Candela • FDA Approuvé",
        discount: "-50%",
        subtitle: "LASER BODY CENTER",
        title: "LASER BODY CENTER",
        description:
          "Avec Laser Body Center le plus cher au prix le moins cher !",
      },
    },
    {
      type: "image",
      backgroundImage: "/heroBg.png",
      content: {
        badge: "🔥Ouverture au mois de septembre",
        title: "ÉPILATION LASER",
        subtitle: "DÉFINITIVE",
        description:
          "Avec Laser Body Center le plus cher au prix le moins cher !",
      },
    },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Month rotation effect
  useEffect(() => {
    const monthInterval = setInterval(() => {
      setCurrentMonth((prev) => (prev + 1) % 12);
    }, 3000);
    return () => clearInterval(monthInterval);
  }, []);

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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideVariants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const renderSlideContent = (slide: any) => {
    if (slide.type === "original") {
      return (
        <motion.div
          className="relative z-10 text-center text-white max-w-6xl mx-auto px-6"
          variants={containerVariants as any}
          initial="hidden"
          animate="visible">
          {/* Badge Premium */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
            variants={itemVariants as any}
            whileHover={{ scale: 1.05, y: -2 }}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">
              {slide.content.badge}
            </span>
          </motion.div>

          {/* Prix Principal */}
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
              {slide.content.discount}
            </motion.div>
          </motion.div>

          {/* Titre Principal */}
          <motion.h1
            className="text-xl md:text-3xl font-bold mb-2 tracking-widest text-gray-300 uppercase"
            variants={itemVariants as any}>
            {slide.content.subtitle}
          </motion.h1>

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
            {slide.content.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-light mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants as any}>
            {slide.content.description}
          </motion.p>

          {/* Indicateurs de Mois */}
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
        </motion.div>
      );
    } else {
      return (
        <motion.div
          className="relative z-10 text-center text-white max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
            variants={itemVariants as any}
            whileHover={{ scale: 1.05, y: -2 }}>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">
              {slide.content.badge}
            </span>
          </motion.div>

          {/* Titre Principal */}
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-4"
            variants={itemVariants as any}
            style={{
              background:
                "linear-gradient(45deg, #fff, #a855f7, #ec4899, #fff, #a855f7)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            {slide.content.title}
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-purple-300"
            variants={itemVariants as any}>
            {slide.content.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-light mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants as any}>
            {slide.content.description}
          </motion.p>
        </motion.div>
      );
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-4">
      {/* Slide Container */}
      <AnimatePresence
        mode="wait"
        custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full">
          {/* Background pour slide original */}
          {slides[currentSlide].type === "original" && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-100 h-100 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                  <div
                    className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}></div>
                  <div
                    className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: "4s" }}></div>
                </div>
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-pink-900/70"></div>
              </div>
            </div>
          )}

          {/* Background pour slide image */}
          {slides[currentSlide].type === "image" && (
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
                }}></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-purple-800/40"></div>
            </div>
          )}

          {/* Particules */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${currentSlide}-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background:
                    slides[currentSlide].type === "original"
                      ? i % 3 === 0
                        ? "#9333EA"
                        : i % 3 === 1
                        ? "#EC4899"
                        : "#8B5CF6"
                      : i % 3 === 0
                      ? "#f59e0b"
                      : i % 3 === 1
                      ? "#ef4444"
                      : "#f97316",
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
                      (typeof window !== "undefined"
                        ? window.innerHeight
                        : 800),
                  ],
                  scale: [0, Math.random() * 1.5 + 0.5, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Contenu du slide */}
          {renderSlideContent(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>

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

      {/* Indicateurs de slides */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}>
        <motion.div
          className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center cursor-pointer backdrop-blur-sm bg-white/10"
          whileHover={{
            scale: 1.1,
            borderColor: "rgba(168, 85, 247, 0.8)",
            backgroundColor: "rgba(168, 85, 247, 0.1)",
          }}
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
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
    </section>
  );
}
