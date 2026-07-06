import { Heart, ArrowRight, ShieldCheck, Sparkles, Sprout } from "lucide-react";

interface HeroProps {
  onMeetRescues: () => void;
  onDonateClick: () => void;
}

export default function HeroSection({ onMeetRescues, onDonateClick }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#FAF6EE] via-[#F4EFE6] to-[#EAE3D5] dark:from-[#1E1C1A] dark:via-[#191715] dark:to-[#12110F]">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/50 dark:bg-emerald-950/10 rounded-full filter blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 dark:bg-amber-950/50 rounded-full filter blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>A Safe Haven for Overlooked Souls</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white leading-tight tracking-tight">
              Giving Forgotten Animals a <span className="text-emerald-800 dark:text-emerald-400 italic">Lifelong Sanctuary</span> of Dignity
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Founded by <strong>Nancy Nenad</strong>, Little Orphan Animals provides safe, permanent sanctuary, professional medical treatment, nutritious meals, and abundant love to abandoned, abused, and disabled animals who have nowhere else to turn.
            </p>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-stone-500 dark:text-stone-400 py-2">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>501(c)(3) Non-Profit Sanctuary</span>
              </span>
              <span className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
              <span className="flex items-center space-x-1.5">
                <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Lifelong Care Commitment</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onDonateClick}
                id="btn-hero-donate"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-emerald-800/10 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-base"
              >
                <Heart className="w-5 h-5 fill-current text-amber-400" />
                <span>Sponsor & Donate Now</span>
              </button>

              <button
                onClick={onMeetRescues}
                id="btn-hero-meet"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-white hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold px-7 py-4 rounded-2xl shadow-sm hover:bg-stone-50 dark:hover:bg-stone-700/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-base"
              >
                <span>Meet Our Animals</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute inset-4 -m-4 rounded-[36px] bg-gradient-to-tr from-emerald-800 to-amber-400 opacity-20 blur-xl animate-pulse" />
              
              {/* Featured Image card */}
              <div className="relative rounded-[32px] overflow-hidden border-8 border-white dark:border-stone-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000"
                  alt="Happy rescued dogs in sanctuary pastures"
                  className="w-full h-[380px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Heart Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 dark:border-stone-800 shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-stone-950 dark:text-white leading-tight">
                      Nancy Nenad's Ten-Year Mission
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-none">
                      Giving aged and special needs rescues absolute peace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
