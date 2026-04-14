"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Target, Users, Award, Heart, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          >
            Tentang <span className="text-brand">KSR PMI</span> <br />
            UNMER Malang
          </motion.h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Korps Sukarela Palang Merah Indonesia (KSR PMI) Unit Universitas Merdeka Malang 
            adalah wadah bagi mahasiswa untuk mendedikasikan diri dalam misi kemanusiaan.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200" 
                alt="Sejarah KSR PMI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <History className="w-6 h-6 text-brand" />
                <span className="font-bold">Dedikasi Puluhan Tahun</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-black mb-6">Sejarah Singkat</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Didirikan dengan semangat kekeluargaan dan kemanusiaan, KSR PMI Unit UNMER Malang 
                  telah melewati berbagai fase perkembangan sejak awal pembentukannya. 
                  Berfokus pada pengembangan kapasitas relawan mahasiswa.
                </p>
                <p>
                  Selama bertahun-tahun, kami telah aktif dalam berbagai operasi penanggulangan bencana, 
                  layanan kesehatan rutin, hingga program pengembangan masyarakat di wilayah Malang dan sekitarnya.
                </p>
                <p>
                  Kami terus berinovasi dalam metode pelatihan dan pelayanan untuk memastikan 
                  setiap relawan siap diterjunkan dalam kondisi apapun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-flex p-3 rounded-2xl bg-brand/10 text-brand mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black">Visi Kami</h2>
              <ul className="space-y-6">
                {visions.map((vision, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-1 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-foreground/80 font-medium leading-relaxed">{vision}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-12 bg-neutral-50 dark:bg-white/5 border-none shadow-none">
              <h2 className="text-3xl font-bold mb-10">Misi Organisasi</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-sm flex items-center justify-center">
                    <Shield className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Responsif & Tanggap</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      Cepat dalam bertindak saat terjadi keadaan darurat bencana maupun medis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-sm flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Pemberdayaan Mahasiswa</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      Mengembangkan soft-skills dan hard-skills mahasiswa dalam bidang kemanusiaan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-sm flex items-center justify-center">
                    <Heart className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Kolaborasi Sosial</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      Menjalin kerjasama yang erat dengan masyarakat dan lembaga pemerintah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6">Nilai-Nilai Dasar</h2>
            <p className="text-white/60">
              Prinsip utama yang menjadi landasan setiap langkah kami dalam mengabdi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors group"
              >
                <div className="inline-flex p-4 rounded-2xl bg-brand/20 text-brand mb-6 group-hover:scale-110 transition-transform">
                  <val.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
