import { events } from '@/data/events';
import { team } from '@/data/team';
import { countries } from '@/data/countries';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Six Nations (V5)',
  description: 'Mock V5 — poster style, built around the six South Asian nations.',
};

const navLinks = [
  { href: '#nations', label: 'Nations' },
  { href: '#lineup', label: 'Lineup' },
  { href: '#board', label: 'Board' },
  { href: '#join', label: 'Join' },
];

const stats = [
  { value: '6', label: 'Nations' },
  { value: '15+', label: 'Affiliated Orgs' },
  { value: '4', label: 'Flagship Events' },
  { value: '3,600+', label: 'Followers' },
];

export default function V5Page() {
  return (
    <div className="bg-cream text-charcoal min-h-screen">
      {/* ===== NAV ===== */}
      <nav className="sticky top-0 z-50 bg-charcoal border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-cream">
            <span className="font-condensed font-black text-2xl tracking-tight uppercase">
              Utsav
            </span>
            <span className="text-saffron text-xl">✦</span>
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
          <div className="hidden sm:flex gap-0.5">
            {countries.map((c) => (
              <span key={c.id} className="text-lg leading-none" title={c.name}>
                {c.flag}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header id="top" className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-charcoal pb-4 mb-8">
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              Northeastern University · Boston
            </p>
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              India · Pakistan · Bangladesh · Bhutan · Sri Lanka · Nepal
            </p>
          </div>

          <h1
            className="font-condensed font-black uppercase leading-[0.82] tracking-tighter"
            style={{ fontSize: 'clamp(3.5rem, 15vw, 15rem)' }}
          >
            Six Nations
            <br />
            <span className="text-crimson">One Stage</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8">
            <p className="font-display italic text-charcoal/70 max-w-md text-lg sm:text-xl">
              One organization for the whole of South Asia — six cultures,
              countless stories, and a single celebration.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#nations"
                className="font-condensed font-black bg-charcoal text-cream px-7 py-3 text-sm tracking-[0.2em] uppercase border-2 border-charcoal hover:bg-saffron hover:text-charcoal transition-colors"
              >
                Meet the Nations
              </a>
              <a
                href="#join"
                className="font-condensed font-black bg-cream text-charcoal px-7 py-3 text-sm tracking-[0.2em] uppercase border-2 border-charcoal hover:bg-charcoal hover:text-cream transition-colors"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== NATIONS — full-bleed color bands ===== */}
      <section id="nations" className="border-b-4 border-charcoal">
        {countries.map((c, i) => {
          const text = c.light ? 'text-charcoal' : 'text-cream';
          const sub = c.light ? 'text-charcoal/70' : 'text-cream/75';
          return (
            <div
              key={c.id}
              className={`group ${
                i > 0 ? 'border-t-2 border-charcoal' : ''
              } ${text}`}
              style={{ backgroundColor: c.color }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 sm:py-9 flex items-center gap-5 sm:gap-8">
                <span
                  className="font-condensed font-black leading-none opacity-50 shrink-0 w-14 sm:w-24"
                  style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="leading-none shrink-0"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
                >
                  {c.flag}
                </span>
                <h2
                  className="font-condensed font-black uppercase leading-none tracking-tight flex-1 group-hover:translate-x-2 transition-transform"
                  style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}
                >
                  {c.name}
                </h2>
                <span
                  className={`hidden sm:block font-display italic text-right ${sub}`}
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
                >
                  “{c.greeting}”
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b-4 border-charcoal bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 sm:p-8 border-cream/15 ${
                i % 2 === 0 ? 'border-r-2' : ''
              } ${i < 2 ? 'border-b-2 lg:border-b-0' : ''} ${
                i === 1 ? 'lg:border-r-2' : ''
              } ${i === 2 ? 'lg:border-r-2' : ''}`}
            >
              <p
                className="font-condensed font-black leading-none text-saffron"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
              >
                {s.value}
              </p>
              <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase mt-2 text-cream/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LINEUP / EVENTS ===== */}
      <section id="lineup" className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-4 mb-12 border-b-2 border-charcoal pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              The Lineup
            </h2>
            <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-2 hidden sm:block">
              {events.length} Events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((e, i) => (
              <div
                key={e.id}
                className={`group relative border-4 border-charcoal bg-cream overflow-hidden flex flex-col ${
                  i === 0 ? 'md:col-span-2 md:flex-row' : ''
                }`}
              >
                <div
                  className={`shrink-0 flex items-start justify-between p-6 ${
                    i === 0 ? 'md:w-72' : ''
                  }`}
                  style={{ backgroundColor: e.accentColor }}
                >
                  <span
                    className="font-condensed font-black text-cream leading-none"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-condensed font-black text-cream/90 text-xs tracking-[0.2em] uppercase border-2 border-cream/60 px-2 py-1 self-start">
                    {e.semester}
                    {e.month ? ` · ${e.month}` : ''}
                  </span>
                </div>
                <div className="p-6 flex-1 border-t-4 md:border-t-0 border-charcoal">
                  <h3
                    className="font-condensed font-black uppercase leading-none tracking-tight"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  >
                    {e.name}
                  </h3>
                  <p className="font-body text-charcoal/70 leading-relaxed mt-4 text-sm sm:text-base">
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOARD ===== */}
      <section id="board" className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-4 mb-12 border-b-2 border-charcoal pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              The Board
            </h2>
            <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-2">
              2025–26
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((m, i) => (
              <div
                key={m.id}
                className="border-2 border-charcoal bg-cream group hover:bg-charcoal transition-colors"
              >
                <div className="aspect-square border-b-2 border-charcoal group-hover:border-cream/30 flex items-start justify-between p-3 transition-colors">
                  <span className="font-condensed font-black text-3xl leading-none text-charcoal/30 group-hover:text-saffron transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-condensed font-bold text-[0.55rem] tracking-[0.2em] uppercase text-charcoal/30 group-hover:text-cream/40 transition-colors">
                    Photo
                  </span>
                </div>
                <div className="p-3 group-hover:text-cream transition-colors">
                  <p className="font-condensed font-black text-base leading-tight uppercase">
                    {m.name}
                  </p>
                  <p className="font-body text-saffron text-[0.6rem] tracking-[0.15em] uppercase mt-1">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN ===== */}
      <section id="join" className="bg-crimson border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28">
          <p className="font-condensed font-black text-sm tracking-[0.3em] uppercase mb-6 text-cream/70">
            ✦ Get Involved
          </p>
          <h2
            className="font-condensed font-black uppercase leading-[0.85] tracking-tight text-cream max-w-4xl"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
          >
            Six cultures. One community. Yours.
          </h2>
          <p className="font-body text-cream/80 text-lg leading-relaxed max-w-2xl mt-8">
            Wherever your roots are across South Asia — or wherever you&apos;re
            simply curious — there&apos;s a place for you in Utsav. Membership is
            open to all Northeastern students.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p
            className="font-condensed font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
          >
            UTSAV
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
            {countries.map((c) => (
              <span
                key={c.id}
                className="font-condensed font-bold text-cream/60 text-sm tracking-[0.15em] uppercase flex items-center gap-2"
              >
                <span>{c.flag}</span> {c.name}
              </span>
            ))}
          </div>
          <p className="font-body text-cream/25 text-xs mt-12 pt-6 border-t border-cream/10">
            © 2026 NU Utsav. All rights reserved. · Mock V5 — Six Nations
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
