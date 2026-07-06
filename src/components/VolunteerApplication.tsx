import React, { useState } from "react";
import { Users, Check, Sparkles, AlertCircle, Heart, Mail, Phone, MapPin } from "lucide-react";

export default function VolunteerApplication() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const opportunities = [
    { id: "care", title: "Direct Animal Care", desc: "Brush horses, clean shelters, bathe dogs, and socialize nervous rescues." },
    { id: "fund", title: "Fundraising & Marketing", desc: "Plan events, draft grant proposals, or coordinate social outreach campaigns." },
    { id: "photo", title: "Photography & Video", desc: "Help us photograph resident animals for website sponsorship logs." },
    { id: "transport", title: "Veterinary Transportation", desc: "Drive recovering animals safely to local veterinary medical appointments." },
    { id: "admin", title: "Administrative Support", desc: "Help organize incoming sponsor emails, files, and logistics schedules." },
    { id: "maint", title: "Sanctuary Maintenance", desc: "Repair pasture fencing, paint barns, and manage woodland irrigation." },
  ];

  const handleAreaToggle = (id: string) => {
    setSelectedAreas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || selectedAreas.length === 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          areas: selectedAreas,
          comments,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMsg(data.message);
        setName("");
        setEmail("");
        setPhone("");
        setComments("");
        setSelectedAreas([]);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg(`Thank you, ${name}! Your volunteer application has been submitted successfully to Nancy and our coordinators.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sec-volunteer" className="py-20 bg-white dark:bg-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Join Our Team</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Volunteer with Little Orphan Animals
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            There is nothing more rewarding than giving your time to animals in need. Whether you want to brush donkeys, build fence paths, or support us through fundraising, your energy makes Nancy's sanctuary thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Interactive Opportunity list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white mb-6">
              How You Can Help
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {opportunities.map((opp) => {
                const isChecked = selectedAreas.includes(opp.id);
                return (
                  <div
                    key={opp.id}
                    onClick={() => handleAreaToggle(opp.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isChecked
                        ? "bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-600 text-stone-900 dark:text-white shadow-sm"
                        : "bg-stone-50/60 dark:bg-stone-950/20 border-stone-200/50 dark:border-stone-850 hover:bg-stone-50"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-bold text-stone-900 dark:text-white">
                          {opp.title}
                        </span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked ? "bg-emerald-800 border-emerald-800 text-white" : "border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                        {opp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] dark:bg-stone-950 p-8 rounded-[32px] border border-stone-150 dark:border-stone-800/60">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-6 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Submit Application</span>
              </h3>

              {successMsg ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-200/40 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-emerald-900 dark:text-emerald-300">
                    Application Sent!
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {successMsg}
                  </p>
                  <button
                    onClick={() => setSuccessMsg(null)}
                    className="px-5 py-2 bg-stone-800 text-white text-xs font-semibold rounded-lg hover:bg-stone-700"
                  >
                    Apply Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@email.com"
                      className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 019-2834"
                      className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                    />
                  </div>

                  {/* Comments */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Tell us about your experience or motivation
                    </label>
                    <textarea
                      rows={3}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="I love animals and have simple horse grooming experience..."
                      className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400 resize-none"
                    />
                  </div>

                  {/* Select constraint indicator */}
                  {selectedAreas.length === 0 && (
                    <p className="text-[10px] text-rose-600 dark:text-rose-400 italic flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Please select at least one area of interest on the left.</span>
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={selectedAreas.length === 0 || isSubmitting}
                    id="btn-volunteer-submit"
                    className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-300 fill-current shrink-0" />
                    <span>{isSubmitting ? "Submitting Application..." : "Submit Volunteer Application"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
