import React, { useState } from "react";
import { NEWS_EVENTS } from "../data";
import { Calendar, Bell, Mail, ArrowRight, Sparkles, Check } from "lucide-react";

export default function NewsEventsSection() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setSignupSuccess(true);
      setNewsletterEmail("");
    }, 800);
  };

  return (
    <section id="sec-news" className="py-20 bg-white dark:bg-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Updates & Outreach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            News & Upcoming Events
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Stay tuned to our annual fundraisers, seasonal shelter upgrades, and local sanctuary happenings. Join us in promoting animal compassion across the community!
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {NEWS_EVENTS.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50 dark:bg-stone-950/30 rounded-[28px] overflow-hidden border border-stone-100 dark:border-stone-850 shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-800 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono text-stone-400 font-medium">
                    {item.date}
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                <span className="text-xs text-emerald-800 dark:text-emerald-400 font-bold hover:underline inline-flex items-center space-x-1 cursor-pointer">
                  <span>Read full update</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Banner */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 dark:from-emerald-950 dark:to-emerald-900 text-white rounded-[32px] p-8 md:p-12 shadow-xl border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 bg-white/15 text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Sanctuary Journal</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Get Heartwarming Rescue Updates
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans">
              Sign up for our monthly newsletter. We send lovely profiles of rescued residents, photos, veterinary recovery updates, and volunteer guides. No spam, ever.
            </p>
          </div>

          <div className="w-full lg:w-96">
            {signupSuccess ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center space-x-3 text-emerald-200 animate-in zoom-in-95 duration-200">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">You're Subscribed!</h4>
                  <p className="text-[11px] text-emerald-200 mt-1">Thank you for following Nancy's journey!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/15 border border-white/15 focus:border-white/45 text-white placeholder-emerald-200/80 rounded-xl px-4 py-3.5 text-xs outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-newsletter-submit"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-3.5 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center space-x-1.5 shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isSubmitting ? "Signing up..." : "Subscribe"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
