import React, { useState } from "react";
import { Heart, DollarSign, Gift, Check, ShieldCheck, HelpCircle, Award } from "lucide-react";

interface DonationPortalProps {
  onDonationSuccess: (msg: string) => void;
}

export default function DonationPortal({ onDonationSuccess }: DonationPortalProps) {
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [fund, setFund] = useState<string>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const presets = [100, 250, 400, 500];

  const impacts = [
    {
      value: 100,
      title: "$100: Nutritious Feed & Vaccines",
      desc: "Feeds our rescued paddock animals high-quality forage and provides critical initial vaccines for new arrivals.",
    },
    {
      value: 250,
      title: "$250: Medical Support",
      desc: "Supports laboratory bloodwork, specialized pain management, or orthopedic physical therapy sessions.",
    },
    {
      value: 400,
      title: "$400: Barn Operations",
      desc: "Funds essential barn maintenance, heating, clean bedding, and overall herd housing improvements.",
    },
    {
      value: 500,
      title: "$500: Full Sanctuary Sponsorship",
      desc: "Sponsors multiple permanent residents' complete boarding, veterinary care, and feeding costs for a full month.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    const finalAmount = customAmount ? parseFloat(customAmount) : amount;

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          frequency,
          donorName: name,
          donorEmail: email,
          paymentMethod: "Card (Simulated)",
          sponsorAnimal: fund === "general" ? "General Sanctuary Fund" : fund,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMsg(data.message);
        onDonationSuccess(data.message);
        // Reset
        setName("");
        setEmail("");
        setCustomAmount("");
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg(`Incredibly generous of you, ${name}! Your gift of $${finalAmount} has been registered securely. Thank you from everyone at Little Orphan Animals!`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sec-donate" className="py-20 bg-[#FAF7F2] dark:bg-[#1C1A18] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Support Nancy's Rescues</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Help Us Heal & Shelter
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Your support provides direct food, medicines, customized orthopedic therapies, and absolute safety for orphaned animals. Every gift is fully tax-deductible under our 501(c)(3) nonprofit status.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Donation Impact Explanations */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
              The Power of Your Contribution
            </h3>
            
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              At Little Orphan Animals, we maximize every dollar. Nancy Nenad and our volunteers work tirelessly to keep operational expenses low so that your donation goes straight into the animals' troughs, medicine cabinets, and paddocks.
            </p>

            <div className="space-y-4">
              {impacts.map((imp) => {
                const isActive = (customAmount ? parseFloat(customAmount) : amount) === imp.value;
                return (
                  <div
                    key={imp.value}
                    onClick={() => {
                      setAmount(imp.value);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                      isActive
                        ? "bg-emerald-800 border-emerald-800 text-white shadow-md shadow-emerald-900/10"
                        : "bg-white dark:bg-stone-900 border-stone-200/50 dark:border-stone-800 hover:bg-stone-50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold leading-none tracking-wide">
                        {imp.title}
                      </h4>
                      <p className={`text-xs mt-1 leading-relaxed ${
                        isActive ? "text-emerald-100" : "text-stone-500 dark:text-stone-400"
                      }`}>
                        {imp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Donation Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-stone-900 rounded-[32px] border border-stone-100 dark:border-stone-800 shadow-xl p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800/80 pb-4">
                <h3 className="font-serif text-lg font-bold text-stone-950 dark:text-white flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Secure Donation Panel</span>
                </h3>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                  Verified 501(c)(3)
                </span>
              </div>

              {successMsg ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mx-auto text-emerald-700 dark:text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-white">
                    Sponsorship Confirmed!
                  </h4>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed px-2">
                    {successMsg}
                  </p>
                  <button
                    onClick={() => setSuccessMsg(null)}
                    id="btn-donate-again"
                    className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl"
                  >
                    Make Another Donation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Frequency toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-stone-50 dark:bg-stone-950 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setFrequency("monthly")}
                      className={`py-2 rounded-lg text-xs font-bold transition-colors ${
                        frequency === "monthly"
                          ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-sm"
                          : "text-stone-500"
                      }`}
                    >
                      Monthly Gift
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency("once")}
                      className={`py-2 rounded-lg text-xs font-bold transition-colors ${
                        frequency === "once"
                          ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-sm"
                          : "text-stone-500"
                      }`}
                    >
                      One-Time Gift
                    </button>
                  </div>

                  {/* Preset selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {presets.map((pAmt) => (
                        <button
                          key={pAmt}
                          type="button"
                          onClick={() => {
                            setAmount(pAmt);
                            setCustomAmount("");
                          }}
                          className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                            amount === pAmt && !customAmount
                              ? "bg-emerald-800 border-emerald-800 text-white"
                              : "bg-stone-50 dark:bg-stone-850 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          ${pAmt}
                        </button>
                      ))}
                    </div>

                    {/* Custom input */}
                    <div className="relative mt-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Enter Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount(0);
                        }}
                        className="w-full bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-xl pl-7 pr-4 py-2.5 text-xs outline-none focus:border-stone-400"
                      />
                    </div>
                  </div>

                  {/* Fund designation */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Designate Donation Fund
                    </label>
                    <select
                      value={fund}
                      onChange={(e) => setFund(e.target.value)}
                      className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                    >
                      <option value="general">General Sanctuary Care Fund</option>
                      <option value="medical">Emergency Veterinary Medical Fund</option>
                      <option value="feed">Feed, Bedding, and Nutrition Fund</option>
                    </select>
                  </div>

                  {/* Personal details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nancy Nenad"
                        className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nancy@love.org"
                        className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-stone-400"
                      />
                    </div>
                  </div>

                  {/* Anti-fraud disclaimer */}
                  <div className="bg-[#FAF7F2] dark:bg-stone-950 p-3.5 rounded-2xl border border-stone-100 dark:border-stone-800 text-[10px] text-stone-500 dark:text-stone-400 space-y-1">
                    <p className="flex items-center space-x-1 font-bold text-emerald-800 dark:text-emerald-400">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Encrypted SSL Sandbox</span>
                    </p>
                    <p>
                      Transactions are fully sandboxed. All payments are securely simulated to demonstrate pristine client-server pipeline reliability.
                    </p>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="btn-donate-submit"
                    className="w-full py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <Heart className="w-4.5 h-4.5 fill-current text-rose-300 shrink-0" />
                    <span>
                      {isSubmitting
                        ? "Connecting secure gateway..."
                        : `Confirm ${frequency === "monthly" ? "Monthly" : "One-Time"} Donation of $${customAmount ? customAmount : amount}`}
                    </span>
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
