"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Download, Briefcase } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-slate-200/80 bg-white p-10 text-center shadow-sm shadow-slate-400/5"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            <Briefcase className="h-4 w-4" /> Ready for senior leadership roles
          </div>
          <h2 className="text-4xl font-semibold text-slate-950">Ready to lead your next transformation.</h2>
          <p className="text-slate-600">
            If you are hiring for a delivery leader who can unite people, process, and technology across telecom and digital programs, let's connect.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="default" size="lg" asChild className="bg-slate-950 text-white hover:bg-slate-800 border-transparent">
              <a href="mailto:kartik.namjoshi@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-100">
              <a href="/Kartik_Namjoshi.pdf" download>
                <Download className="h-4 w-4" /> Download resume
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
