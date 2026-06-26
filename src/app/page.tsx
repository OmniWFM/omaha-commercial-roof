import Image from "next/image";

const HERO =
  "https://ideogram.ai/api/images/ephemeral/gAqXQWPOXl62nKYnH0u2WA.png?exp=1782539343&sig=e297cc7c3fb3560fe32f40ff153874469e5c394955105c44eb71fbcb074decda";
const INSPECT =
  "https://ideogram.ai/api/images/ephemeral/eSnHagvtUjSdvS_FxMH8NA.png?exp=1782539356&sig=c2638a8e53bf381be1cb0b17beb28b8087f5a89b103ae9b65e27488c0c1d06c1";

const services = [
  {
    title: "Flat & Low-Slope Roofing",
    body: "TPO, EPDM and PVC single-ply systems engineered for Nebraska weather. Built to shed water and last decades.",
  },
  {
    title: "Metal Roofing",
    body: "Standing seam and architectural metal for warehouses, retail and industrial facilities. Durable, energy-smart, low maintenance.",
  },
  {
    title: "Roof Repair & Leaks",
    body: "Fast diagnostics and lasting fixes. We trace the source, not just the symptom, and document everything.",
  },
  {
    title: "Preventive Maintenance",
    body: "Scheduled inspections and tune-ups that extend roof life and protect your warranty year over year.",
  },
  {
    title: "Emergency Response",
    body: "Storm damage, active leaks, failed seams. We tarp, secure and repair so your business keeps running.",
  },
  {
    title: "Roof Replacement",
    body: "Full tear-off and re-roof with minimal disruption to your operations and a clean, on-time finish.",
  },
];

const stats = [
  { value: "20+", label: "Years in the Omaha metro" },
  { value: "1.5M+", label: "Sq ft of roofing installed" },
  { value: "24/7", label: "Emergency response" },
  { value: "100%", label: "Workmanship guaranteed" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">
            Omaha<span className="gradient-text">CommercialRoof</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-steel">
            <a href="#services" className="hover:text-accent transition">Services</a>
            <a href="#why" className="hover:text-accent transition">Why Us</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
          <a
            href="tel:+14025550199"
            className="bg-accent hover:bg-accentDark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"
          >
            (402) 555-0199
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="absolute inset-0">
          <Image src={HERO} alt="New commercial flat roof in Omaha" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-44">
          <div className="max-w-2xl fade-up">
            <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              Commercial Roofing Contractor · Omaha, NE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Roofing that keeps Omaha businesses{" "}
              <span className="gradient-text">covered.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              TPO, EPDM and metal roof installation, repair and maintenance for
              commercial and industrial properties across the metro. Free
              inspections, honest assessments, work that lasts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-accent hover:bg-accentDark text-white font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free Inspection
              </a>
              <a
                href="#services"
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Commercial roofing, done right.</h2>
          <p className="mt-4 text-steel text-lg">
            One contractor for the full life of your roof, from new installs to
            the maintenance that protects your investment.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition">
                <span className="h-3 w-3 rounded-sm bg-accent group-hover:bg-white transition" />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-steel text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image src={INSPECT} alt="Commercial roof inspection in Omaha" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Local crews. Real accountability.
            </h2>
            <p className="mt-4 text-steel text-lg leading-relaxed">
              We&apos;re an Omaha-based team that shows up, communicates and
              stands behind the work. No subcontracted mystery crews, no
              surprise invoices.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Licensed, insured and manufacturer-certified",
                "Detailed roof reports with photos before any work",
                "Clear written estimates and timelines",
                "Workmanship and material warranties on every job",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-ink text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get a free roof inspection.
          </h2>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us about your building and we&apos;ll assess your roof, document
            the condition and give you a straight answer. No pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+14025550199"
              className="bg-accent hover:bg-accentDark text-white font-semibold px-8 py-4 rounded-full transition"
            >
              Call (402) 555-0199
            </a>
            <a
              href="mailto:info@omahacommercialroof.com"
              className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel text-slate-400">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-semibold text-white">Omaha Commercial Roof</span>
          <span>Serving Omaha, Council Bluffs &amp; the metro · Licensed &amp; Insured</span>
          <span>© {new Date().getFullYear()} Omaha Commercial Roof</span>
        </div>
      </footer>
    </main>
  );
}