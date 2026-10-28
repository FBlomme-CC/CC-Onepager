export interface CostCardItem {
  id: string;
  type: 'material' | 'machine' | 'overhead';
  title: string;
  subtitle: string;
  category: string;
  rate: string;
  unit: string;
  status: string;
  specs: { label: string; value: string }[];
  marginImpact: string;
  colorScheme: 'white' | 'coral' | 'dark';
}

export const HERO_CARDS: CostCardItem[] = [
  {
    id: 'card-material',
    type: 'material',
    title: 'Raw Cardboard Stock',
    subtitle: 'Premium Playing Boards 350gsm',
    category: 'RAW MATERIAL',
    rate: '€1.80',
    unit: 'per kg',
    status: 'In Stock',
    specs: [
      { label: 'CALIPER', value: '0.42 mm' },
      { label: 'YIELD', value: '94.2%' },
      { label: 'SUPPLIER', value: 'Stora Enso' },
      { label: 'LEAD TIME', value: '3 Days' },
    ],
    marginImpact: '+5% raw price = -2.4% product margin',
    colorScheme: 'white', // Front card: Pure White (#FFFFFF) with high contrast dark typography (#0A0A0C), uppercase bold coral badge, rate tag, emerald status pill
  },
  {
    id: 'card-overhead',
    type: 'overhead',
    title: 'Warehouse Storage & Handling',
    subtitle: 'Controlled Ambient Pallet Racks',
    category: 'OVERHEAD / LOGISTICS',
    rate: '€0.22',
    unit: 'per kg',
    status: 'Active Rate',
    specs: [
      { label: 'DISPATCH BUFFER', value: '4.0%' },
      { label: 'FORKLIFT RATE', value: '€0.08 / kg' },
      { label: 'FACILITY', value: 'Hub Antwerp' },
      { label: 'ALLOCATION', value: 'Direct Absorption' },
    ],
    marginImpact: 'Fixed overhead floor: protects EBITDA baseline',
    colorScheme: 'coral', // Middle card: Coral / Watermelon Accent (#FA6B65 / #FF5C5C) with crisp white text
  },
  {
    id: 'card-machine',
    type: 'machine',
    title: 'Heidelberg Industrial Print',
    subtitle: 'XL 106 6-Color UV Offset Press',
    category: 'MACHINE & LABOR',
    rate: '€110.00',
    unit: 'per hr',
    status: 'Scheduled',
    specs: [
      { label: 'SETUP TIME', value: '30 min' },
      { label: 'RUN SPEED', value: '4,200 sht/hr' },
      { label: 'OPERATOR COST', value: '€38.50 / hr' },
      { label: 'POWER DRAW', value: '42 kWh' },
    ],
    marginImpact: 'Batch size > 5,000 units yields +7.1% efficiency',
    colorScheme: 'dark', // Back card: Dark Slate Glass (#18181F with subtle border #2A2A35)
  },
];

export const COMPARISON_DATA = [
  {
    feature: 'Price Fluctuation Updates',
    excel: 'Manual row-by-row edits across dozens of files. Formula breakage and outdated commodity costs are standard.',
    costCards: 'Centralized dynamic recipe. Update cardboard or grain cost once, and every dependent SKU updates in milliseconds.',
  },
  {
    feature: 'Margin Guardrails & Approvals',
    excel: 'Blind sales discounts. Reps send quotes with negative gross margins because formulas hide indirect labor and scrap.',
    costCards: 'Visual EBITDA guardrails. System flashes amber/red warnings when custom discount exceeds floor margin tolerances.',
  },
  {
    feature: 'Multi-Level BOM Complexity',
    excel: 'Nested VLOOKUP formulas that corrupt when columns shift. No accurate tracking of scrap factors or setup waste.',
    costCards: 'Modular nested cards with visual parent-child inheritance, automated scrap rate multipliers, and batch roll-ups.',
  },
  {
    feature: 'ERP & System Sync',
    excel: 'Tedious 4-hour re-keying into ERP or Exact Online every month, creating human data entry errors.',
    costCards: 'Live bi-directional sync with Odoo, Exact Online, and Business Central, plus clean CSV/Excel exports on demand.',
  },
];

export const BENTO_FEATURES = [
  {
    id: 'recipe-builder',
    title: 'Modular Recipe Builder',
    tagline: 'Physical building blocks for operational costing',
    description: 'Assemble materials, machine run-times, setup labor, and packaging like Lego cards. Instant drag-and-drop hierarchy for multi-level Bills of Materials.',
    highlight: 'Drag & Connect Architecture',
  },
  {
    id: 'inflation-shocks',
    title: 'Live Inflation & Price Shocks',
    tagline: 'Instant pass-through simulation in 1 click',
    description: 'When paper, resin, or hops surge by 14%, run instantaneous portfolio-wide simulations. See which accounts become loss-making before sending invoices.',
    highlight: 'Real-time Sensitivity Matrix',
  },
  {
    id: 'margin-guardrails',
    title: 'Target Margin Guardrails',
    tagline: 'EBITDA protection at the point of sale',
    description: 'Set floor and target margins per product family. Sales reps receive immediate color-coded alerts if negotiated discounts drop below acceptable unit margins.',
    highlight: 'Zero-Leak Policy',
  },
  {
    id: 'erp-integration',
    title: 'ERP & Accounting Integration',
    tagline: 'Sync without replacing your core ledger',
    description: 'CostCards sits alongside your existing tech stack, feeding accurate unit economics and dynamic BOMs directly into Odoo, Exact Online, and Excel.',
    highlight: 'Plug-and-Play API',
  },
];

