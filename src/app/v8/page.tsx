import { events } from '@/data/events';
import { team } from '@/data/team';
import { countries } from '@/data/countries';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Bold Grid (V8)',
  description: 'Mock V8 — a strict modular grid poster across the six nations.',
};

const navLinks = [
  { href: '#grid', label: 'Nations' },
  { href: '#events', label: 'Events' },
  { href: '#board', label: 'Board' },
  { href: '#join', label: 'Join' },
];

const stats = [
  { value: '6', label: 'Nations' },
  { value: '15+', label: 'Orgs' },
  { value: '4', label: 'Events' },
  { value: '3,600+', label: 'Followers' },
];

export default function V8Page() {
  return (
    <div className="bg-charcoal text-cream min-h-screen">
      {/* ===== NAV ===== */}
      <nav className="sticky top-0 z-50 bg-charcoal border-b-4 border-cream/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-condensed font-black text-2xl tracking-tight uppercase">
              Utsav
            </span>
            <span className="w-3 h-3 bg-saffron" />
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
            href="#join"
            className="font-condensed font-black text-charcoal bg-saffron px-4 py-1.5 text-sm tracking-[0.15em] uppercase border-2 border-saffron hover:bg-cream hover:border-cream transition-colors"
          >
            Join →
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header
        id="top"
        className="border-b-4 border-cream/15 grid grid-cols-1 lg:grid-cols-3"
      >
        <div className="lg:col-span-2 p-6 sm:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-cream/15 flex flex-col justify-center">
          <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase text-cream/50 mb-6">
            Northeastern University · Boston
          </p>
          <h1
            className="font-condensed font-black uppercase leading-[0.8] tracking-tighter"
            style={{ fontSize: 'clamp(4rem, 18vw, 16rem)' }}
          >
            UT<span className="text-saffron">S</span>AV
          </h1>
          <p className="font-display italic text-cream/60 text-lg sm:text-2xl mt-6 max-w-xl">
            The South Asian Cultural Organization — six nations, one grid.
          </p>
        </div>
        <div className="grid grid-rows-3">
          <div className="p-6 sm:p-8 border-b-2 border-cream/15 flex flex-col justify-center">
            <p className="font-body text-cream/50 text-xs tracking-[0.2em] uppercase">
              Representing
            </p>
            <p className="font-condensed font-black text-2xl sm:text-3xl uppercase mt-1">
              6 Nations
            </p>
          </div>
          <div className="p-6 sm:p-8 border-b-2 border-cream/15 flex items-center gap-1.5 flex-wrap">
            {countries.map((c) => (
              <span key={c.id} className="text-2xl sm:text-3xl" title={c.name}>
                {c.flag}
              </span>
            ))}
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center gap-3">
            <a
              href="#grid"
              className="font-condensed font-black bg-saffron text-charcoal px-6 py-3 text-sm tracking-[0.2em] uppercase text-center hover:bg-cream transition-colors"
            >
              Explore the Nations
            </a>
            <a
              href="#join"
              className="font-condensed font-black border-2 border-cream/40 text-cream px-6 py-3 text-sm tracking-[0.2em] uppercase text-center hover:border-cream transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
      </header>

      {/* ===== NATIONS GRID ===== */}
      <section id="grid" className="border-b-4 border-cream/15">
        <div className="bg-cream/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {countries.map((c, i) => {
            const text = c.light ? 'text-charcoal' : 'text-cream';
            const sub = c.light ? 'text-charcoal/70' : 'text-cream/80';
            const idc = c.light ? 'text-charcoal/30' : 'text-cream/40';
            return (
              <div
                key={c.id}
                className={`group aspect-square sm:aspect-[4/3] p-6 sm:p-8 flex flex-col justify-between ${text}`}
                style={{ backgroundColor: c.color }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-condensed font-black leading-none ${idc}`}
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-4xl sm:text-5xl leading-none group-hover:scale-110 transition-transform">
                    {c.flag}
                  </span>
                </div>
                <div>
                  <h2
                    className="font-condensed font-black uppercase leading-none tracking-tight"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    {c.name}
                  </h2>
                  <p className={`font-display italic text-lg sm:text-xl mt-2 ${sub}`}>
                    “{c.greeting}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== STATS GRID ===== */}
      <section className="border-b-4 border-cream/15">
        <div className="bg-cream/15 grid grid-cols-2 lg:grid-cols-4 gap-px">
          {stats.map((s) => (
            <div key={s.label} className="bg-charcoal p-6 sm:p-10">
              <p
                className="font-condensed font-black leading-none text-saffron"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
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

      {/* ===== EVENTS GRID ===== */}
      <section id="events" className="border-b-4 border-cream/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-6">
          <h2
            className="font-condensed font-black uppercase leading-none tracking-tight border-b-2 border-cream/20 pb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            The Events
          </h2>
        </div>
        <div className="bg-cream/15 grid grid-cols-1 md:grid-cols-2 gap-px">
          {events.map((e, i) => (
            <div
              key={e.id}
              className={`group bg-charcoal p-6 sm:p-8 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-4 h-12" style={{ backgroundColor: e.accentColor }} />
                <div>
                  <span className="font-condensed font-bold text-cream/50 text-xs tracking-[0.2em] uppercase block">
                    {e.semester}
                    {e.month ? ` · ${e.month}` : ''}
                  </span>
                  <h3
                    className="font-condensed font-black uppercase leading-none tracking-tight"
                    style={{
                      fontSize:
                        i === 0
                          ? 'clamp(2rem, 5vw, 3.5rem)'
                          : 'clamp(1.5rem, 3vw, 2.25rem)',
                    }}
                  >
                    {e.name}
                  </h3>
                </div>
              </div>
              <p className="font-body text-cream/55 leading-relaxed text-sm sm:text-base max-w-2xl">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BOARD GRID ===== */}
      <section id="board" className="border-b-4 border-cream/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-6">
          <div className="flex items-end justify-between gap-4 border-b-2 border-cream/20 pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              The Board
            </h2>
            <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-cream/40 mb-2">
              2025–26
            </p>
          </div>
        </div>
        <div className="bg-cream/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px">
          {team.map((m, i) => (
            <div
              key={m.id}
              className="group bg-charcoal p-5 hover:bg-saffron hover:text-charcoal transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-condensed font-black text-3xl leading-none text-cream/30 group-hover:text-charcoal/50 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-condensed font-bold text-[0.55rem] tracking-[0.2em] uppercase text-cream/30 group-hover:text-charcoal/50 transition-colors">
                  Photo
                </span>
              </div>
              <p className="font-condensed font-black text-base leading-tight uppercase">
                {m.name}
              </p>
              <p className="font-body text-saffron group-hover:text-charcoal text-[0.6rem] tracking-[0.15em] uppercase mt-1 transition-colors">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== JOIN ===== */}
      <section id="join" className="bg-saffron text-charcoal border-b-4 border-cream/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28">
          <p className="font-condensed font-black text-sm tracking-[0.3em] uppercase mb-6 text-charcoal/60">
            ✦ Get Involved
          </p>
          <h2
            className="font-condensed font-black uppercase leading-[0.85] tracking-tight max-w-4xl"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
          >
            One grid. Six cultures. Your spot.
          </h2>
          <p className="font-body text-charcoal/75 text-lg leading-relaxed max-w-2xl mt-8">
            Membership is open to all Northeastern students, no matter your
            background. Join Utsav, find your people through JUMP, and help build
            what comes next.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#"
              className="font-condensed font-black bg-charcoal text-cream px-8 py-3 text-sm tracking-[0.2em] uppercase border-2 border-charcoal hover:bg-cream hover:text-charcoal transition-colors"
            >
              Join Utsav
            </a>
            <a
              href="#"
              className="font-condensed font-black bg-transparent text-charcoal px-8 py-3 text-sm tracking-[0.2em] uppercase border-2 border-charcoal hover:bg-charcoal hover:text-cream transition-colors"
            >
              Learn About JUMP
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <p
            className="font-condensed font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
          >
            UTSAV<span className="text-saffron">.</span>
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
            © 2026 NU Utsav. All rights reserved. · Mock V8 — Bold Grid
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
