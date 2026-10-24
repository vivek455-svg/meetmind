import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { Clarity } from "@/components/Clarity";
import { Steps } from "@/components/Steps";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <Features />
        <Clarity />
        <Steps />
        <Integrations />
        <Testimonials />
        <FaqSection />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
