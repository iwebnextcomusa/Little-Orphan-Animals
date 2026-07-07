import React, { useState, useRef } from "react";
import { Heart, ArrowRight, ShieldCheck, Sparkles, Sprout, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onMeetRescues: () => void;
  onDonateClick: () => void;
}

export default function HeroSection({ onMeetRescues, onDonateClick }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration && video.currentTime >= video.duration - 1) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden isolate">
      {/* Background Sanctuary Video and Fallback Gradient */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-gradient-to-br from-[#FAF6EE] via-[#F4EFE6] to-[#EAE3D5] dark:from-[#1E1C1A] dark:via-[#191715] dark:to-[#12110F]">
        <video
          ref={videoRef}
          src="https://ccasobqyyem16ojh.public.blob.vercel-storage.com/Little%20Orphan%20Animals.mp4"
          autoPlay
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover object-center opacity-85 dark:opacity-40 transition-opacity duration-1000 ease-out"
        />
        {/* Soft elegant vignette overlay for contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAE3D5]/40 via-transparent to-[#FAF6EE]/30 dark:from-[#12110F]/60 dark:via-transparent dark:to-[#1E1C1A]/50" />
      </div>

      {/* Background Graphic Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-950/5 rounded-full filter blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/30 dark:bg-amber-950/40 rounded-full filter blur-3xl opacity-50 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100/90 dark:bg-emerald-950/60 backdrop-blur-sm text-emerald-800 dark:text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>A Safe Haven for Overlooked Souls</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-950 dark:text-white leading-tight tracking-tight max-w-3xl">
            Giving Forgotten Animals a <span className="text-emerald-800 dark:text-emerald-400 italic">Lifelong Sanctuary</span> of Dignity
          </h1>

          <p className="text-base sm:text-lg text-stone-900 dark:text-stone-100 max-w-2xl mx-auto leading-relaxed font-sans font-medium bg-white/30 dark:bg-stone-950/20 px-4 py-2 rounded-2xl backdrop-blur-[2px]">
            Founded by <strong>Nancy Nenad</strong>, Little Orphan Animals provides safe, permanent sanctuary, professional medical treatment, nutritious meals, and abundant love to abandoned, abused, and disabled animals who have nowhere else to turn.
          </p>

          {/* Quick trust metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-stone-800 dark:text-stone-200 py-2">
            <span className="flex items-center space-x-1.5 bg-white/50 dark:bg-stone-950/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>501(c)(3) Non-Profit Sanctuary</span>
            </span>
            <span className="hidden sm:inline text-stone-400 dark:text-stone-600">|</span>
            <span className="flex items-center space-x-1.5 bg-white/50 dark:bg-stone-950/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Heart className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Lifelong Care Commitment</span>
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto">
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
      </div>

      {/* Floating Audio Playback Controls */}
      <div className="absolute bottom-6 right-6 z-10">
        <button
          onClick={toggleMute}
          id="btn-mute-toggle"
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/80 hover:bg-white dark:bg-stone-900/80 dark:hover:bg-stone-900 text-stone-850 dark:text-stone-150 border border-stone-200/60 dark:border-stone-800/60 shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs font-semibold"
          title={isMuted ? "Unmute sanctuary video" : "Mute sanctuary video"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
              <span>Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-800 dark:text-emerald-400 animate-pulse" />
              <span>Mute Video</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
