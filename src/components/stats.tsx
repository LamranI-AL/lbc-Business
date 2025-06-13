/** @format */

"use client";
import { useEffect, useRef, useState } from "react";

interface StatCircleProps {
  percentage: number;
  label: string;
}

function StatCircle({ percentage, label }: StatCircleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      ref={circleRef}
      className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg
          className="w-24 h-24 transform -rotate-90"
          viewBox="0 0 100 100">
          {/* Cercle de fond */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#E9D5FF"
            strokeWidth="8"
            fill="none"
          />
          {/* Cercle de progression avec dégradé */}
          <defs>
            <linearGradient
              id={`gradient-${percentage}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop
                offset="0%"
                stopColor="#9333EA"
              />
              <stop
                offset="100%"
                stopColor="#EC4899"
              />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={`url(#gradient-${percentage})`}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-in-out drop-shadow-sm"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {percentage}%
          </span>
        </div>
      </div>
      <h3 className="font-semibold text-gray-800 text-sm">{label}</h3>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { percentage: 90, label: "Accueil" },
    { percentage: 91, label: "Confort" },
    { percentage: 95, label: "Efficacité" },
    { percentage: 97, label: "Hygiène" },
    { percentage: 98, label: "Recommandation" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <h2 className="font-bold text-3xl text-gray-800 mb-4 leading-tight">
            ÉVALUATIONS RECUEILLIES À LA SORTIE DE NOTRE
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              LASER BODY CENTER
            </span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Pourcentage des personnes ayant donné la note supérieure pour
            chiffrer des critères spécifiques, formules assis et évaluations de
            notre centre avec certaine réalisation d'épilation.
          </p>
        </div>

        {/* Stats Circles */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <StatCircle
                percentage={stat.percentage}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-purple-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">🏆</span>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">
                  Années d'expérience
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">👥</span>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <div className="text-gray-600 font-medium">
                  Clients satisfaits
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  6-8
                </div>
                <div className="text-gray-600 font-medium">
                  Séances moyennes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 lg:p-12 text-white shadow-xl">
            <div className="text-6xl opacity-20 mb-4">"</div>
            <blockquote className="text-xl lg:text-2xl font-light italic mb-6 leading-relaxed">
              Ces chiffres reflètent notre engagement quotidien à offrir une
              expérience exceptionnelle à chaque patient. Votre satisfaction est
              notre priorité absolue.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">LBC</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Équipe Laser Body Center</div>
                <div className="text-purple-200 text-sm">
                  Spécialistes en épilation laser
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
