// Heights vary to create a masonry feel — swap with real <Image> tags when photos are ready
const placeholders = [
  { id: 0, h: 'h-52' },
  { id: 1, h: 'h-72' },
  { id: 2, h: 'h-48' },
  { id: 3, h: 'h-64' },
  { id: 4, h: 'h-80' },
  { id: 5, h: 'h-56' },
  { id: 6, h: 'h-60' },
  { id: 7, h: 'h-48' },
  { id: 8, h: 'h-72' },
  { id: 9, h: 'h-52' },
  { id: 10, h: 'h-64' },
  { id: 11, h: 'h-56' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-body text-saffron text-[0.65rem] tracking-[0.35em] uppercase mb-4">
              In the Moment
            </p>
            <h2
              className="font-display text-cream"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Gallery
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nuutsav"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-cream/35 hover:text-saffron text-xs tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-2 shrink-0"
          >
            @nuutsav ↗
          </a>
        </div>

        {/* CSS columns masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className={`break-inside-avoid mb-2 w-full ${p.h} bg-cream/5 border border-cream/8 flex items-center justify-center`}
            >
              <span className="font-body text-cream/15 text-xs tracking-widest uppercase">
                Photo
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-cream/25 text-xs tracking-[0.2em] uppercase text-center mt-10">
          More on{' '}
          <a
            href="https://www.instagram.com/nuutsav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-saffron transition-colors duration-200"
          >
            Instagram ↗
          </a>
        </p>
      </div>
    </section>
  );
}
