import Link from "next/link";

export default function HomeContactStrip() {
  return (
    <section className="section-container pb-14 pt-4">
      <div className="card grid gap-6 p-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Easy to reach, centrally located in Kurla West
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Shop no. 1, Sunny Society, Lal Bahadur Shastri Rd, 400070 · Kurla
            West, Mumbai, India.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Call <span className="font-medium text-lime-300">099702 79892</span>{" "}
            to check same-day or weekend availability.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get directions
            </Link>
            <a
              href="tel:09970279892"
              className="btn-ghost text-xs sm:text-sm"
            >
              Call the clinic
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="aspect-video">
            <iframe
              title="Smile Care Dental Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7387752087541!2d72.8747075!3d19.0657116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a556777eef%3A0x23bab342ac97014f!2sSmile%20Care%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1771852123345!5m2!1sen!2sin"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


