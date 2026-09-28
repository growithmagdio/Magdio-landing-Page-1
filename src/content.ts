/**
 * Centralized content source for Magdio Local SEO Landing Page.
 * All text copy, links, proof case studies, and FAQ entries are defined here word-for-word.
 */

// Single constant for all CTA booking links
export const BOOKING_CTA_URL = 'https://api.hiighvance.com/widget/booking/CkAk13z879sKg6csRKJ1';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Results', href: '#results' },
  { name: 'FAQ', href: '#faq' },
];

export const HERO_CONTENT = {
  badge: 'Local SEO · Google Maps · 90-Day Plan',
  h1: 'Get Your Business Into the Top 3 on Google Within 90 Days',
  subheadline: 'Your customers are already searching for your services. Make sure they find your business not your competitors.',
  body: 'We improve your **Google Maps and local search visibility** through a focused SEO strategy built around your business, services and location.',
  ctaText: 'Get Your Free SEO Audit',
  underCta: 'See where your business currently stands and what is stopping you from ranking higher.',
};

export const PROBLEM_CONTENT = {
  h2: 'Your Customers Are Searching. But Are They Finding You?',
  body1: 'When someone searches for your service on Google, the businesses appearing at the top get the attention first.',
  body2: "If your business is buried below your competitors, **you're missing potential customers who are already looking for what you offer.**",
  searchQuery: 'Roofing contractor near me',
  closingText: 'More visibility. More opportunities. More local customers.',
};

export const SERVICES_CONTENT = {
  h2: 'Everything That Matters for Local Google Visibility',
  items: [
    {
      id: 1,
      title: 'Google Business Profile Optimization',
      description: 'Optimize your Google Business Profile to clearly represent your business, services and location.',
      iconName: 'MapPin',
    },
    {
      id: 2,
      title: 'Website & On-Page SEO',
      description: 'Optimize your website, service pages, content, structure and important SEO elements.',
      iconName: 'Globe',
    },
    {
      id: 3,
      title: 'Service & Location Relevance',
      description: 'Build stronger relevance around **what you offer and where you offer it.**',
      iconName: 'Target',
    },
    {
      id: 4,
      title: 'Local Authority',
      description: 'Build relevant business citations and local authority signals to strengthen your online presence.',
      iconName: 'ShieldCheck',
    },
    {
      id: 5,
      title: 'Local Search Tracking',
      description: 'Track your visibility and ranking movement across your target locations and keywords.',
      iconName: 'LineChart',
    },
  ],
};

export const OUTCOME_CONTENT = {
  h2: 'Get Found Where Your Customers Are Looking',
  body: 'Our goal is to improve your visibility for the searches that matter to your business.',
  steps: [
    { stepNumber: '01', title: 'Top 3 visibility on Google' },
    { stepNumber: '02', title: 'More people seeing your business' },
    { stepNumber: '03', title: 'More opportunities for calls, enquiries, bookings & visits' },
  ],
  disclaimer: 'Rankings and leads depend on competition, location, search terms and other factors. Our focus is on building stronger, sustainable local search visibility.',
};

export const WHY_US_CONTENT = {
  h2: 'A Local SEO Strategy Built Around Your Business',
  leadLine: 'No generic checklist.',
  checklistIntro: 'We look at:',
  checklist: [
    'Your business',
    'Your services',
    'Your locations',
    'Your competitors',
    'Your current Google visibility',
    'Your website',
    'Your local search opportunities',
  ],
  closing: 'Then we build the strategy around what your business actually needs.',
};

