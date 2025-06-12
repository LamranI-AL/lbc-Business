/** @format */
"use client";
import { LocationWithAgents, SubService, Service, Category } from "@/types";
import { getAllServices } from "@/actions/services";
import { getAllCategories } from "@/actions/categories";
import React, { useState, useEffect } from "react";
import { getAllQuickBookings } from "@/actions/Bookings";
import { any } from "zod";

// Interface pour les détails de service avec séances
interface ServiceDetail extends Service {
  sessions: number; // Nombre de séances recommandées
  sessionInterval: number; // Intervalle entre séances (en jours)
  packageDiscountPercent: number; // Pourcentage de réduction pour forfait
}

// Interface pour les services sélectionnés
interface SelectedService {
  serviceId: string;
  subServiceId: string;
  sessionsCount: number;
  usePackagePrice: boolean;
  useDiscountPrice: boolean; // Utiliser le prix réduit si disponible
  dates: string[]; // Dates des différentes séances
}

type BookingFormData = {
  selectedDate: string;
  selectedTime: string;
  selectedServices: SelectedService[];
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  totalAmount: number;
  isRecurring: boolean;
  selectedGender: "homme" | "femme" | "";
  selectedCategoryId: string;
};

type Props = {
  location: LocationWithAgents;
  onBookingSubmit: (bookingData: BookingFormData) => void;
  onClose: () => void;
};

