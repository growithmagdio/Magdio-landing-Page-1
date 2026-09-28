# Antigravity Prompt — Magdio Local SEO Landing Page

Build a premium, high-converting, single-page landing page for **Magdio — The AI Growth Studio**, selling a Local SEO service ("Get your business into the Top 3 on Google within 90 days").

Use the copy below **word for word**. Do not invent testimonials, stats, client names or results — only use the verified case-study figures given in the Proof section.

---

## 1. Tech stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion for animation
- lucide-react for icons
- Fully responsive (mobile-first: 375px → 1440px+), no horizontal scroll
- Lighthouse 90+ for performance, accessibility and SEO
- Semantic HTML, one H1, proper heading order, meta title + description, Open Graph tags, and LocalBusiness/ProfessionalService + FAQPage JSON-LD schema

## 2. Brand & logo
- Logo file: `/public/magdio-logo.png` (I'll add it). Proof screenshots go in `/public/proof/`. It shows a rising bar chart in blue with a gold upward arrow, the word "MAGDIO" in bold white, and the tagline "THE AI GROWTH STUDIO".
- Use the logo in the navbar (left) and the footer. Height ~40px in the nav.
- Colour palette taken from the logo:
  - Background: deep navy `#0A0F1F`, surface `#111831`, card `#151D3B`
  - Primary blue: `#2F6BFF` (gradient to `#1E4FD8`)
  - Accent gold: `#F5B82E` (gradient to `#FFD166`) — use for the main CTAs, the growth arrow motif and key highlights
  - Text: white `#FFFFFF`, muted `#A7B0C8`, borders `rgba(255,255,255,0.08)`
- Typography: "Plus Jakarta Sans" or "Sora" for headings (bold/extra-bold, tight tracking), "Inter" for body. Load from Google Fonts.
- Style: dark, premium, modern agency look. Subtle grid background (like the logo backdrop), soft blue/gold radial glows, glassmorphism cards (backdrop-blur, thin borders), large generous spacing, rounded-2xl corners.

## 3. Global elements
- **Sticky navbar**: logo left; links: Services, How It Works, Why Us, Results, FAQ; right-side gold button "Get Free SEO Audit". Transparent at top, blurred navy background after scroll. Mobile hamburger menu.
- **All CTA buttons** link to: `https://api.hiighvance.com/widget/booking/CkAk13z879sKg6csRKJ1` (open in new tab). Keep the URL in one constant so I can change it.
- **Floating mobile CTA bar** at the bottom on mobile: "Get My Free SEO Audit".
- Scroll-reveal animations (fade + slide up, staggered), hover lift on cards, smooth scroll for anchor links. Respect `prefers-reduced-motion`.

## 4. Sections & exact copy

### 01 — Hero
- Small badge above headline: "Local SEO · Google Maps · 90-Day Plan"
- H1: **Get Your Business Into the Top 3 on Google Within 90 Days**
- Subheadline: **Your customers are already searching for your services. Make sure they find your business not your competitors.**
- Body: We improve your **Google Maps and local search visibility** through a focused SEO strategy built around your business, services and location.
- Primary CTA (gold): **Get Your Free SEO Audit**
- Under CTA (small italic muted): *See where your business currently stands and what is stopping you from ranking higher.*
- Right side visual: a stylised, code-built mock of a Google Maps "local pack" — a map card with 3 business listings, the top one highlighted as "Your Business" with a gold "#1" badge and star rating, plus a floating mini ranking chart trending up with the gold arrow. Build with HTML/CSS/SVG (no stock images), gently floating animation.

### 02 — The Problem
- H2: **Your Customers Are Searching. But Are They Finding You?**
- Body: When someone searches for your service on Google, the businesses appearing at the top get the attention first.
- Body: If your business is buried below your competitors, **you're missing potential customers who are already looking for what you offer.**
- Visual: a search bar mock typing *"[Your Service] near me"*, then results where competitors appear above and "Your Business" is faded lower down.
- Closing line (large, gradient text): **More visibility. More opportunities. More local customers.**

### 03 — What We Work On (id="services")
- H2: **Everything That Matters for Local Google Visibility**
- 5 glass cards with icons (2-3 column grid, last row centred):
  1. **Google Business Profile Optimization** — Optimize your Google Business Profile to clearly represent your business, services and location. (icon: MapPin)
  2. **Website & On-Page SEO** — Optimize your website, service pages, content, structure and important SEO elements. (icon: Globe / Code)
  3. **Service & Location Relevance** — Build stronger relevance around **what you offer and where you offer it.** (icon: Target)
  4. **Local Authority** — Build relevant business citations and local authority signals to strengthen your online presence. (icon: ShieldCheck)
  5. **Local Search Tracking** — Track your visibility and ranking movement across your target locations and keywords. (icon: LineChart)

### 04 — The Outcome (id="how-it-works")
- H2: **Get Found Where Your Customers Are Looking**
- Body: Our goal is to improve your visibility for the searches that matter to your business.
- A 3-step vertical (mobile) / horizontal (desktop) flow connected by an animated gold arrow line:
  1. **Top 3 visibility on Google**
  2. **More people seeing your business**
  3. **More opportunities for calls, enquiries, bookings & visits**
- Disclaimer (small, muted, italic): *Rankings and leads depend on competition, location, search terms and other factors. Our focus is on building stronger, sustainable local search visibility.*

### 05 — Why Choose Us (id="why-us")
- H2: **A Local SEO Strategy Built Around Your Business**
- Lead line (bold): **No generic checklist.**
- "We look at:" then a checklist grid with gold check icons:
  - Your business
  - Your services
  - Your locations
  - Your competitors
  - Your current Google visibility
  - Your website
  - Your local search opportunities
- Closing: Then we build the strategy around what your business actually needs.
- Layout: split — text left, checklist card right.

### 06 — Proof (id="results")
- H2: **Real Results. Real Businesses.**
- These are real, verified client results. Use the figures **exactly** as written — do not round, inflate or add new numbers.
- Screenshots are in `/public/proof/` (I'll add them). Every screenshot opens in a lightbox (click to zoom, Esc to close), `loading="lazy"`, descriptive alt text. Show them inside a dark "browser window" frame (3 dots + rounded corners + subtle shadow).

**A) Stat strip** (top of section, 4 animated count-up tiles, gold numbers):
- **#1** — Google ranking for "cotton towels" & "organic cotton towels"
- **503K+** — Search impressions (Haber Living)
- **₹1.05 Cr+** — Revenue from Google organic (automobile e-commerce)
- **Featured snippet** — for "bulk organic rice exporters" (Nethi Exports)

**B) Case study cards** (tabs or 3 large cards; each: tag, title, challenge, what we did, results, screenshot):

