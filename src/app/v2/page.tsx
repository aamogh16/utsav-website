import { events } from '@/data/events';
import { team } from '@/data/team';
import { affiliates } from '@/data/affiliates';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Festival Poster (V2)',
  description: 'Mock V2 — a bold, poster-style take on the Utsav homepage.',
};

const navLinks = [
  { href: '#lineup', label: 'Lineup' },
  { href: '#about', label: 'About' },
  { href: '#board', label: 'Board' },
  { href: '#join', label: 'Join' },
];

const stats = [
  { value: '3,600+', label: 'Followers' },
  { value: '15+', label: 'Affiliated Orgs' },
  { value: '4', label: 'Flagship Events' },
  { value: '300+', label: 'Per Event' },
];

const marqueeWords = [
  'DHOL BAAJE',
  'NATARAJ',
  'DANCE 4 ME',
  'SOUTH ASIAN WEEK',
  'CHAI & CHATS',
];

export default function V2Page() {
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
          <a
            href="#join"
            className="font-condensed font-black text-charcoal bg-saffron px-4 py-1.5 text-sm tracking-[0.15em] uppercase border-2 border-saffron hover:bg-cream hover:border-cream transition-colors"
          >
            Join →
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header id="top" className="relative border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
          {/* Eyebrow row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-charcoal pb-4 mb-8">
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              Northeastern University
            </p>
            <p className="font-condensed font-bold text-sm tracking-[0.25em] uppercase">
              Boston, MA · Est. on Campus
            </p>
          </div>

          {/* Giant wordmark */}
          <div className="relative">
            <h1
              className="font-condensed font-black uppercase leading-[0.8] tracking-tighter"
              style={{ fontSize: 'clamp(4.5rem, 22vw, 22rem)' }}
            >
              UT<span className="text-crimson">S</span>AV
            </h1>
            <span className="absolute -top-2 right-0 sm:right-6 rotate-6 bg-crimson text-cream font-condensed font-black text-xs sm:text-sm px-3 py-1.5 tracking-[0.2em] uppercase border-2 border-charcoal">
              South Asian
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6">
            <p className="font-display italic text-charcoal/70 max-w-md text-lg sm:text-xl">
              The South Asian Cultural Organization — culture, community, and a
              whole lot of dancing.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#lineup"
                className="font-condensed font-black bg-charcoal text-cream px-7 py-3 text-sm tracking-[0.2em] uppercase border-2 border-charcoal hover:bg-saffron hover:text-charcoal transition-colors"
              >
                See the Lineup
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

        {/* Marquee strip */}
        <div className="overflow-hidden bg-charcoal py-3 border-t-4 border-charcoal">
          <div className="flex whitespace-nowrap animate-marquee">
            {[0, 1].map((g) => (
              <div key={g} className="flex shrink-0">
                {marqueeWords.map((w, i) => (
                  <span
                    key={`${g}-${i}`}
                    className="font-condensed font-black text-cream text-xl sm:text-2xl tracking-[0.15em] uppercase mx-6 flex items-center gap-6"
                  >
                    {w}
                    <span className="text-saffron">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ===== STATS ===== */}
      <section className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 sm:p-8 border-charcoal ${
                i % 2 === 0 ? 'border-r-2' : ''
              } ${i < 2 ? 'border-b-2 lg:border-b-0' : ''} ${
                i === 1 ? 'lg:border-r-2' : ''
              } ${i === 2 ? 'lg:border-r-2' : ''}`}
            >
              <p
                className="font-condensed font-black leading-none text-crimson"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
              >
                {s.value}
              </p>
              <p className="font-condensed font-bold text-sm tracking-[0.2em] uppercase mt-2 text-charcoal/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="border-b-4 border-charcoal bg-saffron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="font-condensed font-black text-sm tracking-[0.3em] uppercase mb-6 text-charcoal/70">
            ✦ Who We Are
          </p>
          <h2
            className="font-condensed font-black uppercase leading-[0.9] tracking-tight max-w-5xl"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            A community rooted in culture, open to everyone.
          </h2>
          <p className="font-body text-charcoal/80 text-lg leading-relaxed max-w-2xl mt-8">
            Utsav represents students with heritage from India, Pakistan,
            Bangladesh, Bhutan, Sri Lanka, and Nepal. Through flagship events,
            community gatherings, and a network of affiliated dance teams, we
            celebrate where we come from — and build something new together.
          </p>
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
                {/* Accent block */}
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

                {/* Body */}
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

      {/* ===== GALLERY ===== */}
      <section className="border-b-4 border-charcoal bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2
              className="font-condensed font-black uppercase leading-none tracking-tight text-cream"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              In the Moment
            </h2>
            <a
              href="https://www.instagram.com/nuutsav"
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed font-black text-saffron hover:text-cream text-sm tracking-[0.2em] uppercase border-2 border-saffron hover:border-cream px-4 py-2 transition-colors"
            >
              @nuutsav ↗
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => {
              const accent =
                i === 1 ? 'bg-saffron' : i === 6 ? 'bg-crimson' : 'bg-cream/5';
              const tall = i === 2 || i === 5;
              return (
                <div
                  key={i}
                  className={`border-2 border-cream/30 flex items-center justify-center ${accent} ${
                    tall ? 'row-span-2 aspect-[3/5]' : 'aspect-square'
                  }`}
                >
                  <span
                    className={`font-condensed font-black text-xs tracking-[0.2em] uppercase ${
                      i === 1 || i === 6 ? 'text-charcoal/60' : 'text-cream/25'
                    }`}
                  >
                    Photo
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BOARD / TEAM ===== */}
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
            Be part of something bigger.
          </h2>
          <p className="font-body text-cream/80 text-lg leading-relaxed max-w-2xl mt-8">
            Whether you&apos;re here for the culture, the community, or the chaos
            — there&apos;s a place for you in Utsav. Membership is open to all
            Northeastern students, no matter your background.
          </p>

          {/* JUMP callout */}
          <div className="mt-10 border-4 border-cream p-6 max-w-2xl bg-crimson">
            <p className="font-condensed font-black text-cream text-2xl tracking-wide uppercase mb-2">
              JUMP — Big/Little Mentorship
            </p>
            <p className="font-body text-cream/75 text-sm leading-relaxed">
              JUMP pairs new Utsav members with returning ones. It&apos;s how you
              find your people fast — upperclassmen who&apos;ve been through it,
              ready to show you the ropes.
            </p>
          </div>

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
        {/* Affiliates marquee */}
        <div className="overflow-hidden border-b-2 border-cream/15 py-3">
          <div className="flex whitespace-nowrap animate-marquee-slow">
            {[0, 1].map((g) => (
              <div key={g} className="flex shrink-0">
                {affiliates.map((org, i) => (
                  <span
                    key={`${g}-${i}`}
                    className="font-condensed font-bold text-cream/50 text-lg tracking-[0.15em] uppercase mx-5 flex items-center gap-5"
                  >
                    {org}
                    <span className="text-saffron/60">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <p
                className="font-condensed font-black leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
              >
                UTSAV
              </p>
              <p className="font-body text-cream/40 text-sm mt-2">
                Northeastern University · Boston, MA
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="font-condensed font-bold text-cream/30 text-xs tracking-[0.2em] uppercase mb-3">
                  Follow
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/nuutsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-cream/60 hover:text-saffron text-sm transition-colors"
                  >
                    Instagram ↗
                  </a>
                  <a
                    href="https://linktr.ee/nuutsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-cream/60 hover:text-saffron text-sm transition-colors"
                  >
                    Linktree ↗
                  </a>
                </div>
              </div>
              <div>
                <p className="font-condensed font-bold text-cream/30 text-xs tracking-[0.2em] uppercase mb-3">
                  Navigate
                </p>
                <div className="flex flex-col gap-2">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="font-body text-cream/60 hover:text-cream text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="font-body text-cream/25 text-xs mt-12 pt-6 border-t border-cream/10">
            © 2026 NU Utsav. All rights reserved. · Mock V2 — Festival Poster
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