// Use only verified results, screenshots and genuine testimonials.
export const PROOF_CONTENT = {
  h2: 'Real Results. Real Businesses.',
  statTiles: [
    { number: '#1', label: 'Google ranking for "cotton towels" & "organic cotton towels"' },
    { number: '503K+', label: 'Search impressions (Haber Living)' },
    { number: '$125K+', label: 'Revenue from Google organic (automobile e-commerce)' },
    { number: 'Featured snippet', label: 'for "bulk organic rice exporters" (Nethi Exports)' },
  ],
  proofItems: [
    {
      id: 'haber-living',
      tag: 'Luxury Home & Living · India · haberliving.com',
      title: "From Low Visibility to Google's Top Positions",
      challenge: 'Very low organic traffic, poor rankings for product keywords, slow pages, 404/redirect errors, no analytics tracking.',
      whatWeDid: 'Website revamp & speed optimization · Technical SEO fixes (404s, crawlability, sitemap, canonicals) · Product & category page SEO · Analytics & Search Console setup',
      beforeAfterTable: [
        { metric: 'Organic visibility', before: 'Very Low', after: 'Top Ranking Positions' },
        { metric: 'Search impressions', before: 'Minimal', after: '503K+' },
        { metric: 'Website performance', before: 'Poor', after: 'Optimized' },
        { metric: 'SEO structure', before: 'Unoptimized', after: 'Fully Optimized' },
        { metric: 'Analytics tracking', before: 'Not Configured', after: 'Fully Integrated' },
      ],
      screenshots: [
        {
          src: '/proof/haber-rank1-cotton-towels.webp',
          caption: "#1 on Google for 'cotton towels'",
          alt: "Google Search result showing Haber Living ranked #1 for cotton towels",
        },
        {
          src: '/proof/haber-rank1-organic-cotton-towels.webp',
          caption: "#1 on Google for 'organic cotton towels'",
          alt: "Google Search result showing Haber Living ranked #1 for organic cotton towels",
        },
        {
          src: '/proof/haber-search-console-503k.webp',
          caption: '503K impressions · 3.15K clicks in Google Search Console',
          alt: 'Google Search Console dashboard chart showing 503K impressions',
        },
      ],
    },
    {
      id: 'automobile-ecommerce',
      tag: 'E-commerce · India · client name confidential',
      title: 'From Zero to $125,000+ in Organic Sales',
      challenge: 'Brand-new website — zero domain authority, no rankings, pages not indexed, no organic sales.',
      whatWeDid: 'SEO-friendly site architecture · Technical SEO & Core Web Vitals · On-page SEO for product pages · GEO & AEO optimization for ChatGPT and Google AI Overviews · GA4 & conversion tracking',
      resultsList: [
        '$125,000+ in sales from Google organic (3,451 orders)',
        '$3,300+ in sales from ChatGPT referrals (114 orders)',
        'Hundreds of product pages indexed and ranking',
        'Organic traffic built from zero',
      ],
      screenshots: [
        {
          src: '/proof/auto-ecommerce-sales-dashboard.webp',
          caption: 'Store analytics: sales by traffic source',
          alt: 'E-commerce sales dashboard demonstrating $125,000+ organic revenue',
        },
      ],
    },
    {
      id: 'nethi-exports',
      tag: 'Local Business · Coimbatore, Tamil Nadu · nethiexportsandimports.com',
      title: 'Top of Google for Local High-Intent Searches',
      challenge: 'Local agricultural export business seeking high-intent B2B search visibility for target keywords.',
      whatWeDid: 'Local SEO relevance optimization · Content structuring for Google Featured Snippets · Google Business & Local Authority building',
      resultsList: [
        'Featured snippet for "bulk organic rice exporters"',
        '#1 organic result for "Bulk Organic Food Exporter" in Coimbatore',
      ],
      screenshots: [
        {
          src: '/proof/nethi-bulk-organic-rice-exporters.webp',
          caption: 'Featured snippet for "bulk organic rice exporters"',
          alt: "Google Search result showing Nethi Exports featured snippet for bulk organic rice exporters",
        },
        {
          src: '/proof/nethi-bulk-organic-food-exporter.webp',
          caption: '#1 organic result for "Bulk Organic Food Exporter" in Coimbatore',
          alt: "Google Search result showing Nethi Exports #1 ranking for Bulk Organic Food Exporter",
        },
      ],
    },
  ],
  // Flag to hide testimonial until a verified client testimonial is supplied
  showTestimonial: false,
  testimonialPlaceholder: {
    text: '[Insert genuine client testimonial here.]',
    author: 'Client Name',
    company: 'Business Name',
  },
  disclaimerNote: 'All results shown are from actual client work. Results vary by business, location and competition.',
  ctaText: 'Get Your Free SEO Audit',
};

export const FAQ_CONTENT = {
  h2: 'Frequently Asked Questions',
  questions: [
    {
      id: 'faq-1',
      question: 'Can you guarantee a Top 3 ranking?',
      answer: 'No. Google rankings cannot be guaranteed. Our goal is to systematically improve your local search visibility and work toward Top 3 positions for relevant searches.',
    },
    {
      id: 'faq-2',
      question: 'Why 90 days?',
      answer: 'SEO takes time. Google needs to crawl, process and evaluate changes made to your website and local presence. 90 days gives enough time to implement and measure meaningful work.',
    },
    {
      id: 'faq-3',
      question: 'Will this work for my business?',
      answer: 'It depends on your business, location, competition and search demand. We first review your business and current visibility to determine whether the opportunity is suitable.',
    },
    {
      id: 'faq-4',
      question: 'Do I need a website?',
      answer: 'A website is useful for building broader local search relevance. We can review your existing website and identify what needs to be improved.',
    },
    {
      id: 'faq-5',
      question: 'Do you work on Google Maps rankings?',
      answer: 'Yes. Google Business Profile and local search visibility are key parts of the strategy.',
    },
    {
      id: 'faq-6',
      question: 'When can we start?',
      answer: "Start by submitting your details for a free SEO audit. We'll review your current position and discuss the next step.",
    },
  ],
};

export const FINAL_CTA_CONTENT = {
  h2: 'Ready to Get Your Business Into the Top 3 on Google?',
  subheadline: 'Find out where your business stands — and what it will take to improve your local visibility.',
  ctaText: 'Get Your Free SEO Audit',
  underCta: 'Your customers are searching. Make sure they can find you.',
};

export const FOOTER_CONTENT = {
  logoText: 'MAGDIO',
  tagline: 'The AI Growth Studio',
  links: [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Book a Free Audit', href: BOOKING_CTA_URL, isExternal: true },
  ],
  website: 'www.magdio.com',
  websiteUrl: 'https://www.magdio.com',
  copyright: '© 2026 Pannovites Private Limited. All rights reserved.',
};