1. **Haber Living — Premium Towel Brand** (tag: Luxury Home & Living · India · haberliving.com)
   - Title: **From Low Visibility to Google's Top Positions**
   - Challenge: Very low organic traffic, poor rankings for product keywords, slow pages, 404/redirect errors, no analytics tracking.
   - What we did: Website revamp & speed optimization · Technical SEO fixes (404s, crawlability, sitemap, canonicals) · Product & category page SEO · Analytics & Search Console setup
   - Before → After table:
     | Metric | Before | After |
     |---|---|---|
     | Organic visibility | Very Low | Top Ranking Positions |
     | Search impressions | Minimal | 503K+ |
     | Website performance | Poor | Optimized |
     | SEO structure | Unoptimized | Fully Optimized |
     | Analytics tracking | Not Configured | Fully Integrated |
   - Screenshots: `haber-rank1-cotton-towels.webp`, `haber-rank1-organic-cotton-towels.webp`, `haber-search-console-503k.webp`
   - Captions: "#1 on Google for 'cotton towels'", "#1 on Google for 'organic cotton towels'", "503K impressions · 3.15K clicks in Google Search Console"

2. **Automobile Spare Parts E-commerce** (tag: E-commerce · India · client name confidential)
   - Title: **From Zero to ₹1.05 Crore+ in Organic Sales**
   - Challenge: Brand-new website — zero domain authority, no rankings, pages not indexed, no organic sales.
   - What we did: SEO-friendly site architecture · Technical SEO & Core Web Vitals · On-page SEO for product pages · GEO & AEO optimization for ChatGPT and Google AI Overviews · GA4 & conversion tracking
   - Results: ₹1,05,07,861+ in sales from Google organic (3,451 orders) · ₹2,75,834+ in sales from ChatGPT referrals (114 orders) · Hundreds of product pages indexed and ranking · Organic traffic built from zero
   - Screenshot: `auto-ecommerce-sales-dashboard.webp` — caption "Store analytics: sales by traffic source"

