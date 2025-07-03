/** @format */
"use client";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqData = [
    {
      id: 0,
      question: "Combien de temps dure une séance d'épilation laser ?",
      answer:
        "La durée d'une séance d'épilation laser varie en fonction de la zone à épiler. Il faut compter 5 min pour une lèvre supérieure, 15 minutes en moyenne pour des aisselles et plus d'une heure pour des jambes entières.",
    },
    {
      id: 1,
      question: "Est-ce que l'épilation laser est douloureuse ?",
      answer:
        "La perception de la douleur est propre à chacun. L'épilation au laser médical n'est pas un acte qui est douloureux. Lors du traitement, le patient ressent un léger picotement à chaque passage du laser. Certaines zones sont plus sensibles que d'autres : la zone du maillot, surtout au niveau des lèvres ou encore la zone du sillon inter fessier. C'est pourquoi, avant la séance d'épilation laser, on prescrit une crème anesthésiante de type Emla à appliquer une heure avant le traitement. De plus au moment de la séance, le médecin diffusera, à l'aide d'un appareil de froids, un souffle froid pour atténuer la sensibilité et pour augmenter le confort du patient.",
    },
    {
      id: 2,
      question:
        "Combien de séances sont nécessaire pour une épilation définitive ?",
      answer:
        "Il est impossible de prévoir un nombre de séance précis. En effet, le nombre de séance d'épilation laser varie en fonction de la nature des poils et de la zone d'épilation. Généralement, il faut en moyenne 6 à 8 séances pour épiler des poils bien noirs et épais sur les jambes, le maillot, les aisselles et toutes les zones du corps. Il faut un intervalle de 5 semaines entre deux séances.",
    },
    {
      id: 3,
      question:
        "Est ce qu'il est possible de réaliser une épilation au laser pour les mineurs ?",
      answer:
        "L'épilation laser peut être envisagée à partir de l'âge 15/16 ans. Pour cela, il est impératif d'être accompagné par un des parents ou par le représentant légal du mineur, lors de la première consultation.",
    },
    {
      id: 4,
      question:
        "Existe-t-il des contre indications au traitement laser d'épilation ?",
      answer:
        "Une épilation laser est déconseillée pendant la grossesse. Il s'agit d'un simple principe de précaution. Le laser épilation est également déconseillé sur peau bronzée.",
    },
    {
      id: 5,
      question: "Comment se passe la première consultation ?",
      answer:
        "Notre professionnelle de santé va réaliser un examen médical classique afin de s’assurer que le traitement d’épilation laser sera réalisé sans aucun danger. Il examinera votre type de peau, votre type de poils. ",
    },
    {
      id: 6,
      question:
        "L'épilation laser définitive est elle prise en charge par la sécurité sociale ?",
      answer:
        "L'épilation laser n'est pas prise en charge par la sécurité sociale, ni par les mutuelles. Il s'agit d'un traitement de confort. Seul les patients souffrant d'hirsutisme peuvent avoir une prise en charge.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            FAQ - <span className="text-pink-600">Questions fréquentes</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Se débarrasser de vos poils une bonne fois pour toutes ? Beaucoup
            d'entre nous en rêvent. Voici les réponses aux questions que l'on se
            pose souvent avant de se lancer dans l'épilation définitive au laser
          </p>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Questions Panel - Left */}
          <div className="lg:w-2/3">
            <div className="space-y-2">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className={`w-full text-left px-6 py-4 font-medium transition-colors duration-200 ${
                      activeQuestion === item.id
                        ? "bg-gradient-to-r from-pink-500 to-teal-400 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setActiveQuestion(
                        activeQuestion === item.id ? -1 : item.id,
                      )
                    }>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{item.question}</span>
                      <span className="text-lg">
                        {activeQuestion === item.id ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  {activeQuestion === item.id && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Panel - Right */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit sticky top-8">
              <Image
                src="/centre.jpg"
                alt="Cabinet d'épilation laser"
                width={500}
                height={500}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
