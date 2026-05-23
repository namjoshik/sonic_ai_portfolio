"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Delivery Principal",
      company: "Du Telecom",
      period: "2023 - Present",
      bullets: [
        "Led transformation of BSS operations across multi-site programs.",
        "Managed 100+ engineers, suppliers, and executive stakeholders.",
        "Delivered measurable improvements in delivery cadence and governance.",
      ],
    },
    {
      role: "Delivery Lead",
      company: "Vodafone",
      period: "2018 - 2023",
      bullets: [
        "Directed large-scale OSS/BSS integrations through agile delivery.",
        "Optimized cross-team collaboration for faster release cycles.",
        "Strengthened vendor governance across multi-million-dollar initiatives.",
      ],
    },
  ];

  return (
    <section id="experience" className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Experience</p>
          <h2 className="text-4xl font-semibold text-slate-950">Selected leadership roles and delivery outcomes.</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((job) => (
            <Card key={job.role} className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm shadow-slate-400/5">
              <CardContent className="p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">{job.company}</p>
                    <h3 className="text-2xl font-semibold text-slate-950">{job.role}</h3>
                  </div>
                  <p className="text-sm text-slate-500">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-slate-600">
                  {job.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