3. **Nethi Exports and Imports — Local Business** (tag: Local Business · Coimbatore, Tamil Nadu · nethiexportsandimports.com)
   - Title: **Top of Google for Local High-Intent Searches**
   - Results: Featured snippet for "bulk organic rice exporters" · #1 organic result for "Bulk Organic Food Exporter" in Coimbatore
   - Screenshots: `nethi-bulk-organic-rice-exporters.webp`, `nethi-bulk-organic-food-exporter.webp`

**C) Testimonial slot** — keep ONE placeholder card: "[Insert genuine client testimonial here.]" — Client Name, Business Name. Hide it by default with a flag `showTestimonial = false` in `content.ts` until I add a real one.

- Put all proof data (stats, case studies, image paths, captions) in a `proofItems` array in `content.ts`. Add a code comment: "Use only verified results, screenshots and genuine testimonials."
- Small note under the section (muted): *All results shown are from actual client work. Results vary by business, location and competition.*
- End the section with a gold CTA: **Get Your Free SEO Audit**

### 07 — FAQ (id="faq")
- H2: **Frequently Asked Questions**
- Animated accordion (one open at a time, plus/minus icon):
  1. **Can you guarantee a Top 3 ranking?** — No. Google rankings cannot be guaranteed. Our goal is to systematically improve your local search visibility and work toward Top 3 positions for relevant searches.
  2. **Why 90 days?** — SEO takes time. Google needs to crawl, process and evaluate changes made to your website and local presence. 90 days gives enough time to implement and measure meaningful work.
  3. **Will this work for my business?** — It depends on your business, location, competition and search demand. We first review your business and current visibility to determine whether the opportunity is suitable.
  4. **Do I need a website?** — A website is useful for building broader local search relevance. We can review your existing website and identify what needs to be improved.
  5. **Do you work on Google Maps rankings?** — Yes. Google Business Profile and local search visibility are key parts of the strategy.
  6. **When can we start?** — Start by submitting your details for a free SEO audit. We'll review your current position and discuss the next step.
- Also output these as FAQPage JSON-LD.

### 08 — Final CTA
- Full-width band with blue→navy gradient, grid pattern and gold glow.
- H2: **Ready to Get Your Business Into the Top 3 on Google?**
- Sub: **Find out where your business stands — and what it will take to improve your local visibility.**
- CTA (large gold): **Get Your Free SEO Audit**
- Line under: **Your customers are searching. Make sure they can find you.**

### Footer
- Logo + tagline "The AI Growth Studio"
- Links: Services, Results, FAQ, Book a Free Audit
- Website: www.magdio.com
- © 2026 Pannovites Private Limited. All rights reserved.

## 5. Code quality
- Component per section in `src/components/sections/`, shared `Button`, `SectionHeading`, `GlassCard` components.
- All copy in one `src/content.ts` file so I can edit text without touching layout.
- Accessible: visible focus states, alt text, aria-expanded on accordion, colour contrast AA.
- After building, run the dev server, open it in the browser, check desktop and mobile widths, and fix any layout issues before finishing.
