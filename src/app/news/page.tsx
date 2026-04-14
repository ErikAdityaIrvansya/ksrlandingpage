"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Newspaper, Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { cn } from "@/lib/utils";


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
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />

      <div className="container-custom pt-20 relative z-10">
        {/* Header */}
        <div className="mb-24 space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-5 rounded-[2rem] bg-brand/5 text-brand mb-4"
          >
            <Newspaper className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter"
          >
            WARTA & <br />
            <span className="text-brand">EDUKASI.</span>
          </motion.h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Update terbaru mengenai kegiatan kemanusiaan kami dan artikel 
            kesehatan informatif untuk masyarakat luas.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 group cursor-pointer"
        >
          <div className="bg-white rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden p-6">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200" 
                alt="Featured News"
                className="w-full h-full object-cover rounded-[3rem] transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-12 left-12">
                <span className="px-6 py-3 rounded-2xl bg-brand text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                  Headline News
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center bg-slate-50">
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                <span className="text-brand">Layanan Masyarakat</span>
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                <span>15 Okt, 2025</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 group-hover:text-brand transition-colors leading-[1.1] tracking-tighter">
                Posko Mudik KSR PMI UNMER Malang Siaga 24 Jam.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                Komitmen kami memberikan bantuan kesehatan utama bagi para pemudik untuk memastikan 
                perjalanan yang aman dan nyaman tahun ini.
              </p>
              <div className="flex items-center justify-between pt-10 border-t border-slate-200 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                    <User className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest leading-none mb-1 text-slate-400">Penulis</p>
                    <p className="text-sm font-black text-slate-900">Admin Humas</p>
                  </div>
                </div>
                <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center text-white shadow-xl shadow-brand/30 transform transition-transform duration-500 group-hover:rotate-12">
                  <ArrowRight className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-[3rem] overflow-hidden h-full flex flex-col border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden p-4">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.1em] text-slate-900 shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 pt-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                    <Calendar className="w-4 h-4 text-brand" />
                    {news.date}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-brand transition-colors leading-tight tracking-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-slate-500 text-base leading-relaxed line-clamp-2 mb-10 font-medium h-12 overflow-hidden">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand/5 flex items-center justify-center">
                        <User className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{news.author}</span>
                    </div>
                    <button className="text-brand font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                      Baca Seluknya
                      <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-24 flex justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <button key={i} className={cn(
              "w-16 h-16 rounded-[1.5rem] font-black text-lg transition-all border shadow-sm",
              i === 1 
                ? "bg-brand text-white shadow-brand/30 scale-110 border-brand" 
                : "bg-white text-slate-400 border-slate-100 hover:border-brand/40 hover:text-brand"
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
