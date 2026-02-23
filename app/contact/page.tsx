export default function ContactPage() {
  return (
    <div className="section-container space-y-10 pb-16">
      <header className="max-w-3xl pt-2">
        <span className="badge">Contact</span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Book your visit
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          Send a quick enquiry or call for same‑day availability.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <form className="card space-y-4 p-6 text-sm text-slate-200">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-300 focus:ring-2 focus:ring-lime-400/40"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                Mobile number
              </label>
              <input
                type="tel"
                placeholder="099702 79892"
                className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-300 focus:ring-2 focus:ring-lime-400/40"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                Preferred date
              </label>
              <input
                type="date"
                className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-300 focus:ring-2 focus:ring-lime-400/40"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              Treatment / concern
            </label>
            <textarea
              rows={4}
              placeholder="Example: pain in upper tooth, want to replace missing tooth, regular check-up etc."
              className="w-full resize-none rounded-xl border border-white/15 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-300 focus:ring-2 focus:ring-lime-400/40"
            />
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto">
            Submit enquiry
          </button>
          <p className="text-xs text-slate-400">
            For faster response, call{" "}
            <a href="tel:09970279892" className="font-semibold text-lime-300">
              099702 79892
            </a>{" "}
            or email{" "}
            <a
              href="mailto:aurabhinam@gmail.com"
              className="font-semibold text-lime-300"
            >
              saurabhinam@gmail.com
            </a>
            .
          </p>
        </form>

        <aside className="space-y-4">
          <div className="card p-5 text-sm text-slate-200">
            <h2 className="text-base font-semibold text-lime-200">
              Clinic address
            </h2>
            <p className="mt-2 text-sm">
              Shop no. 1, Sunny Society, Lal Bahadur Shastri Rd, 400070
              <br />
              Kurla West, Maharashtra, India
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Open now · Timings can be customised as per appointments.
            </p>
          </div>

          <div className="card overflow-hidden p-0">
            <div className="aspect-video">
              <iframe
                title="Smile Care Dental Clinic map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7387752087541!2d72.8747075!3d19.0657116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a556777eef%3A0x23bab342ac97014f!2sSmile%20Care%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1771852123345!5m2!1sen!2sin"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}


