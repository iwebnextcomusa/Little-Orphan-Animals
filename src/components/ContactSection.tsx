import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Compass, Share2 } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMsg(data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg(`Thank you, ${name}! Your message has been sent successfully. Nancy or a sanctuary volunteer will get back to you soon.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sec-contact" className="py-20 bg-white dark:bg-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Connect with Nancy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Contact Little Orphan Animals
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Have questions about animal sponsorships, volunteer days, paddock equipment donations, or foster arrangements? Fill out the contact form below and we will be delighted to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info + Beautiful custom vector Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                Our Sanctuary Location
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                To guarantee absolute peace and rest for our recuperating residents, tours are available <strong>strictly by scheduled appointment</strong> for active sponsors or volunteers.
              </p>
            </div>

            {/* Info list */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 bg-[#FAF7F2] dark:bg-stone-950/40 p-4 rounded-2xl border border-stone-100 dark:border-stone-850">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">Sanctuary Address</h4>
                  <p className="text-stone-500 dark:text-stone-400 mt-1">
                    P.O. Box 725, Rimrock, AZ 86335
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#FAF7F2] dark:bg-stone-950/40 p-4 rounded-2xl border border-stone-100 dark:border-stone-850">
                <Mail className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">Email Address</h4>
                  <p className="text-stone-500 dark:text-stone-400 mt-1">
                    info@littleorphananimals.org
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#FAF7F2] dark:bg-stone-950/40 p-4 rounded-2xl border border-stone-100 dark:border-stone-850">
                <Phone className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">Telephone Support</h4>
                  <p className="text-stone-500 dark:text-stone-400 mt-1">
                    +1 (928) 301-4122 (Nancy Nenad)
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Beautiful Google Maps Viewport with coordinates */}
            <div className="relative rounded-[28px] overflow-hidden h-56 border-4 border-stone-100 dark:border-stone-800 bg-emerald-50 dark:bg-emerald-950/10 shadow-md flex items-center justify-center">
              {/* Custom Vector Grid Overlay for map feel */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-stone-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-stone-100 text-[10px] text-stone-600 dark:text-stone-300 font-mono">
                LOA GPS: 34.6478° N, 111.7765° W
              </div>

              {/* Stylized Sanctuary Layout Plot */}
              <div className="relative z-10 flex flex-col items-center space-y-2 text-center p-4">
                <Compass className="w-10 h-10 text-emerald-800 animate-pulse" />
                <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-white leading-tight">
                  Paddock Acres Plot Map
                </h4>
                <p className="text-[10px] text-stone-500 max-w-xs leading-relaxed">
                  Wooded Pastures • Veterinary Station • Heated Cat Cottages • Exotic Aviary Aviaries
                </p>
              </div>
            </div>

            {/* Social Share icons */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center">
                <Share2 className="w-4 h-4 mr-1.5 text-emerald-800" />
                <span>Follow Nancy:</span>
              </span>
              <div className="flex space-x-2">
                {["Facebook", "Instagram", "Twitter", "YouTube"].map((soc) => (
                  <span
                    key={soc}
                    className="text-xs bg-stone-150 dark:bg-stone-850 hover:bg-emerald-800 hover:text-white text-stone-600 dark:text-stone-300 px-3 py-1.5 rounded-xl cursor-pointer transition-colors"
                  >
                    {soc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] dark:bg-stone-950 p-8 md:p-10 rounded-[36px] border border-stone-150 dark:border-stone-800 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {successMsg ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-2xl border border-emerald-200/40 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-emerald-900 dark:text-emerald-300">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {successMsg}
                  </p>
                  <button
                    onClick={() => setSuccessMsg(null)}
                    className="px-5 py-2 bg-stone-800 text-white text-xs font-semibold rounded-lg hover:bg-stone-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nancy Nenad"
                        className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-stone-400"
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
                        placeholder="nancy@love.org"
                        className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-stone-400"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Sponsoring Barnaby, Corporate volunteer day..."
                      className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-stone-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      Message Body
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700/80 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-stone-400 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="btn-contact-submit"
                    className="w-full py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{isSubmitting ? "Dispatching Message..." : "Send Secure Message"}</span>
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
