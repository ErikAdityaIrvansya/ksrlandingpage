"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { cn } from "@/lib/utils";

const categories = ["Semua", "Kegiatan", "Pelatihan", "Sosial", "Lainnya"];

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1547683908-21aa53841548?q=80&w=800", category: "Kegiatan", title: "Respons Banjir" },
  { id: 2, src: "https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?q=80&w=800", category: "Kegiatan", title: "Donor Darah" },
  { id: 3, src: "https://images.unsplash.com/photo-1576091160550-2173dad994e1?q=80&w=800", category: "Pelatihan", title: "First Aid Training" },
  { id: 4, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800", category: "Sosial", title: "Bakti Sosial" },
  { id: 5, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800", category: "Pelatihan", title: "Simulasi Gempa" },
  { id: 6, src: "https://images.unsplash.com/photo-1505751172107-1bc59f3cc929?q=80&w=800", category: "Lainnya", title: "Health Check" },
  { id: 7, src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800", category: "Kegiatan", title: "Posko Mudik" },
  { id: 8, src: "https://images.unsplash.com/photo-1516589174184-c68536585302?q=80&w=800", category: "Pelatihan", title: "Water Rescue" },
  { id: 9, src: "https://images.unsplash.com/photo-1574601242317-062e7039031c?q=80&w=800", category: "Sosial", title: "Sharing Happiness" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = images.filter(img => 
    activeCategory === "Semua" || img.category === activeCategory
  );

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 rounded-2xl bg-brand/10 text-brand mb-6"
          >
            <Camera className="w-6 h-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Galeri <span className="text-brand">Kemanusiaan</span>
          </motion.h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Momen-momen pengabdian dan kebersamaan kami dalam melayani sesama 
            di lingkup Universitas Merdeka Malang.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          <Filter className="w-5 h-5 text-foreground/40 mr-2 md:inline hidden" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-3 rounded-2xl text-sm font-bold transition-all",
                activeCategory === cat 
                  ? "bg-brand text-white shadow-xl shadow-brand/20 scale-105" 
                  : "bg-white dark:bg-white/5 text-foreground/60 border dark:border-white/10 hover:text-foreground hover:bg-neutral-50 dark:hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid - Masonry style (CSS columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(img)}
              >
                <div className="rounded-3xl overflow-hidden glass-card h-full">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 text-white">
                    <Maximize2 className="w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <p className="font-bold text-lg">{img.title}</p>
                      <p className="text-xs uppercase tracking-widest opacity-70">{img.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute bottom-6 left-6 text-white text-left">
                <p className="text-2xl font-black mb-1">{selectedImage.title}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-brand">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
