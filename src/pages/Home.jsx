import Hero3D from "../components/ui/Hero3D";
import MagneticButton from "../components/ui/MagneticButton";
import SectionReveal from "../components/ui/SectionReveal";

import ProjectHighlights from "../components/sections/ProjectHighlights";
import WhyAvacasa from "../components/sections/WhyAvacasa";
import Amenities from "../components/sections/Amenities";
import VillaShowcase from "../components/sections/VillaShowcase";
import FloorPlans from "../components/sections/FloorPlans";
import Masterplan from "../components/sections/Masterplan";
import PricingPlans from "../components/sections/PricingPlans";
import InvestmentROI from "../components/sections/InvestmentROI";
import LocationMap from "../components/sections/LocationMap";
import DeveloperTrust from "../components/sections/DeveloperTrust";
import TeamSection from "../components/sections/TeamSection";
import Testimonials from "../components/sections/Testimonials";
import ScheduleVisit from "../components/sections/ScheduleVisit";
import BrochureCTA from "../components/sections/BrochureCTA";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  return (
    <>
      <section className="hero container hero-video-wrap">

  {/* 🎥 BACKGROUND VIDEO INSIDE HERO */}
  <video
    className="hero-video-bg"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/src/assets/project/hero-video.mp4" type="video/mp4" />
  </video>

  {/* overlay for readability */}
  <div className="hero-video-overlay" />

  {/* 🔥 HERO CONTENT */}
  <div className="hero-inner">

    <div className="hero-left">
      <Hero3D />
    </div>

    <div className="hero-right">
      <h1 className="h1">Green is the New Luxury</h1>

      <p className="hero-sub">
        Nature-inspired luxury villas by Lumora Estates
      </p>

      <p className="hero-tagline">
        The ultimate journey to your inner peace
      </p>

      <MagneticButton text="Book Private Visit" />
    </div>

  </div>
</section>

      <SectionReveal><ProjectHighlights /></SectionReveal>
      <SectionReveal><WhyAvacasa /></SectionReveal>
      <SectionReveal><Amenities /></SectionReveal>
      <SectionReveal><VillaShowcase /></SectionReveal>
      <SectionReveal><FloorPlans /></SectionReveal>
      <SectionReveal><Masterplan /></SectionReveal>
      <SectionReveal><PricingPlans /></SectionReveal>
      <SectionReveal><InvestmentROI /></SectionReveal>
      <SectionReveal><LocationMap /></SectionReveal>
      <SectionReveal><DeveloperTrust /></SectionReveal>
      <SectionReveal><TeamSection /></SectionReveal>
      <SectionReveal><Testimonials /></SectionReveal>
      <SectionReveal><ScheduleVisit /></SectionReveal>
      <SectionReveal><BrochureCTA /></SectionReveal>
      <SectionReveal><FAQ /></SectionReveal>
    </>
  );
}