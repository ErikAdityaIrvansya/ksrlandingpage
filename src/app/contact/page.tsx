"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";



export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <Navbar />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center pt-20 mb-16 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex p-5 rounded-[2rem] bg-brand/5 text-brand mb-4"
            >
              <Globe className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter"
            >
              KONEKSI <br />
              <span className="text-brand">KEMANUSIAAN.</span>
            </motion.h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Ada pertanyaan? Ingin berkolaboras? Atau sekadar menyapa? 
              Kami siap mendengar dari Anda secara profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-white rounded-[3rem] p-12 space-y-12 border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Mail className="w-32 h-32 text-brand" />
                </div>
                
                <h3 className="text-3xl font-black tracking-tight">Informasi Jalur.</h3>
                
                <div className="space-y-10 relative z-10">
                  <div className="flex gap-8 group/item">
                    <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-brand border border-slate-100 group-hover/item:bg-brand group-hover/item:text-white transition-all duration-500 shadow-sm">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 tracking-tight">HQ Office</h4>
                      <p className="text-base text-foreground/50 font-medium leading-relaxed">
                        Gedung Ormawa Lt. 1, Universitas Merdeka Malang <br />
                        Kec. Sukun, Kota Malang
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8 group/item">
                    <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-brand border border-slate-100 group-hover/item:bg-brand group-hover/item:text-white transition-all duration-500 shadow-sm">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 tracking-tight">Direct Line</h4>
                      <p className="text-base text-foreground/60 font-bold">
                        +62 852 3664 2811
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8 group/item">
                    <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-brand border border-slate-100 group-hover/item:bg-brand group-hover/item:text-white transition-all duration-500 shadow-sm">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 tracking-tight">Service Hours</h4>
                      <p className="text-base text-foreground/50 font-medium">
                        Senin - Jumat: 08:00 - 16:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 border border-slate-100 relative overflow-hidden">
                <h3 className="text-3xl font-black text-slate-900 mb-12 tracking-tight uppercase">Kanal Pesan Cepat.</h3>
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-1">Identity</label>
                      <input 
                        type="text" 
                        placeholder="Nama Lengkap"
                        className="w-full px-8 py-5 rounded-[1.5rem] border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-4 focus:ring-brand/10 focus:border-brand/40 outline-none transition-all font-bold placeholder:opacity-30"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-1">Communication</label>
                      <input 
                        type="email" 
                        placeholder="Alamat Email"
                        className="w-full px-8 py-5 rounded-[1.5rem] border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-4 focus:ring-brand/10 focus:border-brand/40 outline-none transition-all font-bold placeholder:opacity-30"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-1">Objective</label>
                    <input 
                      type="text" 
                      placeholder="Apa yang ingin dibahas?"
                      className="w-full px-8 py-5 rounded-[1.5rem] border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-4 focus:ring-brand/10 focus:border-brand/40 outline-none transition-all font-bold placeholder:opacity-30"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-1">Context</label>
                    <textarea 
                      rows={6}
                      placeholder="Jelaskan pesan Anda..."
                      className="w-full px-8 py-6 rounded-[2rem] border dark:border-white/10 bg-white dark:bg-white/5 focus:ring-4 focus:ring-brand/10 focus:border-brand/40 outline-none transition-all resize-none font-bold placeholder:opacity-30"
                    />
                  </div>
                  
                  <button className="w-full py-6 bg-brand text-white rounded-[2rem] font-black text-2xl hover:bg-brand-hover active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-brand/30">
                    Dispatch Message <Send className="w-7 h-7" />
                  </button>
                </form>
              </div>
            </div>
          </div>


          {/* Map Embed */}
          <div className="mb-16 relative group">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 rounded-[4rem]" />
            <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[600px] relative border-[10px] border-white/5 cursor-crosshair">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.139886326164!2d112.61439747587742!3d-7.984462692040954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882894541783d%3A0xc3b519c6fbce9c4e!2sUniversitas%20Merdeka%20Malang!5e0!3m2!1sid!2sid!4v1713091212345!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                <p className="text-white text-3xl font-black tracking-tight">Navigasi ke Sekretariat.</p>
                <p className="text-white/60 font-medium">Gedung Ormawa Universitas Merdeka Malang</p>
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
