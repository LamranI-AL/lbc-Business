/** @format */
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Zap, User, Calendar, Star } from "lucide-react";
// import { Link } from "wouter";
import { auth } from "@/lib/firebase";
import { getCurrentUser } from "@/actions/auth";
// import logo from "../..";
import Link from "next/link";
import Image from "next/image";
// Interface pour l'utilisateur
interface UserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  phone?: string;
  role?: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const navItems = [
    // { label: "N°1 du laser", href: "/" },
    { label: "Qui somme nous", href: "/about" },
    { label: "Pour Quoi choisir Laser Body Center", href: "/pourquoi-lbc" },
    { label: "Épilation Laser", href: "/epilation-laser" },
    { label: "Le laser pour Mycose", href: "/mycose" },

    { label: "Tarifs", href: "/tarifs" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    let mounted = true;

    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (!mounted) return;

      try {
        if (firebaseUser) {
          const result = await getCurrentUser();

          if (mounted) {
            if (result.success && result.user) {
              setUser(result.user);
            } else {
              // Fallback avec les données Firebase Auth
              setUser({
                id: firebaseUser.uid,
                email: firebaseUser.email || "",
                firstName: firebaseUser.displayName?.split(" ")[0] || "",
                lastName:
                  firebaseUser.displayName?.split(" ").slice(1).join(" ") || "",
                avatar: firebaseUser.photoURL || undefined,
              });
            }
          }
        } else {
          if (mounted) {
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du profil:", error);
        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const getInitials = (
    firstName?: string,
    lastName?: string,
    email?: string,
  ): string => {
    if (firstName || lastName) {
      const first = firstName?.charAt(0)?.toUpperCase() || "";
      const last = lastName?.charAt(0)?.toUpperCase() || "";
      return first + last;
    }
    return email?.charAt(0)?.toUpperCase() || "U";
  };

  const getDisplayName = (
    firstName?: string,
    lastName?: string,
    email?: string,
  ): string => {
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    if (firstName) {
      return firstName;
    }
    return email?.split("@")[0] || "Utilisateur";
  };

  // Composant Avatar avec design Laser Body Center
  const UserAvatar = () => {
    if (!user) return null;

    return (
      <Link href="/profile">
        <button className="flex items-center space-x-3 p-2 rounded-xl hover:bg-purple-50 transition-all group">
          <div className="relative">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Photo de profil"
                className="w-8 h-8 rounded-full object-cover border-2 border-purple-200 group-hover:border-purple-300 transition-colors"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-purple-200 group-hover:border-purple-300 transition-colors">
                <span className="text-xs font-bold text-white">
                  {getInitials(user.firstName, user.lastName, user.email)}
                </span>
              </div>
            )}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
              {getDisplayName(user.firstName, user.lastName, user.email)}
            </p>
            <p className="text-xs text-gray-500">Mon compte</p>
          </div>
        </button>
      </Link>
    );
  };

  // Bouton Connexion avec design Laser Body Center
  const LoginButton = () => (
    <Link href="/login">
      <Button className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <div className="relative flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>Connexion</span>
        </div>
      </Button>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex  xl:flex-col items-center justify-center space-y-3 py-1">
          {/* Logo Laser Body Center */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <img
                  alt="logo"
                  src="/logo.svg"
                  width="100"
                  height="100"
                  className="items-center lg:ml-16"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}>
                <div className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </div>
              </Link>
            ))}
          </nav>

          {/* CTA Section Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Numéro de téléphone */}
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm font-semibold text-purple-600">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    01 84 80 80 27
                  </div>
                  <p className="text-xs text-green-600">Appel </p>
                </div>
              </div>
            </div>

            {/* Bouton RDV principal */}
            <Link href="/rendz-vous">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-5 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                <Calendar className="w-4 h-4 mr-2" />
                Prendre RDV
              </Button>
            </Link>

            {/* Section utilisateur */}
            <div className="pl-6 border-l border-gray-200">
              {loading ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              ) : user ? (
                <UserAvatar />
              ) : // <LoginButton />
              null}
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80 bg-gray-100">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Logo mobile */}
                <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Laser Body Center
                    </h1>
                  </div>
                </div>

                {/* Section utilisateur mobile */}
                {user ? (
                  <div className="pb-4 border-b border-gray-200">
                    <Link href="/profile">
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors border border-purple-200">
                        <div className="relative">
                          {user.avatar ? (
                            <Image
                              src={user.avatar}
                              alt="Photo de profil"
                              className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-purple-200">
                              <span className="text-sm font-bold text-white">
                                {getInitials(
                                  user.firstName,
                                  user.lastName,
                                  user.email,
                                )}
                              </span>
                            </div>
                          )}
                          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-gray-900">
                            {getDisplayName(
                              user.firstName,
                              user.lastName,
                              user.email,
                            )}
                          </p>
                          <p className="text-xs text-purple-600">
                            Voir mon compte →
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : // <div className="pb-4 border-b border-gray-200">
                //   <Link href="/login">
                //     <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg">
                //       <User className="w-5 h-5 mr-2" />
                //       Se connecter
                //     </Button>
                //   </Link>
                // </div>
                null}

                {/* Navigation mobile */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}>
                      <div
                        className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}>
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* CTA mobile */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  {/* Téléphone */}
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        01 84 80 80 27
                      </div>
                      <p className="text-xs text-green-600">
                        Appel & confidentiel
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-2 py-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      4.9/5 sur Google
                    </span>
                  </div>

                  {/* Bouton principal */}
                  <Link href="/rendz-vous">
                    <Button
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg"
                      onClick={() => setIsOpen(false)}>
                      <Calendar className="w-5 h-5 mr-2" />
                      Réserver ma consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
