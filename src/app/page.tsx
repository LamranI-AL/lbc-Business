/** @format */

import CentresList from "@/components/centres/list";
import Footer from "@/components/footer";
import LaserBodyCentreHeader from "@/components/header";
// import Header from "@/components/header";
import Hero from "@/components/hero";
import Locations from "@/components/locations";
import Pricing from "@/components/pricing";
import Services from "@/components/services";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <Stats />
      <Testimonials />
      <Locations />
      {/* <CentresList /> */}
    </main>
  );
}
