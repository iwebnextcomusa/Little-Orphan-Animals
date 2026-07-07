import { useState, useEffect } from "react";
import NavigationHeader from "./components/NavigationHeader";
import HeroSection from "./components/HeroSection";
import ImpactStatistics from "./components/ImpactStatistics";
import AboutUs from "./components/AboutUs";
import OurAnimalsGrid from "./components/OurAnimalsGrid";
import RescueChronicles from "./components/RescueChronicles";
import DonationPortal from "./components/DonationPortal";
import VolunteerApplication from "./components/VolunteerApplication";
import FosterAdopt from "./components/FosterAdopt";
import GallerySection from "./components/GallerySection";
import NewsEventsSection from "./components/NewsEventsSection";
import ContactSection from "./components/ContactSection";
import AIChatbot from "./components/AIChatbot";
import CookieConsent from "./components/CookieConsent";
import { ArrowUp, Heart, Check, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Heartwarming feedback toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Keep the website strictly in light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("LOA_DARK_MODE", "false");
  }, []);

  // Handle showing scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Basic IntersectionObserver/scroll highlight detection for active navigation
      const sections = ["home", "about", "animals", "stories", "donate", "volunteer", "foster", "gallery", "news", "contact"];
      const offset = 120;
      
      for (const sec of sections) {
        const el = document.getElementById(`sec-${sec}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(`sec-${sectionId}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const triggerFeedbackToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#FAF8F5] text-stone-800 dark:bg-[#12110F] dark:text-stone-100 selection:bg-emerald-200 dark:selection:bg-emerald-900 selection:text-emerald-900 dark:selection:text-emerald-200">
      
      {/* 1. Header with Sticky Navigation */}
      <NavigationHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenDonateModal={() => handleScrollToSection("donate")}
      />

      {/* Main content body */}
      <main className="relative">
        
        {/* 2. Hero Section */}
        <div id="sec-home">
          <HeroSection
            onMeetRescues={() => handleScrollToSection("animals")}
            onDonateClick={() => handleScrollToSection("donate")}
          />
        </div>

        {/* 3. Impact Statistics */}
        <ImpactStatistics />

        {/* 5. About Us (Nancy Nenad Story, Core Values, Milestone Timeline) */}
        <div id="sec-about" className="scroll-mt-20">
          <AboutUs />
        </div>

        {/* 6. Our Animals (Filterable grid & Sponsor Modals) */}
        <div id="sec-animals" className="scroll-mt-20">
          <OurAnimalsGrid onSponsorSuccess={triggerFeedbackToast} />
        </div>

        {/* 7. Rescue Chronicles (Blog-style before/after recovery histories) */}
        <div id="sec-stories" className="scroll-mt-20">
          <RescueChronicles />
        </div>

        {/* 8. Donation Portal (Specific designation funds, Secure simulation panel) */}
        <div id="sec-donate" className="scroll-mt-20">
          <DonationPortal onDonationSuccess={triggerFeedbackToast} />
        </div>

        {/* 9. Volunteer Application Form */}
        <div id="sec-volunteer" className="scroll-mt-20">
          <VolunteerApplication />
        </div>

        {/* 10. Foster, Adoption Guidelines & collapsible FAQs */}
        <div id="sec-foster" className="scroll-mt-20">
          <FosterAdopt />
        </div>

        {/* 11. Photo Gallery Section (Responsive masonry layout) */}
        <div id="sec-gallery" className="scroll-mt-20">
          <GallerySection />
        </div>

        {/* 12. News & Upcoming Fundraiser Events (Newsletter sign-ups) */}
        <div id="sec-news" className="scroll-mt-20">
          <NewsEventsSection />
        </div>

        {/* 13. Contact Panel (Forms, coordinates & custom maps visualizer) */}
        <div id="sec-contact" className="scroll-mt-20">
          <ContactSection />
        </div>

      </main>

      {/* 14. Floating AI Chatbot Widget (Secure Gemini Client Proxy) */}
      <AIChatbot />

      {/* 15. Accessible Cookie Consent GDPR Banner */}
      <CookieConsent />

      {/* 16. Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          id="btn-scroll-top"
          className="fixed bottom-24 right-6 z-30 p-3 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-stone-700 rounded-full shadow-lg hover:bg-stone-100 dark:hover:bg-stone-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 17. Feedback Success Toast */}
      {toastMessage && (
        <div
          id="global-toast"
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-stone-900 text-white dark:bg-white dark:text-stone-950 px-6 py-4 rounded-3xl shadow-2xl flex items-center space-x-3 max-w-md w-[90vw] animate-in fade-in slide-in-from-top-5 duration-300"
        >
          <div className="w-10 h-10 bg-emerald-800 dark:bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
            <Check className="w-5 h-5 text-white dark:text-emerald-800 stroke-[3]" />
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold leading-none flex items-center">
              Action Confirmed
              <Sparkles className="w-4 h-4 text-amber-400 ml-1.5 animate-bounce" />
            </h4>
            <p className="text-[11px] text-stone-300 dark:text-stone-600 mt-1.5 leading-relaxed font-sans">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      {/* 18. Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Column 1: Branding */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center border border-emerald-800">
                  <Heart className="w-5 h-5 text-emerald-300 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white tracking-tight leading-tight">
                    Little Orphan Animals
                  </h4>
                  <p className="text-[10px] text-emerald-400 font-semibold tracking-widest uppercase">
                    A safe lifelong sanctuary
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
                Dedicated to rescuing abandoned, abused, and disabled animals by providing love, nutritious food, orthopedic care, and a safe lifelong sanctuary. Founded by Nancy Nenad.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Quick Navigation Links
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => handleScrollToSection("home")} className="text-left hover:text-white transition-colors cursor-pointer">Home Hub</button>
                <button onClick={() => handleScrollToSection("about")} className="text-left hover:text-white transition-colors cursor-pointer">Nancy's Story</button>
                <button onClick={() => handleScrollToSection("animals")} className="text-left hover:text-white transition-colors cursor-pointer">Our Rescues</button>
                <button onClick={() => handleScrollToSection("stories")} className="text-left hover:text-white transition-colors cursor-pointer">Success Tales</button>
                <button onClick={() => handleScrollToSection("donate")} className="text-left hover:text-white transition-colors cursor-pointer">Donate Portal</button>
                <button onClick={() => handleScrollToSection("volunteer")} className="text-left hover:text-white transition-colors cursor-pointer">Volunteer Guide</button>
                <button onClick={() => handleScrollToSection("foster")} className="text-left hover:text-white transition-colors cursor-pointer">Foster & FAQs</button>
                <button onClick={() => handleScrollToSection("contact")} className="text-left hover:text-white transition-colors cursor-pointer">Contact Us</button>
              </div>
            </div>

            {/* Column 3: Trust Commitment */}
            <div className="md:col-span-3 space-y-3 text-xs">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Sanctuary Trust
              </h4>
              <p className="text-stone-500 leading-relaxed">
                Little Orphan Animals is an officially licensed 501(c)(3) nonprofit organization. All donations are tax-deductible.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleScrollToSection("donate")}
                  className="w-full py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                  <span>Sponsor An Animal</span>
                </button>
              </div>
            </div>

          </div>

          {/* Copyrights and Developed By link */}
          <div className="pt-8 border-t border-stone-900 text-center text-xs space-y-2">
            <p>
              &copy; {new Date().getFullYear()} Little Orphan Animals Sanctuary • Nancy Nenad. All Rights Reserved.
            </p>
            <p className="text-stone-600">
              <span className="hover:text-stone-400 transition-colors cursor-pointer mr-3">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-stone-400 transition-colors cursor-pointer mx-3">Terms of Service</span>
            </p>
            <p className="text-stone-500 text-[11px] pt-1">
              Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-emerald-500 hover:text-emerald-400 font-bold hover:underline">iWebNext</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
