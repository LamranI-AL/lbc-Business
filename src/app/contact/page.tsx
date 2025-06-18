/** @format */
"use client";
import React, { useState } from "react";
// Composants UI simplifiés intégrés
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Loader2,
  Calendar,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "contact",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveToFirebase = async (data: any) => {
    try {
      // Import dynamique de Firebase
      const { db } = await import("@/lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import(
        "firebase/firestore"
      );

      const docData = {
        ...data,
        createdAt: serverTimestamp(),
        status: "nouveau",
        processed: false,
        source: "contact_form",
      };

      const docRef = await addDoc(collection(db, "avis"), docData);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Erreur Firebase:", error);
      return { success: false, error: error };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation basique
    if (!formData.nom || !formData.email || !formData.message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    setIsLoading(true);

    try {
      // Simuler un délai d'envoi pour UX
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sauvegarder dans Firebase
      const result = await saveToFirebase(formData);

      if (result.success) {
        setIsSubmitted(true);
        // Réinitialiser le formulaire
        setFormData({
          nom: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          type: "contact",
        });
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur inattendue lors de l'envoi du message");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header intégré */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Laser Body Center
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Message envoyé avec succès ! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Merci beaucoup pour votre message. Notre équipe{" "}
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Laser Body Center
              </span>{" "}
              vous répondra dans les plus brefs délais.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Que se passe-t-il maintenant ?
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✅ Votre message a été reçu et enregistré</p>
                <p>📧 Vous recevrez une réponse par email dans les 24h</p>
                <p>📞 Pour les urgences, appelez le 01 84 80 80 27</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3">
                Envoyer un autre message
              </Button>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/rendz-vous">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Prendre rendez-vous
                  </Button>
                </Link>
                <Link href="/rendz-vous">
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Voir mon centre
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        {/* Footer intégré */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 Laser Body Center. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4">
            <MessageSquare className="w-4 h-4 mr-1" />
            Contactez-nous
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une question sur nos services
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              d'épilation laser
            </span>{" "}
            ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Remplissez simplement le formulaire ci-dessous et nous vous
            répondrons rapidement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600 font-medium">
                        01 84 80 80 27
                      </p>
                      <p className="text-sm text-green-600">Appel gratuit</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        contact@laserbodycenter.fr
                      </p>
                      <p className="text-sm text-blue-600">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horaires</h4>
                      <p className="text-gray-600">Lun-Sam: 9h-20h</p>
                      <p className="text-sm text-gray-500">Dimanche fermé</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Centre</h4>
                      <p className="text-gray-600">
                        15 rue Raspail bois colombes
                      </p>
                      <p className="text-sm text-purple-600 cursor-pointer hover:underline">
                        Voir details →
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick tip */}
            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  💡 Conseil rapide
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Pour une réponse plus rapide, précisez dans votre message la
                  zone que vous souhaitez traiter et votre ville préférée.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire simplifié */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-200 hover:border-purple-200 transition-colors">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous votre message
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 font-medium">
                        Nom complet *
                      </label>
                      <Input
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        placeholder="Votre nom et prénom"
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 font-medium">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 font-medium">
                        Téléphone
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="06 12 34 56 78"
                        className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 font-medium">
                        Type de demande
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 focus:ring-purple-500">
                        <option value="contact">Question générale</option>
                        <option value="rendez-vous">
                          Demande de rendez-vous
                        </option>
                        <option value="tarifs">Question sur les tarifs</option>
                        <option value="avis">Laisser un avis</option>
                        <option value="reclamation">Réclamation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium">Sujet</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Ex: Épilation jambes complètes - Paris"
                      className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium">
                      Votre message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail... (zone à traiter, questions sur le processus, disponibilités, etc.)"
                      rows={5}
                      className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-medium text-gray-900">
                        Confidentialité :
                      </span>{" "}
                      Vos données sont protégées et utilisées uniquement pour
                      vous répondre. Nous ne partageons jamais vos informations
                      avec des tiers.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      * Champs obligatoires
                    </p>

                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 transform hover:-translate-y-0.5 transition-all duration-300">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
