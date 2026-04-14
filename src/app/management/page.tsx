"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Heart, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionWrapper from "@/components/SectionWrapper";
import { managementData } from "@/data/mock";

const MemberCard = ({ member, index }: { member: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="bg-white rounded-[3rem] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col items-center text-center">
      <div className="relative w-52 h-52 mb-8 group-hover:scale-110 transition-transform duration-700">
        <div className="absolute inset-0 bg-brand/10 rounded-[2.5rem] -rotate-6 group-hover:rotate-0 transition-transform duration-700" />
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-[2.5rem] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
        />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-brand transition-colors tracking-tight">
        {member.name}
      </h3>
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
        {member.position}
      </p>
    </div>
  </motion.div>
);

export default function ManagementPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Header Section */}
      <SectionWrapper bgColor="white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 rounded-3xl bg-brand/5 text-brand mb-4 shadow-sm"
          >
            <Users className="w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
            Struktur <br />
            <span className="text-brand">Kepengurusan.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Dedikasi dan profesionalisme relawan KSR PMI UNMER Malang dalam 
            menjalankan roda organisasi kemanusiaan.
          </p>
        </div>
      </SectionWrapper>

      {/* Pembina Section */}
      <SectionWrapper bgColor="gray">
        <div className="space-y-16">
          <div className="flex items-center gap-6 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Dewan Pembina
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementData.pembina.map((member, i) => (
              <MemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pengurus Inti Section */}
      <SectionWrapper bgColor="white" withGrid>
        <div className="space-y-16">
          <div className="flex items-center gap-6 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-brand/5 rounded-2xl flex items-center justify-center text-brand">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Pengurus Inti
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementData.inti.map((member, i) => (
              <MemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Divisi Sections */}
      {managementData.divisi.map((div, divIdx) => (
        <SectionWrapper 
          key={divIdx} 
          bgColor={divIdx % 2 === 0 ? "gray" : "white"}
        >
          <div className="space-y-16">
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                {div.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {div.members.map((member, i) => (
                <MemberCard key={i} member={member} index={i} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      <Footer />
      <FloatingButtons />
    </main>
  );
}
