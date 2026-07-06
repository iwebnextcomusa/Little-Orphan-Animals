import { Heart, Home, Shield, Users, Sprout } from "lucide-react";

export default function ImpactStatistics() {
  const stats = [
    {
      icon: Heart,
      value: "450+",
      label: "Lives Saved & Protected",
      desc: "Senior, disabled, and orphaned animals living in safety.",
      color: "bg-rose-50 text-rose-800 dark:bg-rose-950/30 dark:text-rose-400",
    },
    {
      icon: Sprout,
      value: "15 Acres",
      label: "Meadow Sanctuary",
      desc: "Spacious pastures, paddocks, and specialized cottages.",
      color: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400",
    },
    {
      icon: Users,
      value: "80+",
      label: "Active Volunteers",
      desc: "Providing veterinary runs, grooming, love, and care.",
      color: "bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400",
    },
    {
      icon: Shield,
      value: "10 Years",
      label: "Absolute Sanctuary",
      desc: "An unwavering lifelong commitment to dignified peace.",
      color: "bg-stone-50 text-stone-800 dark:bg-stone-850/30 dark:text-stone-400",
    },
  ];

  return (
    <div className="py-12 bg-white dark:bg-stone-900 border-y border-stone-200/40 dark:border-stone-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-stone-50 dark:bg-stone-950/30 p-6 rounded-3xl border border-stone-100 dark:border-stone-800/40 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-stone-900 dark:text-white font-mono tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900 dark:text-white leading-tight">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
