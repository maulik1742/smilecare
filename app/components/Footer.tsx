export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="section-container flex flex-col gap-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Smile Care Dental Clinic, Kurla West.
          All rights reserved.
        </p>
        <p className="flex flex-wrap gap-3">
          <span>Shop no. 1, Sunny Society, Lal Bahadur Shastri Rd, 400070</span>
          <span>• Kurla West, Mumbai, India</span>
        </p>
      </div>
    </footer>
  );
}


