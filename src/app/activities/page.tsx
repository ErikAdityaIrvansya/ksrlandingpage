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
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />
      
      <div className="container-custom pt-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex px-5 py-2 rounded-full bg-brand/5 text-brand text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              Laporan & Dokumentasi
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter"
            >
              JEJAK <br />
              <span className="text-brand">KEMANUSIAAN.</span>
            </motion.h1>
            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
              Catatan perjalanan pengabdian kami dalam mewujudkan 
              masyarakat yang lebih sehat dan tanggap sejak 1989.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:mb-4">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 group-focus-within:text-brand transition-colors" />
              <input 
                type="text" 
                placeholder="Cari aksi nyata..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-8 py-5 rounded-[2rem] border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-4 focus:ring-brand/10 focus:border-brand/40 outline-none transition-all w-full sm:w-80 font-bold placeholder:opacity-40"
              />
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-[2rem] mb-20 overflow-x-auto no-scrollbar border border-slate-100 w-fit mx-auto lg:mx-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all",
                activeCategory === cat 
                  ? "bg-brand text-white shadow-xl shadow-brand/20 scale-105" 
                  : "text-slate-400 hover:text-brand hover:bg-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, idx) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-[3rem] overflow-hidden h-full flex flex-col border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden p-4">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-8 left-8">
                        <span className="px-5 py-2 rounded-xl bg-brand/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.1em]">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-10 pt-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                        <Calendar className="w-4 h-4 text-brand" />
                        {activity.date}
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-brand transition-colors leading-tight tracking-tight">
                        {activity.title}
                      </h3>
                      
                      <p className="text-slate-500 text-base leading-relaxed line-clamp-3 mb-10 font-medium whitespace-pre-line">
                        {activity.description}
                      </p>
                      
                      <div className="mt-auto pt-8 border-t border-slate-50">
                        <button className="flex items-center gap-3 text-[10px] font-black text-brand group/btn uppercase tracking-[0.3em]">
                          Detail Kegiatan
                          <ArrowUpRight className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-40 text-center glass rounded-[3rem] border-brand/10">
                <p className="text-2xl font-bold text-foreground/30 italic">Belum ada jejak yang ditemukan...</p>
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
