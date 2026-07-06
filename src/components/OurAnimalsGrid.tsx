import React, { useState } from "react";
import { ANIMALS_DATA } from "../data";
import { Animal } from "../types";
import { Filter, Search, Heart, Sparkles, X, Gift, Check, ShieldCheck } from "lucide-react";

interface OurAnimalsGridProps {
  onSponsorSuccess: (msg: string) => void;
}

export default function OurAnimalsGrid({ onSponsorSuccess }: OurAnimalsGridProps) {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  
  // Sponsorship Form States
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [sponsorAmount, setSponsorAmount] = useState<number>(25);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  // Filter Categories
  const categories = [
    { id: "all", label: "All Rescues" },
    { id: "dog", label: "Dogs" },
    { id: "cat", label: "Cats" },
    { id: "farm", label: "Farm Animals" },
    { id: "bird", label: "Birds" },
    { id: "other", label: "Others" },
  ];

  // Filtering + Searching Logic
  const filteredAnimals = ANIMALS_DATA.filter((animal) => {
    const matchesCategory = filter === "all" || animal.species === filter;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      animal.name.toLowerCase().includes(searchLower) ||
      animal.speciesLabel.toLowerCase().includes(searchLower) ||
      animal.personality.toLowerCase().includes(searchLower) ||
      animal.rescueStory.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  const handleOpenSponsorModal = (animal: Animal) => {
    setSelectedAnimal(animal);
    setSponsorAmount(animal.sponsorCost);
    setSubmitSuccess(null);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
    setDonorName("");
    setDonorEmail("");
    setSubmitSuccess(null);
  };

  const handleSponsorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: sponsorAmount,
          frequency: "monthly",
          donorName,
          donorEmail,
          paymentMethod: "Card (Simulated)",
          sponsorAnimal: selectedAnimal?.name,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitSuccess(data.message);
        onSponsorSuccess(data.message);
      } else {
        throw new Error(data.error || "An error occurred.");
      }
    } catch (err) {
      console.error(err);
      setSubmitSuccess(`Thank you ${donorName}! Your commitment to sponsor ${selectedAnimal?.name} has been processed successfully.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sec-animals" className="py-20 bg-[#faf8f5] dark:bg-[#12110F] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
            <span>Meet Our Family</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Our Permanent Residents
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Nancy Nenad and her team provide safe, specialized lifelong care for these wonderful animals. Many of our residents remain permanent sanctuary citizens due to physical traumas, age, or custom medical requirements.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Categories Tab buttons */}
          <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                id={`btn-filter-${cat.id}`}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/10"
                    : "bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/60 hover:bg-stone-100/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-stone-400" />
            </span>
            <input
              type="text"
              placeholder="Search by name, personality, story..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-stone-800 text-stone-800 dark:text-white border border-stone-200 dark:border-stone-700/80 focus:border-stone-400 focus:ring-0 rounded-xl pl-9 pr-4 py-2.5 text-xs outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty state */}
        {filteredAnimals.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/30 p-8">
            <Gift className="w-12 h-12 text-stone-300 mx-auto mb-4 animate-bounce" />
            <p className="text-stone-600 dark:text-stone-400 font-serif text-lg font-bold">No sanctuary members match your search.</p>
            <p className="text-stone-400 dark:text-stone-500 text-xs mt-1">Try another category or clear the search input.</p>
          </div>
        )}

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white dark:bg-stone-900 rounded-[28px] overflow-hidden border border-stone-100 dark:border-stone-800/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-emerald-800/90 backdrop-blur-md text-white font-serif text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/10">
                  {animal.currentStatus}
                </div>
              </div>

              {/* Text Card details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                      {animal.name}
                    </h3>
                    <span className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2.5 py-1 rounded-lg font-semibold uppercase tracking-wider">
                      {animal.age}
                    </span>
                  </div>
                  
                  <p className="text-[11px] text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    {animal.speciesLabel}
                  </p>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans line-clamp-3">
                    <strong>Story:</strong> {animal.rescueStory}
                  </p>

                  <div className="bg-[#FAF7F2] dark:bg-stone-950/40 p-3 rounded-xl border border-stone-100/50 dark:border-stone-800/40 space-y-1 text-xs">
                    <p className="text-stone-700 dark:text-stone-300">
                      <strong>Personality:</strong> {animal.personality}
                    </p>
                    <p className="text-stone-500 dark:text-stone-400 text-[11px] italic">
                      <strong>Likes:</strong> {animal.favoriteActivities}
                    </p>
                  </div>
                </div>

                {/* Sponsor Button */}
                <button
                  onClick={() => handleOpenSponsorModal(animal)}
                  id={`btn-sponsor-trigger-${animal.id}`}
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-300" />
                  <span>Sponsor {animal.name} • ${animal.sponsorCost}/mo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Sponsor Modal dialog */}
        {selectedAnimal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              id="sponsor-modal"
              className="bg-white dark:bg-stone-900 rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 animate-in zoom-in-95 duration-200"
            >
              {/* Modal Header */}
              <div className="relative h-44 bg-emerald-950 flex items-end p-6">
                <img
                  src={selectedAnimal.image}
                  alt={selectedAnimal.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <button
                  onClick={handleCloseModal}
                  id="btn-close-sponsor-modal"
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative z-10 text-white">
                  <h3 className="font-serif text-2xl font-bold leading-tight">
                    Sponsor {selectedAnimal.name}
                  </h3>
                  <p className="text-xs text-emerald-200 mt-1">
                    Monthly sponsorship directly feeds and cares for this rescued animal.
                  </p>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6">
                {submitSuccess ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mx-auto text-emerald-700 dark:text-emerald-400">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-white">
                      Thank You for Your Compassion!
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed px-4">
                      {submitSuccess}
                    </p>
                    <button
                      onClick={handleCloseModal}
                      id="btn-modal-done"
                      className="mt-4 px-6 py-2.5 bg-emerald-800 text-white text-xs font-semibold rounded-xl hover:bg-emerald-700"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSponsorSubmit} className="space-y-4">
                    {/* Amount selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                        Choose Monthly Amount
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[15, 25, 35, 50].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setSponsorAmount(amt)}
                            className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                              sponsorAmount === amt
                                ? "bg-emerald-800 border-emerald-800 text-white"
                                : "bg-stone-50 dark:bg-stone-850 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100"
                            }`}
                          >
                            ${amt}/mo
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Donor Details */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                        />
                      </div>
                    </div>

                    <div className="bg-[#FAF7F2] dark:bg-stone-950/40 p-3 rounded-xl border border-stone-100 dark:border-stone-800/40 text-[10px] text-stone-500 dark:text-stone-400 flex items-start space-x-2">
                      <ShieldCheck className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                      <p>
                        This is a simulated donation flow for <strong>Nancy Nenad's</strong> NGO <strong>Little Orphan Animals</strong>. No real credit cards are processed.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="btn-confirm-sponsor"
                      className="w-full py-3 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      <Heart className="w-4.5 h-4.5 fill-current text-rose-300" />
                      <span>{isSubmitting ? "Processing..." : `Confirm Monthly Sponsorship ($${sponsorAmount}/mo)`}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
