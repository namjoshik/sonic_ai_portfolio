"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight, Linkedin } from "lucide-react";

export default function PremiumPortfolio() {
    return (
        <div className="bg-black text-white font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Kartik Namjoshi
          </h1>

          <p className="text-xl text-slate-300 mb-6">
            Delivery Principal | Leading Large-Scale Telecom & Digital Transformation Programs
          </p>

          <p className="text-slate-400 mb-8">
            Driving multi-million dollar programs, managing 100+ teams, and delivering high-impact OSS/BSS transformations across global enterprises.
          </p>

          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://www.linkedin.com/in/namjoshik/" target="_blank">
                <Linkedin className="mr-2" /> Connect
              </a>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <a href="/Kartik_Namjoshi.pdf" download>
                <Download className="mr-2" /> Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* IMPACT SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-semibold mb-12 text-center"
        >
          Proven Impact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "100+", label: "Team Size Managed" },
            { number: "20+", label: "Projects Delivered Monthly" },
            { number: "3.5 FTE", label: "Cost Savings Delivered" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">{item.number}</h3>
              <p className="text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <motion.h2 className="text-4xl font-semibold mb-12">
          Experience
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              role: "Delivery Principal",
              company: "Du Telecom",
              period: "2023 - Present",
              desc: "Driving end-to-end delivery of BSS transformation programs, managing suppliers, KPIs, and executive reporting."
            },
            {
              role: "Delivery Lead",
              company: "Vodafone",
              period: "2018 - 2023",
              desc: "Led large-scale OSS/BSS integrations with 100+ engineers, delivering high-volume projects across enterprise systems."
            }
          ].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-slate-900 border border-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-slate-400">{job.company} | {job.period}</p>
                  <p className="mt-3 text-slate-300">{job.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECT STORY SECTION */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.h2 className="text-4xl font-semibold mb-12 text-center">
          Transformation Highlights
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "DevOps Transformation",
              desc: "Implemented CI/CD pipelines using Jenkins, Git, and Ansible, reducing delivery errors and saving 3.5 FTE."
            },
            {
              title: "Agile & Kanban Adoption",
              desc: "Introduced structured workflows improving visibility, ownership, and reducing operational inefficiencies."
            }
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="bg-slate-900 border border-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className="text-slate-400">{proj.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-6">
            Let’s Build Something Impactful
          </h2>
          <p className="text-slate-400 mb-8">
            Open to leadership roles in telecom, digital transformation, and large-scale program delivery.
          </p>

          <Button size="lg" asChild>
            <a href="mailto:kartik.namjoshi@gmail.com">
              Get In Touch <ArrowRight className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </section>

    </div>
    )
}

