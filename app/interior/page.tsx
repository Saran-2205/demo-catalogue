"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const site = {
  name: "Atelier",
  sub: "Chennai · Since 2013",
  tagline: "Residential and hospitality interiors, crafted for how you actually live.",
  email: "studio@atelierchennai.com",
  phone: "+91 44 4202 8200",
  address: "7/2, Harrington Road, Chetpet, Chennai — 600031",
  hours: "Monday – Saturday: 10 AM – 7 PM",
  aboutTitle: "A studio shaped by place and perspective.",
  aboutBody1: "Founded in 2013 by Ananya Ravindran, Atelier brings together a decade of experience across Mumbai, London, and Chennai. Trained at the Chelsea College of Arts and the CEPT University, Ananya returned to Chennai to build a practice rooted in the belief that great interiors are not styled — they are felt.",
  aboutBody2: "Every project begins with a simple question: how do you want to feel in this space? From there, we build — choosing materials that age well, proportions that feel right, and details that reward attention over time. We work closely with local artisans and craftspeople across Tamil Nadu, Kerala, and Pondicherry, pairing contemporary design with the region's deep making traditions.",
  aboutBody3: "Our practice spans apartments and independent homes, boutique hotels and restaurants. We do not have a signature style — each project responds to its architecture, its light, and the people who will inhabit it. What remains consistent is the rigour: every joinery detail resolved, every material considered for how it will look in five years, every space planned for how it will actually be lived in.",
  values: [
    "Context before trend — we design for the place, not the mood board",
    "Craft over ornament — material honesty matters more than decoration",
    "Space that breathes — good proportion is the foundation of every room",
    "The long view — if it won't age well, we don't specify it",
  ],
  founder: "Ananya Ravindran",
  founderRole: "Founder & Principal Designer",
  press: ["Architectural Digest India", "Elle Decor India", "The Hindu"],
  award: "Best Interior Studio — South India",
  awardBody: "India Design Awards 2025",
  heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=95",
  projectIntro: "A curated selection of residential and hospitality interiors across South India.",
};

const projects = [
  {
    title: "TriBeCa Loft",
    category: "Residential",
    location: "Chennai",
    size: "2,400 sqft",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    description: "A three-bedroom apartment reimagined as a light-filled urban sanctuary with warm oak flooring, honed dholpur stone, and custom millwork in reclaimed mango wood throughout.",
  },
  {
    title: "The Banyan Hotel",
    category: "Hospitality",
    location: "Coimbatore",
    size: "12,000 sqft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90",
    description: "A boutique hotel lobby and restaurant within a restored plantation bungalow, blending custom terrazzo flooring, handwoven Chettinad textiles, and a sculptural steel staircase.",
  },
  {
    title: "Garden House",
    category: "Residential",
    location: "Pondicherry",
    size: "3,600 sqft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=90",
    description: "A weekend home organised around a central courtyard with lime-plaster walls, local Cuddalore stone floors, and deep verandahs that keep the house cool without air conditioning.",
  },
];

const stats = [
  { num: "12+", label: "Years in Practice" },
  { num: "240+", label: "Projects Completed" },
  { num: "6", label: "Cities Across India" },
  { num: "60K+", label: "Sq Ft Designed Annually" },
];

