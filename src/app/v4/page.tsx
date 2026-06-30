import { events } from '@/data/events';
import { team } from '@/data/team';
import { affiliates } from '@/data/affiliates';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Modern (V4)',
  description: 'Mock V4 — a modern, gradient/glass take on the Utsav homepage.',
};

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#team', label: 'Team' },
  { href: '#join', label: 'Join' },
];

const stats = [
  { value: '3,600+', label: 'Followers' },
  { value: '15+', label: 'Affiliated Orgs' },
  { value: '4', label: 'Flagship Events' },
  { value: '300+', label: 'Per Event' },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const gradientText =
  'bg-gradient-to-r from-saffron via-[#f0a04a] to-crimson bg-clip-text text-transparent';

export default function V4Page() {
  return (
    <div className="bg-[#0c0a08] text-cream min-h-screen">
      {/* ===== NAV (floating glass pill) ===== */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="flex items-center justify-between gap-4 bg-cream/[0.04] border border-cream/10 backdrop-blur-xl rounded-full pl-5 pr-2 py-2">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saffron to-crimson" />
            <span className="font-condensed font-bold text-cream text-lg tracking-widest uppercase">
              Utsav
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-cream/55 hover:text-cream text-xs tracking-[0.15em] uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#join"
            className="font-body font-semibold text-charcoal text-xs tracking-[0.15em] uppercase bg-gradient-to-r from-saffron to-crimson px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Join
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header
        id="top"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-[36rem] h-[36rem] rounded-full bg-saffron/20 blur-[130px] animate-float-orb pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[32rem] h-[32rem] rounded-full bg-crimson/20 blur-[130px] animate-float-orb pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#0c0a08_85%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-cream/[0.05] border border-cream/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
            <span className="font-body text-cream/70 text-[0.65rem] tracking-[0.25em] uppercase">
              Northeastern University · Boston
            </span>
          </span>

          <h1
            className="font-condensed font-black uppercase leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(4rem, 16vw, 13rem)' }}
          >
            <span className={`${gradientText} animate-gradient-pan`}>UTSAV</span>
          </h1>

          <p className="font-display italic text-cream/60 text-xl sm:text-2xl mt-6">
            South Asian Cultural Organization
          </p>
          <p className="font-body text-cream/45 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6">
            Celebrating the cultures of India, Pakistan, Bangladesh, Bhutan, Sri
            Lanka, and Nepal — through events, community, and connection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="#events"
              className="font-body font-semibold text-charcoal text-xs tracking-[0.2em] uppercase bg-gradient-to-r from-saffron to-crimson px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore Events
            </a>
            <a
              href="#join"
              className="font-body font-semibold text-cream text-xs tracking-[0.2em] uppercase bg-cream/[0.05] border border-cream/15 backdrop-blur-sm px-8 py-3.5 rounded-full hover:bg-cream/10 transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT / STATS ===== */}
      <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-saffron text-[0.65rem] tracking-[0.3em] uppercase mb-5">
            Who We Are
          </p>
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            A community rooted in culture,{' '}
            <span className={gradientText}>open to everyone.</span>
          </h2>
          <p className="font-body text-cream/50 text-lg leading-relaxed mt-6">
            Through flagship events, community gatherings, and a network of
            affiliated dance teams and organizations, we celebrate where we come
            from — and build something new together.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-cream/[0.03] border border-cream/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-saffron/30 transition-colors"
            >
              <p
                className={`font-condensed font-black leading-none ${gradientText}`}
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
              >
                {s.value}
              </p>
              <p className="font-body text-cream/45 text-[0.6rem] tracking-[0.2em] uppercase mt-3">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      <section id="events" className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="mb-14">
          <p className="font-body text-saffron text-[0.65rem] tracking-[0.3em] uppercase mb-4">
            The Year Ahead
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            What&apos;s On
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((e, i) => (
            <div
              key={e.id}
              className={`group relative bg-cream/[0.03] border border-cream/10 backdrop-blur-sm rounded-2xl p-7 overflow-hidden hover:border-cream/25 hover:bg-cream/[0.05] transition-all ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* glow accent */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: e.accentColor }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: e.accentColor }}
                  />
                  <span className="font-body text-cream/50 text-[0.6rem] tracking-[0.2em] uppercase">
                    {e.semester}
                    {e.month ? ` · ${e.month}` : ''}
                  </span>
                </div>
                <h3
                  className="font-display leading-tight"
                  style={{
                    fontSize:
                      i === 0
                        ? 'clamp(1.75rem, 3vw, 2.5rem)'
                        : 'clamp(1.35rem, 2.5vw, 1.75rem)',
                  }}
                >
                  {e.name}
                </h3>
                <p className="font-body text-cream/50 leading-relaxed mt-3 text-sm sm:text-base max-w-2xl">
                  {e.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-body text-saffron text-[0.65rem] tracking-[0.3em] uppercase mb-4">
              In the Moment
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Gallery
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nuutsav"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-cream/40 hover:text-saffron text-xs tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            @nuutsav ↗
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`bg-cream/[0.03] border border-cream/10 rounded-2xl flex items-center justify-center ${
                i === 0 || i === 5 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
            >
              <span className="font-body text-cream/20 text-[0.6rem] tracking-[0.25em] uppercase">
                Photo
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="text-center mb-14">
          <p className="font-body text-saffron text-[0.65rem] tracking-[0.3em] uppercase mb-4">
            2025–2026
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Meet the Board
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {team.map((m) => (
            <div
              key={m.id}
              className="bg-cream/[0.03] border border-cream/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center text-center hover:border-saffron/30 hover:bg-cream/[0.05] transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron to-crimson flex items-center justify-center mb-4">
                <span className="font-condensed font-black text-charcoal text-lg">
                  {initials(m.name)}
                </span>
              </div>
              <p className="font-display text-cream text-base leading-snug">
                {m.name}
              </p>
              <p className="font-body text-saffron text-[0.6rem] tracking-[0.15em] uppercase mt-1.5">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== JOIN ===== */}
      <section id="join" className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.03] backdrop-blur-sm p-8 sm:p-16">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-saffron/20 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-crimson/20 blur-[120px] pointer-events-none" />

          <div className="relative max-w-2xl">
            <p className="font-body text-saffron text-[0.65rem] tracking-[0.3em] uppercase mb-6">
              Get Involved
            </p>
            <h2
              className="font-display leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
            >
              Be part of{' '}
              <span className={gradientText}>something bigger.</span>
            </h2>
            <p className="font-body text-cream/55 text-lg leading-relaxed mt-6">
              Whether you&apos;re here for the culture, the community, or the
              chaos — there&apos;s a place for you in Utsav. Membership is open to
              all Northeastern students.
            </p>

            <div className="mt-10 rounded-2xl border border-cream/10 bg-cream/[0.03] p-6">
              <p className="font-condensed font-bold text-cream text-xl tracking-wide mb-2">
                JUMP — Big/Little Mentorship
              </p>
              <p className="font-body text-cream/50 text-sm leading-relaxed">
                JUMP pairs new Utsav members with returning ones. It&apos;s how
                you find your people fast — upperclassmen ready to show you the
                ropes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#"
                className="font-body font-semibold text-charcoal text-xs tracking-[0.2em] uppercase bg-gradient-to-r from-saffron to-crimson px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Join Utsav
              </a>
              <a
                href="#"
                className="font-body font-semibold text-cream text-xs tracking-[0.2em] uppercase bg-cream/[0.05] border border-cream/15 px-8 py-3.5 rounded-full hover:bg-cream/10 transition-colors"
              >
                Learn About JUMP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative border-t border-cream/10 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div>
              <p
                className={`font-condensed font-black leading-none tracking-tight ${gradientText}`}
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
              >
                UTSAV
              </p>
              <p className="font-body text-cream/40 text-sm mt-3">
                Northeastern University · Boston, MA
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="font-body text-cream/30 text-[0.6rem] tracking-[0.2em] uppercase mb-3">
                  Follow
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/nuutsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-cream/55 hover:text-saffron text-sm transition-colors"
                  >
                    Instagram ↗
                  </a>
                  <a
                    href="https://linktr.ee/nuutsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-cream/55 hover:text-saffron text-sm transition-colors"
                  >
                    Linktree ↗
                  </a>
                </div>
              </div>
              <div>
                <p className="font-body text-cream/30 text-[0.6rem] tracking-[0.2em] uppercase mb-3">
                  Navigate
                </p>
                <div className="flex flex-col gap-2">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="font-body text-cream/55 hover:text-cream text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-cream/10">
            <p className="font-body text-cream/30 text-[0.6rem] tracking-[0.2em] uppercase mb-4">
              Affiliated Organizations
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {affiliates.map((org) => (
                <span
                  key={org}
                  className="font-body text-cream/40 text-sm bg-cream/[0.03] border border-cream/10 rounded-full px-3 py-1"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>

          <p className="font-body text-cream/25 text-xs mt-12 pt-6 border-t border-cream/5">
            © 2026 NU Utsav. All rights reserved. · Mock V4 — Modern
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