export const INDUSTRY_CASES = [
  {
    id: 'packaging',
    name: 'Packaging & Print',
    subtitle: 'Folding cartons, labels, corrugated displays',
    metric: '+5.4% Margin',
    metricLabel: 'Average gross margin improvement across custom print runs',
    quote: 'Before CostCards, our estimators used 14 conflicting Excel sheets. When kraft board prices spiked, we ate €42k in hidden losses. Now every single quote is locked to current market rates.',
    author: 'Stefan Van Hoof',
    role: 'Operations Director',
    company: 'CartonCraft Packaging BV',
    pills: ['Paperboard 350gsm', 'Offset Setup Waste', 'Die-Cut Machine Rate'],
  },
  {
    id: 'brewery',
    name: 'Food, Beverage & Breweries',
    subtitle: 'Craft beer, RTD beverages, specialty canning',
    metric: '€118k Recovered',
    metricLabel: 'Identified margin drain in contract canning within 45 days',
    quote: 'Malt and hop contract prices fluctuate wildly. CostCards lets our head brewer and CFO see the exact cost per hectoliter and per can before we brew the seasonal batch.',
    author: 'Eline Meertens',
    role: 'Co-founder & CFO',
    company: 'Vanguard Artisan Brewers',
    pills: ['Malt Commodity Index', 'Canning Line Speed', 'Cold Chain Overhead'],
  },
  {
    id: 'assembly',
    name: 'Industrial Assembly & Fabrication',
    subtitle: 'Contract manufacturing, sheet metal, electronics',
    metric: '94% Faster Quotes',
    metricLabel: 'Quote turnaround dropped from 3 days to under 20 minutes',
    quote: 'Our sales engineers used to spend half their week calculating machine setup times and fastener costs. With modular cards, custom bids are fast and mathematically guaranteed to make profit.',
    author: 'Klaus Lindemann',
    role: 'Head of Estimation',
    company: 'Lindemann Precision Fabrication',
    pills: ['Laser Cut Runtime', 'Powder Coating / m²', 'Assembly Labor Rate'],
  },
];

export const FAQS = [
  {
    question: 'How does CostCards replace Excel for manufacturing costing?',
    answer: 'Excel spreadsheets are isolated and static: when an ingredient, resin, or machine hourly rate increases, someone must manually update dozens of different workbooks, resulting in formula breaks and outdated quotes. CostCards creates centralized, linked "Cost Cards". If cardboard rises by €0.15/kg, every finished carton recipe using that card automatically updates its margin calculations instantly.',
  },
  {
    question: 'Can CostCards handle multi-level Bills of Materials (BOM)?',
    answer: 'Yes. CostCards is engineered specifically for nested manufacturing processes. You can combine raw material cards into sub-assemblies (e.g., printed carton blanks), add secondary finishing cards (e.g., hot foil stamping), and attach final assembly and pallet logistics cards with custom scrap percentages at each tier.',
  },
  {
    question: 'How fast can we implement CostCards in our SME?',
    answer: 'Most manufacturing SMEs are live within 48 to 72 hours. You can import existing material catalogs and labor hourly rates via CSV/Excel or start using our pre-built industry templates for packaging, breweries, and industrial fabrication. No 6-month consulting engagement required.',
  },
  {
    question: 'Does CostCards integrate with our ERP or inventory system?',
    answer: 'Yes. CostCards connects seamlessly with ERP and accounting software such as Odoo, Exact Online, Microsoft Dynamics Business Central, and custom SQL databases via REST API and webhooks. You can also export audit-ready Excel and PDF cost sheets with a single click.',
  },
  {
    question: 'What happens when our suppliers increase commodity prices?',
    answer: 'With our Price Shock Simulator, you can adjust any supplier card (e.g., +12% aluminum or +8% sugar) and instantly view the net impact across your entire product portfolio. You will see immediately which customer contracts dip below minimum EBITDA thresholds and need renegotiation.',
  },
  {
    question: 'How does AI Simulation detect margin erosion and generate next-year forecasts?',
    answer: 'The AI Simulation engine scans your entire product catalog in 1.2 seconds. When macro shocks occur—such as an 8% steel increase from political instability—AI identifies which products are at risk, which turn loss-making, and calculates the exact net financial EBIT drop. Furthermore, it creates structured forecasts for next year across all component cards (raw materials, statutory wage indexation, machine depreciation, energy) so your next-year budget is ready in seconds.',
  },
  {
    question: 'Is our proprietary recipe and pricing data secure?',
    answer: 'Completely. CostCards utilizes enterprise-grade AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is hosted in ISO 27001 and SOC 2 Type II certified European data centers with strict GDPR compliance and role-based access control.',
  },
];
