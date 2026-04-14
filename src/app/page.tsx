"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Zap, ChevronRight, BookOpen, HandHelping, Landmark, Ambulance } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import SectionWrapper from "@/components/SectionWrapper";
import { stats, latestActivities, values } from "@/data/mock";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
        {/* Clean Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[10rem] hidden lg:block" />
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>

        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Column: Content */}
            <div className="lg:w-1/2 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
                Relawan PMI UNMER Malang
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight"
              >
                Mengabdi Untuk <br />
                <span className="text-brand">Kemanusiaan.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
              >
                Wadah pengabdian mahasiswa Universitas Merdeka Malang yang berdedikasi tinggi 
                dalam pelayanan sosial dan penanggulangan bencana di Indonesia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-5 pt-4"
              >
                <Link
                  href="/join"
                  className="px-10 py-5 bg-brand text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-brand/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  Gabung Sekarang <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/activities"
                  className="px-10 py-5 bg-slate-100 text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                  Lihat Kegiatan
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100">
                <div className="aspect-[4/5] overflow-hidden rounded-[3.2rem]">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200"
                    alt="KSR PMI Activity"
                    className="w-full h-full object-cover transition-transform duration-[2s]"
                  />
                </div>
                
                {/* Floating Badge - Official Style */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-8 -left-8 bg-white p-7 rounded-[2.5rem] shadow-2xl border border-slate-100 flex items-center gap-5"
                >
                  <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20">
                    <Heart className="w-7 h-7 fill-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 tracking-tighter">100%</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Kepedulian</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block opacity-30">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper id="about" bgColor="white" withGrid>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd837c92edb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Tentang KSR PMI UNMER" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-slate-100 rounded-[3rem] -z-10" />
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-brand font-black uppercase tracking-[0.3em] text-xs">Siapa Kami</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Membangun Jiwa Relawan <br />
                <span className="text-brand">Muda yang Tangguh.</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Korps Sukarela (KSR) PMI Unit Universitas Merdeka Malang adalah organisasi 
              kemahasiswaan yang bergerak di bidang kemanusiaan. Kami melatih mahasiwa 
              menjadi relawan yang siap diterjunkan dalam berbagai situasi darurat 
              maupun pengabdian masyarakat.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {values.slice(0, 2).map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-brand/5 rounded-2xl flex items-center justify-center text-brand">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-brand font-black uppercase tracking-widest text-xs hover:gap-4 transition-all pt-4"
            >
              Selengkapnya Tentang Kami <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Statistics Section */}
      <SectionWrapper bgColor="gray">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex p-6 rounded-[2rem] bg-white text-brand mb-8 shadow-sm group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 ring-1 ring-slate-100">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 text-slate-900 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Value Proposition */}
      <section className="py-24 relative bg-white">
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Visual Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white p-3 bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200" 
                  alt="Relawan KSR" 
                  className="w-full h-[600px] object-cover rounded-[3.5rem]"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-16 -right-16 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center text-white shadow-xl shadow-brand/40">
                    <Heart className="w-8 h-8 fill-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl leading-tight text-slate-900">Official <br />Volunteers</h4>
                  </div>
                </div>
                <p className="text-[10px] font-black text-slate-400 leading-relaxed uppercase tracking-[0.2em]">Terakreditasi Sejak 1989</p>
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-brand font-black uppercase tracking-[0.3em] text-sm block"
                >
                  Our Core Purpose
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
                  MENGABDI DENGAN <br />
                  <span className="text-brand">KETULUSAN HATI.</span>
                </h2>
                <p className="text-foreground/70 text-xl leading-relaxed max-w-xl">
                  KSR PMI UNMER adalah rumah bagi mereka yang percaya bahwa pertolongan 
                  terbaik datang dari hati yang tulus dan tangan yang terlatih.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Shield, title: "Siaga Bencana", desc: "Respons cepat & penanggulangan bencana profesional." },
                  { icon: Zap, title: "Layanan Medis", desc: "Tim pertolongan pertama tersertifikasi nasional." },
                  { icon: Heart, title: "Bakti Sosial", desc: "Misi sosial berkelanjutan untuk masyarakat." },
                  { icon: Users, title: "Sinergi", desc: "Kolaborasi luas dengan PMI & instansi terkait." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-3xl bg-neutral-50 dark:bg-white/5 border dark:border-white/10 hover:border-brand/30 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black p-3 mb-6 shadow-xl group-hover:scale-110 transition-transform">
                      <item.icon className="w-full h-full text-brand" />
                    </div>
                    <h4 className="font-black text-xl mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="activities" bgColor="gray">
        <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-slate-200 border border-slate-50 relative overflow-hidden">
          {/* Subtle Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 -z-10 rounded-bl-[10rem]" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
            <div className="max-w-2xl space-y-3">
              <span className="text-brand font-black uppercase tracking-[0.3em] text-xs">Kegiatan Kami</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                Aksi Nyata <br />
                <span className="text-brand">Kemanusiaan.</span>
              </h2>
            </div>
            <Link 
              href="/activities"
              className="group flex items-center gap-3 py-5 px-10 rounded-2xl bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-brand hover:text-white transition-all duration-500 shadow-xl shadow-slate-200/50"
            >
              Lihat Semua <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {latestActivities.map((activity, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2.5 rounded-xl bg-brand/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{activity.date}</div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand transition-colors leading-tight">
                    {activity.title}
                  </h3>
                  <p className="text-base text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Documentation Section */}
      <SectionWrapper bgColor="gray">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">Dokumentasi Aksi</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Galeri Kegiatan</h2>
          <p className="text-slate-500 font-medium">Rekaman jejak pengabdian relawan dalam misi kemanusiaan.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
            "https://images.unsplash.com/photo-1559027615-cd837c92edb0?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1547683908-21aa53841548?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1576091160550-2173dad994e1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1469571486020-0a9fd217de9a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?auto=format&fit=crop&q=80&w=800",
          ].map((url, i) => (
            <div key={i} className={cn(
              "relative rounded-3xl overflow-hidden shadow-lg aspect-square group",
              i % 3 === 0 ? "md:col-span-1 md:row-span-1" : ""
            )}>
              <img src={url} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand">
                  <ArrowRight className="w-6 h-6 -rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Join CTA Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container-custom">
          <div className="relative rounded-[4rem] bg-brand p-10 md:p-20 text-center text-white overflow-hidden shadow-2xl shadow-brand/30">
            {/* Particles/Grids */}
            <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 space-y-10">
              <span className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Siap Untuk Melayani?</span>
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Jadilah Bagian Dari <br />
                <span className="opacity-60 italic">Perubahan Nyata.</span>
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
                Pintu kami selalu terbuka untuk mereka yang memiliki hati tulus 
                dan semangat tinggi bagi kemanusiaan.
              </p>
              <div className="pt-6">
                <Link 
                  href="/join"
                  className="inline-flex px-14 py-6 bg-white text-brand rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/10"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
