import { TIMELINE_MILESTONES } from "../data";
import { Sparkles, Compass, ShieldAlert, Heart, Calendar } from "lucide-react";

export default function AboutUs() {
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
              The Story of Little Orphan Animals
            </h2>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              Founded in 2015 by <strong>Nancy Nenad</strong>, Little Orphan Animals was born out of a profound realization: senior, chronically disabled, or highly traumatized rescues are frequently overlooked by traditional shelters. They require specialized, expensive, and long-term care that many shelters simply cannot afford to sustain.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              Nancy purchased 15 beautiful acres of pasture land to establish a secure, forever haven. Since then, the sanctuary has expanded to feature climate-controlled sleeping barns, a specialized vet cottage, a heated indoor-outdoor cat shelter, and spacious aviaries.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-2xl border-l-4 border-emerald-850 dark:border-emerald-500 text-stone-800 dark:text-stone-100 text-xs sm:text-sm">
              <strong className="font-serif block mb-1 text-emerald-950 dark:text-emerald-300">
                Why Lifelong Sanctuary Matters
              </strong>
              Due to age, medical histories, or developmental traumas, many of our permanent residents are not adoptable. Rather than facing distress or euthanasia, they live the rest of their natural lives in peace, dignity, and absolute comfort here with us.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] overflow-hidden border-4 border-stone-100 shadow-xl max-w-[480px] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800"
                alt="Nancy Nenad working with horses at the sanctuary"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
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
