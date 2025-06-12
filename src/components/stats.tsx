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
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#F5F5DC"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#B8860B"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gold-500">{percentage}%</span>
        </div>
      </div>
      <h3 className="font-semibold text-gray-800">{label}</h3>
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
    <section className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
            <div className="w-8 h-8 bg-gold-500 rounded-full"></div>
          </div>
          <h2 className="font-bold text-3xl text-gray-800 mb-4">
            ÉVALUATIONS RECUEILLIES À LA SORTIE DE NOTRE
            <br />
            CENTRE LASER BD VOLTAIRE
          </h2>
          <p className="text-gray-600">
            Pourcentage des personnes ayant donné la note supérieure pour
            chiffrer des critères spécifiques, formules assis et évaluations de
            notre centre avec certaine réalisation d'épilation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCircle
              key={index}
              percentage={stat.percentage}
              label={stat.label}
            />
          ))}
        </div>

        {/* Before/After Results Gallery */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Smooth legs after laser hair removal treatment"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Jambes complètes
              </h3>
              <p className="text-sm text-gray-600">Résultat après 8 séances</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576067812014-90f0b56b6e7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Perfect underarm results after laser treatment"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Aisselles</h3>
              <p className="text-sm text-gray-600">Résultat après 6 séances</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Smooth bikini area after professional laser treatment"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Maillot intégral
              </h3>
              <p className="text-sm text-gray-600">Résultat après 8 séances</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
