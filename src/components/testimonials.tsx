/** @format */
"use client";
import React, { useState, useEffect } from "react";

// Simuler l'icône Star
const Star = ({ className, filled = false }: any) => (
  <div
    className={`${className} ${filled ? "text-purple-400" : "text-gray-300"}`}>
    ★
  </div>
);

// Simuler les icônes de navigation
const ChevronLeft = ({ className }: any) => <div className={className}>‹</div>;

const ChevronRight = ({ className }: any) => <div className={className}>›</div>;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Chaima Shih",
      initial: "C",
      content:
        "J'ai réalisé une séance de laser au niveau du maillot avec Yasmine et j'en suis très satisfaite. Elle fait preuve d'un grand professionnalisme et sa pratique est particulièrement soignée. Elle prend le temps nécessaire, procède avec minutie partie par partie, ce qui permet de se sentir en confiance tout au long de la séance.",
      rating: 5,
      timeAgo: "environ un mois",
    },
    {
      id: 2,
      name: "Farideh Ayoub",
      initial: "F",
      content:
        "Je suis à ma troisième séance de laser dans ce centre, et je suis plus que satisfaite ! Un immense merci à Amina qui est tout simplement incroyable : douce, gentille, agréable, toujours à l'écoute et de très bon conseil, avec beaucoup de bienveillance. Je n'ai jamais eu aussi peu mal pendant une séance !",
      rating: 5,
      timeAgo: "environ un mois",
    },
    {
      id: 3,
      name: "Marie Dubois",
      initial: "M",
      content:
        "Excellente expérience chez Laser Body Center ! L'équipe est très professionnelle et les résultats sont au rendez-vous. Après 6 séances, mes poils ont pratiquement disparu. Je recommande vivement ce centre pour l'épilation laser.",
      rating: 5,
      timeAgo: "il y a 2 semaines",
    },
    {
      id: 4,
      name: "Sarah Martin",
      initial: "S",
      content:
        "Un centre moderne avec des équipements de pointe. Le laser Candela fait vraiment la différence ! Les résultats sont visibles dès les premières séances. L'accueil est chaleureux et l'équipe est très compétente.",
      rating: 5,
      timeAgo: "il y a 3 semaines",
    },
    {
      id: 5,
      name: "Amina Benali",
      initial: "A",
      content:
        "Je recommande absolument ! Traitement efficace, personnel adorable et résultats exceptionnels. Fini les séances de rasage quotidiennes, je me sens enfin libre et confiante dans ma peau.",
      rating: 5,
      timeAgo: "il y a 1 mois",
    },
    {
      id: 6,
      name: "Léa Moreau",
      initial: "L",
      content:
        "Service impeccable et résultats à la hauteur de mes attentes. L'équipe est très à l'écoute et professionnelle. Le centre est propre et moderne. Je reviendrai sans hésiter pour d'autres zones.",
      rating: 5,
      timeAgo: "il y a 2 mois",
    },
  ];

  // Grouper les avis par paires
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === groupedTestimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, groupedTestimonials.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === groupedTestimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? groupedTestimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: any) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Star
                className="w-5 h-5 text-white"
                filled
              />
            </div>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
          <h2 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            LES AVIS DE NOS PATIENTES
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors duration-300 group border border-purple-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}>
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600 font-bold text-2xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors duration-300 group border border-purple-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}>
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600 font-bold text-2xl" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}>
              {groupedTestimonials.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="w-full flex-shrink-0 grid md:grid-cols-2 gap-8 px-4">
                  {group.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 relative group hover:border-purple-300">
                      {/* Quote icon */}
                      <div className="absolute top-4 right-4 text-4xl text-purple-200 font-serif group-hover:text-purple-300 transition-colors duration-300">
                        "
                      </div>

                      <div className="relative z-10">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6 pr-8">
                          "{testimonial.content}"
                        </p>

                        {/* Author info */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <span className="text-lg font-bold text-white">
                              {testimonial.initial}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 text-purple-400"
                                    filled
                                  />
                                ))}
                              </div>
                              <span className="text-gray-500 text-sm">
                                {testimonial.timeAgo}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {groupedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 scale-125"
                    : "bg-gray-300 hover:bg-purple-400"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-500 h-1 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    ((currentIndex + 1) / groupedTestimonials.length) * 100
                  }%`,
                }}></div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              5.0
            </div>
            <div className="text-gray-600 text-sm">Note moyenne</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-purple-400"
                  filled
                />
              ))}
            </div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 text-sm">Avis clients</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600 text-sm">Satisfaction</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              10k+
            </div>
            <div className="text-gray-600 text-sm">Clients traités</div>
          </div>
        </div>
      </div>
    </section>
  );
}
