'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const versions = [
  { href: '/', label: 'V1', title: 'Editorial' },
  { href: '/v2', label: 'V2', title: 'Poster' },
  { href: '/v3', label: 'V3', title: 'Minimal' },
  { href: '/v4', label: 'V4', title: 'Modern' },
  { href: '/v5', label: 'V5', title: 'Six Nations' },
  { href: '/v6', label: 'V6', title: 'Passport' },
  { href: '/v7', label: 'V7', title: 'Festival Bill' },
  { href: '/v8', label: 'V8', title: 'Bold Grid' },
];

export default function VersionSwitcher() {
  const pathname = usePathname();
  const current = versions.find((v) => v.href === pathname);

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-md"
      style={{ zIndex: 10000 }}
    >
      <div className="flex items-center gap-1 bg-charcoal/90 backdrop-blur-md border border-cream/15 rounded-full pl-3 pr-1.5 py-1.5 shadow-2xl shadow-black/40">
        <span className="hidden sm:inline shrink-0 font-body text-[0.55rem] tracking-[0.2em] uppercase text-cream/40 mr-1">
          {current?.title ?? 'Mock'}
        </span>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {versions.map((v) => {
            const active = v.href === pathname;
            return (
              <Link
                key={v.href}
                href={v.href}
                title={v.title}
                className={`shrink-0 px-3 py-1 rounded-full font-body text-xs tracking-[0.1em] transition-colors duration-200 ${
                  active
                    ? 'bg-saffron text-charcoal font-semibold'
                    : 'text-cream/55 hover:text-cream'
                }`}
              >
                {v.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
