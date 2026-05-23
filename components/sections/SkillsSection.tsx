"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    "Program delivery",
    "Telecom transformation",
    "OSS/BSS architecture",
    "Stakeholder alignment",
    "Vendor governance",
    "CI/CD & DevOps",
    "Agile delivery",
    "Executive reporting",
    "Risk & change management",
  ];

  return (
    <section id="skills" className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Skills</p>
          <h2 className="text-4xl font-semibold text-slate-950">Core capabilities across delivery, telecom, and operations.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-3xl border border-slate-200/80 bg-white px-5 py-4 text-slate-950 transition hover:border-emerald-400/50 shadow-sm shadow-slate-400/5"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
