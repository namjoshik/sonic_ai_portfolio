"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  ArrowRight,
  Linkedin,
  Mail,
  Sparkles,
  Award,
  Briefcase,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function PremiumPortfolio() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white font-sans">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_45%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_40%)] blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-300">
          <a href="#home" className="text-base font-semibold tracking-tight text-white">
            Kartik Namjoshi
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button variant="default" size="sm" asChild className="bg-emerald-500 text-slate-950 hover:bg-emerald-400">
            <a href="/Kartik_Namjoshi.pdf" download>
              Resume
            </a>
          </Button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <section id="home" className="min-h-[75vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 lg:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  <Sparkles className="h-4 w-4" />
                  Telecom delivery leadership
                </span>

                <div className="space-y-6">
                  <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                    Modern delivery leadership for large-scale telecom and OSS/BSS transformation.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-slate-300">
                    I help enterprises accelerate digital transformation with disciplined program delivery, cross-functional teams, and measurable operational impact.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button size="lg" asChild>
                    <a href="mailto:kartik.namjoshi@gmail.com" className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Contact me
                    </a>
                  </Button>
                  <div className="flex gap-3">
                    <Button variant="default" size="lg" asChild>
                      <a href="https://www.linkedin.com/in/namjoshik/" target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      size="lg"
                      asChild
                      className="bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    >
                      <a href="/Kartik_Namjoshi.pdf" download>
                        <Download className="h-4 w-4" /> Download resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%)]" />
                <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900">
                  <Image
                    src="/Kartik.jpg"
                    alt="Kartik Namjoshi"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="relative mt-6 rounded-3xl border border-white/10 bg-slate-900/90 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.26em] text-emerald-300">Portrait</p>
                  <p className="mt-3 text-base leading-7">
                    A bold personal image anchored to the premium telecom transformation brand.
                  </p>
                </div>
                <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {[
                    { value: "100+", label: "Team leadership" },
                    { value: "11+ yrs", label: "Telecom delivery" },
                    { value: "£3.5M", label: "Program cost savings" },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-1 text-left">
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                  About
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  Strategic operator for digital transformation and enterprise delivery.
                </h2>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <a href="/Kartik_Namjoshi.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> View full CV
                </a>
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4 text-slate-300">
                <p>
                  I partner with telecom and digital services organizations to deliver high-impact OSS/BSS and transformation programs. My focus is on aligning delivery execution with business outcomes, optimizing operations, and building strong leadership capacity across global teams.
                </p>
                <p>
                  Known for clear stakeholder communication, executive reporting, and proactive risk management, I bridge complex technical delivery and business decision-making.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                {[
                  { label: "Location", value: "Dubai, UAE" },
                  { label: "Availability", value: "Open for senior roles" },
                  { label: "Domain", value: "Telecom, OSS/BSS, digital transformation" },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="text-base font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="pt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Experience</p>
              <h2 className="text-4xl font-semibold text-white">Selected leadership roles and delivery outcomes.</h2>
            </div>

            <div className="space-y-6">
              {[
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
              ].map((job, index) => (
                <Card key={job.role} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{job.company}</p>
                        <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                      </div>
                      <p className="text-sm text-slate-400">{job.period}</p>
                    </div>
                    <ul className="mt-6 space-y-3 text-slate-300">
                      {job.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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

        <section id="skills" className="pt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Skills</p>
              <h2 className="text-4xl font-semibold text-white">Core capabilities across delivery, telecom, and operations.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                "Program delivery",
                "Telecom transformation",
                "OSS/BSS architecture",
                "Stakeholder alignment",
                "Vendor governance",
                "CI/CD & DevOps",
                "Agile delivery",
                "Executive reporting",
                "Risk & change management",
              ].map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/75 px-5 py-4 text-slate-100 transition hover:border-emerald-400/50">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="education" className="pt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Education</p>
              <h2 className="text-4xl font-semibold text-white">Professional credentials and learning highlights.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
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
              ].map((item) => (
                <Card key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-emerald-300">
                      <Award className="h-5 w-5" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.subtitle}</p>
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-slate-300">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="pt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                <Briefcase className="h-4 w-4" /> Ready for senior leadership roles
              </div>
              <h2 className="text-4xl font-semibold text-white">Ready to lead your next transformation.</h2>
              <p className="text-slate-300">
                If you are hiring for a delivery leader who can unite people, process, and technology across telecom and digital programs, let’s connect.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:kartik.namjoshi@gmail.com" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email me
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/Kartik_Namjoshi.pdf" download>
                    <Download className="h-4 w-4" /> Download resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Kartik Namjoshi — Telecom transformation leadership.
      </footer>
    </div>
  );
}

