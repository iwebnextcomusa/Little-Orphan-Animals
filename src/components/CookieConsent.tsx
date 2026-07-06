import { useState, useEffect } from "react";
import { ShieldAlert, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("loa-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("loa-cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-40 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl rounded-3xl p-5 flex flex-col space-y-3 font-sans animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start space-x-3">
        <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 rounded-xl flex items-center justify-center shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-white leading-none">
            Privacy & Cookie Policy
          </h4>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
            Little Orphan Animals uses cookies to analyze website traffic, remember your local dark-mode settings, and secure our contact and donation pipelines. By clicking accept, you support our safe haven efforts.
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-end space-x-2 pt-1">
        <button
          onClick={() => setIsVisible(false)}
          className="px-3.5 py-1.5 text-[10px] font-bold text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white transition-colors"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          id="btn-accept-cookie"
          className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-xl shadow-md cursor-pointer"
        >
          Accept Policy
        </button>
      </div>
    </div>
  );
}
