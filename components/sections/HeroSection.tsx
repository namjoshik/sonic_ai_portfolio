"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[75vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-2xl shadow-slate-400/10 lg:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              <Sparkles className="h-4 w-4" />
              Telecom delivery leadership
            </span>

            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Modern delivery leadership for large-scale telecom and OSS/BSS transformation.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                I help enterprises accelerate digital transformation with disciplined program delivery, cross-functional teams, and measurable operational impact.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="default" size="lg" asChild className="bg-slate-950 text-white hover:bg-slate-800 border-transparent">
                <a href="mailto:kartik.namjoshi@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact me
                </a>
              </Button>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-100">
                  <a href="https://www.linkedin.com/in/namjoshik/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-emerald-700 text-white hover:bg-emerald-600 border-transparent"
                >
                  <a href="/Kartik_Namjoshi.pdf" download>
                    <Download className="h-4 w-4" /> Download resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 p-4 shadow-xl shadow-slate-400/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,115,86,0.14),_transparent_35%)]" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100">
              <Image
                src="/Kartik.jpg"
                alt="Kartik Namjoshi"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="relative mt-6 rounded-3xl border border-slate-200/80 bg-white p-5 text-slate-700">
              <p className="text-sm uppercase tracking-[0.26em] text-emerald-700">Portrait</p>
              <p className="mt-3 text-base leading-7">
                A bold personal image anchored to the premium telecom transformation brand.
              </p>
            </div>
            <div className="grid gap-4 border-t border-slate-200/80 pt-6 sm:grid-cols-3">
              {[
                { value: "100+", label: "Team leadership" },
                { value: "11+ yrs", label: "Telecom delivery" },
                { value: "£3.5M", label: "Program cost savings" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1 text-left">
                  <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
