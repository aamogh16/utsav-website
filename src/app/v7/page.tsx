import { events } from '@/data/events';
import { team } from '@/data/team';
import { countries } from '@/data/countries';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Festival Bill (V7)',
  description: 'Mock V7 — poster style billed like a music festival lineup.',
};

const navLinks = [
  { href: '#bill', label: 'The Bill' },
  { href: '#sets', label: 'Set Times' },
  { href: '#crew', label: 'Crew' },
  { href: '#tickets', label: 'Tickets' },
];

// Tiered like a festival poster: headliners big, supporting acts smaller.
function tierSize(i: number) {
  if (i < 2) return 'clamp(3rem, 12vw, 9rem)';
  if (i < 4) return 'clamp(2.25rem, 8vw, 6rem)';
  return 'clamp(1.75rem, 6vw, 4.5rem)';
}

export default function V7Page() {
  return (
    <div className="bg-cream text-charcoal min-h-screen">
      {/* ===== NAV ===== */}
      <nav className="sticky top-0 z-50 bg-charcoal border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-cream">
            <span className="font-condensed font-black text-2xl tracking-tight uppercase">
              Utsav
            </span>
            <span className="font-condensed font-bold text-saffron text-xs tracking-[0.2em] hidden sm:inline">
              FEST &apos;26
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-condensed font-bold text-cream/70 hover:text-saffron text-sm tracking-[0.2em] uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#tickets"
            className="font-condensed font-black text-charcoal bg-saffron px-4 py-1.5 text-sm tracking-[0.15em] uppercase border-2 border-saffron hover:bg-cream hover:border-cream transition-colors"
          >
            Tickets →
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header id="top" className="border-b-4 border-charcoal bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-y-2 border-cream/25 py-3 mb-10">
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              Northeastern University
            </p>
            <span className="text-saffron">✦</span>
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              Boston · 2025–2026
            </p>
            <span className="text-saffron">✦</span>
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              All Welcome
            </p>
          </div>

          <h1
            className="font-condensed font-black uppercase leading-[0.8] tracking-tighter"
            style={{ fontSize: 'clamp(4rem, 20vw, 18rem)' }}
          >
            UTSAV<span className="text-saffron">FEST</span>
          </h1>
          <p className="font-display italic text-cream/60 text-lg sm:text-2xl mt-6">
            Six nations of South Asia — one season of celebration.
          </p>
        </div>
      </header>

      {/* ===== THE BILL — countries as lineup ===== */}
      <section id="bill" className="border-b-4 border-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="font-condensed font-black text-sm tracking-[0.3em] uppercase mb-10 text-charcoal/60">
            ✦ Featuring · The Six Nations ✦
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {countries.map((c, i) => (
              <span key={c.id} className="inline-flex items-center gap-6">
                <span
                  className="font-condensed font-black uppercase leading-none tracking-tight hover:opacity-70 transition-opacity"
                  style={{ fontSize: tierSize(i), color: c.color }}
                  title={c.greeting}
                >
                  {c.name}
                </span>
                {i < countries.length - 1 && (
                  <span className="text-charcoal/25 text-2xl sm:text-4xl">•</span>
                )}
              </span>
            ))}
          </div>

          <p className="font-display italic text-charcoal/50 text-base sm:text-lg mt-12 max-w-2xl mx-auto">
            India · Pakistan · Bangladesh · Bhutan · Sri Lanka · Nepal — every
            culture on the bill, every student on the guest list.
          </p>
        </div>

        {/* Greetings marquee */}
        <div className="overflow-hidden bg-saffron border-t-4 border-charcoal py-3">
          <div className="flex whitespace-nowrap animate-marquee">
            {[0, 1].map((g) => (
              <div key={g} className="flex shrink-0">
                {countries.map((c, i) => (
                  <span
                    key={`${g}-${i}`}
                    className="font-condensed font-black text-charcoal text-xl sm:text-2xl tracking-[0.1em] uppercase mx-6 flex items-center gap-6"
                  >
                    {c.flag} {c.greeting}
                    <span className="text-charcoal/40">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SET TIMES — events ===== */}
      <section id="sets" className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-4 mb-12 border-b-2 border-charcoal pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              Set Times
            </h2>
            <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-2 hidden sm:block">
              Main Stage
            </p>
          </div>

          <div className="border-t-2 border-charcoal">
            {events.map((e, i) => (
              <div
                key={e.id}
                className="group grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center py-6 border-b-2 border-charcoal hover:bg-charcoal hover:text-cream transition-colors"
              >
                <div
                  className="sm:col-span-1 font-condensed font-black text-3xl leading-none"
                  style={{ color: e.accentColor }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="sm:col-span-7">
                  <h3
                    className="font-condensed font-black uppercase leading-none tracking-tight"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)' }}
                  >
                    {e.name}
                  </h3>
                  <p className="font-body text-current/70 leading-relaxed mt-2 text-sm max-w-xl opacity-70">
                    {e.description}
                  </p>
                </div>
                <div className="sm:col-span-4 sm:text-right">
                  <span className="font-condensed font-bold text-sm tracking-[0.2em] uppercase border-2 border-current px-3 py-1.5 inline-block">
                    {e.semester}
                    {e.month ? ` · ${e.month}` : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREW — board ===== */}
      <section id="crew" className="border-b-4 border-charcoal bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-4 mb-12 border-b-2 border-cream/20 pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              The Crew
            </h2>
            <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-cream/40 mb-2">
              2025–26
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((m, i) => (
              <div
                key={m.id}
                className="border-2 border-cream/25 group hover:bg-saffron hover:border-saffron hover:text-charcoal transition-colors"
              >
                <div className="aspect-square border-b-2 border-cream/25 group-hover:border-charcoal/30 flex items-start justify-between p-3 transition-colors">
                  <span className="font-condensed font-black text-3xl leading-none text-cream/30 group-hover:text-charcoal/60 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-condensed font-bold text-[0.55rem] tracking-[0.2em] uppercase text-cream/30 group-hover:text-charcoal/50 transition-colors">
                    Photo
                  </span>
                </div>
                <div className="p-3">
                  <p className="font-condensed font-black text-base leading-tight uppercase">
                    {m.name}
                  </p>
                  <p className="font-body text-saffron group-hover:text-charcoal text-[0.6rem] tracking-[0.15em] uppercase mt-1 transition-colors">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TICKETS / JOIN ===== */}
      <section id="tickets" className="bg-crimson border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28 text-center">
          <p className="font-condensed font-black text-sm tracking-[0.3em] uppercase mb-6 text-cream/70">
            ✦ Admission ✦
          </p>
          <h2
            className="font-condensed font-black uppercase leading-[0.85] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)' }}
          >
            Free Entry.
            <br />
            All Welcome.
          </h2>
          <p className="font-body text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto mt-8">
            Membership is open to every Northeastern student. Grab your spot, join
            JUMP for a built-in crew, and we&apos;ll see you on the floor.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <a
              href="#"
              className="font-condensed font-black bg-saffron text-charcoal px-8 py-3 text-sm tracking-[0.2em] uppercase border-2 border-saffron hover:bg-cream hover:border-cream transition-colors"
            >
              Join Utsav
            </a>
            <a
              href="#"
              className="font-condensed font-black bg-transparent text-cream px-8 py-3 text-sm tracking-[0.2em] uppercase border-2 border-cream hover:bg-cream hover:text-crimson transition-colors"
            >
              Learn About JUMP
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-charcoal text-cream">
        <div className="overflow-hidden border-b-2 border-cream/15 py-3">
          <div className="flex whitespace-nowrap animate-marquee-slow">
            {[0, 1].map((g) => (
              <div key={g} className="flex shrink-0">
                {countries.map((c, i) => (
                  <span
                    key={`${g}-${i}`}
                    className="font-condensed font-bold text-cream/50 text-lg tracking-[0.15em] uppercase mx-5 flex items-center gap-5"
                  >
                    {c.flag} {c.name}
                    <span className="text-saffron/60">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p
            className="font-condensed font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
          >
            UTSAVFEST
          </p>
          <p className="font-body text-cream/40 text-sm mt-3">
            Northeastern University · Boston, MA
          </p>
          <p className="font-body text-cream/25 text-xs mt-12 pt-6 border-t border-cream/10">
            © 2026 NU Utsav. All rights reserved. · Mock V7 — Festival Bill
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
