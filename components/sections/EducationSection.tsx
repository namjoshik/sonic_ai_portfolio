"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      title: "Executive Program Management",
      subtitle: "Telecom Leadership Development",
      detail: "Focused on delivery excellence, stakeholder leadership, and strategic program execution.",
    },
    {
      title: "Certified Scrum Master",
      subtitle: "Agile Delivery & Transformation",
      detail: "Applied agile practices to large enterprise programs and cross-functional teams.",
    },
  ];

  return (
    <section id="education" className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Education</p>
          <h2 className="text-4xl font-semibold text-slate-950">Professional credentials and learning highlights.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <Card key={item.title} className="rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm shadow-slate-400/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 text-emerald-700">
                  <Award className="h-5 w-5" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.subtitle}</p>
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
