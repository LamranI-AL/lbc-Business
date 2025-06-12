/** @format */

export interface DashboardMetrics {
  totalBookings: number;
  revenue: number;
  workingHours: number;
  newCustomers: number;
  bookingTrend: Array<{ date: string; count: number }>;
  revenueTrend: Array<{ date: string; revenue: number }>;
}

export interface TimeSlot {
  id: string;
  startTime: Date;
  endTime: Date;
  serviceType: string;
  serviceName: string;
  agentId: string;
  agentName: string;
  locationId: string;
  clientName: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  color: string;
}

export interface ServiceWithAgents {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: string;
  capacity: number;
  category: string;
  color: string;
  isActive: boolean;
  assignedAgents: Array<{
    id: string;
    firstName: string;
    lastName: string;
    displayName: string | null;
  }>;
}

export interface AgentWithDetails {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string | null;
  email: string;
  phone: string | null;
  title: string | null;
  bio: string | null;
  workingDays: string[] | null;
  workingHours: { start: string; end: string } | null;
  highlights: Array<{ value: string; label: string }> | null;
  status: string;
  isOnLeave: boolean;
  totalBookings: number;
  assignedLocations: Array<{
    id: string;
    name: string;
  }>;
  assignedServices: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}
export type BookingFormData = {
  selectedDate: string;
  selectedTime: string;
  selectedServices: string;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  totalAmount: number;
};
export interface BookingWithDetails {
  id: string;
  startTime: string;
  endTime: string;
  status: string;
  notes: string | null;
  totalAmount: string;
  services: Array<{
    id: string;
    name: string;
    color: string;
    duration: number;
  }>;
  agent: {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string | null;
  };
  client: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
  };
  location: {
    id: string;
    name: string;
  };
}

export interface LocationWithAgents {
  id: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;

  phone: string | null;
  email: string | null;
  coordinates: { lat: number; lng: number } | null;
  workingHours: Record<string, { start: string; end: string }> | null;
  isActive: boolean;
  assignedAgents: Array<{
    id: number;
    firstName: string;
    lastName: string;
    displayName: string | null;
  }>;
  assignedServices: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

export interface ClientWithBookings {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  postalCode: string | null;
  notes: string | null;
  totalBookings: number;
  nextBooking: {
    id: number;
    startTime: string;
    serviceName: string;
  } | null;
}
// export interface SubService {
//   id: string;
//   name: string;
//   normalPrice: number;
//   discountPrice?: number;
//   duration: number;
//   description?: string;
// }

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon?: string;
  subServices: SubService[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  categoryId: string; // Référence à la catégorie parent
  color?: string;
  isActive: boolean;
  subServices: SubService[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SubService {
  id: string;
  name: string;
  description?: string;
  normalPrice: number;
  discountPrice?: number;
  duration?: number; // en minutes
  isActive: boolean;
}
