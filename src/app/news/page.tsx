"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Newspaper, Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const newsItems = [
  {
    id: 1,
    title: "Diklat Dasar KSR PMI UNMER Malang Angkatan Baru Resmi Dimulai",
    author: "Admin KSR",
    date: "14 Oct 2025",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800",
    excerpt: "Sebanyak 50 mahasiswa baru mengikuti pembukaan diklat dasar untuk menjadi relawan KSR PMI yang handal.",
  },
  {
    id: 2,
    title: "Tips Pertolongan Pertama Saat Terjadi Cedera Olahraga",
    author: "Divisi Kesehatan",
    date: "10 Oct 2025",
    category: "Edukasi",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    excerpt: "Langkah-langkah krusial yang harus dilakukan saat rekan Anda mengalami cedera di lapangan basket atau bola.",
  },
  {
    id: 3,
    title: "Kolaborasi KSR PMI dan Dinas Kesehatan Malang dalam Vaksinasi",
    author: "Humas KSR",
    date: "02 Oct 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1618961734760-466979ce35b0?q=80&w=800",
    excerpt: "Upaya bersama mempercepat jangkauan vaksinasi bagi masyarakat di sekitar kampus Universitas Merdeka.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 rounded-2xl bg-brand/10 text-brand mb-6"
          >
            <Newspaper className="w-6 h-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Berita & <span className="text-brand">Edukasi</span>
          </motion.h1>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Update terbaru mengenai kegiatan kami dan artikel edukasi kesehatan 
            untuk menambah wawasan Anda.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 group cursor-pointer"
        >
          <div className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200" 
                alt="Featured News"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-xl bg-brand text-white text-xs font-bold uppercase tracking-widest shadow-xl">
                  Featured Post
                </span>
              </div>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">
                <span className="text-brand">Layanan Masyarakat</span>
                <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                <span>Oct 15, 2025</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-brand transition-colors leading-tight">
                KSR PMI UNMER Malang Siagakan Posko Mudik di Terminal Arjosari
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 mb-auto">
                Menyambut musim libur, para relawan kami siap memberikan bantuan kesehatan 
                dan istirahat bagi para pemudik untuk memastikan perjalanan yang aman dan nyaman.
              </p>
              <div className="flex items-center justify-between pt-8 border-t dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-brand" />
                  </div>
                  <span className="text-sm font-bold">Humas UNMER</span>
                </div>
                <ArrowRight className="w-6 h-6 text-brand transform -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5" />
                      {news.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors leading-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2 mb-8">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground/60">{news.author}</span>
                    <button className="text-brand font-bold text-xs flex items-center gap-2 group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <button key={i} className={cn(
              "w-12 h-12 rounded-2xl font-bold transition-all",
              i === 1 ? "bg-brand text-white shadow-lg" : "bg-neutral-100 dark:bg-white/5 text-foreground/60 hover:bg-neutral-200"
            )}>
              {i}
            </button>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
