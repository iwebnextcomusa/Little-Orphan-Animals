import { useState, useEffect } from "react";
import { Heart, Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenDonateModal: () => void;
}

export default function NavigationHeader({
  activeSection,
  setActiveSection,
  onOpenDonateModal,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection for glassy/opaque visual state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "animals", label: "Our Rescues" },
    { id: "stories", label: "Rescue Stories" },
    { id: "donate", label: "Donate" },
    { id: "volunteer", label: "Volunteer" },
    { id: "foster", label: "Foster & Adopt" },
    { id: "gallery", label: "Gallery" },
    { id: "news", label: "News & Events" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to the section container
    const element = document.getElementById(`sec-${sectionId}`);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm border-b border-stone-200/50 dark:border-stone-800/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Brand Identity */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Logo Silhouette combo */}
            <div className="relative w-11 h-11 bg-emerald-800 dark:bg-emerald-950 rounded-2xl flex items-center justify-center shadow-md shadow-emerald-900/10 transition-transform duration-300 group-hover:scale-105">
              <Heart className="w-8 h-8 text-emerald-100/20 absolute" />
              {/* Custom SVG paw and silhouette nested nicely */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-emerald-200 z-10"
              >
                <path d="M12 5c.67 0 1.2.36 1.6 1 .43-.64.93-1 1.6-1a2.15 2.15 0 0 1 2.2 2.1c0 1.25-.8 2.45-1.9 3.4l-3.5 3.1a.6.6 0 0 1-.8 0l-3.5-3.1C6.8 9.55 6 8.35 6 7.1a2.15 2.15 0 0 1 2.2-2.1c.67 0 1.2.36 1.6 1 .4-.64.93-1 1.6-1Z" />
                <path d="M12 18H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1" />
                <path d="M18 12v4a2 2 0 0 1-2 2h-1" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-black dark:text-black tracking-tight leading-tight">
                Little Orphan Animals
              </span>
              <span className="text-[10px] text-black/75 dark:text-black/75 font-semibold uppercase tracking-widest leading-none mt-0.5">
                Lifelong Sanctuary
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`px-3 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "bg-emerald-100/60 dark:bg-emerald-950/40 text-black dark:text-black"
                    : "text-black/80 dark:text-black/80 hover:text-black dark:hover:text-black hover:bg-stone-100/40 dark:hover:bg-stone-800/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Tools: Donate Button, Mobile Menu trigger */}
          <div className="flex items-center space-x-3">
            {/* Sticky Donate Trigger */}
            <button
              onClick={onOpenDonateModal}
              id="btn-header-donate"
              className="hidden sm:inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 dark:bg-amber-600 dark:hover:bg-amber-500 text-black dark:text-black font-bold px-4 py-2.5 rounded-xl shadow-md shadow-amber-500/10 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-sm"
            >
              <Heart className="w-4.5 h-4.5 fill-current text-rose-500" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="btn-mobile-menu"
              className="p-2 text-black dark:text-black lg:hidden rounded-xl bg-stone-100/60 dark:bg-stone-800/60 hover:bg-stone-200/50 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-[64px] z-30 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md flex flex-col p-6 space-y-3 shadow-lg border-t border-stone-100 dark:border-stone-800 animate-in fade-in slide-in-from-top-4"
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-mob-${item.id}`}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeSection === item.id
                    ? "bg-emerald-50 dark:bg-emerald-950/35 text-black dark:text-black border-l-4 border-emerald-800 dark:border-emerald-500"
                    : "text-black/85 dark:text-black/85 hover:bg-stone-50 dark:hover:bg-stone-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800/60">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDonateModal();
              }}
              id="btn-mobile-donate"
              className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-2xl shadow-lg"
            >
              <Heart className="w-5 h-5 fill-current text-rose-500" />
              <span>Donate to Nancy's Sanctuary</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