const services = [
  {
    title: "Residential Interiors",
    desc: "Full-service interior design for apartments, independent homes, and villas. We handle every detail from concept through construction — delivered on a fixed timeline with weekly site updates led by a senior designer.",
    bullets: ["Space planning & layout optimisation", "Custom joinery, furniture & lighting", "Material, finish & textile selection", "Project management & site supervision"],
  },
  {
    title: "Hospitality & Commercial",
    desc: "Boutique hotels, restaurants, cafes, and workspaces engineered for both beauty and durability. Commercial-grade materials specified without sacrificing warmth, character, or guest experience.",
    bullets: ["Brand-aligned concept & narrative", "F&B layout & kitchen planning", "Commercial-grade material specification", "Turnkey project delivery"],
  },
  {
    title: "Design Consultation",
    desc: "Focused expertise for specific challenges — available in-studio or on-site across Chennai, Bengaluru, and Hyderabad. Walk away with clarity, vendor connections, and a concrete action plan.",
    bullets: ["Material sourcing & vendor introductions", "Space planning & layout review", "Colour palette & finish recommendations", "Second opinion & design review"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "We begin with a conversation in your space — understanding how you live, what matters to you, and what isn't working. We take measurements, study the light at different times of day, and photograph every corner. Within two weeks, we present a detailed brief and a preliminary direction.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Mood boards, material samples, and scaled floor plans translate the brief into a tangible vision. We present options for layouts, palettes, and budgets. Revisions are expected and welcomed — we iterate until the design feels exactly right. This phase typically takes four to six weeks.",
  },
  {
    number: "03",
    title: "Deliver",
    desc: "We manage procurement, vendor coordination, and on-site execution from start to finish. Our team works with trusted contractors, carpenters, and artisans across South India. We deliver the finished space exactly as designed — on time, on budget, down to the last cushion.",
  },
];

const testimonials = [
  {
    quote: "We interviewed four studios before choosing Atelier. What set them apart was how much they listened. Most designers came in with a vision. Ananya came in with questions. The result is a home that feels like ours, not a portfolio piece. We use every room every day — that's the highest compliment we can give.",
    name: "Priya & Ravi Sundararajan",
    project: "TriBeCa Loft, Chennai",
  },
  {
    quote: "The hotel lobby sets the tone for the entire guest experience, and Atelier understood that instinctively. They balanced grandeur with warmth — the space feels special without feeling precious. Our guests comment on it constantly. The material choices tell a story of the region without being touristy about it.",
    name: "Vikram Menon",
    project: "The Banyan Hotel, Coimbatore",
  },
  {
    quote: "We wanted a weekend home that felt like a retreat — open yet private, modern yet grounded in its place. Atelier delivered exactly that, and made the process genuinely enjoyable. The courtyard became the heart of the house. Even on hot days, every room stays cool and connected to the outdoors. We spend more time here than we planned to.",
    name: "Anita Desai",
    project: "Garden House, Pondicherry",
  },
];

const testimonialColors = [
  { accent: "#9B6B43", bg: "#FBF6F1" },
  { accent: "#3D7A6B", bg: "#F2F8F6" },
  { accent: "#6B8E5A", bg: "#F4F8F2" },
];

const grain = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="5" stitchTiles="stitch"/></filter><rect width="300" height="300" filter="url(#n)" opacity="0.03"/></svg>`;
const grainB64 = typeof btoa !== "undefined"
  ? `data:image/svg+xml;base64,${btoa(grain)}`
  : "";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function InteriorDemo() {
  const [counted, setCounted] = useState(false);
  const [displayNums, setDisplayNums] = useState(stats.map(() => 0));
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 48rem)").matches : false
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  const [ti, setTi] = useState(0);
  const tiIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const els = document.querySelectorAll("[data-reveal]");
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.querySelector(".trust-stats");
    if (!el || counted) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCounted(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  useEffect(() => {
    if (!counted) return;
    const targets = stats.map(s => {
      const m = s.num.match(/^(\d+)/);
      return m ? parseInt(m[1]) : 0;
    });
    const steps = targets.map(t => Math.max(1, Math.floor(t / 50)));
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setDisplayNums(prev => prev.map((v, i) => Math.min(v + steps[i], targets[i])));
      if (frame >= 50) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [counted]);

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 48rem)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mqMobile.addEventListener("change", onMobileChange);
    mqMotion.addEventListener("change", onMotionChange);
    return () => {
      mqMobile.removeEventListener("change", onMobileChange);
      mqMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.getAttribute("data-step") || "");
            if (!isNaN(idx)) {
              setVisibleSteps(prev => prev.includes(idx) ? prev : [...prev, idx]);
            }
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    const els = document.querySelectorAll(".process-step");
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    tiIntervalRef.current = setInterval(() => {
      setTi(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => { if (tiIntervalRef.current) clearInterval(tiIntervalRef.current); };
  }, [isMobile]);

  const handleTiChange = (i: number) => {
    setTi(i);
    if (tiIntervalRef.current) {
      clearInterval(tiIntervalRef.current);
      tiIntervalRef.current = setInterval(() => {
        setTi(prev => (prev + 1) % testimonials.length);
      }, 4000);
    }
  };

  const [loaderVisible, setLoaderVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoaderVisible(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="theme-interior">
      {/* Grain overlay */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-1 opacity-[0.35] bg-size-[10rem_10rem]" style={{ backgroundImage: grainB64 ? `url("${grainB64}")` : "none" }} />

      {/* Page loader */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 bg-bg" style={{ opacity: loaderVisible ? 1 : 0, pointerEvents: loaderVisible ? "auto" : "none" }}>
        <p className="font-display text-[clamp(2rem,5vw,3.5rem)] font-[500] tracking-[-0.03em] text-text opacity-0 [animation:loader-fade_0.8s_ease-out_0.15s_forwards]">
          Atelier
        </p>
      </div>

      <Nav items={navItems} siteName={site.name} />

      {/* ─── 1. Hero ─── */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full bg-cover bg-[center_30%] bg-no-repeat [filter:brightness(0.35)_saturate(0.9)] max-md:bg-center max-md:[filter:brightness(0.45)_saturate(0.9)]"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=95)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent max-md:bg-gradient-to-t max-md:from-black/85 max-md:via-black/40 max-md:to-transparent" />
        <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end p-[clamp(5rem,12vh,8.75rem)_clamp(1.5rem,4vw,3.5rem)] mx-auto max-w-[75rem]">
          <div data-reveal className="max-w-[37.5rem]">
            <p className="m-0 text-[clamp(0.5625rem,0.6vw,0.6875rem)] font-[400] tracking-[0.35em] uppercase text-white/60">
              {site.sub}
            </p>
            <h1 className="font-display font-[500] leading-[1] text-[clamp(2.8rem,8vw,7rem)] tracking-[-0.03em] mt-[0.75rem] text-white [text-shadow:0_0.125rem_1.5rem_rgba(0,0,0,0.4)]">
              {site.name}
            </h1>
            <div className="w-[3rem] h-[0.125rem] bg-accent mt-[1.5rem] mb-[1.25rem] opacity-50" />
            <p className="m-0 text-[clamp(0.8125rem,0.9vw,0.9375rem)] max-w-[25rem] text-white font-[400] leading-[1.7] [text-shadow:0_0.0625rem_0.75rem_rgba(0,0,0,0.3)]">
              {site.tagline}
            </p>
            <div className="hero-buttons flex gap-4 mt-8 flex-wrap">
              <a href="#contact" className="inline-block px-9 py-4 text-[clamp(0.6875rem,0.7vw,0.75rem)] font-[600] text-center tracking-[0.12em] uppercase bg-accent border-none cursor-pointer transition-colors duration-300 hover:bg-[#8c3816] text-white">
                Book a consultation
              </a>
              <a href="#projects" className="inline-block px-9 py-[0.875rem] text-[clamp(0.6875rem,0.7vw,0.75rem)] font-[500] text-center tracking-[0.12em] uppercase border border-solid cursor-pointer transition-all duration-300 text-white border-white/35">
                View our work
              </a>
            </div>
            <p className="mt-10 m-0 text-[clamp(0.625rem,0.45vw,0.6875rem)] font-[400] tracking-[0.25em] uppercase text-white/45">
              Recognised by Architectural Digest India
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. Trust Bar ─── */}
      <section className="section-divider relative p-[clamp(4.5rem,8vw,6.25rem)_clamp(1.5rem,4vw,3.5rem)] bg-bg">
        <div className="max-w-[75rem] mx-auto">
          <div className="trust-stats grid grid-cols-4 gap-[clamp(1.5rem,3vw,3rem)] mb-[clamp(2.5rem,5vw,4rem)]" data-reveal>
            {stats.map((s, i) => (
              <div key={i} className="relative text-center">
                <p className="m-0 font-display text-[clamp(2rem,3vw,3.4rem)] font-[500] text-accent leading-[1] tracking-[-0.02em]">{displayNums[i]}{s.num.replace(/^\d+/, "")}</p>
                <p className="mt-2 m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] text-text font-[500] tracking-[0.08em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="trust-bottom flex justify-between items-center flex-wrap gap-4 pt-[clamp(1.5rem,2.5vw,2rem)] border-t border-line" data-reveal>
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] text-accent font-[600] tracking-[0.06em] uppercase">
              {site.award} — {site.awardBody}
            </p>
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] text-text font-[500] tracking-[0.06em] uppercase">
              Featured in: {site.press.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. About ─── */}
      <section id="about" className="relative p-[clamp(5rem,12vw,8.75rem)_clamp(1.5rem,4vw,3.5rem)] bg-surface">
        <div className="about-grid grid grid-cols-[0.9fr_1.1fr] gap-[clamp(3rem,6vw,5rem)] items-center max-w-[75rem] mx-auto">
          <div data-reveal className="relative">
            <div className="absolute bg-accent opacity-[0.06] right-0 bottom-0" style={{ top: "clamp(1rem,2vw,1.75rem)", left: "clamp(1rem,2vw,1.75rem)" }} />
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85"
              alt="Interior design studio workspace with material samples"
              width={800}
              height={533}
              className="w-full h-auto block relative [filter:saturate(0.9)_brightness(0.95)]"
              loading="lazy"
            />
          </div>
          <div data-reveal>
            <div className="w-10 h-[0.125rem] bg-accent mb-[0.875rem] opacity-[0.25]" />
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent">
              About the studio
            </p>
            <h2 className="font-display text-[clamp(1.8rem,2.8vw,3rem)] font-[500] leading-[1.15] tracking-[-0.02em] mt-4 text-text">
              {site.aboutTitle}
            </h2>
            <p className="mt-2 m-0 text-[clamp(0.8125rem,0.7vw,0.875rem)] text-muted font-[400] tracking-[0.04em]">
              {site.founder} — {site.founderRole}
            </p>
            <div className="w-10 h-[0.125rem] bg-accent my-7 opacity-40" />
            <p className="m-0 text-[clamp(1rem,0.9vw,1.0625rem)] text-text leading-[1.7] font-[400]">
              {site.aboutBody1}
            </p>
            <p className="mt-6 m-0 text-[clamp(1rem,0.9vw,1.0625rem)] text-text leading-[1.7] font-[400]">
              {site.aboutBody2}
            </p>
            <p className="mt-6 m-0 text-[clamp(1rem,0.9vw,1.0625rem)] text-text leading-[1.7] font-[400]">
              {site.aboutBody3}
            </p>
            <ul className="mt-8 m-0 p-0 list-none">
              {site.values.map((v, i) => (
                <li key={i} className={`text-[clamp(0.9375rem,0.85vw,1rem)] text-text font-[500] ${i === 0 ? "" : "mt-3"}`}>
                  <span className="text-accent mr-[0.875rem] opacity-60">—</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 4. Services ─── */}
      <section id="services" className="relative bg-bg">
        <div data-reveal className="p-[clamp(3.75rem,8vw,6.25rem)_clamp(1.5rem,4vw,3.5rem)_clamp(1.5rem,3vw,2.5rem)] max-w-full mx-auto">
          <div className="w-10 h-[0.125rem] bg-accent mb-[0.875rem] opacity-[0.25]" />
          <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent">
            What we do
          </p>
          <h2 className="font-display text-[clamp(1.8rem,2.8vw,3rem)] font-[500] leading-[1.15] tracking-[-0.02em] mt-4 text-text">
            Services
          </h2>
          <p className="mt-5 m-0 text-[clamp(0.9375rem,0.85vw,1rem)] text-text leading-[1.6] max-w-[40rem]">
            From concept to completion — we design spaces that feel both personal and intentional.
          </p>
        </div>
        <div className="services-visual grid grid-cols-3">
          {services.map((s, i) => {
            const hovered = hoveredService === i;
            return (
            <div key={i} className="group relative overflow-hidden cursor-pointer" style={{ height: "clamp(25rem,44vw,38.75rem)" }}
              onMouseEnter={() => { if (!touchTimeoutRef.current) setHoveredService(i); }}
              onMouseLeave={() => { if (!touchTimeoutRef.current) setHoveredService(null); }}
              onClick={() => {
                clearTimeout(touchTimeoutRef.current!);
                touchTimeoutRef.current = setTimeout(() => { touchTimeoutRef.current = null; }, 300);
                setHoveredService(prev => prev === i ? null : i);
              }}
            >
              <div className="absolute inset-0 transition-transform duration-700" style={{ backgroundImage: `url(${["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90","https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"][i]})`, backgroundSize: "cover", backgroundPosition: "center", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
              <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)", opacity: hovered ? 0 : 1 }} />
              <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 100%)", opacity: hovered ? 1 : 0 }} />
              <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(122,46,14,0.55) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)", opacity: hovered ? 1 : 0 }} />
              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-[clamp(1.5rem,2.5vw,2.25rem)]">
                <div className="transition-all duration-350" style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(0.5rem)", pointerEvents: hovered ? "auto" : "none" }}>
                  <p className="m-0 text-[clamp(0.8125rem,0.75vw,0.875rem)] text-white/80 leading-[1.7] max-w-[22.5rem]">
                    {s.desc}
                  </p>
                  <ul className="mt-[0.875rem] m-0 p-0 list-none">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="text-[clamp(0.6875rem,0.6vw,0.75rem)] text-white/50 py-[0.1875rem] tracking-[0.02em]">
                        <span className="text-accent mr-[0.625rem] opacity-70">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-display text-[clamp(1.2rem,1.6vw,1.6rem)] font-[500] text-white mt-4 leading-[1.2] tracking-[-0.01em]">
                  {s.title}
                </p>
              </div>
            </div>
            );})}
        </div>
      </section>

      {/* ─── 5. Projects ─── */}
      <section id="projects" className="relative p-0 bg-surface">
        <div data-reveal className="p-[clamp(5rem,12vw,8.75rem)_clamp(1.5rem,4vw,3.5rem)_clamp(3rem,5vw,4.5rem)] max-w-full mx-auto">
          <div className="w-10 h-[0.125rem] bg-accent mb-[0.875rem] opacity-[0.25]" />
          <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent mb-4">
            Our portfolio
          </p>
          <div className="flex justify-between items-end gap-[clamp(1.5rem,4vw,3rem)]">
            <h2 className="font-display text-[clamp(1.8rem,2.8vw,3rem)] font-[500] leading-[1.15] tracking-[-0.02em] m-0 text-text">
              Selected Projects
            </h2>
            <p className="m-0 text-[clamp(0.875rem,0.8vw,0.9375rem)] text-text font-[400] leading-[1.5] max-w-[22.5rem] text-right">
              {site.projectIntro}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <div key={i} data-reveal className={`project-card relative overflow-hidden aspect-[21/9] max-md:aspect-[4/3] ${i > 0 ? 'border-t border-line' : ''}`}>
              <Image
                src={p.image} alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-[clamp(2rem,3vw,3rem)_clamp(2.5rem,4vw,4rem)]">
                <div className="project-content max-w-[clamp(25rem,40vw,37.5rem)]">
                  <p className="m-0 text-[clamp(0.625rem,0.55vw,0.6875rem)] font-[600] tracking-[0.15em] uppercase text-white/50">
                    {p.category}
                  </p>
                  <h3 className="font-display text-[clamp(1.6rem,2.2vw,2.4rem)] font-[500] mt-[0.375rem] text-white tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="mt-[0.375rem] m-0 text-[clamp(0.8125rem,0.7vw,0.875rem)] text-white/40 font-[400]">
                    {p.location} · {p.size} · {p.year}
                  </p>
                  <div className="project-desc max-h-0 overflow-hidden opacity-0">
                    <div className="w-8 h-[0.09375rem] bg-accent my-4 opacity-40" />
                    <p className="m-0 text-[clamp(0.875rem,0.8vw,0.9375rem)] text-white/70 leading-[1.6]">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. Process ─── */}
      <section id="process" className="section-divider relative p-[clamp(5rem,12vw,8.75rem)_clamp(1.5rem,4vw,3.5rem)] bg-bg">
        <div className="max-w-[75rem] mx-auto">
          <div data-reveal className="mb-[clamp(3rem,5vw,4.5rem)]">
            <div className="w-10 h-[0.125rem] bg-accent mb-[0.875rem] opacity-[0.25]" />
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent">
              How we work
            </p>
            <h2 className="font-display text-[clamp(1.8rem,2.8vw,3rem)] font-[500] leading-[1.15] tracking-[-0.02em] mt-4 text-text">
              Our Process
            </h2>
          </div>
          <div className="relative pl-[1.5rem] md:pl-0">
            {!prefersReducedMotion && (
              <div className="absolute w-[0.0625rem] bg-accent opacity-[0.25] bottom-0 block md:hidden"
                style={{
                  left: "0.625rem",
                  height: visibleSteps.length > 0 ? `${(visibleSteps.length / process.length) * 100}%` : "0",
                  transition: "height 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] md:gap-[clamp(3rem,5vw,5rem)]">
              {process.map((step, i) => {
                const stepVisible = visibleSteps.includes(i);
                const animOff = prefersReducedMotion || !stepVisible;
                return (
                  <div key={i} data-step={i} className="process-step relative">
                    <div className="absolute w-[0.625rem] h-[0.625rem] rounded-full bg-accent block md:hidden"
                      style={{
                        left: "-0.875rem",
                        top: "0.25rem",
                        opacity: animOff ? "0.2" : "1",
                        animation: animOff ? "none" : "dot-pulse-mobile 0.9s 0.3s forwards",
                      }}
                    />
                    <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.15em] text-accent"
                      style={{
                        opacity: animOff ? "1" : "0",
                        transform: animOff ? "none" : "translateY(1rem)",
                        animation: animOff ? "none" : `entry-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards`,
                      }}
                    >
                      {step.number}
                    </p>
                    <h3 className="font-display text-[clamp(1.3rem,1.6vw,1.8rem)] font-[500] mt-2 text-text tracking-[-0.02em]"
                      style={{
                        opacity: animOff ? "1" : "0",
                        transform: animOff ? "none" : "translateY(1rem)",
                        animation: animOff ? "none" : `entry-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards`,
                      }}
                    >
                      {step.title}
                    </h3>
                    <div className="w-8 h-[0.0625rem] bg-accent opacity-[0.3] mt-[0.875rem] mb-[0.75rem] hidden md:block"
                      style={{
                        animation: animOff ? "none" : `fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards`,
                        opacity: animOff ? "0.3" : "0",
                      }}
                    />
                    <p className="mt-4 md:mt-0 m-0 text-[clamp(0.875rem,0.8vw,0.9375rem)] text-muted leading-[1.7] font-[400]"
                      style={{
                        opacity: animOff ? "1" : "0",
                        transform: animOff ? "none" : "translateY(1rem)",
                        animation: animOff ? "none" : `entry-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.65s forwards`,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. Testimonials ─── */}
      <section id="testimonials" className="relative p-[clamp(5rem,12vw,8.75rem)_clamp(1.5rem,4vw,3.5rem)] bg-surface">
        <div className="max-w-[75rem] mx-auto">
          <div data-reveal className="mb-[clamp(2.5rem,5vw,4rem)]">
            <div className="w-10 h-[0.125rem] bg-accent mb-[0.875rem] opacity-[0.25]" />
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent">
              What clients say
            </p>
            <h2 className="font-display text-[clamp(1.8rem,2.8vw,3rem)] font-[500] leading-[1.15] tracking-[-0.02em] mt-4 text-text">
              Testimonials
            </h2>
          </div>

          <div className="block md:hidden">
            <div>
              <div className="grid grid-cols-1 rounded overflow-hidden">
                {testimonials.map((t, i) => (
                  <div key={i}
                    className={`col-start-1 row-start-1 transition-opacity duration-300 rounded ${i === ti ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{
                      background: testimonialColors[i].bg,
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <p className="font-display m-0 select-none pointer-events-none absolute opacity-8 text-[clamp(12rem,35vw,22rem)] -top-12 -left-6 leading-[1]"
                        style={{
                          color: testimonialColors[i].accent,
                        }}
                      >
                        &ldquo;
                      </p>
                      <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse at 25% 35%, ${testimonialColors[i].accent}18 0%, transparent 60%)`,
                      }} />
                      <div className="relative z-10 flex flex-col justify-between px-6 py-7">
                        <div>
                          <p className="m-0 text-[1rem] text-text leading-[1.7] font-[400]">
                            {t.quote}
                          </p>
                        </div>
                        <div className="mt-6 pt-4" style={{
                          borderTop: `0.0625rem solid ${testimonialColors[i].accent}25`,
                        }}>
                          <p className="m-0 text-[0.875rem] font-[600] text-text tracking-[0.02em]">
                            {t.name}
                          </p>
                          <p className="mt-0.5 m-0 text-[0.75rem] font-[400] tracking-[0.02em]"
                            style={{ color: testimonialColors[i].accent }}
                          >
                            {t.project}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 px-1">
                <button onClick={() => handleTiChange((ti - 1 + testimonials.length) % testimonials.length)}
                  className="text-[0.625rem] tracking-[0.15em] uppercase border-none bg-transparent cursor-pointer p-0 transition-opacity duration-300 hover:opacity-100 opacity-70"
                  style={{ color: `${testimonialColors[ti].accent}99` }}
                >
                  ← Back
                </button>
                <div className="flex gap-[0.375rem]">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => handleTiChange(i)}
                      className="w-[0.375rem] h-[0.375rem] rounded-full p-0 border-none cursor-pointer transition-all duration-400"
                      style={{
                        background: i === ti ? testimonialColors[ti].accent : `${testimonialColors[ti].accent}20`,
                        transform: i === ti ? "scale(1.4)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
                <button onClick={() => handleTiChange((ti + 1) % testimonials.length)}
                  className="text-[0.625rem] tracking-[0.15em] uppercase border-none bg-transparent cursor-pointer p-0 transition-opacity duration-300 hover:opacity-100 opacity-70"
                  style={{ color: `${testimonialColors[ti].accent}99` }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="testimonials-grid grid grid-cols-3 gap-[clamp(2rem,3vw,3rem)]">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card relative border-l-[0.1875rem] border-l-accent p-[clamp(1.75rem,2.5vw,2.25rem)_0_0_clamp(1.75rem,2.5vw,2.25rem)]" data-reveal>
                  <p className="font-display text-[clamp(4rem,5vw,5.5rem)] leading-[1] m-0 text-accent opacity-10 absolute top-[clamp(-0.25rem,0vw,0.25rem)] left-1 select-none pointer-events-none">
                    &ldquo;
                  </p>
                  <p className="m-0 text-[clamp(0.9375rem,0.85vw,1rem)] text-text leading-[1.7] font-[400] relative z-10">
                    {t.quote}
                  </p>
                  <div className="mt-6">
                    <p className="m-0 text-[clamp(0.8125rem,0.7vw,0.875rem)] font-[600] text-text tracking-[0.02em]">
                      {t.name}
                    </p>
                    <p className="mt-1 m-0 text-[clamp(0.75rem,0.65vw,0.8125rem)] text-text font-[400] tracking-[0.02em]">
                      {t.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. CTA ─── */}
      <section id="contact" className="section-divider relative p-[clamp(5rem,12vw,8.75rem)_clamp(1.5rem,4vw,3.5rem)] bg-bg">
        <div className="cta-bg" />
        <div className="max-w-[40rem] mx-auto text-center relative z-10">
          <div data-reveal>
            <div className="w-10 h-[0.125rem] bg-accent mb-[0.875rem] mx-auto opacity-[0.25]" />
            <p className="m-0 text-[clamp(0.6875rem,0.6vw,0.75rem)] font-[600] tracking-[0.2em] uppercase text-accent">
              Start a conversation
            </p>
            <h2 className="font-display text-[clamp(2rem,3.2vw,3.2rem)] font-[500] leading-[1.15] tracking-[-0.02em] mt-4 mb-6 text-text">
              Let&rsquo;s create something beautiful together.
            </h2>
            <p className="mx-auto m-0 text-[clamp(1rem,0.9vw,1.0625rem)] text-text leading-[1.7] font-[400] max-w-[28.75rem]">
              Tell us about your space. We&rsquo;ll schedule a no-obligation consultation to explore what&rsquo;s possible.
            </p>
            <div className="cta-buttons flex gap-4 justify-center mt-10 flex-wrap">
              <a href={`tel:${site.phone}`} className="inline-flex items-center gap-[0.625rem] px-9 py-4 text-[clamp(0.75rem,0.7vw,0.8125rem)] font-[600] tracking-[0.1em] uppercase bg-accent cursor-pointer transition-all duration-300 hover:bg-[#a03f17] text-white">
                <ArrowUpRight className="cta-arrow" />
                Call {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-[0.625rem] px-9 py-4 text-[clamp(0.75rem,0.7vw,0.8125rem)] font-[600] tracking-[0.1em] uppercase bg-transparent cursor-pointer transition-all duration-300 border text-accent hover:bg-accent hover:text-white hover:border-accent border-accent/25">
                <ArrowUpRight className="cta-arrow" />
                Send an email
              </a>
            </div>
            <div className="mt-10 pt-6 flex justify-center gap-x-12 gap-y-1.5 flex-wrap border-t border-line max-md:flex-col max-md:gap-2 max-md:text-center">
              <p className="m-0 text-[clamp(0.75rem,0.65vw,0.8125rem)] text-muted font-[400]">
                {site.address}
              </p>
              <p className="m-0 text-[clamp(0.75rem,0.65vw,0.8125rem)] text-muted font-[400]">
                {site.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer site={site} />

      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(2rem);
        }
        [data-reveal].is-visible {
          animation: reveal-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .section-divider::before {
          content: "" !important;
          position: absolute !important;
          top: 0 !important; left: 50% !important;
          transform: translateX(-50%) !important;
          width: clamp(3.75rem, 6vw, 5rem) !important;
          height: 0.09375rem !important;
          background: var(--color-accent) !important;
          opacity: 0.08 !important;
        }

        .cta-buttons a {
          transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .cta-buttons a:hover { transform: translateY(-0.25rem); }
        .cta-buttons a:first-child:hover { box-shadow: 0 0.75rem 2rem rgba(122,46,14,0.35); }
        .cta-buttons a:last-child:hover { box-shadow: 0 0.75rem 2rem rgba(122,46,14,0.12); }
        .cta-arrow { transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
        .cta-buttons a:hover .cta-arrow { transform: translate(0.125rem, -0.125rem); }

        .testimonials-grid > div:nth-child(2) { transition-delay: 0.1s; }
        .testimonials-grid > div:nth-child(3) { transition-delay: 0.2s; }
        .testimonials-grid > div { transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
        .testimonials-grid > div:hover { transform: translateY(-0.25rem); }
        .testimonials-grid > div > * { opacity: 0; transform: translateY(0.75rem); }
        .testimonials-grid > div.is-visible > :first-child { animation: quote-entrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards; }
        .testimonials-grid > div.is-visible > :nth-child(2) { animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards; }
        .testimonials-grid > div.is-visible > :nth-child(3) { animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards; }

        #contact .cta-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        #contact .cta-bg::before {
          content: ""; position: absolute; inset: -50%;
          background: radial-gradient(ellipse 40% 30% at 50% 80%, rgba(159,69,27,0.05) 0%, transparent 60%);
          animation: breathe 6s ease-in-out infinite alternate;
        }

        #contact [data-reveal] { transition-duration: 1.4s; }
        #contact [data-reveal] > * { opacity: 0; transform: translateY(1.25rem); }
        #contact [data-reveal].is-visible > :nth-child(2) { animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards; }
        #contact [data-reveal].is-visible > :nth-child(3) { animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards; }
        #contact [data-reveal].is-visible > :nth-child(4) { animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards; }
        #contact [data-reveal].is-visible > :nth-child(5) { animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards; }
        #contact [data-reveal].is-visible > :nth-child(6) { animation: fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards; }

        .project-card .project-desc { transform: translateY(0.5rem); transition-property: opacity, transform; transition-duration: 1s; }
        .project-card.is-visible img { transform: scale(1.04); transition-duration: 1s; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
        .project-card.is-visible .project-desc { opacity: 1; transform: translateY(0); max-height: 30rem; transition-duration: 1s; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }

        @media (max-width: 48rem) {
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .trust-stats { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-grid > div:first-child img { max-height: 16rem; width: 100%; object-fit: cover; }
          .trust-bottom { flex-direction: column !important; align-items: flex-start !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { width: 100% !important; text-align: center !important; padding: 1rem 1.5rem !important; font-size: 0.875rem !important; }
          .cta-buttons { flex-direction: column !important; }
          .cta-buttons a { width: 100% !important; justify-content: center !important; padding: 1.125rem 1.5rem !important; font-size: 0.875rem !important; }
          .section-head-wide { flex-direction: column !important; align-items: flex-start !important; }
          .section-head-wide p { text-align: left !important; max-width: 100% !important; }
          .testimonials-grid > div { border-left: none !important; padding-left: 0 !important; border-top: 0.1875rem solid var(--color-accent) !important; padding-top: 1.25rem !important; padding-right: 1rem !important; background: rgba(0,0,0,0.018) !important; border-radius: 0 0 0.25rem 0.25rem !important; }
          .theme-interior section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .theme-interior section:first-of-type { padding-left: 0 !important; padding-right: 0 !important; }
          #about { padding-top: 3rem !important; padding-bottom: 3rem !important; }
          .services-visual { grid-template-columns: 1fr !important; }
          .services-visual > div { height: auto !important; min-height: 16rem; }
          .services-visual > div > div:first-child { transform: none !important; }
          .services-visual > div > div:last-child > div:first-child ul { display: none !important; }
          .services-visual > div > div:last-child > div:first-child p { margin-bottom: 0.25rem !important; }
          [data-reveal] { opacity: 1; transform: none; transition: none; }
          [data-reveal].is-visible { animation: none; }
          .testimonials-grid > div > *, #contact [data-reveal] > * { opacity: 1; transform: none; transition: none; }
          .testimonials-grid > div:hover { transform: none; }
          .project-card { aspect-ratio: 4/3 !important; }
          .project-card .project-content { max-width: 100% !important; }
          .project-card .project-desc { display: none !important; }
          #contact .cta-bg { display: none !important; }
          #contact .cta-buttons + div { flex-direction: column !important; gap: 0.5rem !important; text-align: center !important; }
          .cta-buttons a { min-height: 3rem !important; }
        }
        @media (max-width: 36rem) {
          .theme-interior section { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
          [data-reveal].is-visible { animation: none; }
          .testimonials-grid > div > *, #contact [data-reveal] > * { opacity: 1; transform: none; transition: none; }
          img { transition: none !important; }
          .testimonials-grid > div:hover { transform: none; }
        }
      `}</style>
    </div>
  );
}
