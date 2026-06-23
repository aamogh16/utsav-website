import { affiliates } from '@/data/affiliates';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-cream/8 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Wordmark */}
          <div>
            <p
              className="font-condensed font-black text-cream tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              UTSAV
            </p>
            <p className="font-body text-cream/30 text-sm mt-2">
              Northeastern University · Boston, MA
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="font-body text-cream/25 text-[0.6rem] tracking-[0.25em] uppercase mb-4">
                Follow
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://www.instagram.com/nuutsav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-cream/55 hover:text-saffron text-sm transition-colors duration-200"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://linktr.ee/nuutsav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-cream/55 hover:text-saffron text-sm transition-colors duration-200"
                >
                  Linktree ↗
                </a>
              </div>
            </div>

            <div>
              <p className="font-body text-cream/25 text-[0.6rem] tracking-[0.25em] uppercase mb-4">
                Navigate
              </p>
              <div className="flex flex-col gap-2.5">
                {['About', 'Calendar', 'Gallery', 'Team', 'Join'].map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className="font-body text-cream/55 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Affiliates */}
        <div className="mb-12 pt-10 border-t border-cream/8">
          <p className="font-body text-cream/25 text-[0.6rem] tracking-[0.25em] uppercase mb-5">
            Affiliated Organizations
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {affiliates.map((org, i) => (
              <span key={org} className="font-body text-cream/35 text-sm">
                {org}
                {i < affiliates.length - 1 && (
                  <span className="text-cream/15 ml-5">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-cream/5 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-body text-cream/20 text-xs">
            © {year} NU Utsav. All rights reserved.
          </p>
          <p className="font-body text-cream/20 text-xs">
            Northeastern University's South Asian Cultural Organization
          </p>
        </div>
      </div>
    </footer>
  );
}
