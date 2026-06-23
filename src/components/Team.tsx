'use client';

import { useRef } from 'react';
import { team } from '@/data/team';

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section id="team" className="bg-cream py-24 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-body text-saffron text-[0.65rem] tracking-[0.35em] uppercase mb-4">
              2025–2026
            </p>
            <h2
              className="font-display text-charcoal"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Meet the Board
            </h2>
          </div>

          {/* Arrow controls — desktop only */}
          <div className="hidden md:flex gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 border border-charcoal/20 hover:border-saffron hover:text-saffron text-charcoal/50 flex items-center justify-center transition-colors duration-200"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 border border-charcoal/20 hover:border-saffron hover:text-saffron text-charcoal/50 flex items-center justify-center transition-colors duration-200"
            >
              →
            </button>
          </div>
        </div>

        {/* Swipeable carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 pb-4"
        >
          {team.map((member) => (
            <div
              key={member.id}
              className="snap-start shrink-0 w-52 md:w-60 flex flex-col gap-4 group"
            >
              {/* Photo placeholder */}
              <div className="w-full aspect-[3/4] bg-cream-muted border border-charcoal/8 flex items-end justify-start p-3 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron/20 group-hover:border-saffron/50 transition-colors duration-200"
                />
                <span className="font-body text-charcoal/20 text-[0.6rem] tracking-widest uppercase">
                  Photo
                </span>
              </div>

              {/* Info */}
              <div>
                <p className="font-display text-charcoal font-semibold text-base leading-snug">
                  {member.name}
                </p>
                <p className="font-body text-saffron text-[0.6rem] tracking-[0.2em] uppercase mt-1.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        <p className="md:hidden font-body text-charcoal/30 text-[0.6rem] tracking-[0.2em] uppercase text-center mt-6">
          Swipe to explore
        </p>
      </div>
    </section>
  );
}
