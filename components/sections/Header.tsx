"use client";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-700">
        <a href="#home" className="text-base font-semibold tracking-tight text-slate-950">
          Kartik Namjoshi
        </a>

        <div className="hidden items-center gap-8 uppercase tracking-[0.24em] text-slate-600 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button variant="secondary" size="sm" asChild className="bg-emerald-700 text-white border-transparent hover:bg-emerald-600">
          <a href="/Kartik_Namjoshi.pdf" download>
            Resume
          </a>
        </Button>
      </nav>
    </header>
  );
}
