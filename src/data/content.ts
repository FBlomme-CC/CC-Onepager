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
    title: 'Kartobord Grondstof',
    subtitle: 'Kwaliteitskarton 350g',
    category: 'GRONDSTOF',
    rate: '€1.80',
    unit: 'per kg',
    status: 'Op voorraad',
    specs: [
      { label: 'DIKTE', value: '0.42 mm' },
      { label: 'RENDEMENT', value: '94.2%' },
      { label: 'LEVERANCIER', value: 'Stora Enso' },
      { label: 'LEVERTIJD', value: '3 Dagen' },
    ],
    marginImpact: '+5% grondstof = -2.4% productmarge',
    colorScheme: 'white',
  },
  {
    id: 'card-overhead',
    type: 'overhead',
    title: 'Magazijn Opslag & Handling',
    subtitle: 'Geconditioneerde Palletstellingen',
    category: 'OVERHEAD / LOGISTIEK',
    rate: '€0.22',
    unit: 'per kg',
    status: 'Actief Tarief',
    specs: [
      { label: 'DISPATCH BUFFER', value: '4.0%' },
      { label: 'HEFTRUCK TARIEF', value: '€0.08 / kg' },
      { label: 'FACILITEIT', value: 'Hub Antwerpen' },
      { label: 'TOEWOHING', value: 'Directe Absorptie' },
    ],
    marginImpact: 'Vaste kostenbodem: beschermt EBITDA',
    colorScheme: 'coral',
  },
  {
    id: 'card-machine',
    type: 'machine',
    title: 'Heidelberg Drukpers',
    subtitle: 'XL 106 6-Kleuren UV Offsetpers',
    category: 'MACHINE & ARBEID',
    rate: '€110.00',
    unit: 'per uur',
    status: 'Ingepland',
    specs: [
      { label: 'INSTELTIJD', value: '30 min' },
      { label: 'SHELHEID', value: '4.200 vel/u' },
      { label: 'OPERATOR', value: '€38.50 / u' },
      { label: 'VERBRUIK', value: '42 kWh' },
    ],
    marginImpact: 'Serie > 5.000 stuks geeft +7.1% efficiëntie',
    colorScheme: 'dark',
  },
];

export const COMPARISON_DATA = [
  {
    feature: 'Aanpassing van Prijsfluctuaties',
    excel: 'Handmatige wijzigingen regel per regel in tientallen bestanden. Fouten in formules en verouderde grondstofprijzen zijn schering en inslag.',
    costCards: 'Gecentraliseerde dynamische receptuur. Pas de karton- of graanprijs één keer aan en elk afhankelijk product herrekent in milliseconden.',
  },
  {
    feature: 'Margegrenzen & Goedkeuringen',
    excel: 'Blinde verkoopkortingen. Verkopers sturen offertes met negatieve brutomarges omdat spreadsheets indirecte arbeid en afval verbergen.',
    costCards: 'Visuele EBITDA-bewakers. Het systeem waarschuwt zodra een aangepaste korting onder de toegestane margedrempel zakt.',
  },
  {
    feature: 'Complexe Meergraads Stuklijsten (BOM)',
    excel: 'Nesten van VLOOKUP-formules die breken zodra kolommen verschuiven. Geen nauwkeurige opvolging van afval- of instelverliezen.',
    costCards: 'Modulaire kaarten met visuele overerving, automatische afvalfactoren en geaggregeerde batchberekeningen.',
  },
];

export const FAQS = [
  {
    question: 'Hoe vervangt CostCards Excel voor kostprijsberekening in de productie?',
    answer: 'Excel-spreadsheets zijn geïsoleerd en statisch: wanneer een grondstof, hars of machine-uurtarief stijgt, moet iemand handmatig tientallen bestanden bijwerken, wat leidt tot gebroken formules en verouderde offertes. CostCards creëert gecentraliseerde, gekoppelde "Cost Cards". Als karton met €0,15/kg stijgt, werkt elke afgewerkte doosreceptuur die kaart automatisch en direct bij.',
  },
  {
    question: 'Kan CostCards meergraads stuklijsten (multi-level BOMs) aan?',
    answer: 'Ja. CostCards is specifiek ontworpen voor complexe, meerstaps productieprocessen. Je kunt grondstofkaarten combineren tot halfafgewerkte producten, afwerkingskaarten toevoegen (zoals warmfoliestansen) en uiteindelijke verpakkings- en logistieke kaarten koppelen met aangepaste afvalpercentages op elk niveau.',
  },
  {
    question: 'Hoe snel kunnen we CostCards implementeren in onze kmo?',
    answer: 'De meeste kmo-productiebedrijven zijn binnen 48 tot 72 uur operationeel. Je kunt bestaande catalogi en uurtarieven importeren via CSV/Excel of starten met onze vooraf gebouwde sjablonen voor verpakkingen, brouwerijen en industriële fabricage.',
  },
  {
    question: 'Koppelt CostCards met ons ERP- of boekhoudsysteem?',
    answer: 'Ja. CostCards integreert naadloos met ERP- en boekhoudsoftware zoals Odoo, Exact Online, Microsoft Dynamics Business Central en aangepaste databases via REST API. Je kunt ook met één klik gecontroleerde Excel- en PDF-kostprijsoverzichten exporteren.',
  },
  {
    question: 'Wat gebeurt er wanneer leveranciers hun prijzen verhogen?',
    answer: 'Met onze Prijs-Simulator pas je elke leverancierskaart aan (bijv. +12% aluminium of +8% suiker) en zie je direct de netto impact op je hele productportfolio. Je ziet meteen welke klantcontracten onder de minimale EBITDA-drempel zakken.',
  },
  {
    question: 'Is onze bedrijfsspecifieke receptuur- en prijsdata beveiligd?',
    answer: 'Absoluut. CostCards maakt gebruik van enterprise-grade AES-256 encryptie. Onze infrastructuur is gehost in ISO 27001 en SOC 2 gecertificeerde Europese datacenters met strikte GDPR-naleving.',
  },
];
