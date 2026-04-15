"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Kegiatan", href: "/activities" },
  { name: "Kepengurusan", href: "/management" },
  { name: "Berita", href: "/news" },
  { name: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="bg-brand w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <Heart className="w-6 h-6 fill-white" />
            <img src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/465181581_3909865812629471_6380036382251982104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=S1xbMQKCEpQQ7kNvwFzv-k9&_nc_oc=Adr1yfWFnyKRKA3dozfSAvpBIIrY6lQyAIeDY2OHgWFLmXTcwpcOlub_ysrVHTC9q1nyZ6pnyukYACSVzhQauqAU&_nc_zt=23&_nc_ht=scontent.fsub8-1.fna&_nc_gid=cNr5zOXxhbkNXtkL47zRSA&_nc_ss=7a3a8&oh=00_Af176FOEaoRontRLxYULVKHQT36bnqv7W1Gd6UvWCC4otA&oe=69E50501" alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none tracking-tight text-slate-900 border-b-2 border-transparent group-hover:border-brand transition-all">
              KSR PMI
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mt-1">
              UNMER MALANG
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand relative py-1",
                  pathname === link.href ? "text-brand" : "text-slate-500"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <Link
            href="/join"
            className="group relative px-7 py-3.5 bg-brand text-white rounded-2xl overflow-hidden shadow-xl shadow-brand/20 transition-all active:scale-95"
          >
            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
              Join Us <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-900 hover:bg-brand hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="container px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold flex items-center justify-between group",
                    pathname === link.href ? "text-brand" : "text-slate-700 hover:text-brand"
                  )}
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-brand text-white py-5 rounded-3xl text-center font-black uppercase tracking-widest text-sm shadow-xl shadow-brand/20"
              >
                Mari Bergabung
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
