/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
};

const services: Service[] = [
  {
    id: "implants",
    name: "Dental Implants",
    description: "Fixed replacement for missing teeth using titanium roots.",
    image: "/services/dental_implant.jpg",
    benefits: [
      "Looks and feels like a natural tooth",
      "Helps you chew comfortably",
      "Protects jawbone over time",
    ],
  },
  {
    id: "bleaching",
    name: "Teeth Whitening / Bleaching",
    description: "Professional whitening to safely brighten stained teeth.",
    image: "/services/teeth_bleaching.jpg",
    benefits: [
      "Visible shade improvement",
      "Done under dentist supervision",
      "Quick, confidence‑boosting treatment",
    ],
  },
  {
    id: "filling",
    name: "Tooth Colored Fillings",
    description: "Natural‑looking fillings that seal and protect cavities.",
    image: "/services/tooth_filling.jpg",
    benefits: [
      "Stops decay from spreading",
      "Matches your tooth shade",
      "Strengthens remaining tooth",
    ],
  },
  {
    id: "braces",
    name: "Braces & Orthodontic Treatment",
    description: "Metal, ceramic or clear options to align your teeth.",
    image: "/services/dental_braces.webp",
    benefits: [
      "Straighter, more balanced smile",
      "Easier cleaning between teeth",
      "Custom plans for kids and adults",
    ],
  },
  {
    id: "general",
    name: "General & Preventive Dentistry",
    description: "Check‑ups, cleaning and gum care to keep teeth healthy.",
    image: "/services/general_dentistry.jpg",
    benefits: [
      "Catches problems early",
      "Keeps gums fresh and healthy",
      "Helps avoid major treatments",
    ],
  },
];

export default function ServiceAccordion() {
  const [openId, setOpenId] = useState<string>("implants");

  return (
    <section className="section-container py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
            Our Expertise
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Treatments at <br />
            <span className="bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent">
              Smile Care Clinic
            </span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
            Comprehensive dental solutions delivered with surgical precision and
            a gentle touch for your absolute comfort.
          </p>
        </div>

        <div className="hidden h-32 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

        <div className="relative hidden aspect-video rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-sm lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-4 -top-4 h-12 w-12 rounded-2xl bg-lime-400/20 blur-xl" />
          <p className="text-xl font-medium italic leading-relaxed text-lime-100/90">
            “Healthy teeth are the foundation of a confident life. We use
            world-class materials to ensure your results last a lifetime.”
          </p>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 p-px">
              <div className="h-full w-full rounded-full bg-slate-950" />
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-wide">
                Smile Care Dental
              </p>
              <p className="text-xs text-lime-400/70 font-medium">Est. 2012</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        {/* Navigation Sidebar */}
        <div className="flex flex-col gap-4">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <div key={service.id} className="group relative">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  className={`relative flex w-full items-center justify-between rounded-3xl border px-6 py-5 text-left transition-all duration-500 ${
                    isOpen
                      ? "border-lime-400/50 bg-slate-900 shadow-[0_10px_30px_rgba(163,230,53,0.1)]"
                      : "border-white/5 bg-slate-950/40 text-slate-400 hover:border-white/20 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-base font-bold transition-colors duration-300 sm:text-lg ${
                        isOpen ? "text-white" : "group-hover:text-slate-200"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-500 ${
                      isOpen
                        ? "border-lime-400 bg-lime-400 text-slate-950 rotate-180"
                        : "border-white/10 bg-slate-900 text-slate-400"
                    }`}
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </span>

                  {isOpen && (
                    <div className="absolute -left-1 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />
                  )}
                </button>

                {/* Mobile View */}
                <div
                  className={`overflow-hidden transition-all duration-500 lg:hidden ${
                    isOpen
                      ? "max-h-[1200px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ServiceDetail service={service} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Detail View */}
        <div className="hidden lg:block">
          {openId ? (
            <div className="sticky top-24 transition-all duration-500">
              {services.map(
                (service) =>
                  service.id === openId && (
                    <ServiceDetail key={service.id} service={service} />
                  ),
              )}
            </div>
          ) : (
            <div className="flex h-full min-h-[500px] items-center justify-center rounded-[3rem] border border-dashed border-white/10 bg-slate-950/20 p-12 text-center">
              <div className="max-w-xs space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900">
                  <ChevronDown className="text-slate-600" size={32} />
                </div>
                <p className="text-lg font-medium text-slate-400">
                  Select a treatment to learn more about our process and results
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({ service }: { service: (typeof services)[0] }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-[#020617] p-5 shadow-2xl transition-all duration-500 hover:border-lime-400/30 sm:rounded-[2.5rem] sm:p-10">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime-400/5 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]" />

      {/* 1. Title */}
      <header className="relative z-10 mb-6 sm:mb-8">
        <div className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 sm:mb-4 sm:h-1 sm:w-12" />
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {service.name}
        </h2>
      </header>

      {/* 2. Photo Area */}
      <div className="relative z-10 mx-auto mb-8 h-48 w-full overflow-hidden rounded-3xl border border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-[1.01] sm:mb-10 sm:h-96 sm:rounded-4xl">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-slate-950/40 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md sm:bottom-4 sm:left-4">
          Premium Care
        </div>
      </div>

      {/* 3. Description */}
      <div className="relative z-10 mb-8 max-w-2xl sm:mb-10">
        <p className="text-sm leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
          {service.description}
        </p>
      </div>

      {/* 4. Benefits (Small Card) */}
      <div className="relative z-10 mt-auto rounded-3xl border border-lime-400/20 bg-lime-400/[0.03] p-5 sm:p-8">
        <h3 className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-lime-400 sm:mb-6">
          <span className="h-4 w-px bg-lime-400/50" />
          Key Benefits & Outcomes
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {service.benefits.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 transition-transform hover:translate-x-1 sm:gap-4"
            >
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-lime-400/10 ring-1 ring-lime-400/20 sm:h-6 sm:w-6">
                <div className="h-1 w-1 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.6)] sm:h-1.5 sm:w-1.5" />
              </div>
              <span className="text-sm font-medium text-slate-200 leading-tight sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex border-t border-white/5 pt-8">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-4 rounded-xl bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-white/10 transition-all hover:bg-lime-400 hover:text-slate-950 hover:ring-lime-400 sm:w-auto sm:py-3 sm:text-sm"
          >
            Inquire Now
            <span className="text-xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
