"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Target, Users, Award, Heart, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionWrapper from "@/components/SectionWrapper";


const visions = [
  "Menjadi unit kegiatan mahasiswa yang unggul dalam bidang kemanusiaan.",
  "Mencetak relawan yang cerdas, tanggap, dan berjiwa sosial tinggi.",
  "Membangun sinergi yang kuat dengan organisasi kemanusiaan lainnya.",
  "Memberikan kontribusi nyata bagi kesehatan dan keselamatan masyarakat."
];

const values = [
  { 
    title: "Kemanusiaan", 
    desc: "Memberikan bantuan kepada korban tanpa membeda-bedakan.",
    icon: Heart 
  },
  { 
    title: "Kemadirian", 
    desc: "Berdiri sendiri tanpa bergantung pada kepentingan politik atau tertentu.",
    icon: Zap 
  },
  { 
    title: "Kesukarelaan", 
    desc: "Bekerja tulus tanpa mengharapkan imbalan materi.",
    icon: Award 
  },
  { 
    title: "Kesatuan", 
    desc: "Satu wadah dalam pengabdian untuk masyarakat.",
    icon: Users 
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />

      {/* Header */}
      <section className="container-custom pt-20 pb-20 relative z-10">
        <div className="max-w-4xl space-y-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex px-5 py-2 rounded-full bg-brand/5 text-brand text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Sejarah & Dedikasi
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter"
          >
            PENGABDIAN <br />
            <span className="text-brand">KEMANUSIAAN.</span>
          </motion.h1>
          <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
            KSR PMI Unit Universitas Merdeka Malang adalah garda terdepan 
            relawan mahasiswa dalam misi bantuan kesehatan dan sosial sejak 1989.
          </p>
        </div>
      </section>


      {/* History Section */}
      <SectionWrapper bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white p-3 bg-white">
              <img 
                src="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.82787-15/619564292_18136600027494191_7635591159792821151_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MjE2MjE4MzQyNjY2MzI1OTczNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4ODEwLnNkci5DMyJ9&_nc_ohc=AX4zztIck3cQ7kNvwEK8kRc&_nc_oc=AdpqJr-rC14yCEQaHImbCC80j3eF05CaGSXgl1BRbdK9jAsD7iGoY5zwR8tREDpO8GmVmkyBjqv8RrlKXmScpfeH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsub8-1.fna&_nc_gid=7CuQaV00BgWHjeb-V0HOgQ&_nc_ss=7a32e&oh=00_Af3zv80WSv-nR0JDlcdGdQK2mVR8UZhB-XyCsrQ3nnhlyA&oe=69E514A6" 
                alt="Sejarah KSR PMI"
                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
               <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                  <History className="w-6 h-6" />
               </div>
               <div>
                  <div className="text-2xl font-black text-slate-900">1989</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Berdiri Resmi</div>
               </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">Pilar Sejarah Kami.</h2>
            <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
              <p>
                Didirikan dengan semangat kekeluargaan, KSR PMI Unit UNMER Malang 
                telah melewati berbagai fase perkembangan yang membentuk karakter relawan kami.
              </p>
              <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
                <p className="text-slate-700 italic relative z-10 leading-relaxed">
                  "Kami bukan hanya organisasi besar, tapi satu keluarga yang terikat 
                  oleh keinginan tulus untuk membantu tanpa pamrih."
                </p>
              </div>
              <p>
                Sejak awal, fokus utama kami adalah memberdayakan mahasiswa agar memiliki 
                kapasitas teknis dan mental yang tangguh dalam situasi darurat.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <section className="py-20 bg-neutral-50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="inline-flex p-4 rounded-3xl bg-brand/10 text-brand mb-4 shadow-xl">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-5xl font-black tracking-tight">Arah & Tujuan.</h2>
              <ul className="space-y-8">
                {visions.map((vision, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-brand text-white flex items-center justify-center shrink-0 mt-1 text-sm font-black shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <p className="text-xl text-foreground/70 font-bold leading-relaxed">{vision}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-16 relative overflow-hidden backdrop-blur-3xl gradient-border">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 blur-[100px] rounded-full" />
              <h2 className="text-4xl font-black mb-12 tracking-tight">Misi Strategis</h2>
              <div className="space-y-12">
                {[
                  { icon: Shield, title: "Responsif", text: "Cepat bertindak dalam keadaan darurat medis & bencana." },
                  { icon: Users, title: "Edukasi", text: "Mencetak relawan yang terampil dan bersertifikasi." },
                  { icon: Heart, title: "Empati", text: "Menjalin solidaritas tanpa batas untuk kemanusiaan." }
                ].map((misi, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-white dark:bg-white/5 shadow-2xl flex items-center justify-center text-brand border dark:border-white/10 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                      <misi.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 tracking-tight">{misi.title}</h4>
                      <p className="text-base text-foreground/50 font-medium leading-relaxed">
                        {misi.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <SectionWrapper bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">Pilar Moral</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">PRINSIP DASAR KAMI.</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Landasan moral yang menggerakkan setiap detak jantung relawan dalam setiap aksi kemanusiaan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 text-center hover:shadow-2xl hover:border-brand/20 transition-all duration-500 group"
            >
              <div className="inline-flex p-5 rounded-[2rem] bg-white text-brand mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                <val.icon className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">{val.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
