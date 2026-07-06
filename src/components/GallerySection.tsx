import { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { Camera, Image as ImageIcon, Sparkles, Eye } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filterTabs = [
    { id: "all", label: "All Photos" },
    { id: "happy", label: "Happy Animals" },
    { id: "sanctuary", label: "Sanctuary Life" },
    { id: "volunteers", label: "Volunteers" },
    { id: "events", label: "Events" },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="sec-gallery" className="py-20 bg-[#FAF7F2] dark:bg-[#1C1A18] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Visual Glimpse</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
            Sanctuary Life Gallery
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Take a visual tour around Nancy Nenad's 15-acre sanctuary pastures. Observe our special-needs rescues, our heated cat cottages, and the incredible, caring hands of our local community volunteers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              id={`btn-gallery-${tab.id}`}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-emerald-800 text-white shadow-md"
                  : "bg-white dark:bg-stone-850 text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-850 hover:bg-stone-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.url)}
              className="group relative bg-white dark:bg-stone-900 rounded-[24px] overflow-hidden border border-stone-100 dark:border-stone-800/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay with Hover state */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <div className="w-10 h-10 bg-white/25 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white dark:bg-stone-900">
                <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed truncate">
                  {item.caption}
                </p>
                <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold uppercase tracking-wider block mt-1">
                  #{item.category.replace("_", " ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Popup */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged sanctuary gallery item"
                className="max-w-full max-h-[85vh] object-contain block mx-auto rounded-3xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
