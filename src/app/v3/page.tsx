import { events } from '@/data/events';
import { team } from '@/data/team';
import { affiliates } from '@/data/affiliates';
import VersionSwitcher from '@/components/VersionSwitcher';

export const metadata = {
  title: 'NU Utsav — Editorial Minimal (V3)',
  description: 'Mock V3 — a quiet, editorial take on the Utsav homepage.',
};

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#programme', label: 'Programme' },
  { href: '#board', label: 'Board' },
  { href: '#join', label: 'Join' },
];

const stats = [
  { value: '3,600+', label: 'Followers' },
  { value: '15+', label: 'Affiliated Orgs' },
  { value: '4', label: 'Flagship Events' },
  { value: '300+', label: 'Per Event' },
];

export default function V3Page() {
  return (
    <div className="bg-cream text-charcoal min-h-screen selection:bg-saffron/20">
      {/* ===== NAV ===== */}
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-xl tracking-wide text-charcoal"
          >
            Utsav
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-charcoal/55 hover:text-charcoal text-[0.7rem] tracking-[0.25em] uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header
        id="top"
        className="max-w-3xl mx-auto px-6 pt-28 pb-24 sm:pt-40 sm:pb-32 text-center"
      >
        <p className="font-body text-saffron text-[0.65rem] tracking-[0.4em] uppercase mb-10">
          Northeastern University · Boston
        </p>
        <h1
          className="font-display leading-[1.05] text-charcoal"
          style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)' }}
        >
          A celebration of
          <br />
          <em className="text-saffron">South Asian</em> culture.
        </h1>
        <div className="flex items-center justify-center gap-4 my-10">
          <span className="w-12 h-px bg-charcoal/20" />
          <span className="font-body text-charcoal/35 text-[0.6rem] tracking-[0.3em] uppercase">
            Est. at Northeastern
          </span>
          <span className="w-12 h-px bg-charcoal/20" />
        </div>
        <p className="font-body text-charcoal/55 text-lg leading-relaxed max-w-xl mx-auto">
          Utsav is Northeastern&apos;s undergraduate South Asian cultural
          organization — celebrating the cultures of India, Pakistan,
          Bangladesh, Bhutan, Sri Lanka, and Nepal.
        </p>
        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href="#programme"
            className="font-body text-charcoal text-[0.7rem] tracking-[0.25em] uppercase border-b border-charcoal pb-1 hover:text-saffron hover:border-saffron transition-colors"
          >
            View the Programme
          </a>
          <a
            href="#join"
            className="font-body text-charcoal/50 text-[0.7rem] tracking-[0.25em] uppercase hover:text-charcoal transition-colors"
          >
            Join Us →
          </a>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20 sm:py-28 border-t border-charcoal/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-saffron text-[0.6rem] tracking-[0.3em] uppercase mb-5">
              Who We Are
            </p>
            <h2
              className="font-display leading-tight text-charcoal"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              A community <em>rooted in culture.</em>
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <p className="font-body text-charcoal/60 text-lg leading-relaxed">
              Through flagship events, community gatherings, and a network of
              affiliated dance teams and organizations, we celebrate where we
              come from — and build something new together. Membership is open to
              every Northeastern student, no matter their background.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 pt-10 border-t border-charcoal/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-charcoal leading-none"
                    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
                  >
                    {s.value}
                  </p>
                  <p className="font-body text-charcoal/40 text-[0.6rem] tracking-[0.2em] uppercase mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMME / EVENTS ===== */}
      <section
        id="programme"
        className="max-w-5xl mx-auto px-6 py-20 sm:py-28 border-t border-charcoal/10"
      >
        <div className="text-center mb-16">
          <p className="font-body text-saffron text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            The Year Ahead
          </p>
          <h2
            className="font-display text-charcoal"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Programme of Events
          </h2>
        </div>

        <div className="border-t border-charcoal/10">
          {events.map((e, i) => (
            <div
              key={e.id}
              className="group grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline py-8 border-b border-charcoal/10 hover:bg-charcoal/[0.015] transition-colors"
            >
              <div className="sm:col-span-1 font-display text-charcoal/25 text-lg">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="sm:col-span-7">
                <h3 className="font-display text-charcoal text-2xl sm:text-3xl leading-tight">
                  {e.name}
                </h3>
                <p className="font-body text-charcoal/55 leading-relaxed mt-3 text-sm sm:text-base max-w-xl">
                  {e.description}
                </p>
              </div>
              <div className="sm:col-span-4 sm:text-right">
                <span className="inline-flex items-center gap-2 font-body text-[0.65rem] tracking-[0.2em] uppercase text-charcoal/45">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: e.accentColor }}
                  />
                  {e.semester}
                  {e.month ? ` · ${e.month}` : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20 sm:py-28 border-t border-charcoal/10">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-body text-saffron text-[0.6rem] tracking-[0.3em] uppercase mb-4">
              In the Moment
            </p>
            <h2
              className="font-display text-charcoal"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Gallery
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nuutsav"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-charcoal/45 hover:text-saffron text-[0.7rem] tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            @nuutsav ↗
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            'aspect-[4/5]',
            'aspect-square sm:mt-12',
            'aspect-[4/5]',
            'aspect-square',
            'aspect-[4/5] sm:-mt-12',
            'aspect-square',
          ].map((cls, i) => (
            <div
              key={i}
              className={`${cls} bg-charcoal/[0.04] border border-charcoal/10 flex items-center justify-center`}
            >
              <span className="font-body text-charcoal/20 text-[0.6rem] tracking-[0.3em] uppercase">
                Photo
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BOARD / TEAM ===== */}
      <section
        id="board"
        className="max-w-5xl mx-auto px-6 py-20 sm:py-28 border-t border-charcoal/10"
      >
        <div className="text-center mb-16">
          <p className="font-body text-saffron text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            2025–2026
          </p>
          <h2
            className="font-display text-charcoal"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            The Executive Board
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {team.map((m, i) => (
            <div
              key={m.id}
              className={`flex items-baseline justify-between gap-4 py-5 border-b border-charcoal/10 ${
                i < 2 ? 'sm:border-t' : ''
              }`}
            >
              <p className="font-display text-charcoal text-xl">{m.name}</p>
              <p className="font-body text-charcoal/45 text-[0.65rem] tracking-[0.2em] uppercase text-right">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== JOIN ===== */}
      <section
        id="join"
        className="max-w-3xl mx-auto px-6 py-24 sm:py-32 border-t border-charcoal/10 text-center"
      >
        <p className="font-body text-saffron text-[0.6rem] tracking-[0.3em] uppercase mb-8">
          Get Involved
        </p>
        <h2
          className="font-display leading-tight text-charcoal"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
        >
          Be part of <em>something bigger.</em>
        </h2>
        <p className="font-body text-charcoal/55 text-lg leading-relaxed max-w-xl mx-auto mt-8">
          Whether you&apos;re here for the culture, the community, or the chaos —
          there&apos;s a place for you in Utsav.
        </p>

        <div className="mt-12 mx-auto max-w-md text-left border-t border-b border-charcoal/10 py-8">
          <p className="font-display text-charcoal text-lg mb-2">
            JUMP — Big/Little Mentorship
          </p>
          <p className="font-body text-charcoal/50 text-sm leading-relaxed">
            JUMP pairs new Utsav members with returning ones — upperclassmen
            who&apos;ve been through it, ready to show you the ropes.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href="#"
            className="font-body text-charcoal text-[0.7rem] tracking-[0.25em] uppercase border-b border-charcoal pb-1 hover:text-saffron hover:border-saffron transition-colors"
          >
            Join Utsav
          </a>
          <a
            href="#"
            className="font-body text-charcoal/50 text-[0.7rem] tracking-[0.25em] uppercase hover:text-charcoal transition-colors"
          >
            Learn About JUMP →
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="font-display text-2xl text-charcoal mb-4">Utsav</p>
          <p className="font-body text-charcoal/40 text-[0.65rem] tracking-[0.2em] uppercase mb-10">
            Northeastern University · Boston, MA
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-2xl mx-auto mb-10">
            {affiliates.map((org, i) => (
              <span
                key={org}
                className="font-body text-charcoal/35 text-xs"
              >
                {org}
                {i < affiliates.length - 1 && (
                  <span className="text-charcoal/15 ml-4">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/nuutsav"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-charcoal/50 hover:text-saffron text-[0.7rem] tracking-[0.2em] uppercase transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="https://linktr.ee/nuutsav"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-charcoal/50 hover:text-saffron text-[0.7rem] tracking-[0.2em] uppercase transition-colors"
            >
              Linktree ↗
            </a>
          </div>

          <p className="font-body text-charcoal/25 text-xs pt-8 border-t border-charcoal/10">
            © 2026 NU Utsav · Mock V3 — Editorial Minimal
          </p>
        </div>
      </footer>

      <VersionSwitcher />
    </div>
  );
}
