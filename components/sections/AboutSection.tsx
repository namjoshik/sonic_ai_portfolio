"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">
              About
            </p>
            <h2 className="text-4xl font-semibold text-slate-950">
              Strategic operator for digital transformation and enterprise delivery.
            </h2>
          </div>
          <Button variant="ghost" size="sm" asChild className="text-slate-700 hover:text-slate-950">
            <a href="/Kartik_Namjoshi.pdf" download>
              <Download className="mr-2 h-4 w-4" /> View full CV
            </a>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p>
              I partner with telecom and digital services organizations to deliver high-impact OSS/BSS and transformation programs. My focus is on aligning delivery execution with business outcomes, optimizing operations, and building strong leadership capacity across global teams.
            </p>
            <p>
              Known for clear stakeholder communication, executive reporting, and proactive risk management, I bridge complex technical delivery and business decision-making.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-400/5">
            {[
              { label: "Location", value: "Dubai, UAE" },
              { label: "Availability", value: "Open for senior roles" },
              { label: "Domain", value: "Telecom, OSS/BSS, digital transformation" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="text-base font-medium text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
