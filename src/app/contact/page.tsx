"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Navbar />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            >
              Hubungi <span className="text-brand">Kontak Kami</span>
            </motion.h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Ada pertanyaan atau ingin berkolaborasi? Kami siap mendengar dari Anda. 
              Gunakan formulir di bawah atau hubungi kami melalui media sosial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-10 space-y-10">
                <h3 className="text-2xl font-bold">Informasi Kontak</h3>
                
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Alamat Kantor</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      Gedung Ormawa Lt. 1, Universitas Merdeka Malang <br />
                      Jl. Terusan Raya Dieng No. 62-64, Pisang Candi, Malang
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telepon / WhatsApp</h4>
                    <p className="text-sm text-foreground/60">
                      +62 852 3664 2811 (Humas)
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">E-mail</h4>
                    <p className="text-sm text-foreground/60">
                      ksr@unmer.ac.id
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Jam Operasional</h4>
                    <p className="text-sm text-foreground/60">
                      Senin - Jumat: 08:00 - 16:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-10 md:p-12">
                <h3 className="text-2xl font-bold mb-8">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Nama</label>
                      <input 
                        type="text" 
                        placeholder="Nama lengkap Anda"
                        className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">E-mail</label>
                      <input 
                        type="email" 
                        placeholder="contoh@mail.com"
                        className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Subjek</label>
                    <input 
                      type="text" 
                      placeholder="Apa yang ingin Anda bicarakan?"
                      className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Pesan</label>
                    <textarea 
                      rows={6}
                      placeholder="Tuliskan pesan Anda di sini..."
                      className="w-full px-6 py-4 rounded-xl border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <button className="w-full py-5 bg-brand text-white rounded-xl font-bold text-lg hover:bg-brand-hover active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand/20">
                    Kirim Pesan <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative border dark:border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.139886326164!2d112.61439747587742!3d-7.984462692040954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882894541783d%3A0xc3b519c6fbce9c4e!2sUniversitas%20Merdeka%20Malang!5e0!3m2!1sid!2sid!4v1713091212345!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale dark:invert dark:opacity-80"
            />
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
