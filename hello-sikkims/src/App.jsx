import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileStickyBar from "./components/layout/MobileStickyBar";
import HeroSection from "./components/sections/HeroSection";
import ProofStrip from "./components/sections/ProofStrip";
import TaglineReveal from "./components/sections/TaglineReveal";
import CabServices from "./components/sections/CabServices";
import TourPackages from "./components/sections/TourPackages";
import Destinations from "./components/sections/Destinations";
import PermitGuide from "./components/sections/PermitGuide";
import Testimonials from "./components/sections/Testimonials";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import BookingDialog from "./components/sections/BookingDialog";
import TourDialog from "./components/sections/TourDialog";



export default function App() {
  const [booking, setBooking] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const handleCabBook = (vehicle) => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("hello-sikkims-select-cab", { detail: { vehicle } }));
  };
  const handleCustomizeTour = (tour) => {
    setSelectedTour(null);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("hello-sikkims-select-tour", { detail: { region: tour.region === "Complete Sikkim" ? "Complete Sikkim Circuit" : tour.region } }));
  };
  return <div className="min-h-screen overflow-x-hidden bg-[#0F172A] pb-24 font-sans text-slate-100 md:pb-0">
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"><div className="absolute -top-48 left-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/10 blur-[120px]" /><div className="absolute right-[-12rem] top-[45rem] h-[30rem] w-[30rem] rounded-full bg-amber-500/5 blur-[120px]" /></div>
    <div className="relative z-10">
      <Navbar />
      <main>
        <HeroSection onSubmitBooking={setBooking} />
        <ProofStrip />
        <TaglineReveal />
        <CabServices onBook={handleCabBook} />
        <TourPackages onView={setSelectedTour} />
        <Destinations />
        <PermitGuide />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        </main>
        <Footer />
        </div>
    <MobileStickyBar />
    <BookingDialog booking={booking} onClose={() => setBooking(null)} />
    <TourDialog tour={selectedTour} onClose={() => setSelectedTour(null)} onCustomize={handleCustomizeTour} />
  </div>;
}