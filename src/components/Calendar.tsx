import { events } from '@/data/events';

const semesterBadge: Record<string, string> = {
  Fall: 'bg-saffron/10 text-saffron border-saffron/20',
  Spring: 'bg-emerald-800/10 text-emerald-700 border-emerald-700/20',
  Ongoing: 'bg-charcoal/5 text-warm-gray border-charcoal/10',
};

export default function Calendar() {
  const featured = events.filter((e) => e.featured);
  const ongoing = events.filter((e) => !e.featured);

  return (
    <section id="calendar" className="bg-cream-muted py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-body text-saffron text-[0.65rem] tracking-[0.35em] uppercase mb-4">
            The Year Ahead
          </p>
          <h2
            className="font-display text-charcoal"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            What's On
          </h2>
        </div>

        {/* Featured events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
          {featured.map((event, i) => (
            <div
              key={event.id}
              className={`relative bg-cream p-8 md:p-10 group hover:bg-cream-muted transition-colors duration-200 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Colored left accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: event.accentColor }}
              />

              <div className="flex items-start justify-between gap-6 mb-5">
                <div>
                  <span
                    className={`inline-block font-body text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border mb-4 ${semesterBadge[event.semester]}`}
                  >
                    {event.semester}
                    {event.month ? ` · ${event.month}` : ''}
                  </span>
                  <h3
                    className="font-display text-charcoal leading-tight"
                    style={{
                      fontSize:
                        i === 0
                          ? 'clamp(1.75rem, 3vw, 2.5rem)'
                          : 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    }}
                  >
                    {event.name}
                  </h3>
                </div>
                <span className="text-charcoal/20 group-hover:text-saffron transition-colors duration-200 text-xl shrink-0 mt-1">
                  →
                </span>
              </div>

              <p className="font-body text-charcoal/55 leading-relaxed text-sm md:text-base">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ongoing / smaller events */}
        {ongoing.length > 0 && (
          <div className="mt-px bg-charcoal/10 border-x border-b border-charcoal/10">
            {ongoing.map((event) => (
              <div
                key={event.id}
                className="relative bg-cream p-6 md:p-8 group hover:bg-cream-muted transition-colors duration-200 flex items-center gap-6"
              >
                <div
                  className="w-1 self-stretch shrink-0 rounded-full"
                  style={{ backgroundColor: event.accentColor }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-block font-body text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border mb-2 ${semesterBadge[event.semester]}`}
                      >
                        {event.semester}
                      </span>
                      <h3 className="font-display text-charcoal text-xl">{event.name}</h3>
                    </div>
                    <span className="text-charcoal/20 group-hover:text-saffron transition-colors duration-200 text-xl shrink-0">
                      →
                    </span>
                  </div>
                  <p className="font-body text-charcoal/55 text-sm leading-relaxed mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
