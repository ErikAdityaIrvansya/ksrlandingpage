import React from "react";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="bg-brand w-11 h-11 rounded-2xl flex items-center justify-center text-brand shadow-lg shadow-brand/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 p-1">
               <img src="images/logoksr.png" alt="" />

              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black leading-none tracking-tight">KSR PMI</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">UNMER MALANG</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium text-lg">
              Wadah pengabdian mahasiswa yang berdedikasi tinggi dalam melayani 
              aspek kemanusiaan di Universitas Merdeka Malang sejak 1989.
            </p>
            <div className="flex items-center gap-5">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 hover:bg-brand hover:border-brand transition-all hover:-translate-y-2"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand mb-10">Navigasi</h4>
            <ul className="space-y-5">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang Kami", href: "/about" },
                { name: "Kegiatan Resmi", href: "/activities" },
                { name: "Kepengurusan", href: "/management" },
                { name: "Pendaftaran", href: "/join" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group text-base font-bold"
                  >
                    <ChevronRight className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand mb-10">Kontak Resmi</h4>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-black uppercase tracking-widest text-slate-500">Sekretariat</span>
                  <p className="text-slate-300 font-bold leading-relaxed">Gedung Ormawa Lt. 1, Universitas Merdeka Malang</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-black uppercase tracking-widest text-slate-500">Email</span>
                  <p className="text-slate-300 font-bold">ksr-pmi@unmer.ac.id</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Badge Section */}
          <div className="flex flex-col items-center lg:items-end justify-center">
            <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 text-center space-y-4">
            <div className="bg-brand rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-brand/40 p-5">
            <img src="images/logoksr.png" alt="" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand">Professional Volunteers</div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
            © {new Date().getFullYear()} KSR PMI UNIVERSITAS MERDEKA MALANG. TERAKREDITASI.
          </p>
          <div className="flex gap-12">
            {["Panduan", "Kebijakan", "Status"].map(text => (
              <Link key={text} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-brand transition-colors">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
