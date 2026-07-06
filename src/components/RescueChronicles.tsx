import { RESCUE_STORIES } from "../data";
import { Sparkles, Calendar, BookOpen, Heart } from "lucide-react";

export default function RescueChronicles() {
  return (
    <section id="sec-stories" className="py-20 bg-white dark:bg-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Rescue Chronicles
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Witness the transformation of our sanctuary members. Behind every card is a long road of patient rehabilitation, specialized medicine, and unconditional love provided by Nancy Nenad and our volunteers.
          </p>
        </div>

        {/* Stories Listing */}
        <div className="space-y-20">
          {RESCUE_STORIES.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={story.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Visual Before/After Combo */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                  <div className="relative h-[300px] sm:h-[400px] rounded-[32px] overflow-hidden shadow-lg border-4 border-stone-100 dark:border-stone-850">
                    <img
                      src={story.heroImage}
                      alt={story.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Before & After thumbnail floating indicators */}
                    <div className="absolute top-4 right-4 bg-emerald-800/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Fully Recovered</span>
                    </div>
                  </div>

                  {/* Before / After Split side-by-side preview */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-2xl overflow-hidden h-32 border border-stone-200/55 dark:border-stone-800">
                      <img
                        src={story.beforeImage}
                        alt="Rescue arrival before photo"
                        loading="lazy"
                        className="w-full h-full object-cover filter grayscale contrast-125"
                      />
                      <div className="absolute bottom-2 left-2 bg-stone-950/80 text-[9px] text-white font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                        Initial Rescue
                      </div>
                    </div>
                    
                    <div className="relative rounded-2xl overflow-hidden h-32 border border-stone-200/55 dark:border-stone-800">
                      <img
                        src={story.afterImage}
                        alt="Rescue fully healed photo"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-emerald-800/85 text-[9px] text-white font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                        Sanctuary Life
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>Published {story.date}</span>
                    <span>•</span>
                    <span className="text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-wide">
                      {story.animalName}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white leading-tight">
                    {story.title}
                  </h3>

                  <div className="space-y-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {/* The Challenge */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-stone-900 dark:text-white uppercase tracking-wider">
                        The Challenge
                      </h4>
                      <p className="font-sans text-stone-600 dark:text-stone-300">
                        {story.challenge}
                      </p>
                    </div>

                    {/* The Recovery Journey */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-stone-900 dark:text-white uppercase tracking-wider">
                        The Recovery Journey
                      </h4>
                      <p className="font-sans text-stone-600 dark:text-stone-300">
                        {story.recoveryJourney}
                      </p>
                    </div>

                    {/* Current Life */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Heart className="w-3.5 h-3.5 fill-current text-rose-500 shrink-0" />
                        <span>Current Life at Sanctuary</span>
                      </h4>
                      <p className="font-sans text-stone-600 dark:text-stone-300 italic bg-[#FAF7F2]/50 dark:bg-stone-950/20 p-4 rounded-2xl border-l-4 border-emerald-800 dark:border-emerald-600">
                        {story.currentLife}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
