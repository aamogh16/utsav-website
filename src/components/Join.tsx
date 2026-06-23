export default function Join() {
  return (
    <section id="join" className="bg-charcoal py-24 lg:py-40 relative overflow-hidden">
      {/* Warm glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,_#2a1a0a_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-body text-saffron text-[0.65rem] tracking-[0.35em] uppercase mb-6">
            Get Involved
          </p>

          <h2
            className="font-display text-cream leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Be part of{' '}
            <em>something bigger.</em>
          </h2>

          <p className="font-body text-cream/50 text-lg leading-relaxed mb-12">
            Whether you're here for the culture, the community, or the chaos — there's a place for
            you in Utsav. Membership is open to all Northeastern students, no matter your
            background.
          </p>

          {/* JUMP callout */}
          <div className="border border-cream/10 p-7 mb-10 relative">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-saffron/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-saffron/40" />
            <p className="font-condensed font-bold text-cream text-xl tracking-wide mb-2">
              JUMP — Big/Little Mentorship
            </p>
            <p className="font-body text-cream/45 text-sm leading-relaxed">
              JUMP pairs new Utsav members with returning ones. It's how you find your people fast —
              upperclassmen who've been through it, ready to show you the ropes.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-saffron text-charcoal font-body font-semibold text-xs tracking-[0.2em] uppercase hover:bg-saffron/90 transition-colors duration-200"
            >
              Join Utsav
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-cream/20 text-cream font-body font-semibold text-xs tracking-[0.2em] uppercase hover:border-cream/45 transition-colors duration-200"
            >
              Learn About JUMP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
