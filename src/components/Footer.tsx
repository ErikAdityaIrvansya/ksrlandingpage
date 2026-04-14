import React from "react";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t dark:border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand p-1.5 rounded-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight">
                  KSR PMI
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  UNMER MALANG
                </span>
              </div>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Organisasi kemanusiaan yang berdedikasi dalam pelayanan kesehatan, 
              penanggulangan bencana, dan kegiatan sosial di lingkup Universitas Merdeka Malang.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-full shadow-sm hover:text-brand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-full shadow-sm hover:text-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-full shadow-sm hover:text-brand transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Navigasi Cepat</h4>
            <ul className="space-y-4">
              {["Home", "About", "Activities", "Gallery", "News", "Join", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-foreground/70 hover:text-brand hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-bold mb-6">Program & Layanan</h4>
            <ul className="space-y-4">
              {[
                "Tanggap Bencana", 
                "Bakti Sosial", 
                "Layanan Kesehatan", 
                "Pelatihan SSR", 
                "Donor Darah"
              ].map((item) => (
                <li key={item} className="text-sm text-foreground/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span>Gedung Ormawa, Universitas Merdeka Malang, Kec. Sukun, Kota Malang</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <span>+62 852 3664 2811</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <span>ksr@unmer.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} KSR PMI Universitas Merdeka Malang. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-foreground/50 hover:text-brand">Privacy Policy</Link>
            <Link href="#" className="text-xs text-foreground/50 hover:text-brand">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
