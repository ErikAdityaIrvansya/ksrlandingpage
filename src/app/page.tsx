"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import FloatingButtons from "@/components/FloatingButtons";
import { stats, latestActivities } from "@/data/mock";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Hero3D />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm border border-brand/20"
          >
            Bersama Untuk Kemanusiaan
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
          >
            Siap Mengabdi <br />
            <span className="text-gradient">untuk Kemanusiaan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            KSR PMI Unit Universitas Merdeka Malang hadir sebagai garda terdepan 
            dalam pelayanan kesehatan, penanggulangan bencana, dan pemberdayaan sosial.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/join"
              className="px-8 py-4 bg-brand text-white rounded-full font-bold text-lg hover:bg-brand-hover hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand/20 flex items-center gap-2"
            >
              Gabung Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/about"
              className="px-8 py-4 bg-white dark:bg-white/5 text-foreground rounded-full font-bold text-lg border dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/10 transition-all"
            >
              Pelajari Lebih Lanjut
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-foreground rounded-full" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="p-8 glass-card text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-brand/10 text-brand mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black mb-2">{stat.value}</h3>
                <p className="text-sm font-medium text-foreground/60 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activities Highlight */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Kegiatan <span className="text-brand">Terbaru</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Lihat bagaimana kami berkontribusi nyata dalam masyarakat melalui berbagai 
                aksi kemanusiaan dan pelayanan sosial.
              </p>
            </div>
            <Link 
              href="/activities"
              className="text-brand font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Lihat Semua Kegiatan <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {latestActivities.map((activity) => (
              <motion.div 
                key={activity.id}
                variants={fadeInUp}
                className="group relative h-[450px] overflow-hidden rounded-3xl"
              >
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand text-[10px] font-bold uppercase tracking-widest mb-4 self-start">
                    {activity.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {activity.description}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-widest mt-4 opacity-50">
                    {activity.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden bg-brand rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-brand/20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Siap Menjadi Bagian dari <br /> Relawan Kemanusiaan?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                Bergabunglah bersama kami dan kembangkan potensi diri Anda melalui 
                pengabdian sosial yang berdampak nyata.
              </p>
              <Link 
                href="/join"
                className="inline-flex px-10 py-5 bg-white text-brand rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Gabung Sekarang
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
