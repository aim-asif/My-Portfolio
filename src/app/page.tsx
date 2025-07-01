import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import FeaturedWork from "@/components/FeaturedWork";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
