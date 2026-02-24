import Link from "next/link";

export default function HomeContactStrip() {
  return (
    <section className="section-container pb-14 pt-4">
      <div className="card grid gap-8 p-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:p-10 shadow-2xl">
        <div>
          <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
            Easy to reach, centrally located in Kurla West
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Shop no. 1, Sunny Society, Lal Bahadur Shastri Rd, 400070 · Kurla
            West, Mumbai, India.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Call <span className="font-bold text-lime-400">099702 79892</span>{" "}
            to check same-day or weekend availability.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get directions
            </Link>
            <a
              href="tel:09970279892"
              className="btn-ghost flex items-center justify-center border-white/20 bg-white/5"
            >
              Call the clinic
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
          <div className="aspect-video">
            <iframe
              title="Smile Care Dental Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7387752087541!2d72.8747075!3d19.0657116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a556777eef%3A0x23bab342ac97014f!2sSmile%20Care%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1771852123345!5m2!1sen!2sin"
              className="h-full w-full border-0 opacity-90 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
