"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Loader2, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const requirements = [
  "Mahasiswa aktif Universitas Merdeka Malang",
  "Memiliki jiwa sosial dan kemanusiaan",
  "Siap mengikuti pelatihan dan kegiatan",
  "Disiplin, bertanggung jawab, dan mampu bekerja dalam tim",
  "Sehat jasmani dan rohani",
  "Bersedia mengikuti aturan organisasi",
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
      // Logic for EmailJS
      // Note: You need your Service ID, Template ID, and Public Key from EmailJS
      // For now, we simulate the success as requested since keys are not provided.
      
      /* 
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          motivation: formData.motivation,
          to_email: "erikadityairvansya@gmail.com",
        },
        "YOUR_PUBLIC_KEY"
      );
      */

      // Simulation delay
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
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            >
              Menjadi Bagian Dari <span className="text-brand">Keluarga Kami</span>
            </motion.h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Kesempatan terbuka lebar bagi mahasiswa UNMER Malang yang ingin 
              berkontribusi dalam aksi nyata kemanusiaan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Requirements Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass-card p-10 bg-brand/5 border-brand/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-brand rounded-lg">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Syarat & Ketentuan</h2>
                </div>
                
                <ul className="space-y-6">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                      <span className="text-foreground/80 font-medium leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 p-6 bg-white dark:bg-black/20 rounded-2xl border dark:border-white/5">
                  <p className="text-sm font-bold text-center italic">
                    "Kemanusiaan di atas segalanya."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-10 md:p-12">
                <h2 className="text-3xl font-bold mb-8">Formulir Pendaftaran</h2>
                
                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold">Pendaftaran berhasil!</h3>
                    <p className="text-foreground/70 max-w-sm mx-auto text-lg">
                      Data Anda telah kami terima. Kami akan menghubungi Anda melalui email atau WhatsApp.
                    </p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-brand font-bold hover:underline"
                    >
                      Kirim pendaftaran lain
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-1">Nama Lengkap</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Masukkan nama lengkap"
                          className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-1">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contoh@mail.com"
                          className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-1">Nomor HP / WhatsApp</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812..."
                        className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-1">Alamat</label>
                      <input
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Alamat lengkap saat ini"
                        className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-1">Motivasi Bergabung</label>
                      <textarea
                        required
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Apa yang mendorong Anda untuk bergabung?"
                        className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full py-5 bg-brand text-white rounded-xl font-black text-xl hover:bg-brand-hover active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand/20 disabled:opacity-70 disabled:active:scale-100"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" /> Mengirim...
                        </>
                      ) : (
                        <>
                          Daftar Sekarang <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-foreground/40 font-medium px-8 italic">
                      Dengan menekan tombol di atas, Anda menyatakan bahwa data yang diberikan adalah benar dan bersedia mengikuti prosedur pendaftaran KSR PMI UNMER Malang.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
