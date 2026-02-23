import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="section-container space-y-8 pb-16">
      <header className="max-w-3xl pt-2">
        <span className="badge">About the clinic</span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          A neighbourhood clinic built around your comfort
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Warm, clean and modern setup with a calm, non‑hospital feel.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <article className="card p-6 text-sm text-slate-200 sm:text-base">
          <h2 className="text-lg font-semibold text-lime-200">
            Why families choose Smile Care
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-300" />
              <span>
                Friendly, patient‑first experience &mdash; we explain every
                treatment in simple language before we start.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-300" />
              <span>
                Modern equipment and strict infection‑control protocol for safe,
                clean dentistry.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-300" />
              <span>
                Transparent plans &amp; options so you know what to expect in
                terms of visits and costs.
              </span>
            </li>
          </ul>

          <div className="mt-4 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-lime-200">1K+</p>
              <p>Smiles treated across all age groups*</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-lime-200">Multi‑lingual</p>
              <p>Consultations in English, Hindi &amp; Marathi</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-lime-200">Comfort care</p>
              <p>Focus on painless, minimally invasive dentistry</p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            *Numbers and details can be customised based on the doctor&apos;s
            real practice.
          </p>
        </article>

        <div className="space-y-4">
          <div className="card relative overflow-hidden">
            <div className="relative h-56 w-full md:h-64">
              <Image
                src="/clinic/2.jpg"
                alt="Dental treatment room at Smile Care Dental Clinic"
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="card px-4 py-3 text-xs text-slate-200">
            <p className="font-semibold text-lime-200">
              Easy to reach, easy to trust
            </p>
            <p className="mt-1 text-slate-300">
              Located at Sunny Society on LBS Road, with flexible appointments
              that suit working professionals, students and senior citizens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

