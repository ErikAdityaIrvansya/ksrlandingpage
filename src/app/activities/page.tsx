"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { cn } from "@/lib/utils";

const categories = ["Semua", "Bencana", "Sosial", "Kesehatan", "Pelatihan"];

const activities = [
  {
    id: 1,
    title: "Tanggap Darurat Banjir Malang",
    category: "Bencana",
    date: "12 Oct 2025",
    image: "https://images.unsplash.com/photo-1547683908-21aa53841548?auto=format&fit=crop&q=80&w=800",
    description: "Pemberian bantuan logistik dan evakuasi warga terdampak banjir di wilayah Malang Selatan.",
  },
  {
    id: 2,
    title: "Donor Darah Rutin Ormawa",
    category: "Kesehatan",
    date: "05 Sept 2025",
    image: "https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?auto=format&fit=crop&q=80&w=800",
    description: "Kegiatan donor darah rutin bekerjasama dengan UDD PMI Kota Malang untuk memenuhi stok darah.",
  },
  {
    id: 3,
    title: "Pelatihan Pertolongan Pertama",
    category: "Pelatihan",
    date: "15 Aug 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad994e1?auto=format&fit=crop&q=80&w=800",
    description: "Pelatihan dasar pertolongan pertama bagi mahasiswa baru sebagai pembekalan jiwa kemanusiaan.",
  },
  {
    id: 4,
    title: "Bakti Sosial Panti Asuhan",
    category: "Sosial",
    date: "20 July 2025",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    description: "Kunjungan dan pemberian bantuan alat tulis serta sembako ke Panti Asuhan di sawojajar.",
  },
  {
    id: 5,
    title: "Simulasi Evakuasi Gempa",
    category: "Pelatihan",
    date: "10 June 2025",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    description: "Kegiatan edukasi dan latihan evakuasi mandiri bagi mahasiswa dan dosen di area kampus.",
  },
  {
    id: 6,
    title: "Layanan Kesehatan CFD",
    category: "Kesehatan",
    date: "28 May 2025",
    image: "https://images.unsplash.com/photo-1505751172107-1bc59f3cc929?auto=format&fit=crop&q=80&w=800",
    description: "Pengecekan tensi dan gula darah gratis bagi pengunjung Car Free Day Jalan Ijen.",
  },
];

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = activeCategory === "Semua" || activity.category === activeCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
            >
              Kegiatan <span className="text-brand">& Aksi</span>
            </motion.h1>
            <p className="text-foreground/70 text-lg">
              Kumpulan aksi nyata yang telah kami lakukan untuk mewujudkan 
              masyarakat yang lebih sehat dan tanggap.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input 
                type="text" 
                placeholder="Cari kegiatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all w-full sm:w-64"
              />
            </div>
            <div className="flex items-center gap-2 p-1 bg-neutral-100 dark:bg-white/5 rounded-2xl overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all",
                    activeCategory === cat 
                      ? "bg-brand text-white shadow-lg shadow-brand/20" 
                      : "text-foreground/60 hover:text-foreground hover:bg-neutral-200 dark:hover:bg-white/10"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5" />
                          {activity.category}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      
                      <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3 mb-8">
                        {activity.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t dark:border-white/5">
                        <button className="flex items-center gap-2 text-sm font-bold text-brand group/btn">
                          Baca Selengkapnya
                          <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 text-center">
                <p className="text-xl text-foreground/40 italic">Tidak ada kegiatan yang ditemukan.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
