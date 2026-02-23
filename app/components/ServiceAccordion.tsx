/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState } from "react";

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
    <section className="section-container py-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-3">
          <span className="badge">Services</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Treatments at Smile Care Dental Clinic
          </h1>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Quick overview of key treatments with simple benefits.
          </p>
        </div>

        <div className="relative hidden h-64 rounded-3xl border border-lime-400/40 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900/50 p-6 sm:flex sm:flex-col sm:justify-between">
          <p className="text-sm font-medium text-lime-100">
            “Healthy teeth are the base for a confident smile. We use
            high-quality materials and a gentle, detail-focused approach in
            every procedure.”
          </p>
          <p className="text-xs text-lime-200/80">Smile Care Dental Clinic</p>
          <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-lime-400/40 blur-3xl" />
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setOpenId(isOpen ? "" : service.id)}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                  isOpen
                    ? "border-lime-400/70 bg-slate-900 text-lime-100 shadow-lg shadow-lime-500/20"
                    : "border-white/10 bg-slate-900/50 text-slate-100 hover:border-lime-300/60 hover:bg-slate-900"
                }`}
              >
                <span>{service.name}</span>
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full border text-xs transition ${
                    isOpen
                      ? "border-lime-300 bg-lime-400 text-slate-950"
                      : "border-white/20 bg-slate-900 text-slate-200"
                  }`}
                >
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {services.map((service) => {
            if (service.id !== openId) return null;
            return (
              <article
                key={service.id}
                className="card relative overflow-hidden p-0 text-sm text-slate-200 sm:text-base"
              >
                <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-lime-400/20 blur-3xl" />
                <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-stretch">
                  <div className="relative h-40 w-full overflow-hidden md:h-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 768px) 260px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-lime-200 sm:text-xl">
                      {service.name}
                    </h2>
                    <p className="mt-2 text-sm text-slate-200">
                      {service.description}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-100">
                      {service.benefits.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


