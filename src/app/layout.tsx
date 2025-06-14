/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import LaserBodyCentreHeader from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Laser body center",
  description:
    "Chez Laser Body Center, nous utilisons exclusivement les lasers Candela, la référence mondiale en épilation durable. Contrairement aux autres technologies, le Candela agit en profondeur pour détruire définitivement le follicule pileux",
  keywords:
    "poulet frit, livraison poulet, chicken delivery, Dixie, restaurant poulet, burger poulet, grillades poulet, poulet croustillant",
  // Configuration pour le favicon
  icons: {
    icon: [
      // { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#FF6B00",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Laser Body Cetner",
    description: "Découvrez nos services de epilation",
    type: "website",
    locale: "fr_FR",
    url: "https://www.lbc.com",
    siteName: "laser body center",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "lbc",
      },
    ], //
  },
  twitter: {
    card: "summary_large_image",
    title: "Lser body center",
    description: "lbc",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.lbc.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Dixie ",
  publisher: "Dixie ",
  viewport: "width=device-width, initial-scale=1",
  colorScheme: "light",
  creator: "othmane lamrani alaoui",
  authors: [{ name: "LASER BODY CENTER", url: "https://www.lbc.com" }],
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "epilation",
  other: {
    "revisit-after": "7 days",
    "geo.region": "FR",
  },
  themeColor: "#FF6B00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-white">
          <LaserBodyCentreHeader />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
