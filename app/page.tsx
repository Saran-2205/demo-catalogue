import Image from "next/image";

export default function Home() {
  return (
    <main className="font-body min-h-dvh">
      {/* ─── Hero ─── */}
      <div className="min-h-dvh flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,4rem)] relative overflow-hidden">
        <p className="font-display text-[clamp(6rem,20vw,16rem)] font-[400] leading-[0.8] m-0 text-accent/[0.04] absolute top-[8%] left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap animate-fade-up">
          Catalogue
        </p>
        <div className="relative z-10 text-center max-w-[48rem]">
          <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent animate-fade-up [animation-delay:0.1s]">
            Curated Collection
          </p>
          <div className="w-8 h-[0.0625rem] bg-accent/[0.3] mx-auto my-6 animate-fade-up [animation-delay:0.2s]" />
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-[400] leading-[1.08] tracking-[-0.03em] m-0 text-text animate-fade-up [animation-delay:0.3s]">
            Demo Catalogue
          </h1>
          <p className="mt-6 m-0 text-[clamp(1rem,1.1vw,1.1875rem)] text-muted leading-[1.7] max-w-[36rem] mx-auto font-[400] animate-fade-up [animation-delay:0.4s]">
            Curated demo templates for local businesses and creative studios &mdash; crafted with care, ready to explore.
          </p>
          <a
            href="#demos"
            className="mt-10 inline-block bg-accent text-white px-8 py-[0.875rem] font-[600] text-[clamp(0.75rem,0.7vw,0.8125rem)] tracking-[0.12em] uppercase transition-all duration-300 hover:-translate-y-0.5 animate-fade-up [animation-delay:0.5s]"
          >
            Browse Demos
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up [animation-delay:0.7s]">
          <span className="text-[0.625rem] tracking-[0.15em] uppercase text-muted/[0.5]">Scroll</span>
          <div className="w-[0.0625rem] h-8 bg-muted/[0.2]" />
        </div>
      </div>

      {/* ─── Featured Demo ─── */}
      <section id="demos" className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(5rem,10vw,8.75rem)]">
        <div className="max-w-[75rem] mx-auto">
          <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent">
              Featured
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] font-[400] leading-[1.15] tracking-[-0.02em] mt-3 text-text">
              Interior Design
            </h2>
          </div>

          <a href="/interior" className="group block relative overflow-hidden bg-surface">
            <div className="aspect-[21/9] max-md:aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/[0.55] via-black/[0.15] to-transparent" />
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85"
                alt="Interior design demo preview"
                fill
                sizes="(max-width: 768px) 100vw, 75rem"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-[clamp(2rem,4vw,4rem)]">
                <p className="m-0 text-[clamp(0.625rem,0.55vw,0.6875rem)] font-[600] tracking-[0.15em] uppercase text-white/50">
                  Website Template
                </p>
                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-[400] leading-[1.1] tracking-[-0.02em] mt-2 text-white">
                  Atelier &mdash; Interior Design Studio
                </h3>
                <p className="mt-2 m-0 text-[clamp(0.875rem,0.8vw,1rem)] text-white/70 leading-[1.6] max-w-[32rem]">
                  Residential and hospitality interiors &mdash; a premium single-page experience for design studios.
                </p>
                <span className="mt-4 inline-block text-[clamp(0.6875rem,0.65vw,0.75rem)] font-[600] tracking-[0.12em] uppercase text-white border-b border-white/30 pb-[0.0625rem] transition-all duration-300 group-hover:border-white/70">
                  View Demo &rarr;
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-[clamp(1.5rem,2vw,2rem)] px-[clamp(1.5rem,4vw,3.75rem)] border-t border-line">
        <div className="max-w-[75rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[clamp(0.6875rem,0.65vw,0.75rem)] text-muted/60">
            &copy; {new Date().getFullYear()} Demo Catalogue
          </span>
          <span className="text-[clamp(0.625rem,0.6vw,0.6875rem)] text-muted/40">
            Crafted with care
          </span>
        </div>
      </footer>
    </main>
  );
}
