"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Loader2, Info, Users, Shield, Heart, Medal, GraduationCap, MapPin, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";


const requirements = [
  { icon: GraduationCap, text: "Mahasiswa aktif Universitas Merdeka Malang" },
  { icon: Heart, text: "Memiliki jiwa sosial dan kemanusiaan" },
  { icon: Zap, text: "Siap mengikuti pelatihan dan kegiatan" },
  { icon: Users, text: "Mampu bekerja dalam tim & disiplin" },
  { icon: Shield, text: "Sehat jasmani dan rohani" },
  { icon: Medal, text: "Bersedia mengikuti aturan organisasi" },
];

export default function JoinPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    motivation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulation delay for success feedback
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", address: "", motivation: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Terjadi kesalahan. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />

      <div className="container-custom pt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex p-5 rounded-[2rem] bg-brand/5 text-brand mb-4"
            >
              <Users className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter"
            >
              Gabung Dalam <br />
              <span className="text-brand">Langkah Nyata.</span>
            </motion.h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Kami mencari jiwa-jiwa muda yang berani berdedikasi dan ingin 
              menciptakan dampak nyata bagi sesama melalui kemanusiaan.
            </p>
          </div>

          {/* Requirements Visual Grid */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black tracking-tight">Syarat & Ketentuan</h2>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-white/10 mx-10 hidden md:block" />
              <span className="text-brand font-bold uppercase tracking-widest text-xs">Pendaftaran 2025</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {requirements.map((req, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                    <req.icon className="w-8 h-8" />
                  </div>
                  <p className="text-lg font-black text-slate-900 leading-relaxed">{req.text}</p>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Form Container */}
          <div className="relative">
            <div className="bg-slate-50 rounded-[4rem] p-10 md:p-20 relative overflow-hidden border border-slate-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Form Header Info */}
                <div className="lg:col-span-4 space-y-10">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">Formulir <br />Pendaftaran.</h2>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      Silakan isi data diri Anda dengan lengkap dan jujur. Tim kami akan segera 
                      meninjau setiap aplikasi yang masuk.
                    </p>
                  </div>

                  <div className="space-y-6 pt-10 border-t dark:border-white/5">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-brand group-hover:scale-110 transition-transform shadow-lg">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold opacity-70">Sekretariat KSR PMI UNMER Malang</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-brand group-hover:scale-110 transition-transform shadow-lg">
                        <Info className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold opacity-70">Pendaftaran ditutup 30 Nov 2025</span>
                    </div>
                  </div>
                </div>

                {/* Form Input Side */}
                <div className="lg:col-span-8">
                  {success ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center space-y-8 glass rounded-[3rem] border-green-500/20"
                    >
                      <div className="w-28 h-28 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/40 animate-bounce">
                        <CheckCircle2 className="w-14 h-14" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-4xl font-black tracking-tight">Pendaftaran Terkirim!</h3>
                        <p className="text-foreground/70 max-w-sm mx-auto text-lg font-medium">
                          Terima kasih telah mendaftar. Selamat bergabung dalam langkah kemanusiaan.
                        </p>
                      </div>
                      <button 
                        onClick={() => setSuccess(false)}
                        className="px-8 py-4 bg-brand text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-brand/20"
                      >
                        Kirim Formulir Lain
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Nama Lengkap</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-8 py-5 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none font-bold placeholder:opacity-30"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Alamat Email</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@unmer.ac.id"
                            className="w-full px-8 py-5 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none font-bold placeholder:opacity-30"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Nomor WhatsApp</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="081234567XXX"
                            className="w-full px-8 py-5 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none font-bold placeholder:opacity-30"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Domisili / Alamat</label>
                          <input
                            required
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Malang, Jawa Timur"
                            className="w-full px-8 py-5 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none font-bold placeholder:opacity-30"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Motivasi & Alasan Bergabung</label>
                        <textarea
                          required
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Jelaskan kontribusi apa yang ingin Anda berikan..."
                          className="w-full px-8 py-6 rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none resize-none font-bold placeholder:opacity-30"
                        />
                      </div>

                      <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-6 bg-brand text-white rounded-3xl font-black text-2xl hover:bg-brand-hover hover:shadow-brand/40 active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-brand/20 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-8 h-8 animate-spin" /> Verifikasi...
                          </>
                        ) : (
                          <>
                            Kirim Pendaftaran <Send className="w-6 h-6" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
