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
                    src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/482343501_4014804312135620_1445157315286566506_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MCMDJ4UWX1YQ7kNvwGP6PLE&_nc_oc=Adrg6TYmEYeESJNyPd8JUDcVKTe4SOWZ-sSu-6YNOM6Q3X8uxtQpWyv-k_yvc5lI436nMdQOPLNTYdBd-BRMI9Nn&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=OrLugxjyLUvUMJ8pgS7mRQ&_nc_ss=7a3a8&oh=00_Af37cUCBqlIG6-pdIAd04N6eMZaHBZyHlRZZPWUjd8X4dQ&oe=69E5121A"
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
                src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/465181581_3909865812629471_6380036382251982104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=S1xbMQKCEpQQ7kNvwFzv-k9&_nc_oc=Adr1yfWFnyKRKA3dozfSAvpBIIrY6lQyAIeDY2OHgWFLmXTcwpcOlub_ysrVHTC9q1nyZ6pnyukYACSVzhQauqAU&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=cNr5zOXxhbkNXtkL47zRSA&_nc_ss=7a3a8&oh=00_Af176FOEaoRontRLxYULVKHQT36bnqv7W1Gd6UvWCC4otA&oe=69E50501" 
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
                  src="images/Timkes_PKKMB.jpg" 
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
            "https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/482236509_4014803822135669_8366396674202130140_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wVWJGzNc9yYQ7kNvwEoylho&_nc_oc=AdrrNZbBgkMWPrtc27iJusn35XcQa7cECGWBBbPRCxn2v5ZRWuBoTGTXZDquLde_1Vy1QgjPBSbCUP6_PvietY-q&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=WWjuu3R-sg_QQuaGyOI6bg&_nc_ss=7a3a8&oh=00_Af2z9IOOZN87wNo3gNTOWY-5uF_f2eSVbD58QrZdrXy-VA&oe=69E525EF",
            "https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/483063494_4014803845469000_557925570120599809_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IyLgw1BWOX0Q7kNvwHKldlZ&_nc_oc=AdrjIPfOW-l2_dOkgmZNSXU4eeCUCWc5cnAeQwvEQxZkAWKrsB2TikuzZ4F8flW6k5txvxYka332E7uhqT3ZmDCf&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=smowR4aMQWHp-2N-f3zopw&_nc_ss=7a3a8&oh=00_Af0PL7pqu9DIRcltMPF2WpdbBHNdp1wE6oc3vf33qGH71w&oe=69E512DA",
            "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.82787-15/649195067_17902858914219913_2824847303650435440_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzM4ODg4ODI2MjQzMTg0NDY1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4ODY0LnNkci5DMyJ9&_nc_ohc=ws5U2Cj72GUQ7kNvwHFMz7x&_nc_oc=Adow3fbWzfZ3jlmyrW1_eeT1ul04Cg9RXxZPPeZdxpQ5nW4ASIfBWHJlQGOnMf_i_JzjyGZzRF6Fm0Vs74NUFx6G&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsub8-1.fna&_nc_gid=Ial93NrJjyYe1TNtwpqA_w&_nc_ss=7a32e&oh=00_Af0MNcV2vJr35T-7TuLO_-nmtYTwHmdBxH5UdXFxPD6YBA&oe=69E507FA",
            "https://instagram.fsub8-2.fna.fbcdn.net/v/t51.75761-15/508679808_18397852468117232_3376911629554104198_n.webp?_nc_cat=109&ig_cache_key=MzY1NzY4MzM0OTg3NzQ4NzE3Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=rejUuVck-34Q7kNvwH2Sk6z&_nc_oc=Adoa0YqvtXw1PVvLp9nOgdlvGfBBfo66V0JT4uGZ5rf8KohjCX9TNxc1U76oQbwWlt6LCx1nfD9JN7uf2EcjcZyC&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsub8-2.fna&_nc_gid=Hm5LL5CGyRlIMsQnu7xgdg&_nc_ss=7a32e&oh=00_Af32K98IBbzb66fSZfIioZpVSxxQDHyob5piq-W6VYLa1A&oe=69E50283",
            "https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/484562360_4015547498727968_8833552859678897078_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=doyk3LFUDvEQ7kNvwFgpZdS&_nc_oc=AdqJr8DEVX0aUfcd5N4E4Z1eWdvIK4_R0qyTtvfED3B12C1ZgbOcT0D6wNJa-szPVgyqSZ5ftLXP0NG6p25ddtkq&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=SYGS2AJhVVEuqjUq382Xwg&_nc_ss=7a3a8&oh=00_Af1c5DsD5Z3ERtnaf6vA0BW72wE2Fwr96_jmJ-kvGj_Xig&oe=69E526B1",
            "https://scontent.fsub8-2.fna.fbcdn.net/v/t39.30808-6/481058323_4008773726072012_13878386228224799_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8bywtmpK2UcQ7kNvwHh16FJ&_nc_oc=Adow1g5e2KIFuR0X_s26wkcRpbPtmKFNKV0aIPtXdTPRGKVs8fg_K9xG7YBjWqHyAFW8pk9fc_Hn-U0S207wrH_r&_nc_zt=23&_nc_ht=scontent.fsub8-2.fna&_nc_gid=GjEqNzPSeboeL5c-xDUpnQ&_nc_ss=7a3a8&oh=00_Af3amMl46OobtM96j6o0RjYIldG2fQfHXyI6_jLYwSqw3Q&oe=69E52EAA",
            "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.82787-15/660876599_18366035836201498_8636390853152047472_n.webp?stp=dst-webp_s1080x1080&_nc_cat=110&ig_cache_key=MzQ0NzMzMTI5MTk4OTgxNTQ5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMyJ9&_nc_ohc=z2yyA1WDsPoQ7kNvwESCkjj&_nc_oc=AdpbXRqJ0o90hXgfGTZnDDLSnR_L0ljeyV4ujbf6pDipH2j6Pst9abgdlpddJ7NVLRoqe3ySk4_zr5ZZvoDHD6Vy&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsub8-1.fna&_nc_gid=gVswk-Am0xnEajE3haH95A&_nc_ss=7a32e&oh=00_Af2Bj_r8SZPOcxTxYBhKld5VYgAAUlEug1P79j_gBULUzA&oe=69E50D7A",
            "https://instagram.fsub8-2.fna.fbcdn.net/v/t51.82787-15/669744018_18141060706503196_7569052475219464367_n.webp?stp=dst-webp_s1080x1080&_nc_cat=109&ig_cache_key=MzQ1NzAyNDE5MTY1MTE5MTM2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTY3LnNkci5DMyJ9&_nc_ohc=q2ZNueSuSqsQ7kNvwFZkK5g&_nc_oc=AdrNw0YF49iQM2kAwJuSC9px_Ap_qd882c0XLiSiDifXuAIoNMp7aVJvB7aLeg6-sSufseAUAtX9jPJArDjJ8p0M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsub8-2.fna&_nc_gid=gVswk-Am0xnEajE3haH95A&_nc_ss=7a32e&oh=00_Af2aL99UU5tMt4qNx3leLknjPK__mdDfyomt93_ajqIwxw&oe=69E4F48D",
            "images/water_rescue1.jpeg",

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
