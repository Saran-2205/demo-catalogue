"use client";

interface Site {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  site: Site;
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8-.1-.86-.2-2.2.04-3.15.22-.88 1.4-5.65 1.4-5.65s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.78 1.53 1.71 0 1.04-.66 2.6-.99 4.04-.28 1.2.6 2.18 1.8 2.18 2.16 0 3.82-2.28 3.82-5.57 0-2.91-2.09-4.95-5.07-4.95-3.46 0-5.49 2.6-5.49 5.28 0 1.05.4 2.17.9 2.78.1.12.11.23.08.35l-.34 1.36c-.05.22-.17.27-.38.16-1.42-.66-2.3-2.74-2.3-4.42 0-3.6 2.61-6.9 7.53-6.9 3.95 0 7.02 2.82 7.02 6.58 0 3.93-2.48 7.09-5.92 7.09-1.16 0-2.24-.6-2.61-1.31l-.71 2.7c-.26.99-.96 2.23-1.43 2.99A10.04 10.04 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export default function Footer({ site }: Props) {
  return (
    <footer className="py-[clamp(1rem,1.5vw,1.25rem)] px-[clamp(1.5rem,4vw,3.75rem)] bg-surface border-t border-line">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-x-3 gap-y-1 flex-wrap justify-center">
          <span className="font-heading text-[clamp(0.8125rem,0.75vw,0.9375rem)] font-[600] tracking-[-0.01em] text-text">
            {site.name}
          </span>
          <span className="text-[clamp(0.625rem,0.6vw,0.6875rem)] text-black/25">
            &copy; {new Date().getFullYear()}
          </span>
          <span className="w-[0.1875rem] h-[0.1875rem] rounded-full bg-black/15" />
          <a href={`mailto:${site.email}`} className="relative text-[clamp(0.6875rem,0.65vw,0.75rem)] no-underline transition-colors duration-200 hover:text-accent text-black/45">
            {site.email}
          </a>
          <span className="w-[0.1875rem] h-[0.1875rem] rounded-full bg-black/15" />
          <a href={`tel:${site.phone}`} className="relative text-[clamp(0.6875rem,0.65vw,0.75rem)] no-underline transition-colors duration-200 hover:text-accent text-black/45">
            {site.phone}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href="#" aria-label="Instagram" className="w-[1.625rem] h-[1.625rem] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 text-black/30 border border-black/10">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Pinterest" className="w-[1.625rem] h-[1.625rem] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 text-black/30 border border-black/10">
            <PinterestIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
