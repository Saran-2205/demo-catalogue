# Interior Design Homepage — Strategic Blueprint

## Industry Psychology

### What clients fear
- Wasting money on bad design
- Hiring someone who doesn't listen
- Long, disruptive renovation processes
- Hidden costs and scope creep
- Getting a "template" design, not a personal space

### What builds trust in an interior designer
- **Portfolio quality** — the work must speak first
- **Process clarity** — knowing exactly what happens when
- **Testimonials from similar clients** — social proof with detail
- **Years in practice** — survival signals competence
- **Press and awards** — third-party validation
- **Founder story** — personal stakes signal commitment

### Why people spend on interiors
- Emotional return — how the space *feels* every day
- Status signaling — guests see the result
- Long-term value — good design outlasts trends
- Quality of life — functionality + beauty

### Objections
- "We can't afford it" → Show range of project scales
- "It'll take too long" → Show clear process + timelines
- "They won't understand us" → Show listening in testimonials
- "All designers look the same" → Differentiate through philosophy

### Emotional triggers for inquiry
- Aspiration — "I want my home to feel like that"
- Relief — "They handle everything"
- Trust — "These clients are like me"
- Urgency — "Spaces like this don't happen overnight"

## User Journey

| Stage | Emotion | Question | Needed |
|-------|---------|----------|--------|
| Arrival | Curious | "Is this relevant to me?" | Instant quality signal |
| Inspiration | Aspiring | "Can they do what I need?" | Projects that match |
| Trust | Wary | "Are they legit?" | Proof: press, years, awards |
| Validation | Convinced | "Others like me chose them" | Testimonials, similar clients |
| Confidence | Ready | "What happens next?" | Clear process |
| Inquiry | Committed | "How do I start?" | Easy, low-friction contact |

## Section Architecture

**Flow: Atmosphere → Belief → Proof → Capability → Method → Voice → Invitation**

### 1. Hero — Atmosphere
- **Purpose**: Establish quality instantly. No selling.
- **Psychology**: The user decides "premium or not" in 5 seconds. The hero image does this work.
- **Approach**: Full-screen cinematic image, brand name only. No tagline, no buttons, no clutter.
- **Why no CTA?**: Luxury brands don't ask for the sale immediately. Confidence signals through restraint.

### 2. Credo — Belief
- **Purpose**: Differentiate the studio through philosophy.
- **Psychology**: Clients want to know *how you think*, not just what you do.
- **Approach**: One sentence in large display type. Founder name below. 200px vertical padding.
- **Content**: The studio's core belief about design.

### 3. Work — Proof
- **Purpose**: The portfolio IS the product.
- **Psychology**: Seeing is believing. Projects are the strongest trust signal.
- **Approach**: Full-bleed image wall. Each project = full-width 21:9 cinematic image. Category + title + location metadata overlaid. Description revealed on hover.
- **Why this works**: Mirrors how architecture studios present work — image-first, text secondary.

### 4. Capabilities — Clarity
- **Purpose**: Show what services are offered without looking like a template.
- **Psychology**: At this point, user is interested and wants to know if the studio handles their specific need.
- **Approach**: Simple vertical list. Numbered (01, 02, 03). Title in large display type. One-paragraph description. Separated by thin borders.
- **No images**: Projects section already provides imagery. This section should feel different — quieter, text-forward.

### 5. Method — Reassurance
- **Purpose**: Show the process to eliminate fear of the unknown.
- **Psychology**: Clients are afraid of chaos. A clear process signals professionalism.
- **Approach**: Two-column grid. Step number in accent color. Title + description in second column. Separated by borders.
- **Tone**: Factual, confident. Not selling — informing.

### 6. Voice — Social Proof
- **Purpose**: One strong testimonial is more convincing than three weak ones.
- **Psychology**: A detailed quote from a real client addresses hidden objections.
- **Approach**: Full-width pull quote in large display type. Attribution below. Generous padding (160px+).
- **Why one**: Luxury brands don't stack testimonials. One strong voice carries more weight than a grid.

### 7. Reach — Conversion
- **Purpose**: Make contact effortless.
- **Psychology**: At this point, the user has seen the work, understood the philosophy, and trusts the process. The barrier to contact should be zero.
- **Approach**: Email as primary element (largest type on the page). Phone and city secondary. No form, no buttons — just the information.

## Design System

### Color Palette
- `--color-bg: #faf7f2` — Warm ivory (main background)
- `--color-surface: #f2ece4` — Warm stone (alternating background)
- `--color-text: #1a1816` — Almost-black (body text)
- `--color-accent: #7a2e0e` — Deep bronze (accents, CTAs)
- `--color-muted: #5c4f42` — Warm gray (secondary text)

**Psychology**: Ivory and stone tones feel timeless, natural, and expensive. Bronze accent adds warmth without being trendy. The palette references natural materials (stone, earth, wood) which aligns with interior design.

### Typography
- **Display**: Cinzel — refined serif, architectural, European elegance
- **Body**: Josefin Sans — clean geometric sans-serif, readable at small sizes

**Scale**:
- Hero title: `clamp(3.6rem, 8vw, 7rem)`
- Section heading: `clamp(1.6rem, 2.4vw, 2.4rem)`
- Display quote: `clamp(1.6rem, 2.4vw, 2.6rem)`
- Body: `clamp(14px, 0.8vw, 15px)`
- Small/label: `clamp(10px, 0.55vw, 11px)`

**Why these fonts**: Cinzel carries architectural gravitas (inspired by Roman inscriptions). Josefin Sans is clean without being cold. The contrast between them creates editorial sophistication.

### Layout Principles
- Max content width: 900px for text sections, 1200px for project header
- Section padding: `clamp(100px, 12vw, 140px)` vertical
- No cards, no borders (except thin section borders), no boxes
- Each section has a unique layout — no two sections share the same structure
- Whitespace is the primary design element

### Motion
- Scroll reveal: `0.8s` cubic-bezier(0.22, 1, 0.36, 1) — slow, deliberate
- Image zoom on hover: `0.7s` — subtle, cinematic
- No parallax, no text animations, no page transitions
- `prefers-reduced-motion` respected
- Mobile: animations disabled (touch devices don't hover)

## What This Design Avoids
- ❌ Generic agency template sections
- ❌ Accent bars/dividers above every heading
- ❌ Social media icons in content
- ❌ Blog/news sections
- ❌ FAQ accordions
- ❌ Trust bar with numbers
- ❌ Client logo carousels
- ❌ Service cards with icons
- ❌ Stacked CTAs
- ❌ Newsletter signup
- ❌ Pop-ups or modals

## Conversion Strategy
- No aggressive CTAs
- No "Book Now" buttons in hero
- Contact information is presented as information, not as a pitch
- The portfolio does the selling
- The single CTA is the email address in large type
- Phone number provided for immediate action
- No form — reduce friction
- Footer has full contact details

## Unique Differentiators
- **No template sections** — every section has a unique layout structure
- **Text-forward services** — services presented as editorial content, not icon grids
- **Single testimonial** — one strong voice beats a grid of weak quotes
- **Email as hero element** — in the CTA section, the email is the largest element
- **Grain texture** — subtle analog texture throughout for warmth
- **Projects as wall** — full-bleed images with no gaps create a gallery feeling
