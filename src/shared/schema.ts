/** @format */

import {
  pgTable,
  text,
  serial,
  integer,
  decimal,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const centers = pgTable("centers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  postalCode: text("postal_code").notNull(),
  phone: text("phone").notNull(),
  metro: text("metro"),
  parking: text("parking"),
  imageUrl: text("image_url"),
});

export const treatments = pgTable("treatments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  normalPrice: decimal("normal_price", { precision: 10, scale: 2 }).notNull(),
  promoPrice: decimal("promo_price", { precision: 10, scale: 2 }),
  sessions: integer("sessions").default(8),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  rating: integer("rating").notNull(),
  content: text("content").notNull(),
  initial: text("initial").notNull(),
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  centerId: integer("center_id").references(() => centers.id),
  treatmentId: integer("treatment_id").references(() => treatments.id),
  preferredDate: text("preferred_date"),
  message: text("message"),
  isConsultation: boolean("is_consultation").default(false),
});

export const insertCenterSchema = createInsertSchema(centers).omit({
  id: true,
});

export const insertTreatmentSchema = createInsertSchema(treatments).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
});

export type Center = typeof centers.$inferSelect;
export type Treatment = typeof treatments.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Appointment = typeof appointments.$inferSelect;
