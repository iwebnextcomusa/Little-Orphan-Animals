import { useState, useEffect } from "react";
import { TIMELINE_MILESTONES } from "../data";
import { Sparkles, Compass, ShieldAlert, Heart, Calendar } from "lucide-react";
// @ts-ignore
import shiva1 from "../assets/images/shiva_1_1783440573220.jpg";
// @ts-ignore
import shiva2 from "../assets/images/shiva_2_1783440593395.jpg";

export default function AboutUs() {
  const shivaImages = [shiva1, shiva2];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % shivaImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [shivaImages.length]);

  const values = [
    {
      title: "Love & Comfort First",
      desc: "Every animal, regardless of physical condition or past trauma, is provided with immediate affection, nutritious food, and safe medical assistance.",
    },
    {
      title: "Lifelong Commitment",
      desc: "Once an animal is welcomed by Nancy Nenad, we guarantee their safety for the rest of their natural lives. We never euthanize for space or age.",
    },
    {
      title: "Dignified Sanctuary",
      desc: "Providing natural wooded pastures, custom-heated cottages, and specialized care so elderly or disabled residents can wander in peace.",
    },
  ];

  return (
    <section id="sec-about" className="py-20 bg-white dark:bg-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Our Roots</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white leading-tight">
              From Shiva's Perspective
            </h2>

            <p className="text-lg sm:text-xl text-emerald-800 dark:text-emerald-300 font-serif italic font-medium leading-relaxed">
              &ldquo;I gave everything I had.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              I worked without complaint. I trusted the hands that held my lead rope. I never imagined my journey would end in fear.
            </p>

            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 font-medium leading-relaxed font-sans">
              But someone saw me.
            </p>

            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 font-medium leading-relaxed font-sans">
              Someone believed my life still mattered.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              Today I know the warmth of a safe barn, the comfort of gentle voices, and the freedom to simply be a horse again.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              There are so many others still waiting for someone to see them.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-2xl border-l-4 border-emerald-800 dark:border-emerald-500 text-stone-800 dark:text-stone-100 text-sm sm:text-base font-serif italic font-semibold">
              Will you be their someone?
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] overflow-hidden border-4 border-stone-100 dark:border-stone-850 shadow-xl max-w-[480px] mx-auto h-[360px] sm:h-[420px] bg-stone-100 dark:bg-stone-800">
              {shivaImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Shiva - magnificent draft horse - slide ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}

              {/* Slider Dots */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                {shivaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImgIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImgIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6 z-20 pointer-events-none">
                <p className="text-xs text-white/90 italic">
                  &ldquo;Every animal who walks through our gates is guaranteed a lifetime of absolute love, peace, and soft bedding.&rdquo; &ndash; Nancy Nenad, Founder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-stone-50 dark:bg-stone-950/40 rounded-[32px] p-8 md:p-12 mb-20 border border-stone-100 dark:border-stone-850">
          <h3 className="font-serif text-2xl font-bold text-center text-stone-900 dark:text-white mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="space-y-3 bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-current text-rose-500" />
                </div>
                <h4 className="font-serif text-base font-bold text-stone-900 dark:text-white leading-tight">
                  {v.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-sans">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Milestones */}
        <div className="space-y-10">
          <h3 className="font-serif text-2xl font-bold text-center text-stone-900 dark:text-white mb-12">
            Timeline of Milestones
          </h3>
          
          <div className="relative border-l-2 border-emerald-100 dark:border-emerald-950 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-8">
            {TIMELINE_MILESTONES.map((mile, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-emerald-800 border-4 border-white dark:border-stone-900 shadow-md group-hover:scale-125 transition-transform duration-300" />
                
                {/* Milestone Detail */}
                <div className="space-y-1 bg-stone-50/60 dark:bg-stone-950/20 p-5 rounded-2xl border border-stone-100 dark:border-stone-850">
                  <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                    {mile.year}
                  </span>
                  <h4 className="font-serif text-base font-bold text-stone-900 dark:text-white pt-1">
                    {mile.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                    {mile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
