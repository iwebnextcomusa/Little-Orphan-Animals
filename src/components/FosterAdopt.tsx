import { useState } from "react";
import { FAQS_DATA } from "../data";
import { Heart, ShieldCheck, HelpCircle, Check, ArrowRight, ShieldAlert, ChevronDown, ChevronUp } from "lucide-react";

export default function FosterAdopt() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const requirements = [
    "Secure paddock/fenced yard matching species needs",
    "Consent for friendly home visit by Nancy Nenad or an LOA inspector",
    "Verified veterinary reference indicating regular care histories",
    "Commitment to standard monthly health/well-being photo check-ins",
  ];

  const steps = [
    { title: "1. Match Application", desc: "Submit an interest profile indicating your species experience, yard size, and lifestyle details." },
    { title: "2. Meet & Greet", desc: "Schedule a visit to our 15-acre sanctuary to interact directly with the matching rescue." },
    { title: "3. Trial Foster Period", desc: "We provide all initially required food, supplements, and crates during a 30-day trial transition." },
    { title: "4. Permanent Adopt", desc: "Finalize adoption or transition to a long-term specialized foster arrangement with LOA medical backing." },
  ];

  return (
    <section id="sec-foster" className="py-20 bg-[#FAF7F2] dark:bg-[#1C1A18] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Placement & FAQs</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Foster, Adopt & Sanctuary
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            While we primarily provide a secure, lifelong sanctuary, we occasionally seek specialized foster-to-adopt homes for fully rehabilitated rescues who thrive under individual attention.
          </p>
        </div>

        {/* Sanctuary Honesty Banner */}
        <div className="bg-white dark:bg-stone-900 rounded-[32px] p-6 sm:p-8 border border-stone-200/50 dark:border-stone-800 shadow-sm flex flex-col md:flex-row gap-6 items-start mb-16">
          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-400 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white leading-tight">
              An Important Note on Our Lifelong Commitment
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Many of our animals have suffered extreme physical neglect, psychological abuse, or struggle with congenital joint/medical disorders. Because of these factors, <strong>traditional adoption is not our primary objective</strong>. Instead, we act as their permanent, safe haven. Sponsoring their care or volunteering is the most effective way to help them live their lives in quiet dignity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Requirements */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
              Foster & Adopt Requirements
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              To guarantee that our rehabilitated animals go only to homes that equal or exceed the sanctuary's standard of love and safety, Nancy Nenad maintains strict requirements:
            </p>

            <ul className="space-y-3 font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start space-x-3 bg-white dark:bg-stone-900 p-3 rounded-xl border border-stone-100 dark:border-stone-850">
                  <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
              The Placement Process
            </h3>
            
            <div className="space-y-4">
              {steps.map((st, idx) => (
                <div key={idx} className="flex space-x-4">
                  <span className="font-serif font-bold text-base text-emerald-800 dark:text-emerald-400 pt-0.5 shrink-0">
                    {st.title}
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-white">
                      {st.title.split(".")[1]}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mt-1">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsible FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl font-bold text-center text-stone-900 dark:text-white mb-8 flex items-center justify-center space-x-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, fIdx) => {
              const isSelected = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/55 dark:border-stone-800/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isSelected ? null : fIdx)}
                    id={`btn-faq-toggle-${fIdx}`}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-stone-900 dark:text-white hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-serif text-sm font-bold leading-tight">
                      {faq.question}
                    </span>
                    {isSelected ? (
                      <ChevronUp className="w-5 h-5 text-emerald-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400" />
                    )}
                  </button>

                  {isSelected && (
                    <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-300 font-sans border-t border-stone-50 dark:border-stone-850 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
