import { events } from '@/data/events';
import { team } from '@/data/team';
import { countries } from '@/data/countries';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Passport (V6)',
  description: 'Mock V6 — poster style framed as a South Asian cultural passport.',
};

const navLinks = [
  { href: '#stamps', label: 'Stamps' },
  { href: '#lineup', label: 'Lineup' },
  { href: '#board', label: 'Board' },
  { href: '#join', label: 'Join' },
];

const rotations = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'];

export default function V6Page() {
  return (
    <div className="bg-cream text-charcoal min-h-screen">
      {/* ===== NAV ===== */}
      <nav className="sticky top-0 z-50 bg-charcoal border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-cream">
            <span className="font-condensed font-black text-2xl tracking-tight uppercase">
              Utsav
            </span>
            <span className="font-mono text-saffron text-xs tracking-widest hidden sm:inline">
              PASSPORT
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
            href="#join"
            className="font-condensed font-black text-charcoal bg-saffron px-4 py-1.5 text-sm tracking-[0.15em] uppercase border-2 border-saffron hover:bg-cream hover:border-cream transition-colors"
          >
            Apply →
          </a>
        </div>
      </nav>

      {/* ===== HERO — passport cover ===== */}
      <header id="top" className="border-b-4 border-charcoal bg-cream-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="border-4 border-charcoal bg-charcoal text-cream p-8 sm:p-14">
            <div className="flex items-center justify-between border-b-2 border-cream/25 pb-5 mb-8">
              <p className="font-mono text-cream/60 text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase">
                South Asian Cultural Organization
              </p>
              <p className="font-mono text-saffron text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase">
                Type: NU · Code: UTSAV
              </p>
            </div>

            <div className="flex gap-1.5 mb-6">
              {countries.map((c) => (
                <span key={c.id} className="text-2xl sm:text-3xl leading-none" title={c.name}>
                  {c.flag}
                </span>
              ))}
            </div>

            <h1
              className="font-condensed font-black uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 11vw, 9rem)' }}
            >
              One Passport
              <br />
              <span className="text-saffron">Six Cultures</span>
            </h1>

            <p className="font-display italic text-cream/60 text-lg sm:text-xl max-w-lg mt-6">
              Your entry into Northeastern&apos;s South Asian community. Stamped
              in India, Pakistan, Bangladesh, Bhutan, Sri Lanka, and Nepal.
            </p>

            {/* MRZ strip */}
            <div className="mt-10 bg-cream text-charcoal font-mono text-[0.6rem] sm:text-sm tracking-[0.15em] p-3 overflow-hidden whitespace-nowrap">
              <p>P&lt;USA UTSAV&lt;&lt;NORTHEASTERN&lt;&lt;SOUTH&lt;ASIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
              <p>BOSTON2026&lt;&lt;&lt;6NATIONS&lt;&lt;1COMMUNITY&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#stamps"
                className="font-condensed font-black bg-saffron text-charcoal px-7 py-3 text-sm tracking-[0.2em] uppercase border-2 border-saffron hover:bg-cream hover:border-cream transition-colors"
              >
                View the Stamps
              </a>
              <a
                href="#join"
                className="font-condensed font-black bg-transparent text-cream px-7 py-3 text-sm tracking-[0.2em] uppercase border-2 border-cream hover:bg-cream hover:text-charcoal transition-colors"
              >
                Get Yours
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== STAMPS — countries ===== */}
      <section id="stamps" className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-4 mb-14 border-b-2 border-charcoal pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              Entry Stamps
            </h2>
            <p className="font-mono text-charcoal/50 text-xs tracking-[0.2em] uppercase mb-2 hidden sm:block">
              6 / 6 collected
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {countries.map((c, i) => (
              <div key={c.id} className="flex justify-center py-2">
                <div
                  className={`w-full max-w-xs bg-cream p-5 border-[3px] border-dashed transition-transform hover:rotate-0 ${rotations[i % rotations.length]}`}
                  style={{ borderColor: c.color }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-mono text-[0.6rem] tracking-[0.25em] uppercase font-bold"
                      style={{ color: c.color }}
                    >
                      ✦ Admitted ✦
                    </span>
                    <span className="text-3xl leading-none">{c.flag}</span>
                  </div>
                  <h3
                    className="font-condensed font-black uppercase leading-none tracking-tight"
                    style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
                  >
                    {c.name}
                  </h3>
                  <p className="font-display italic text-charcoal/65 text-lg mt-2">
                    “{c.greeting}”
                  </p>
                  <div className="mt-4 pt-3 border-t border-charcoal/15 flex items-center justify-between">
                    <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-charcoal/45">
                      Utsav · No. {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-mono text-[0.6rem] tracking-[0.2em] uppercase font-bold"
                      style={{ color: c.color }}
                    >
                      Valid
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LINEUP / EVENTS ===== */}
      <section id="lineup" className="border-b-4 border-charcoal bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-4 mb-12 border-b-2 border-cream/20 pb-4">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              The Lineup
            </h2>
            <p className="font-mono text-cream/40 text-xs tracking-[0.2em] uppercase mb-2 hidden sm:block">
              {events.length} stops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((e, i) => (
              <div
                key={e.id}
                className={`group relative border-2 border-cream/25 bg-charcoal overflow-hidden flex flex-col ${
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
                  <span className="font-mono text-cream/90 text-[0.6rem] tracking-[0.2em] uppercase border border-cream/60 px-2 py-1 self-start">
                    {e.semester}
                    {e.month ? ` · ${e.month}` : ''}
                  </span>
                </div>
                <div className="p-6 flex-1 border-t-2 md:border-t-0 border-cream/25">
                  <h3
                    className="font-condensed font-black uppercase leading-none tracking-tight"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
                  >
                    {e.name}
                  </h3>
                  <p className="font-body text-cream/60 leading-relaxed mt-4 text-sm sm:text-base">
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
              Border Control
            </h2>
            <p className="font-mono text-charcoal/50 text-xs tracking-[0.2em] uppercase mb-2">
              The Board · 25–26
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((m, i) => (
              <div
                key={m.id}
                className="border-2 border-charcoal bg-cream group hover:bg-charcoal transition-colors"
              >
                <div className="aspect-square border-b-2 border-charcoal group-hover:border-cream/30 flex items-start justify-between p-3 transition-colors">
                  <span className="font-mono text-xs leading-none text-charcoal/40 group-hover:text-saffron transition-colors">
                    No.{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-charcoal/30 group-hover:text-cream/40 transition-colors">
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
          <p className="font-mono text-cream/70 text-xs tracking-[0.3em] uppercase mb-6">
            ✦ Apply for Entry
          </p>
          <h2
            className="font-condensed font-black uppercase leading-[0.85] tracking-tight text-cream max-w-4xl"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
          >
            Stamp your passport.
          </h2>
          <p className="font-body text-cream/80 text-lg leading-relaxed max-w-2xl mt-8">
            No visa required. Membership is open to all Northeastern students — and
            JUMP, our Big/Little mentorship program, pairs new members with
            returning ones so you find your people fast.
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
          <p className="font-mono text-cream/40 text-xs tracking-[0.2em] uppercase mt-4">
            Northeastern University · Boston, MA
          </p>
          <p className="font-body text-cream/25 text-xs mt-12 pt-6 border-t border-cream/10">
            © 2026 NU Utsav. All rights reserved. · Mock V6 — Passport
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