function EnhancedBookingForm({ location, onBookingSubmit, onClose }: Props) {
  const [formData, setFormData] = useState<BookingFormData>({
    selectedDate: "",
    selectedTime: "",
    selectedServices: [],
    clientFirstName: "",
    clientLastName: "",
    clientEmail: "",
    clientPhone: "",
    notes: "",
    totalAmount: 0,
    isRecurring: false,
    selectedGender: "",
    selectedCategoryId: "",
  });

  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [allServices, setAllServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Genre/Catégorie, 2: Services, 3: Dates, 4: Infos
  const [existingBookings, setExistingBookings] = useState<any[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  // Charger les catégories et services au montage
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Charger les catégories
        const categoriesResult = await getAllCategories();
        if (categoriesResult.success) {
          setCategories(
            categoriesResult?.categories?.filter((cat) => cat.isActive) as any,
          );
        }

        // Charger tous les services
        const servicesResult = await getAllServices();
        if (servicesResult.success) {
          setAllServices(
            servicesResult?.services?.filter(
              (service) => service?.isActive,
            ) as any,
          );
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtrer les services quand la catégorie ou le genre change
  useEffect(() => {
    if (formData.selectedCategoryId && allServices.length > 0) {
      const categoryServices = allServices.filter(
        (service) => service.categoryId === formData.selectedCategoryId,
      );

      // Appliquer le filtre par genre si nécessaire
      let filteredByGender = categoryServices;
      if (formData.selectedGender) {
        filteredByGender = categoryServices.filter((service) => {
          // Logique pour filtrer par genre - à adapter selon votre structure de données
          const serviceName = service.name.toLowerCase();
          if (formData.selectedGender === "homme") {
            return (
              serviceName.includes("homme") ||
              serviceName.includes("masculin") ||
              (!serviceName.includes("femme") &&
                !serviceName.includes("féminin"))
            );
          } else {
            return (
              serviceName.includes("femme") ||
              serviceName.includes("féminin") ||
              (!serviceName.includes("homme") &&
                !serviceName.includes("masculin"))
            );
          }
        });
      }

      const enhancedServices = enhanceServicesWithSessions(filteredByGender);
      setFilteredServices(enhancedServices);
    } else {
      setFilteredServices([]);
    }
  }, [formData.selectedCategoryId, formData.selectedGender, allServices]);

  // Ajouter les données de séances aux services
  const enhanceServicesWithSessions = (
    services: Service[],
  ): ServiceDetail[] => {
    return services.map((service) => ({
      ...service,
      sessions: getSessionsForService(service.name),
      sessionInterval: getIntervalForService(service.name),
      packageDiscountPercent: getPackageDiscountForService(service.name),
    }));
  };

  const getSessionsForService = (serviceName: string): number => {
    const sessionMap: Record<string, number> = {
      "Zone 1": 6,
      "Zone 2": 6,
      "Zone 3": 6,
      "Zone 4": 6,
      épilation: 6,
      rajeunissement: 4,
      détatouage: 8,
      soin: 3,
      laser: 6,
    };

    const normalizedName = serviceName.toLowerCase();
    for (const [key, value] of Object.entries(sessionMap)) {
      if (normalizedName.includes(key.toLowerCase())) {
        return value;
      }
    }
    return 1;
  };

  const getIntervalForService = (serviceName: string): number => {
    const intervalMap: Record<string, number> = {
      zone: 28, // Pour toutes les zones d'épilation
      épilation: 28,
      rajeunissement: 21,
      détatouage: 42,
      soin: 14,
      laser: 28,
    };

    const normalizedName = serviceName.toLowerCase();
    for (const [key, value] of Object.entries(intervalMap)) {
      if (normalizedName.includes(key.toLowerCase())) {
        return value;
      }
    }
    return 7;
  };

  const getPackageDiscountForService = (serviceName: string): number => {
    const discountMap: Record<string, number> = {
      zone: 20, // 20% pour les zones d'épilation
      épilation: 20,
      rajeunissement: 15,
      détatouage: 25,
      soin: 10,
      laser: 20,
    };

    const normalizedName = serviceName.toLowerCase();
    for (const [key, value] of Object.entries(discountMap)) {
      if (normalizedName.includes(key.toLowerCase())) {
        return value;
      }
    }
    return 10;
  };

  // Calculer le prix d'un forfait
  const calculatePackagePrice = (
    basePrice: number,
    sessions: number,
    discountPercent: number,
  ): number => {
    const totalPrice = basePrice * sessions;
    const discount = (totalPrice * discountPercent) / 100;
    return totalPrice - discount;
  };

  // Générer les dates suggérées pour les séances multiples
  const generateSessionDates = (
    startDate: string,
    sessions: number,
    interval: number,
  ): string[] => {
    const dates = [startDate];
    const start = new Date(startDate);

    for (let i = 1; i < sessions; i++) {
      const nextDate = new Date(start);
      nextDate.setDate(start.getDate() + interval * i);
      dates.push(nextDate.toISOString().split("T")[0]);
    }

    return dates;
  };

  // Charger les réservations
  useEffect(() => {
    const getAllQuickBookingss = async () => {
      setLoadingBookings(true);
      try {
        const result = await getAllQuickBookings();
        if (result.success) {
          const filteredBookings = result.quickBookings?.filter(
            (booking) => booking.status == "pending",
          );
          setExistingBookings(filteredBookings || []);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des réservations:", error);
      } finally {
        setLoadingBookings(false);
      }
    };
    getAllQuickBookingss();
  }, []);

  // Générer les créneaux horaires
  const generateTimeSlots = (date: string) => {
    const dayNames: Record<number, string> = {
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
      0: "sunday",
    };

    const dayName = dayNames[new Date(date).getDay()];

    if (!location.workingHours || !location.workingHours[dayName]) {
      setAvailableTimeSlots([]);
      return;
    }

    const dayHours = location.workingHours[dayName];
    const slots: string[] = [];
    const startHour = parseInt(dayHours.start.split(":")[0]);
    const startMinute = parseInt(dayHours.start.split(":")[1]);
    const endHour = parseInt(dayHours.end.split(":")[0]);
    const endMinute = parseInt(dayHours.end.split(":")[1]);

    let currentHour = startHour;
    let currentMinute = startMinute;

    while (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute < endMinute)
    ) {
      const timeString = `${currentHour
        .toString()
        .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      slots.push(timeString);

      currentMinute += 30;
      if (currentMinute >= 60) {
        currentMinute = 0;
        currentHour++;
      }
    }

    setAvailableTimeSlots(slots);
  };

  // Fonctions utilitaires pour les créneaux occupés
  const getOccupiedTimeSlots = (date: string): string[] => {
    return existingBookings
      .filter(
        (booking) =>
          booking.selectedDate === date &&
          booking.locationId === location.id &&
          booking.status !== "cancelled",
      )
      .map((booking) => booking.selectedTime);
  };

  const getDateOccupancyLevel = (date: string): number => {
    const occupiedSlots = getOccupiedTimeSlots(date);
    const totalSlotsForDay = generateTimeSlotsForDate(date).length;

    if (totalSlotsForDay === 0) return 0;

    const occupancyRatio = occupiedSlots.length / totalSlotsForDay;

    if (occupancyRatio === 0) return 0; // Libre
    if (occupancyRatio < 0.5) return 1; // Peu occupé
    if (occupancyRatio < 0.8) return 2; // Moyennement occupé
    return 3; // Très occupé
  };

  const generateTimeSlotsForDate = (date: string): string[] => {
    const dayNames: Record<number, string> = {
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
      0: "sunday",
    };

    const dayName = dayNames[new Date(date).getDay()];

    if (!location.workingHours || !location.workingHours[dayName]) {
      return [];
    }

    const dayHours = location.workingHours[dayName];
    const slots: string[] = [];
    const startHour = parseInt(dayHours.start.split(":")[0]);
    const startMinute = parseInt(dayHours.start.split(":")[1]);
    const endHour = parseInt(dayHours.end.split(":")[0]);
    const endMinute = parseInt(dayHours.end.split(":")[1]);

    let currentHour = startHour;
    let currentMinute = startMinute;

    while (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute < endMinute)
    ) {
      const timeString = `${currentHour
        .toString()
        .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      slots.push(timeString);

      currentMinute += 30;
      if (currentMinute >= 60) {
        currentMinute = 0;
        currentHour++;
      }
    }

    return slots;
  };

  const getOccupancyStyle = (level: number) => {
    switch (level) {
      case 0:
        return { color: "bg-green-100 border-green-300", dot: "bg-green-400" };
      case 1:
        return {
          color: "bg-yellow-100 border-yellow-300",
          dot: "bg-yellow-400",
        };
      case 2:
        return {
          color: "bg-orange-100 border-orange-300",
          dot: "bg-orange-400",
        };
      case 3:
        return { color: "bg-red-100 border-red-300", dot: "bg-red-400" };
      default:
        return { color: "bg-gray-100 border-gray-300", dot: "bg-gray-400" };
    }
  };

  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }

    return dates;
  };

  // Calculer le total
  const calculateTotal = (): number => {
    return formData.selectedServices.reduce((total, selectedService) => {
      const service = filteredServices.find(
        (s) => s.id === selectedService.serviceId,
      );
      const subService = service?.subServices.find(
        (sub) => sub.id === selectedService.subServiceId,
      );

      if (!service || !subService) return total;

      // Utiliser le prix réduit si disponible et sélectionné, sinon le prix normal
      const basePrice =
        selectedService.useDiscountPrice && subService.discountPrice
          ? subService.discountPrice
          : subService.normalPrice;

      if (
        selectedService.usePackagePrice &&
        selectedService.sessionsCount > 1
      ) {
        const packagePrice = calculatePackagePrice(
          basePrice,
          selectedService.sessionsCount,
          service.packageDiscountPercent,
        );
        return total + packagePrice;
      } else {
        return total + basePrice * selectedService.sessionsCount;
      }
    }, 0);
  };

  // Gérer la sélection de sous-service
  const toggleSubService = (serviceId: string, subServiceId: string) => {
    const service = filteredServices.find((s) => s.id === serviceId);
    if (!service) return;

    const isSelected = formData.selectedServices.some(
      (s) => s.serviceId === serviceId && s.subServiceId === subServiceId,
    );

    if (isSelected) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.filter(
          (s) =>
            !(s.serviceId === serviceId && s.subServiceId === subServiceId),
        ),
      }));
    } else {
      const newSelectedService: SelectedService = {
        serviceId,
        subServiceId,
        sessionsCount: 1,
        usePackagePrice: false,
        useDiscountPrice: false,
        dates: [formData.selectedDate],
      };

      setFormData((prev) => ({
        ...prev,
        selectedServices: [...prev.selectedServices, newSelectedService],
      }));
    }
  };

  // Mettre à jour les options d'un service
  const updateServiceOptions = (
    serviceId: string,
    subServiceId: string,
    sessionsCount: number,
    usePackage: boolean,
    useDiscount: boolean,
  ) => {
    const service = filteredServices.find((s) => s.id === serviceId);
    if (!service || !formData.selectedDate) return;

    const dates = generateSessionDates(
      formData.selectedDate,
      sessionsCount,
      service.sessionInterval,
    );

    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.map((s) =>
        s.serviceId === serviceId && s.subServiceId === subServiceId
          ? {
              ...s,
              sessionsCount,
              usePackagePrice: usePackage,
              useDiscountPrice: useDiscount,
              dates,
            }
          : s,
      ),
    }));
  };

  // Mettre à jour le total quand les services changent
  useEffect(() => {
    const newTotal = calculateTotal();
    setFormData((prev) => ({ ...prev, totalAmount: newTotal }));
  }, [formData.selectedServices, filteredServices]);

  const handleDateChange = (date: string) => {
    setFormData((prev) => ({ ...prev, selectedDate: date, selectedTime: "" }));
    generateTimeSlots(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookingSubmit(formData);
  };

  const isSubServiceSelected = (serviceId: string, subServiceId: string) => {
    return formData.selectedServices.some(
      (s) => s.serviceId === serviceId && s.subServiceId === subServiceId,
    );
  };

  const getSelectedService = (serviceId: string, subServiceId: string) => {
    return formData.selectedServices.find(
      (s) => s.serviceId === serviceId && s.subServiceId === subServiceId,
    );
  };

  const getSelectedCategory = () => {
    return categories.find((cat) => cat.id === formData.selectedCategoryId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* En-tête */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Réserver un rendez-vous</h2>
              <p className="text-teal-100 mt-1">{location.name}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Steps indicator */}
          <div className="mt-6 flex items-center">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step
                      ? "bg-white text-teal-600"
                      : "bg-teal-400 text-white"
                  }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      currentStep > step ? "bg-white" : "bg-teal-400"
                    }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Étapes */}
          <div className="mt-3 text-sm text-teal-100">
            <span className="opacity-75">
              {currentStep === 1 && "Sélection de catégorie"}
              {currentStep === 2 && "Choix des services"}
              {currentStep === 3 && "Planification"}
              {currentStep === 4 && "Informations client"}
            </span>
          </div>
        </div>

        {/* Formulaire */}
        <div className="p-6">
          {/* Étape 1: Sélection de genre et catégorie */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Sélectionnez votre profil
              </h3>

              {/* Sélection du genre */}
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  Vous êtes :
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        selectedGender: "homme",
                      }))
                    }
                    className={`p-6 rounded-xl border-2 transition-all text-center ${
                      formData.selectedGender === "homme"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}>
                    <div className="text-4xl mb-3">👨</div>
                    <div className="font-semibold">Homme</div>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        selectedGender: "femme",
                      }))
                    }
                    className={`p-6 rounded-xl border-2 transition-all text-center ${
                      formData.selectedGender === "femme"
                        ? "border-pink-500 bg-pink-50 text-pink-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}>
                    <div className="text-4xl mb-3">👩</div>
                    <div className="font-semibold">Femme</div>
                  </button>
                </div>
              </div>

              {/* Sélection de la catégorie */}
              {formData.selectedGender && (
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-4">
                    Choisissez une catégorie :
                  </h4>
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                      <p className="mt-4 text-gray-600">
                        Chargement des catégories...
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              selectedCategoryId: category.id,
                            }))
                          }
                          className={`p-6 rounded-xl border-2 transition-all text-left ${
                            formData.selectedCategoryId === category.id
                              ? "border-teal-500 bg-teal-50"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}>
                          <div className="flex items-center space-x-3 mb-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: category.color }}>
                              <svg
                                className="w-5 h-5 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-gray-900">
                              {category.name}
                            </h5>
                          </div>
                          {category.description && (
                            <p className="text-sm text-gray-600">
                              {category.description}
                            </p>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={
                    !formData.selectedGender || !formData.selectedCategoryId
                  }
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
                  Continuer vers les services
                </button>
              </div>
            </div>
          )}

          {/* Étape 2: Sélection des services (adapté de votre code existant) */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Choisir vos services
                  </h3>
                  {getSelectedCategory() && (
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{
                          backgroundColor: getSelectedCategory()?.color,
                        }}
                      />
                      <span className="text-gray-600">
                        Catégorie: {getSelectedCategory()?.name} •{" "}
                        {formData.selectedGender}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-teal-600 hover:text-teal-700 font-medium">
                  ← Retour
                </button>
              </div>

              {filteredServices.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-600 mb-2">
                    Aucun service disponible
                  </h4>
                  <p className="text-gray-500">
                    Aucun service trouvé pour cette catégorie et ce profil.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className="border border-gray-200 rounded-xl overflow-hidden">
                      {/* En-tête du service */}
                      <div
                        className="p-4 text-white font-semibold text-lg"
                        style={{
                          backgroundColor:
                            service.color || getSelectedCategory()?.color,
                        }}>
                        <div className="flex items-center space-x-2">
                          <span>{service.name}</span>
                        </div>
                        {service.description && (
                          <p className="text-sm opacity-90 mt-1">
                            {service.description}
                          </p>
                        )}
                      </div>

                      {/* Sous-services */}
                      <div className="p-4 space-y-4">
                        {service.subServices?.map((subService) => {
                          const selected = getSelectedService(
                            service.id,
                            subService.id,
                          );
                          const isSelected = !!selected;

                          return (
                            <div
                              key={subService.id}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                isSelected
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}>
                              <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() =>
                                      toggleSubService(
                                        service.id,
                                        subService.id,
                                      )
                                    }
                                    className="w-5 h-5 text-teal-600 rounded"
                                  />
                                  <div>
                                    <h4 className="font-semibold text-gray-900">
                                      {subService.name}
                                    </h4>
                                    {subService.description && (
                                      <p className="text-sm text-gray-600">
                                        {subService.description}
                                      </p>
                                    )}
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                      <span>{subService.duration} min</span>
                                      {service.sessions > 1 && (
                                        <>
                                          <span>•</span>
                                          <span>
                                            {service.sessions} séances
                                            recommandées
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="text-right">
                                  <div className="space-y-1">
                                    <div className="font-bold text-teal-600 text-lg">
                                      {subService.normalPrice}€
                                    </div>
                                    {subService.discountPrice && (
                                      <div className="text-sm text-emerald-600 font-medium">
                                        Prix réduit: {subService.discountPrice}€
                                      </div>
                                    )}
                                    <div className="text-xs text-gray-500">
                                      par séance
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Options de séances et prix */}
                              {isSelected && (
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                                  {/* Option prix réduit si disponible */}
                                  {subService.discountPrice && (
                                    <div>
                                      <h5 className="font-medium text-gray-800 mb-2">
                                        Type de prix
                                      </h5>
                                      <div className="space-y-2">
                                        <label className="flex items-center space-x-3">
                                          <input
                                            type="radio"
                                            name={`price-${service.id}-${subService.id}`}
                                            checked={
                                              !selected?.useDiscountPrice
                                            }
                                            onChange={() =>
                                              updateServiceOptions(
                                                service.id,
                                                subService.id,
                                                selected?.sessionsCount || 1,
                                                selected?.usePackagePrice ||
                                                  false,
                                                false,
                                              )
                                            }
                                            className="text-teal-600"
                                          />
                                          <span>
                                            Prix normal -{" "}
                                            {subService.normalPrice}€
                                          </span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                          <input
                                            type="radio"
                                            name={`price-${service.id}-${subService.id}`}
                                            checked={
                                              selected?.useDiscountPrice ||
                                              false
                                            }
                                            onChange={() =>
                                              updateServiceOptions(
                                                service.id,
                                                subService.id,
                                                selected?.sessionsCount || 1,
                                                selected?.usePackagePrice ||
                                                  false,
                                                true,
                                              )
                                            }
                                            className="text-teal-600"
                                          />
                                          <span className="text-emerald-600">
                                            Prix réduit -{" "}
                                            {subService.discountPrice}€
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  )}

                                  {/* Options de séances multiples */}
                                  {service.sessions > 1 && (
                                    <div>
                                      <h5 className="font-medium text-gray-800 mb-2">
                                        Nombre de séances
                                      </h5>
                                      <div className="space-y-2">
                                        <label className="flex items-center space-x-3">
                                          <input
                                            type="radio"
                                            name={`sessions-${service.id}-${subService.id}`}
                                            checked={!selected?.usePackagePrice}
                                            onChange={() =>
                                              updateServiceOptions(
                                                service.id,
                                                subService.id,
                                                1,
                                                false,
                                                selected?.useDiscountPrice ||
                                                  false,
                                              )
                                            }
                                            className="text-teal-600"
                                          />
                                          <span>Séance unique</span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                          <input
                                            type="radio"
                                            name={`sessions-${service.id}-${subService.id}`}
                                            checked={
                                              selected?.usePackagePrice || false
                                            }
                                            onChange={() =>
                                              updateServiceOptions(
                                                service.id,
                                                subService.id,
                                                service.sessions,
                                                true,
                                                selected?.useDiscountPrice ||
                                                  false,
                                              )
                                            }
                                            className="text-teal-600"
                                          />
                                          <span>
                                            Forfait {service.sessions} séances
                                            <span className="text-emerald-600 ml-2 font-medium">
                                              (-{service.packageDiscountPercent}
                                              %)
                                            </span>
                                          </span>
                                        </label>
                                      </div>

                                      {selected?.usePackagePrice && (
                                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                                          <p className="text-sm text-blue-800">
                                            <strong>
                                              Planification automatique:
                                            </strong>{" "}
                                            Les {service.sessions} séances
                                            seront espacées de{" "}
                                            {service.sessionInterval} jours pour
                                            un résultat optimal.
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Retour
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={formData.selectedServices.length === 0}
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
                  Continuer ({formData.selectedServices.length} service
                  {formData.selectedServices.length > 1 ? "s" : ""} sélectionné
                  {formData.selectedServices.length > 1 ? "s" : ""})
                </button>
              </div>
            </div>
          )}

          {/* Étape 3: Sélection de la date et de l'heure */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">
                  Planifier vos séances
                </h3>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-teal-600 hover:text-teal-700 font-medium">
                  ← Retour
                </button>
              </div>

              {/* Calendrier visuel avec indicateurs d'occupation */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Sélectionnez une date
                  {loadingBookings && (
                    <div className="ml-2 animate-spin rounded-full h-4 w-4 border-b-2 border-teal-600"></div>
                  )}
                </h4>

                {/* Légende */}
                <div className="mb-4 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                    <span>Libre</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                    <span>Peu occupé</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-400 mr-1"></div>
                    <span>Moyennement occupé</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                    <span>Très occupé</span>
                  </div>
                </div>

                {/* Grille du calendrier */}
                <div className="grid grid-cols-7 gap-2">
                  {generateCalendarDates().map((date) => {
                    const dateObj = new Date(date);
                    const occupancyLevel = getDateOccupancyLevel(date);
                    const style = getOccupancyStyle(occupancyLevel);
                    const isSelected = formData.selectedDate === date;
                    const isToday =
                      date === new Date().toISOString().split("T")[0];

                    return (
                      <button
                        key={date}
                        type="button"
                        onClick={() => handleDateChange(date)}
                        className={`
                relative p-3 rounded-lg border-2 transition-all text-sm
                ${
                  isSelected
                    ? "border-teal-500 bg-teal-50 ring-2 ring-teal-200"
                    : style.color
                }
                ${isToday ? "font-bold" : ""}
                hover:scale-105 hover:shadow-md
              `}>
                        <div className="text-center">
                          <div className="font-medium">{dateObj.getDate()}</div>
                          <div className="text-xs text-gray-600">
                            {dateObj.toLocaleDateString("fr-FR", {
                              weekday: "short",
                            })}
                          </div>
                        </div>

                        {/* Indicateur d'occupation */}
                        {occupancyLevel > 0 && (
                          <div
                            className={`
                  absolute top-1 right-1 w-2 h-2 rounded-full ${style.dot}
                `}></div>
                        )}

                        {/* Indicateur "aujourd'hui" */}
                        {isToday && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sélection de l'heure avec créneaux occupés filtrés */}
              {formData.selectedDate && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Heure de rendez-vous *
                  </label>
                  {availableTimeSlots.length > 0 ? (
                    <div>
                      {/* Statistiques de disponibilité */}
                      <div className="mb-3 text-sm text-gray-600">
                        {(() => {
                          const occupiedSlots = getOccupiedTimeSlots(
                            formData.selectedDate,
                          );
                          const availableSlots = availableTimeSlots.filter(
                            (time) => !occupiedSlots.includes(time),
                          );
                          return (
                            <span>
                              {availableSlots.length} créneaux disponibles sur{" "}
                              {availableTimeSlots.length}
                              {occupiedSlots.length > 0 && (
                                <span className="ml-2 text-orange-600">
                                  ({occupiedSlots.length} déjà réservés)
                                </span>
                              )}
                            </span>
                          );
                        })()}
                      </div>

                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {availableTimeSlots.map((time) => {
                          const isOccupied = getOccupiedTimeSlots(
                            formData.selectedDate,
                          ).includes(time);
                          const isSelected = formData.selectedTime === time;

                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() =>
                                !isOccupied &&
                                setFormData((prev) => ({
                                  ...prev,
                                  selectedTime: time,
                                }))
                              }
                              disabled={isOccupied}
                              className={`
                      p-2 text-sm rounded-lg border transition-all relative
                      ${
                        isOccupied
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                          : isSelected
                          ? "bg-teal-600 text-white border-teal-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:bg-teal-50"
                      }
                    `}>
                              {time}
                              {isOccupied && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-red-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <p className="text-red-500 text-sm">
                      Aucun créneau disponible pour cette date
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Retour
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  disabled={!formData.selectedDate || !formData.selectedTime}
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 4: Informations client */}
          {currentStep === 4 && (
            <form
              onSubmit={handleSubmit}
              className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">
                  Vos informations
                </h3>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="text-teal-600 hover:text-teal-700 font-medium">
                  ← Retour
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.clientFirstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        clientFirstName: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.clientLastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        clientLastName: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.clientEmail}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        clientEmail: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.clientPhone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        clientPhone: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes ou demandes spéciales
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Ajoutez des notes ou des demandes spéciales..."
                />
              </div>

              {/* Résumé final */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-200">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">
                  Résumé de votre réservation
                </h4>

                <div className="space-y-4">
                  {/* Informations du profil */}
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">
                        {formData.selectedGender === "homme" ? "👨" : "👩"}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          Profil: {formData.selectedGender}
                        </h5>
                        <p className="text-sm text-gray-600">
                          Catégorie: {getSelectedCategory()?.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {formData.selectedServices.map((selectedService) => {
                    const service = filteredServices.find(
                      (s) => s.id === selectedService.serviceId,
                    );
                    const subService = service?.subServices?.find(
                      (sub) => sub.id === selectedService.subServiceId,
                    );
                    if (!service || !subService) return null;

                    const basePrice =
                      selectedService.useDiscountPrice &&
                      subService.discountPrice
                        ? subService.discountPrice
                        : subService.normalPrice;

                    const totalPrice =
                      selectedService.usePackagePrice &&
                      selectedService.sessionsCount > 1
                        ? calculatePackagePrice(
                            basePrice,
                            selectedService.sessionsCount,
                            service.packageDiscountPercent,
                          )
                        : basePrice * selectedService.sessionsCount;

                    return (
                      <div
                        key={`${selectedService.serviceId}-${selectedService.subServiceId}`}
                        className="bg-white rounded-lg p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-gray-900">
                              {service.name} - {subService.name}
                            </h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p>
                                {selectedService.sessionsCount} séance
                                {selectedService.sessionsCount > 1 ? "s" : ""}
                                {selectedService.usePackagePrice &&
                                  " (Forfait)"}
                              </p>
                              <p>
                                Prix:{" "}
                                {selectedService.useDiscountPrice &&
                                subService.discountPrice
                                  ? "Réduit"
                                  : "Normal"}
                              </p>
                              <p>Durée: {subService.duration} min par séance</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-teal-600 text-lg">
                              {totalPrice.toFixed(2)}€
                            </div>
                            {selectedService.usePackagePrice && (
                              <div className="text-xs text-emerald-600">
                                Économie:{" "}
                                {(
                                  basePrice * selectedService.sessionsCount -
                                  totalPrice
                                ).toFixed(2)}
                                €
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-2xl text-teal-600">
                        {formData.totalAmount.toFixed(2)}€
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
                    <p>
                      <strong>Centre:</strong> {location.name}
                    </p>
                    <p>
                      <strong>Première séance:</strong>{" "}
                      {new Date(formData.selectedDate).toLocaleDateString(
                        "fr-FR",
                      )}{" "}
                      à {formData.selectedTime}
                    </p>
                    <p>
                      <strong>Durée totale estimée:</strong>{" "}
                      {formData.selectedServices.reduce(
                        (total, selectedService) => {
                          const service = filteredServices.find(
                            (s) => s.id === selectedService.serviceId,
                          );
                          const subService = service?.subServices?.find(
                            (sub) => sub.id === selectedService.subServiceId,
                          );
                          return total + (subService?.duration || 0);
                        },
                        0,
                      )}{" "}
                      minutes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-bold hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg">
                  Confirmer la réservation - {formData.totalAmount.toFixed(2)}€
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnhancedBookingForm;
