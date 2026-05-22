export type PortfolioCategoryKey =
  | 'digital-marketing'
  | 'graphic-design'
  | 'video-editing'
  | 'web-development'
  | 'branding'
  | 'content-creation';

export type PortfolioProject = {
  category: PortfolioCategoryKey;
  slug: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  images: readonly string[];
  summary: string;
  problem: string;
  goals: string[];
  challenges: string[];
  strategy: {
    marketing: string;
    design: string;
    growth: string;
    content: string;
  };
  process: { title: string; copy: string }[];
  visuals: { title: string; copy: string }[];
  results: { label: string; value: string; detail: string }[];
  testimonial: { quote: string; author: string; role: string };
  highlight: string;
};

export type PortfolioCategory = {
  key: PortfolioCategoryKey;
  label: string;
  href: string;
  tone: string;
  intro: string;
  layout: 'analytics' | 'masonry' | 'cinematic' | 'browser' | 'editorial' | 'social';
  summary: string;
  projects: PortfolioProject[];
};

const imageSets = {
  cafe: {
    coverImage: 'https://i.pinimg.com/originals/90/01/ed/9001ed1a052e1388f69e626634568072.png',
    images: [
      'https://i.pinimg.com/originals/90/fc/77/90fc773072c4131727a9f6ed5331dfc0.png',
      'https://i.pinimg.com/originals/f6/53/27/f65327d48da3a44e0df28ec580c24c67.png',
      'https://i.pinimg.com/736x/09/74/17/097417544cc83f2fa90da7646ed45e2d.jpg'
    ]
  },
  clinic: {
    coverImage: 'https://images.unsplash.com/photo-1588776814546-cd3b0b9c6d1f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1588776814546-cd3b0b9c6d1f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  identity: {
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  posters: {
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  motion: {
    coverImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  teaser: {
    coverImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f5b5bd3a63?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  restaurant: {
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  startup: {
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  salon: {
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  refresh: {
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  social: {
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  creator: {
    coverImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f5b5bd3a63?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80'
    ]
  }
} as const;

export const portfolioCategories: PortfolioCategory[] = [
  {
    key: 'digital-marketing',
    label: 'Digital Marketing',
    href: '/portfolio/digital-marketing',
    tone: 'from-[#061B3A] via-[#0A2348] to-[#04070f]',
    intro: 'Analytics-led campaigns with premium motion and crisp KPI storytelling.',
    layout: 'analytics',
    summary: 'Growth systems, ad narratives, retention flows, and performance dashboards designed to feel editorial instead of spreadsheet-heavy.',
    projects: [
      {
        category: 'digital-marketing',
        slug: 'cafe-growth-campaign',
        title: 'Cafe Growth Campaign',
        client: 'Luma Cafe',
        year: '2025',
        ...imageSets.cafe,
        summary: 'A local growth engine that mixed paid social, content hooks, and offer design to turn discovery into repeat visits.',
        problem: 'The cafe had strong product quality but weak local visibility and low repeat traffic.',
        goals: ['Increase nearby awareness', 'Improve weekly repeat visits', 'Grow seasonal offers'],
        challenges: ['Fragmented ad performance', 'No consistent content rhythm', 'Weak local differentiation'],
        strategy: {
          marketing: 'Built a neighborhood-first campaign with geo-targeted paid ads and referral offers.',
          design: 'Used warm premium visuals and bold typography to make every post feel curated.',
          growth: 'Connected short-form promotions to reservation, loyalty, and retention flows.',
          content: 'Created a weekly content cadence around drink drops, chef moments, and community stories.'
        },
        process: [
          { title: 'Audit', copy: 'Reviewed current channels, customer paths, and offer structure.' },
          { title: 'Launch', copy: 'Rolled out paid search, social, and local content simultaneously.' },
          { title: 'Optimize', copy: 'Shifted budget into the highest-intent creatives and time windows.' }
        ],
        visuals: [
          { title: 'KPI Dashboard', copy: 'A dashboard-style hero showing reach, bookings, and repeat rate.' },
          { title: 'Campaign Panels', copy: 'Premium ad mockups with warm cinematic food imagery.' },
          { title: 'Offer Cards', copy: 'Promotion layouts built for fast scanning and high retention.' }
        ],
        results: [
          { label: 'Bookings', value: '+48%', detail: 'Increase in reservation volume over 8 weeks' },
          { label: 'Repeat Visits', value: '+31%', detail: 'Growth in returning local customers' },
          { label: 'CTR', value: '4.8%', detail: 'Above-category campaign engagement' }
        ],
        testimonial: {
          quote: 'The campaign felt premium from the first week. We finally had a system that looked as good as the product tasted.',
          author: 'Nadia Rahman',
          role: 'Founder, Luma Cafe'
        },
        highlight: 'Paid media, local reach, loyalty.'
      },
      {
        category: 'digital-marketing',
        slug: 'clinic-lead-engine',
        title: 'Clinic Lead Engine',
        client: 'Vera Dental',
        year: '2025',
        ...imageSets.clinic,
        summary: 'An acquisition system for a premium dental clinic focused on high-intent search, authority content, and conversion flows.',
        problem: 'Lead quality was inconsistent and the site felt too generic for the premium market.',
        goals: ['Raise qualified leads', 'Increase booked consultations', 'Improve brand authority'],
        challenges: ['High cost per lead', 'Thin service education', 'Weak trust signals'],
        strategy: {
          marketing: 'Focused on intent-heavy search terms and audience-specific landing pages.',
          design: 'Built a calmer, high-trust visual system with clinical restraint and premium contrast.',
          growth: 'Integrated lead forms, call tracking, and consult funnel measurement.',
          content: 'Published expert-led articles and before/after stories to support decision-making.'
        },
        process: [
          { title: 'Research', copy: 'Mapped patient questions, keywords, and competing service narratives.' },
          { title: 'Build', copy: 'Created service-focused landing pages and authority content.' },
          { title: 'Scale', copy: 'Raised spend on top-performing keywords and retargeting sequences.' }
        ],
        visuals: [
          { title: 'Lead Funnel', copy: 'Conversion tunnel with appointment and call sources.' },
          { title: 'Authority Cards', copy: 'Educational content blocks with a premium medical tone.' },
          { title: 'Result Snapshot', copy: 'A clean KPI layout built around booked consultations.' }
        ],
        results: [
          { label: 'Consults', value: '+39%', detail: 'Booked consultation lift across core services' },
          { label: 'CPL', value: '-27%', detail: 'Lower cost per lead after optimization' },
          { label: 'Organic Leads', value: '+22%', detail: 'Growth from authority content and search' }
        ],
        testimonial: {
          quote: 'We started getting better inquiries almost immediately. The experience looked more trustworthy, and the leads matched that perception.',
          author: 'Dr. Elias Moore',
          role: 'Principal Dentist, Vera Dental'
        },
        highlight: 'Search intent, authority, consult flow.'
      }
    ]
  },
  {
    key: 'graphic-design',
    label: 'Graphic Designing',
    href: '/portfolio/graphic-design',
    tone: 'from-[#F7F7F5] via-[#EFEDE5] to-[#D9D5C8]',
    intro: 'Visual-heavy creative systems with packaging, typography, and campaign mockups.',
    layout: 'masonry',
    summary: 'Editorial graphics, identity spreads, and bold visual grids that make each thumbnail feel like a collectible object.',
    projects: [
      {
        category: 'graphic-design',
        slug: 'luxury-brand-identity',
        title: 'Luxury Brand Identity',
        client: 'Maison Vale',
        year: '2026',
        ...imageSets.identity,
        summary: 'A refined identity system balancing fashion-level restraint with tactile brand details.',
        problem: 'The brand lacked a coherent visual language across print, social, and packaging.',
        goals: ['Define a premium identity', 'Create a modular grid', 'Unify assets across formats'],
        challenges: ['Inconsistent typography', 'Weak packaging hierarchy', 'Generic social templates'],
        strategy: {
          marketing: 'Presented the brand as a premium lifestyle label through visual consistency.',
          design: 'Built a monochrome system with one warm accent and strong typographic structure.',
          growth: 'Set up reusable campaign assets to reduce design turnaround time.',
          content: 'Designed launch sets, editorial mockups, and social-first visual assets.'
        },
        process: [
          { title: 'Direction', copy: 'Established tone, type scale, and image treatment rules.' },
          { title: 'Systems', copy: 'Built layouts for packaging, social, and campaign print.' },
          { title: 'Rollout', copy: 'Applied the system across launch assets and brand touchpoints.' }
        ],
        visuals: [
          { title: 'Identity Grid', copy: 'Logo system and spacing rules laid out like a premium editorial spread.' },
          { title: 'Packaging Mockups', copy: 'Luxury boxes and sleeves with soft shadow depth.' },
          { title: 'Campaign Tiles', copy: 'High-contrast visual tiles for launch announcements.' }
        ],
        results: [
          { label: 'Asset Consistency', value: '+100%', detail: 'All launch materials aligned to one visual system' },
          { label: 'Time Saved', value: '41%', detail: 'Faster asset production after system rollout' },
          { label: 'Social Saves', value: '+24%', detail: 'Higher engagement from more collectible graphics' }
        ],
        testimonial: {
          quote: 'It finally feels like one brand, not a collection of separate designs. The system is elegant and easy to use.',
          author: 'Camille Hart',
          role: 'Creative Director, Maison Vale'
        },
        highlight: 'Identity, packaging, type systems.'
      },
      {
        category: 'graphic-design',
        slug: 'event-poster-series',
        title: 'Event Poster Series',
        client: 'Flux Arts Week',
        year: '2025',
        ...imageSets.posters,
        summary: 'A poster universe with variable typography, layered gradients, and sharp festival energy.',
        problem: 'The event needed a more recognizable visual presence across street and social placements.',
        goals: ['Improve recognition', 'Create poster variants', 'Build a memorable launch kit'],
        challenges: ['Multiple venues', 'Fast promo windows', 'Mixed audience segments'],
        strategy: {
          marketing: 'Made each poster feel like part of a larger collectible system.',
          design: 'Used asymmetric type blocks and layered abstract forms for impact.',
          growth: 'Adjusted poster variants by venue and channel.',
          content: 'Prepared social crops, motion snippets, and teaser cards.'
        },
        process: [
          { title: 'Concept', copy: 'Mapped the event’s visual voice and format needs.' },
          { title: 'Iteration', copy: 'Built poster variations for different placements.' },
          { title: 'Deployment', copy: 'Rolled out print, social, and motion versions together.' }
        ],
        visuals: [
          { title: 'Poster Wall', copy: 'A stacked gallery of print-ready variants.' },
          { title: 'Teaser Cards', copy: 'Small-format social crops with high-contrast type.' },
          { title: 'Motion Cuts', copy: 'Animated event reveals for stories and reels.' }
        ],
        results: [
          { label: 'Attendance Interest', value: '+34%', detail: 'More event page visits after launch' },
          { label: 'Social Reach', value: '+52%', detail: 'Expanded campaign visibility' },
          { label: 'Poster Recall', value: 'High', detail: 'Improved recognition across placements' }
        ],
        testimonial: {
          quote: 'The posters looked like art objects. People were sharing them before the event even opened.',
          author: 'Iris Nolan',
          role: 'Program Lead, Flux Arts Week'
        },
        highlight: 'Posters, print, teasers.'
      }
    ]
  },
  {
    key: 'video-editing',
    label: 'Video Editing',
    href: '/portfolio/video-editing',
    tone: 'from-[#05070d] via-[#0b1018] to-[#1d2634]',
    intro: 'Cinematic reel showcases, dark motion layouts, and premium preview systems.',
    layout: 'cinematic',
    summary: 'Dynamic edits, reel pacing, and video storytelling designed to feel like short-form film sequences.',
    projects: [
      {
        category: 'video-editing',
        slug: 'real-estate-reel-campaign',
        title: 'Real Estate Reel Campaign',
        client: 'Altitude Homes',
        year: '2026',
        ...imageSets.motion,
        summary: 'A cinematic reel system used to turn listings into high-conviction social content.',
        problem: 'Property content looked flat and failed to communicate premium value online.',
        goals: ['Increase reel engagement', 'Boost listing interest', 'Improve lead quality'],
        challenges: ['Static footage', 'Low retention', 'Weak brand rhythm'],
        strategy: {
          marketing: 'Built a reel framework around opening hooks, movement, and closing CTAs.',
          design: 'Applied a dark luxe grade and elegant titles to support premium listings.',
          growth: 'Connected video performance to landing-page and inquiry conversion data.',
          content: 'Created a repeatable edit template for new property drops and launch teasers.'
        },
        process: [
          { title: 'Footage Map', copy: 'Sorted clips by hero moments, movement, and detail shots.' },
          { title: 'Edit Flow', copy: 'Built pacing around strong opening hooks and smooth transitions.' },
          { title: 'Distribution', copy: 'Optimized versions for reels, stories, and paid placements.' }
        ],
        visuals: [
          { title: 'Reel Preview', copy: 'A dark cinematic video frame with motion titles.' },
          { title: 'Listing Cuts', copy: 'Vertical edits showing architectural detail and flow.' },
          { title: 'CTA End Cards', copy: 'Closing frames for inquiries and booking.' }
        ],
        results: [
          { label: 'Retention', value: '+44%', detail: 'Longer watch times across primary reels' },
          { label: 'Inquiries', value: '+28%', detail: 'More qualified leads from video traffic' },
          { label: 'Saves', value: '+36%', detail: 'Stronger engagement on teaser content' }
        ],
        testimonial: {
          quote: 'The edits made our listings feel like launches. That shift changed how buyers reacted to the content.',
          author: 'Rowan Bell',
          role: 'Marketing Lead, Altitude Homes'
        },
        highlight: 'Reels, dark grade, vertical motion.'
      },
      {
        category: 'video-editing',
        slug: 'product-teaser-film',
        title: 'Product Teaser Film',
        client: 'Nexa Audio',
        year: '2025',
        ...imageSets.teaser,
        summary: 'A premium short film for a product launch built to feel tactile, sleek, and deeply shareable.',
        problem: 'The launch video lacked the energy required to create anticipation.',
        goals: ['Create excitement', 'Improve launch recall', 'Strengthen premium perception'],
        challenges: ['Limited footage', 'Broad audience', 'Short attention window'],
        strategy: {
          marketing: 'Structured the teaser around emotional reveals and feature payoff.',
          design: 'Used dark contrast, glowing highlights, and restrained text overlays.',
          growth: 'Delivered cutdowns for social, paid, and landing page use.',
          content: 'Produced teaser, reveal, and feature-focused versions.'
        },
        process: [
          { title: 'Storyboard', copy: 'Planned reveal beats and visual tension.' },
          { title: 'Edit', copy: 'Layered pacing, sound, and titles around the product reveal.' },
          { title: 'Deliver', copy: 'Exported platform-specific cuts for launch week.' }
        ],
        visuals: [
          { title: 'Reveal Frames', copy: 'Premium close-ups with cinematic lighting.' },
          { title: 'Motion Titles', copy: 'Minimal typography over deep dark visuals.' },
          { title: 'Sound Sync', copy: 'Beat-matched transitions for stronger recall.' }
        ],
        results: [
          { label: 'Launch Reach', value: '+41%', detail: 'Reach growth during launch week' },
          { label: 'CTR', value: '5.1%', detail: 'Higher click-through on teaser ads' },
          { label: 'Shares', value: '+33%', detail: 'Increased repost rate from launch content' }
        ],
        testimonial: {
          quote: 'The teaser changed the launch tone completely. It felt more premium, more deliberate, and much more shareable.',
          author: 'Alya Stone',
          role: 'Brand Manager, Nexa Audio'
        },
        highlight: 'Teaser pacing, sound, premium reveal.'
      }
    ]
  },
  {
    key: 'web-development',
    label: 'Website Development',
    href: '/portfolio/web-development',
    tone: 'from-[#061B3A] via-[#122f5d] to-[#dfe7ef]',
    intro: 'Browser mockups, scroll storytelling, and interactive device-frame builds.',
    layout: 'browser',
    summary: 'Fast, premium, and responsive websites that combine clean architecture with motion-led presentation.',
    projects: [
      {
        category: 'web-development',
        slug: 'restaurant-website-redesign',
        title: 'Restaurant Website Redesign',
        client: 'Nori Table',
        year: '2026',
        ...imageSets.restaurant,
        summary: 'A refined website build that elevated reservations, menu discovery, and chef storytelling.',
        problem: 'The old site looked dated and buried key booking actions.',
        goals: ['Increase reservations', 'Improve menu browsing', 'Create stronger brand presence'],
        challenges: ['Slow load times', 'Weak mobile UX', 'Low conversion clarity'],
        strategy: {
          marketing: 'Turned the site into a conversion-focused brand experience with clear reservation paths.',
          design: 'Used glass panels, cinematic imagery, and a high-contrast hierarchy.',
          growth: 'Optimized mobile flow and booking placements.',
          content: 'Structured chef stories, menu snapshots, and feature blocks.'
        },
        process: [
          { title: 'Architecture', copy: 'Mapped navigation, story flow, and key conversion points.' },
          { title: 'Visual Build', copy: 'Designed responsive sections with motion-led reveals.' },
          { title: 'Launch', copy: 'Fine-tuned performance and interaction timing.' }
        ],
        visuals: [
          { title: 'Browser Mockup', copy: 'Full-screen desktop frame showing the redesigned homepage.' },
          { title: 'Menu Preview', copy: 'Elegant menu cards with clear hierarchy.' },
          { title: 'Reservation Flow', copy: 'A calm conversion path with fewer distractions.' }
        ],
        results: [
          { label: 'Reservations', value: '+37%', detail: 'Lift after redesign launch' },
          { label: 'Mobile Conversion', value: '+29%', detail: 'Better performance on mobile devices' },
          { label: 'Bounce Rate', value: '-18%', detail: 'Reduced drop-off from homepage' }
        ],
        testimonial: {
          quote: 'The site now feels like the restaurant itself: premium, calm, and intentional. Bookings became easier almost immediately.',
          author: 'Sophia Laurent',
          role: 'Owner, Nori Table'
        },
        highlight: 'Browser flow, reservations, mobile UX.'
      },
      {
        category: 'web-development',
        slug: 'startup-launch-platform',
        title: 'Startup Launch Platform',
        client: 'Orbit Systems',
        year: '2025',
        ...imageSets.startup,
        summary: 'A motion-led launch platform built around product storytelling and investor clarity.',
        problem: 'The startup needed a digital presence that could impress both customers and investors.',
        goals: ['Clarify product value', 'Increase signups', 'Strengthen credibility'],
        challenges: ['Complex product language', 'Short launch window', 'Multiple stakeholder needs'],
        strategy: {
          marketing: 'Created a website that acted as both pitch deck and conversion asset.',
          design: 'Used layered motion, clean sections, and premium whitespace.',
          growth: 'Built clear signup points and social proof blocks.',
          content: 'Focused on product demos, metrics, and trust-building content.'
        },
        process: [
          { title: 'Discovery', copy: 'Defined narrative, users, and launch objectives.' },
          { title: 'System Build', copy: 'Implemented a scalable component library and motion system.' },
          { title: 'Refine', copy: 'Polished transitions and ensured responsive consistency.' }
        ],
        visuals: [
          { title: 'Device Stack', copy: 'Browser and mobile mockups positioned together.' },
          { title: 'Feature Flow', copy: 'Scrolling sections that guide the product story.' },
          { title: 'Proof Blocks', copy: 'Metrics and testimonials used as trust signals.' }
        ],
        results: [
          { label: 'Signups', value: '+46%', detail: 'Growth after the launch platform went live' },
          { label: 'Time on Site', value: '+35%', detail: 'Stronger engagement with product sections' },
          { label: 'Investor Confidence', value: 'High', detail: 'Presentation quality improved stakeholder response' }
        ],
        testimonial: {
          quote: 'The site carried the pitch for us. It felt polished enough for customers and credible enough for investors.',
          author: 'Jordan Kim',
          role: 'Co-founder, Orbit Systems'
        },
        highlight: 'Pitch-meets-product, motion-first, scalable.'
      }
    ]
  },
  {
    key: 'branding',
    label: 'Branding',
    href: '/portfolio/branding',
    tone: 'from-[#F7F7F5] via-[#faf8f2] to-[#efe4d3]',
    intro: 'Logo systems, typography shows, packaging mockups, and identity storytelling.',
    layout: 'editorial',
    summary: 'Premium identity systems with tactile applications and a clear brand point of view.',
    projects: [
      {
        category: 'branding',
        slug: 'premium-salon-rebrand',
        title: 'Premium Salon Rebrand',
        client: 'Aurelia House',
        year: '2026',
        ...imageSets.salon,
        summary: 'A sensual identity system for a modern salon combining elegance, warmth, and clarity.',
        problem: 'The salon’s brand felt soft but not distinctive.',
        goals: ['Create a signature look', 'Support premium pricing', 'Improve brand recall'],
        challenges: ['Generic beauty category', 'Low identity separation', 'Mixed application needs'],
        strategy: {
          marketing: 'Positioned the salon as a premium destination rather than a generic service provider.',
          design: 'Built a letterform-led identity with elegant spacing and tactile textures.',
          growth: 'Prepared launch assets and booking touchpoints for consistency.',
          content: 'Developed social templates, packaging labels, and campaign systems.'
        },
        process: [
          { title: 'Brand Story', copy: 'Defined the emotional tone and visual anchors.' },
          { title: 'Identity Build', copy: 'Created logos, typography rules, and material references.' },
          { title: 'Applications', copy: 'Applied the identity to launch and booking assets.' }
        ],
        visuals: [
          { title: 'Logo Suite', copy: 'Logotype variations and spacing rules.' },
          { title: 'Packaging', copy: 'Product labels and bags with subtle premium finishes.' },
          { title: 'Typography Wall', copy: 'Large editorial type layout for brand storytelling.' }
        ],
        results: [
          { label: 'Recall', value: '+28%', detail: 'Improved audience recognition after launch' },
          { label: 'Bookings', value: '+19%', detail: 'More premium appointments from new positioning' },
          { label: 'Brand Alignment', value: 'Strong', detail: 'Unified look across all touchpoints' }
        ],
        testimonial: {
          quote: 'The identity feels mature and luxurious. It made the salon look like a destination, not just another service business.',
          author: 'Elena Marlow',
          role: 'Founder, Aurelia House'
        },
        highlight: 'Typography, packaging, identity rollouts.'
      },
      {
        category: 'branding',
        slug: 'tech-brand-refresh',
        title: 'Tech Brand Refresh',
        client: 'Vector Loop',
        year: '2025',
        ...imageSets.refresh,
        summary: 'A sharper identity refresh that brought clarity, confidence, and a more premium digital tone.',
        problem: 'The old branding lacked a strong product-ready personality.',
        goals: ['Clarify the brand voice', 'Modernize the visuals', 'Prepare for growth'],
        challenges: ['Legacy visual clutter', 'Weak hierarchy', 'Need for flexible systems'],
        strategy: {
          marketing: 'Simplified the story and made the product message easier to absorb.',
          design: 'Introduced a cleaner logo, type scale, and dark-premium palette.',
          growth: 'Created an identity system that could scale across launch, product, and social assets.',
          content: 'Built templates for announcements, feature highlights, and thought leadership.'
        },
        process: [
          { title: 'Audit', copy: 'Reviewed identity points across digital and sales touchpoints.' },
          { title: 'Refresh', copy: 'Updated the visual system with disciplined hierarchy.' },
          { title: 'Rollout', copy: 'Delivered templates and launch guidance for the team.' }
        ],
        visuals: [
          { title: 'System Sheet', copy: 'Identity rules and usage examples.' },
          { title: 'UI Mockups', copy: 'A product-inspired visual language for the site.' },
          { title: 'Social Stack', copy: 'Templates that feel cohesive across content.' }
        ],
        results: [
          { label: 'Visual Clarity', value: '+100%', detail: 'More coherent communication across channels' },
          { label: 'Brand Confidence', value: 'High', detail: 'Internal team adoption improved immediately' },
          { label: 'Web Engagement', value: '+22%', detail: 'Better response to the refreshed presentation' }
        ],
        testimonial: {
          quote: 'The refresh gave the company a more serious, more premium edge without losing personality.',
          author: 'Mina Patel',
          role: 'Marketing Director, Vector Loop'
        },
        highlight: 'Refresh, product voice, system scale.'
      }
    ]
  },
  {
    key: 'content-creation',
    label: 'Content Creation',
    href: '/portfolio/content-creation',
    tone: 'from-[#07111F] via-[#101b2d] to-[#f4f2ed]',
    intro: 'Social grids, carousel structures, and content systems built for consistent output.',
    layout: 'social',
    summary: 'Content frameworks that combine premium social design with repeatable systems for everyday brand growth.',
    projects: [
      {
        category: 'content-creation',
        slug: 'social-growth-system',
        title: 'Social Growth System',
        client: 'Bloom Skincare',
        year: '2026',
        ...imageSets.social,
        summary: 'A content engine for social media that turned educational posts into a premium visual cadence.',
        problem: 'The team was posting often but lacked a structured visual pattern.',
        goals: ['Improve consistency', 'Increase saves', 'Strengthen educational content'],
        challenges: ['Many message types', 'Inconsistent design', 'Audience fatigue'],
        strategy: {
          marketing: 'Built content pillars that aligned brand education with product discovery.',
          design: 'Created a social grid system with clean cards, image balance, and subtle motion.',
          growth: 'Organized posts into repeatable series for faster publishing.',
          content: 'Developed carousel templates, reels covers, and story sets.'
        },
        process: [
          { title: 'Pillars', copy: 'Defined the content categories and publishing cadence.' },
          { title: 'Templates', copy: 'Created reusable layouts for carousels and reels.' },
          { title: 'Publish', copy: 'Launched the content engine and measured saves and reach.' }
        ],
        visuals: [
          { title: 'Social Grid', copy: 'A multi-tile content wall for the feed.' },
          { title: 'Carousel Frames', copy: 'Educational slides with premium spacing.' },
          { title: 'Story Covers', copy: 'Branded story and reel cover visuals.' }
        ],
        results: [
          { label: 'Saves', value: '+43%', detail: 'Higher save rate on educational posts' },
          { label: 'Reach', value: '+27%', detail: 'Organic visibility improved across the grid' },
          { label: 'Publishing Speed', value: '+38%', detail: 'Faster content production with templates' }
        ],
        testimonial: {
          quote: 'The content finally looked coordinated. We could post more often without the feed feeling messy.',
          author: 'Talia Green',
          role: 'Brand Lead, Bloom Skincare'
        },
        highlight: 'Carousels, grid systems, story sets.'
      },
      {
        category: 'content-creation',
        slug: 'creator-content-kit',
        title: 'Creator Content Kit',
        client: 'Studio North',
        year: '2025',
        ...imageSets.creator,
        summary: 'A content pack for a creator brand focused on launch posts, cover art, and recurring series.',
        problem: 'Their posts were visually strong in isolation but lacked a repeatable system.',
        goals: ['Build consistency', 'Support launches', 'Create content series'],
        challenges: ['Multiple content formats', 'Frequent deadlines', 'Need for premium visuals'],
        strategy: {
          marketing: 'Designed content pillars around launches, behind-the-scenes, and insights.',
          design: 'Used a modular grid with bold type and adaptable cover formats.',
          growth: 'Prepared a system for weekly releases and fast creative production.',
          content: 'Created templates for posts, stories, thumbnails, and carousels.'
        },
        process: [
          { title: 'Plan', copy: 'Outlined the recurring content formats and launch needs.' },
          { title: 'Design', copy: 'Built templates that could scale across topics.' },
          { title: 'Deliver', copy: 'Exported a kit for rapid publishing and brand consistency.' }
        ],
        visuals: [
          { title: 'Cover System', copy: 'A thumbnail and cover family with strong recognition.' },
          { title: 'Carousel Kit', copy: 'Reusable educational and launch slides.' },
          { title: 'Content Board', copy: 'Organized production board and theme previews.' }
        ],
        results: [
          { label: 'Consistency', value: 'Strong', detail: 'Unified visual cadence across weekly posts' },
          { label: 'Production Time', value: '-31%', detail: 'Less time spent creating new assets' },
          { label: 'Audience Response', value: '+21%', detail: 'Higher engagement on launch and insight posts' }
        ],
        testimonial: {
          quote: 'The kit made content production feel much easier. Everything now looks like it belongs to the same brand.',
          author: 'Noah Reed',
          role: 'Founder, Studio North'
        },
        highlight: 'Series design, thumbnail systems, launches.'
      }
    ]
  }
];

export function getCategory(categoryKey: PortfolioCategoryKey) {
  return portfolioCategories.find((category) => category.key === categoryKey);
}

export function getProject(categoryKey: PortfolioCategoryKey, slug: string) {
  return getCategory(categoryKey)?.projects.find((project) => project.slug === slug);
}
