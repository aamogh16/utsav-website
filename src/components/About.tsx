const stats = [
  { value: '3,600+', label: 'Followers' },
  { value: '15+', label: 'Affiliated Orgs' },
  { value: '4', label: 'Flagship Events' },
  { value: '300+', label: 'Per Event' },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left column: headline */}
          <div className="lg:sticky lg:top-32">
            <p className="font-body text-saffron text-[0.65rem] tracking-[0.35em] uppercase mb-6">
              Who We Are
            </p>
            <h2
              className="font-display text-charcoal leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              A community{' '}
              <em>rooted in culture,</em>
              <br />
              open to everyone.
            </h2>

            {/* Saffron accent rule */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-px bg-saffron" />
              <div className="w-4 h-px bg-saffron/40" />
            </div>
          </div>

          {/* Right column: body + stats */}
          <div className="lg:pt-16">
            <p className="font-body text-charcoal/65 text-lg leading-relaxed mb-14">
              Utsav is Northeastern University's South Asian cultural organization, representing
              students with heritage from India, Pakistan, Bangladesh, Bhutan, Sri Lanka, and Nepal.
              Through flagship events, community gatherings, and a network of affiliated dance teams
              and organizations, we celebrate where we come from — and build something new together.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-charcoal/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-condensed font-black text-saffron leading-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-body text-charcoal/45 text-xs tracking-[0.2em] uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
