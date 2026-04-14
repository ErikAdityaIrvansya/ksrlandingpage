"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: "white" | "gray" | "red";
  withGrid?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className,
  bgColor = "white",
  withGrid = false,
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-slate-50",
    red: "bg-brand text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        bgClasses[bgColor],
        withGrid && "bg-grid-subtle",
        className
      )}
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
