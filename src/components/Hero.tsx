export default function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,_#2a1a0a_0%,_#16120E_65%)]" />

      {/* Decorative side marks */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1.5">
        <div className="w-8 h-px bg-saffron/50" />
        <div className="w-4 h-px bg-saffron/25" />
        <div className="w-6 h-px bg-saffron/35" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1.5 items-end">
        <div className="w-8 h-px bg-saffron/50" />
        <div className="w-4 h-px bg-saffron/25" />
        <div className="w-6 h-px bg-saffron/35" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
        <p className="font-body text-saffron text-[0.65rem] tracking-[0.35em] uppercase mb-8">
          Northeastern University · Boston, MA
        </p>

        <h1
          className="font-condensed font-black text-cream uppercase leading-none"
          style={{
            fontSize: 'clamp(5rem, 20vw, 20rem)',
            letterSpacing: '-0.02em',
          }}
        >
          UTSAV
        </h1>

        <p
          className="font-display italic text-cream/50 mt-4 mx-auto max-w-lg"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.25rem)' }}
        >
          South Asian Cultural Organization
        </p>

        {/* CTAs */}
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#calendar"
            className="px-8 py-3 bg-saffron text-charcoal font-body font-semibold text-xs tracking-[0.2em] uppercase hover:bg-saffron/90 transition-colors duration-200"
          >
            Our Events
          </a>
          <a
            href="#join"
            className="px-8 py-3 border border-cream/25 text-cream font-body font-semibold text-xs tracking-[0.2em] uppercase hover:border-cream/50 hover:text-cream transition-colors duration-200"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-body text-cream/25 text-[0.6rem] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}
