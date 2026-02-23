import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import Testimonials from "./components/Testimonials";
import HomeContactStrip from "./components/HomeContactStrip";

export default function Home() {
  return (
    <>
      {/* Hero + key info */}
      <Hero />
      {/* Services preview */}
      <ServicesPreview />
      {/* Testimonials */}
      <Testimonials />
      {/* Location + quick contact with embedded map */}
      <HomeContactStrip />
    </>
  );
}

