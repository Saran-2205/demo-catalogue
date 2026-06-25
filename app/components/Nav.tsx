"use client";

import { useState, useEffect } from "react";

type NavItem = { label: string; href: string };

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Nav({ items, siteName }: { items: NavItem[]; siteName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-[clamp(1rem,2vw,1.5rem)_clamp(1.5rem,4vw,3.75rem)] transition-[background,border-color] duration-[600ms] ${scrolled ? 'bg-bg border-b border-line' : 'bg-transparent border-b border-transparent'}`}>
        <a href="#" className={`font-heading text-[clamp(1.25rem,1.4vw,1.5rem)] font-[600] tracking-[-0.02em] transition-colors duration-[600ms] ${scrolled ? 'text-text' : 'text-white'}`}>
          {siteName}
        </a>

        <nav className="hidden md:flex items-center gap-[clamp(1.25rem,2.5vw,2.25rem)]">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[clamp(0.75rem,0.75vw,0.8125rem)] font-[500] tracking-[0.06em] uppercase transition-colors duration-[600ms] hover:text-accent ${scrolled ? 'text-text' : 'text-white/80'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className={`nav-cta text-[clamp(0.6875rem,0.7vw,0.75rem)] font-[600] tracking-[0.1em] uppercase px-[1.375rem] py-[0.625rem] transition-[background] duration-[600ms] text-white ${scrolled ? 'bg-accent' : 'bg-white/15'}`}>
            Get in Touch
          </a>
        </nav>

        <button className="flex md:hidden bg-none border-none cursor-pointer p-2 text-white" onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] [animation:menu-fade-in_0.3s_ease-out_forwards]" onClick={closeMenu} />
          <div className="fixed top-0 right-0 bottom-0 z-50 flex flex-col justify-center px-[clamp(2rem,6vw,3rem)] w-[clamp(16rem,75vw,24rem)] bg-bg [box-shadow:-0.5rem_0_2rem_rgba(0,0,0,0.08)] [animation:menu-drawer-in_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            style={{
              background: "radial-gradient(ellipse at 60% 30%, rgba(122,46,14,0.06) 0%, transparent 65%), var(--color-bg)",
            }}
          >
            <button className="absolute top-6 right-6 bg-none border-none cursor-pointer p-2 text-text transition-opacity duration-200 hover:opacity-60" onClick={closeMenu} aria-label="Close menu">
              <CloseIcon />
            </button>
            <div className="flex flex-col gap-5 pl-6">
              {items.map((item, i) => (
                <a key={item.label} href={item.href} onClick={closeMenu}
                  className="group relative font-display text-[clamp(1.5rem,5vw,1.75rem)] font-[400] no-underline tracking-[-0.02em] text-text flex items-center min-h-[2.75rem] opacity-0"
                  style={{
                    animation: `menu-link-slide 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.08}s forwards`,
                  }}
                >
                  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-[0.125rem] h-0 bg-accent transition-all duration-[400ms] group-hover:h-[55%] group-active:h-[55%]" />
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu}
                className="mt-2 text-[clamp(0.75rem,2.5vw,0.8125rem)] font-[600] tracking-[0.1em] uppercase px-8 py-3 flex items-center min-h-[2.75rem] transition-all duration-300 hover:translate-y-[-0.125rem] text-white bg-accent opacity-0"
                style={{
                  animation: `menu-link-slide 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + items.length * 0.08 + 0.08}s forwards`,
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes menu-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes menu-drawer-in {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        @keyframes menu-link-slide {
          0% { opacity: 0; transform: translateX(1.5rem); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
