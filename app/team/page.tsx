import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="section-container space-y-8 pb-16">
      <header className="max-w-3xl pt-2">
        <span className="badge">Our Doctor</span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          A caring dentist focused on long‑term oral health
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Short introduction about the doctor&apos;s experience and gentle,
          patient‑first approach.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start">
        <article className="card p-6 text-sm text-slate-200 sm:text-base">
          <h2 className="text-lg font-semibold text-lime-200">
            Doctor&apos;s introduction
          </h2>
          <p className="mt-2">
            Use this space to write a few lines about why the doctor chose
            dentistry, years of experience and special interests such as
            implants, braces or cosmetic work.
          </p>
          <p className="mt-2">
            Add one short paragraph on their philosophy: clear explanations,
            transparent treatment plans and a calm, caring chair‑side manner.
          </p>
        </article>

        <div className="card overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src="/clinic/doctor.jpg"
              alt="Dental themed background"
              fill
              sizes="360px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="card mt-2 p-6 text-sm text-slate-200 sm:text-base">
        <h2 className="text-lg font-semibold text-lime-200">
          Credentials & memberships
        </h2>
        <ul className="mt-3 grid gap-2 text-sm md:grid-cols-3">
          <li>Degree & college</li>
          <li>Key certifications / fellowships</li>
          <li>Professional dental associations</li>
        </ul>
      </section>
    </div>
  );
}

