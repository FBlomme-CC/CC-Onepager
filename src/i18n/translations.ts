export type Language = 'nl' | 'en';

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

export interface ComparisonItem {
  feature: string;
  excel: string;
  costCards: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeaturePillar {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface HowItWorksStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  previewType: 'cards' | 'deck' | 'simulation';
  previewBadge?: string;
  previewValue?: string;
  previewSub?: string;
}

export const TRANSLATIONS = {
  nl: {
    nav: {
      howItWorks: 'Hoe het werkt',
      product: 'Spreadsheets vs CostCards',
      features: 'Functionaliteiten',
      faq: 'Veelgestelde Vragen',
      bookDemo: 'Boek een Demo',
      openMenu: 'Navigatiemenu openen',
    },
    hero: {
      headlinePart1: 'Bescherm je ',
      headlineMargin: 'marges',
      headlinePart2: ' kaart voor kaart.',
      subtitle:
        'CostCards is dynamische kostprijs- en margesimulatiesoftware voor kmo-producenten. Vervang spreadsheetchaos door verbonden bouwstenen.',
      cta: 'Boek een Demo',
      badgeAi: 'AI-ondersteund',
      badgeBom: 'Real-time BOM synchronisatie',
      badgeMargin: 'Directe margesimulatie',
      rateSpec: 'TARIEFSPECIFICATIE',
      clickCard: 'KLIK KAART',
      liveSync: 'LIVE BOM SYNC ACTIEF',
      cards: [
        {
          id: 'card-material',
          type: 'material' as const,
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
          colorScheme: 'white' as const,
        },
        {
          id: 'card-overhead',
          type: 'overhead' as const,
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
            { label: 'TOEWIJZING', value: 'Directe Absorptie' },
          ],
          marginImpact: 'Vaste kostenbodem: beschermt EBITDA',
          colorScheme: 'coral' as const,
        },
        {
          id: 'card-machine',
          type: 'machine' as const,
          title: 'Heidelberg Drukpers',
          subtitle: 'XL 106 6-Kleuren UV Offsetpers',
          category: 'MACHINE & ARBEID',
          rate: '€110.00',
          unit: 'per uur',
          status: 'Ingepland',
          specs: [
            { label: 'INSTELTIJD', value: '30 min' },
            { label: 'SNELHEID', value: '4.200 vel/u' },
            { label: 'OPERATOR', value: '€38.50 / u' },
            { label: 'VERBRUIK', value: '42 kWh' },
          ],
          marginImpact: 'Serie > 5.000 stuks geeft +7.1% efficiëntie',
          colorScheme: 'dark' as const,
        },
      ],
    },
    howItWorks: {
      tag: 'HOE HET WERKT',
      title: 'In 3 Stappen naar Volledige Margecontrole',
      subtitle:
        'Van losse kostprijselementen naar een dynamische, visuele productberekening die je marges gegarandeerd beschermt.',
      cta: 'Boek een Demo',
      card1PreviewRaw: 'GRONDSTOF',
      card1PreviewRawTitle: 'Kartobord 350g',
      card1PreviewMachine: 'MACHINETIJD',
      card1PreviewMachineTitle: 'Drukpers XL',
      card1PreviewMachineRate: '€110.00 / uur',
      card2PreviewDeck: 'Deck: Luxe Vouwkarton',
      card2PreviewYield: 'Yield: 96.5%',
      card2PreviewUnitLabel: 'Berekende Eenheidskost:',
      card2PreviewUnitVal: '€2.47 / st',
      card3PreviewGuarded: 'Marge Bewaakt:',
      card3PreviewEbitda: '+32.4% EBITDA',
      card3PreviewSim: 'Simulatie: Papier +15%',
      card3PreviewProtected: 'Marge Beschermd ✓',
      steps: [
        {
          number: '01',
          title: 'Elk kostprijselement wordt vertaald naar een kaart',
          subtitle: 'Grondstoffen, machinetijden, arbeid & opslag',
          description:
            'Zet losse grondstofprijzen, uurtarieven, insteltijden en afvalpercentages om in modulaire, digitale Cost Cards. Eén centrale bron van waarheid.',
        },
        {
          number: '02',
          title: 'Kaarten worden samengelegd tot een Deck om een product te berekenen',
          subtitle: 'Dynamische samenstelling & instant kostprijs',
          description:
            'Stapel kaarten samen om een compleet afgewerkt product te berekenen. De kostprijs per eenheid herrekent automatisch bij elke wijziging.',
        },
        {
          number: '03',
          title: 'Decks worden gebruikt als instrumenten voor finetuning & marge optimalisatie',
          subtitle: 'Simulatie, onderhandeling & ERP-synchronisatie',
          description:
            'Gebruik actieve Decks om offertes te onderhandelen met harde EBITDA-bewakers, prijsstijgingen te simuleren en prijswijzigingen te synchroniseren van je ERP.',
        },
      ],
    },
    comparison: {
      tag: 'HET SPREADSHEETPROBLEEM',
      title: 'Waarom traditionele spreadsheets je marges aantasten',
      subtitle:
        'Excel is in 1985 gebouwd voor algemene boekhouding—niet voor fluctuerende grondstofprijzen, complexe afvalpercentages en snelle productie-offertes.',
      leftTitle: 'Statische Excel Bestanden',
      leftBadge: 'HOOG RISICO',
      rightTitle: 'CostCards Platform',
      rightBadge: 'DYNAMISCH & GEKOPPELD',
      data: [
        {
          feature: 'Aanpassing van Prijsfluctuaties',
          excel:
            'Handmatige wijzigingen regel per regel in tientallen bestanden. Fouten in formules en verouderde grondstofprijzen zijn schering en inslag.',
          costCards:
            'Gecentraliseerde dynamische receptuur. Pas de karton- of graanprijs één keer aan en elk afhankelijk product herrekent in milliseconden.',
        },
        {
          feature: 'Margegrenzen & Goedkeuringen',
          excel:
            'Blinde verkoopkortingen. Verkopers sturen offertes met negatieve brutomarges omdat spreadsheets indirecte arbeid en afval verbergen.',
          costCards:
            'Visuele EBITDA-bewakers. Het systeem waarschuwt zodra een aangepaste korting onder de toegestane margedrempel zakt.',
        },
        {
          feature: 'Complexe Meergraads Stuklijsten (BOM)',
          excel:
            'Nesten van VLOOKUP-formules die breken zodra kolommen verschuiven. Geen nauwkeurige opvolging van afval- of instelverliezen.',
          costCards:
            'Modulaire kaarten met visuele overerving, automatische afvalfactoren en geaggregeerde batchberekeningen.',
        },
      ],
    },
    features: {
      tag: 'INTERACTIEF OVERZICHT',
      title: 'De CostCards Builder in Actie',
      subtitle:
        'Klik op onderstaande kaarten om ze in- of uit te schakelen en zie hoe de berekende kostprijs direct reageert.',
      demoBadge: 'INTERACTIEVE DEMO',
      deckTitle: 'Geselecteerd Product Deck: Custom Printed Verpakking',
      unitCostLabel: 'BEREKENDE EENHEIDSKOST',
      cardsActiveCount: (active: number, total: number) => `${active} van ${total} kaarten actief`,
      unitSuffix: '/ st',
      rateLabel: 'TARIEF',
      badgeOn: 'AAN',
      badgeOff: 'UIT',
      interactiveHint: 'Klik op een kaart om het effect op de totale eenheidskost direct te zien.',
      pillarsTag: 'KERNFUNCTIONALITEITEN',
      pillarsTitle: '4 Pijlers van CostCards',
      keyBenefitsLabel: 'BELANGRIJKSTE VOORDELEN:',
      cta: 'Vraag een Demonstratie Aan',
      interactiveCards: [
        {
          id: 'rawMaterial',
          num: '01',
          category: 'GRONDSTOF',
          title: 'Kraftboard 350g',
          specs: 'Rendement 94.2% · FSC Mix',
          cost: 1.45,
          unit: '/ kg',
          theme: 'white',
        },
        {
          id: 'labour',
          num: '02',
          category: 'DIRECTE ARBEID',
          title: 'Operator Instelling',
          specs: '12 min instelcyclus',
          cost: 0.65,
          unit: '/ doorloop',
          theme: 'coral',
        },
        {
          id: 'machine',
          num: '03',
          category: 'MACHINETARIEF',
          title: 'Heidelberg XL Pers',
          specs: 'Persuurtarief',
          cost: 0.85,
          unit: '/ vel',
          theme: 'slate',
        },
        {
          id: 'energy',
          num: '04',
          category: 'ENERGIE & STROOM',
          title: 'UV Droogcyclus',
          specs: '0.42 kWh piekbelasting',
          cost: 0.28,
          unit: '/ kWh',
          theme: 'amber',
        },
        {
          id: 'packaging',
          num: '05',
          category: 'VERPAKKING',
          title: 'Pallet Omdoos',
          specs: 'Golfkarton 3-laags',
          cost: 0.32,
          unit: '/ eenheid',
          theme: 'sky',
        },
        {
          id: 'scrap',
          num: '06',
          category: 'AFVAL & SCRAP',
          title: '4.8% Snijverlies',
          specs: 'Stanstolerantie',
          cost: 0.12,
          unit: '/ marge',
          theme: 'rose',
        },
      ],
      pillars: [
        {
          id: 'feature-01',
          num: '01',
          title: 'Modulaire builder',
          category: 'VISUELE BOM ARCHITECTUUR',
          description:
            'Stapel grondstoffen, machinetijden, arbeid en opslag als fysieke kaarten. Maak complexe samengestelde producten in enkele seconden inzichtelijk.',
          highlights: [
            'Atomaire kaartstructuur',
            'Real-time BOM herberekening',
            'Multi-level afval- & scrapfaktoren',
          ],
        },
        {
          id: 'feature-02',
          num: '02',
          title: 'De Onderhandelaar',
          category: 'COMMERCIËLE MARGEBEWAKING',
          description:
            'Laat je salesteam live offertes testen en kortingspercentages simuleren met harde EBITDA-bewakers die verlieslatende offertes direct blokkeren.',
          highlights: [
            'Real-time volumestaffels',
            'Color-coded margedrempels',
            '1-Klik PDF-offertes',
          ],
        },
        {
          id: 'feature-03',
          num: '03',
          title: 'Portfolio Analytics & Inzichten',
          category: 'STRATEGISCHE VISIBILITEIT',
          description:
            'Krijg een panoramisch overzicht over al je afgewerkte SKUs. Detecteer sluipende marge-erosie bij klanten voordat facturen uitsturen.',
          highlights: [
            'Gevoeligheidsanalyse voor grondstoffen',
            'Detectie van verlieslatende accounts',
            'Bi-directionele ERP-koppeling',
          ],
        },
        {
          id: 'feature-04',
          num: '04',
          title: 'AI Simulatie & Budget Forecast',
          category: 'VOORSPELLENDE INTELLIGENTIE',
          description:
            'Simuleer plotse marktshocks (zoals +8% staal of +25% energie) over meer dan 400 producten. Genereer een volgend-jaar budget in seconden.',
          highlights: [
            '1.2s Portfolio-brede AI scan',
            'Volgend-jaar indexatie in 1 klik',
            'Automatische toeslagberekeningen',
          ],
        },
      ],
    },
    aiExtract: {
      tag: 'CANONIEKE SPECIFICATIES',
      title: 'Gestructureerd Overzicht voor Productieleiders',
      card1: {
        title: 'Wat is een CostCard?',
        descriptionPart1: 'Een ',
        strongWord: 'CostCard',
        descriptionPart2:
          ' is een modulair digitaal bouwblok dat operationele invoer vertegenwoordigt—zoals grondstoffen, machinetijden, arbeid of opslag.',
        bullets: [
          'Dynamische afhankelijkheidskoppeling over alle afgewerkte SKUs',
          'Geïntegreerde logica voor afvalpercentages & instelverliezen',
          'Doorrekening van prijsstijgingen met één klik',
        ],
        footer: 'Unit Economics & Stuklijst Receptuur',
      },
      card2: {
        title: 'Voor wie is CostCards bedoeld?',
        description:
          'Specifiek ontworpen voor kmo-productiebedrijven, contractfabrikanten en meerstaps assemblagebedrijven.',
        bullets: [
          { bold: 'Verpakking & Drukwerk: ', text: 'Vouwkarton, etiketten & golfkarton' },
          { bold: 'Voeding & Brouwerijen: ', text: 'Speciaalbier, zuivel & verpakte goederen' },
          { bold: 'Assemblage & Metaal: ', text: 'CNC-bewaking & fabricage' },
        ],
        footer: 'Doelgroep: Kmo Productie & Operations',
      },
      card3: {
        title: 'ERP Companion Architectuur',
        description:
          'CostCards zit tussen inkoop en calculatie in om schattingsfouten te elimineren zonder je ERP te vervangen.',
        bullets: [
          'Inzetbaar binnen 72 uur naast Odoo, Exact & SAP',
          'Calculatoren bouwen accurate offertes zonder boekhouding te belasten',
          'Geen onderhoud van complexe formules of versieversnippering',
        ],
        footer: 'ERP Integraties: Odoo, Exact, SAP, Business Central',
      },
    },
    faq: {
      tag: 'VEELGESTELDE VRAGEN',
      title: 'Veelgestelde Vragen',
      subtitle:
        'Directe antwoorden over migratie, meergraads stuklijsten, ERP-interoperabiliteit en databeveiliging.',
      ctaBoxTitle: 'Heb je een specifieke machineconfiguratie of ERP-inrichting?',
      ctaBoxSubtitle:
        'Onze kostprijsarchitecten bekijken graag je huidige stuklijstopzet tijdens een live demo.',
      ctaButton: 'Boek een Demo',
      items: [
        {
          question: 'Hoe vervangt CostCards Excel voor kostprijsberekening in de productie?',
          answer:
            'Excel-spreadsheets zijn geïsoleerd en statisch: wanneer een grondstof, hars of machine-uurtarief stijgt, moet iemand handmatig tientallen bestanden bijwerken, wat leidt tot gebroken formules en verouderde offertes. CostCards creëert gecentraliseerde, gekoppelde "Cost Cards". Als karton met €0,15/kg stijgt, werkt elke afgewerkte doosreceptuur die kaart automatisch en direct bij.',
        },
        {
          question: 'Kan CostCards meergraads stuklijsten (multi-level BOMs) aan?',
          answer:
            'Ja. CostCards is specifiek ontworpen voor complexe, meerstaps productieprocessen. Je kunt grondstofkaarten combineren tot halfafgewerkte producten, afwerkingskaarten toevoegen (zoals warmfoliestansen) en uiteindelijke verpakkings- en logistieke kaarten koppelen met aangepaste afvalpercentages op elk niveau.',
        },
        {
          question: 'Hoe snel kunnen we CostCards implementeren in onze kmo?',
          answer:
            'De meeste kmo-productiebedrijven zijn binnen 48 tot 72 uur operationeel. Je kunt bestaande catalogi en uurtarieven importeren via CSV/Excel of starten met onze vooraf gebouwde sjablonen voor verpakkingen, brouwerijen en industriële fabricage.',
        },
        {
          question: 'Koppelt CostCards met ons ERP- of boekhoudsysteem?',
          answer:
            'Ja. CostCards integreert naadloos met ERP- en boekhoudsoftware zoals Odoo, Exact Online, Microsoft Dynamics Business Central en aangepaste databases via REST API. Je kunt ook met één klik gecontroleerde Excel- en PDF-kostprijsoverzichten exporteren.',
        },
        {
          question: 'Wat gebeurt er wanneer leveranciers hun prijzen verhogen?',
          answer:
            'Met onze Prijs-Simulator pas je elke leverancierskaart aan (bijv. +12% aluminium of +8% suiker) en zie je direct de netto impact op je hele productportfolio. Je ziet meteen welke klantcontracten onder de minimale EBITDA-drempel zakken.',
        },
        {
          question: 'Is onze bedrijfsspecifieke receptuur- en prijsdata beveiligd?',
          answer:
            'Absoluut. CostCards maakt gebruik van enterprise-grade AES-256 encryptie. Onze infrastructuur is gehost in ISO 27001 en SOC 2 gecertificeerde Europese datacenters met strikte GDPR-naleving.',
        },
      ],
    },
    footer: {
      tag: 'BESCHERM JE MARGES',
      title: 'Stop met gokken naar je marges. Boek vandaag een demo.',
      subtitle:
        'Ontdek hoe verpakkingsbedrijven, brouwerijen en industriële producenten Excel-chaos vervangen door modulaire CostCards.',
      thankYou: 'Bedankt voor je aanvraag.',
      emailPlaceholder: 'Vul je zakelijke e-mail in...',
      emailButton: 'Vraag Demo Aan via E-mail',
      emailNote:
        'Opent je e-mailclient met alle gegevens voor info@costcards.io · Geen verplichting',
      emailError: 'Vul een geldig zakelijk e-mailadres in.',
      emailSubject: (mail: string) => `Demo Aanvraag via Footer: ${mail}`,
      emailBody: (mail: string) =>
        `Beste CostCards Team,\n\nHierbij vraag ik graag een demo aan.\n\nMijn e-mailadres: ${mail}\n\nMet vriendelijke groet,\n${mail}`,
      brandDesc:
        'Modulaire stuklijsten (BOM), kostprijsberekening voor productie en real-time margesimulatiesoftware voor kmo-producenten.',
      badgeAi: 'Gecertificeerde AI Software',
      badgeEncrypted: 'Enterprise Geëncripteerd',
      colPlatform: 'Platform',
      linkHowItWorks: 'Hoe het werkt',
      linkModularCards: 'Modulaire Cost Cards',
      linkNegotiator: 'De Onderhandelaar',
      linkSpreadsheetVs: 'Spreadsheets vs CostCards',
      colCompany: 'Bedrijf',
      linkBookDemo: 'Boek een Demo',
      linkFaq: 'Veelgestelde Vragen',
      linkDocs: 'Documentatie',
      copyright: 'Alle rechten voorbehouden.',
      initiativeBy: 'Een initiatief van',
    },
    modals: {
      headerTitle: 'Boek een 1-op-1 Demo',
      headerSubtitle: 'Afgestemd op jouw sector',
      thankYouTitle: 'Bedankt voor je aanvraag.',
      closeButton: 'Sluiten',
      labelFullName: 'Je Volledige Naam',
      placeholderFullName: 'bijv. Marcus Vandenberg',
      labelEmail: 'Zakelijk E-mailadres',
      placeholderEmail: 'marcus@packtech.be',
      labelCompany: 'Bedrijfsnaam',
      placeholderCompany: 'PackTech BV',
      labelIndustry: 'Industriesegment',
      industries: [
        'Verpakking & Drukwerk',
        'Brouwerij & Voeding',
        'Assemblage & Metaalbewerking',
        'Kunststof & Spuitgieten',
        'Andere Productie',
      ],
      labelPreferredTime: 'Voorkeurstijdslot',
      timeSlots: [
        'Ochtend (09:00 - 12:00 CET)',
        'Namiddag (13:00 - 17:00 CET)',
      ],
      submitButton: 'Verstuur naar CostCards',
      submitNote:
        'Opent je e-mailclient met alle gegevens voorgedefinieerd voor info@costcards.io',
      emailSubject: (company: string, name: string) =>
        `Demo Aanvraag: ${company || name || 'CostCards.io'}`,
      emailBody: (data: {
        name: string;
        email: string;
        company: string;
        industry: string;
        preferredTime: string;
      }) =>
        `Beste CostCards Team,\n\nHierbij vraag ik graag een 1-op-1 demo aan.\n\nMijn gegevens:\n----------------------------------------\nNaam: ${
          data.name || 'Niet opgegeven'
        }\nE-mailadres: ${data.email || 'Niet opgegeven'}\nBedrijfsnaam: ${
          data.company || 'Niet opgegeven'
        }\nIndustriesegment: ${
          data.industry || 'Niet opgegeven'
        }\nVoorkeurstijdslot: ${
          data.preferredTime || 'Niet opgegeven'
        }\n----------------------------------------\n\nMet vriendelijke groet,\n${
          data.name || data.company || 'Aanvrager'
        }`,
    },
  },
  en: {
    nav: {
      howItWorks: 'How it works',
      product: 'Spreadsheets vs CostCards',
      features: 'Features',
      faq: 'FAQ',
      bookDemo: 'Book a Demo',
      openMenu: 'Open navigation menu',
    },
    hero: {
      headlinePart1: 'Protect your ',
      headlineMargin: 'margins',
      headlinePart2: ' card by card.',
      subtitle:
        'CostCards is dynamic costing and margin simulation software for manufacturing SMEs. Replace spreadsheet chaos with connected building blocks.',
      cta: 'Book a Demo',
      badgeAi: 'AI-assisted',
      badgeBom: 'Real-time BOM synchronization',
      badgeMargin: 'Instant margin simulation',
      rateSpec: 'RATE SPECIFICATION',
      clickCard: 'CLICK CARD',
      liveSync: 'LIVE BOM SYNC ACTIVE',
      cards: [
        {
          id: 'card-material',
          type: 'material' as const,
          title: 'Kraftboard Raw Material',
          subtitle: 'Premium Kraftboard 350g',
          category: 'RAW MATERIAL',
          rate: '€1.80',
          unit: 'per kg',
          status: 'In stock',
          specs: [
            { label: 'THICKNESS', value: '0.42 mm' },
            { label: 'YIELD', value: '94.2%' },
            { label: 'SUPPLIER', value: 'Stora Enso' },
            { label: 'LEAD TIME', value: '3 Days' },
          ],
          marginImpact: '+5% raw material = -2.4% product margin',
          colorScheme: 'white' as const,
        },
        {
          id: 'card-overhead',
          type: 'overhead' as const,
          title: 'Warehouse Storage & Handling',
          subtitle: 'Climate-Controlled Pallet Racks',
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
          marginImpact: 'Fixed cost baseline: protects EBITDA',
          colorScheme: 'coral' as const,
        },
        {
          id: 'card-machine',
          type: 'machine' as const,
          title: 'Heidelberg Printing Press',
          subtitle: 'XL 106 6-Color UV Offset Press',
          category: 'MACHINE & LABOUR',
          rate: '€110.00',
          unit: 'per hour',
          status: 'Scheduled',
          specs: [
            { label: 'SETUP TIME', value: '30 min' },
            { label: 'SPEED', value: '4,200 sheets/h' },
            { label: 'OPERATOR', value: '€38.50 / h' },
            { label: 'CONSUMPTION', value: '42 kWh' },
          ],
          marginImpact: 'Run > 5,000 units yields +7.1% efficiency',
          colorScheme: 'dark' as const,
        },
      ],
    },
    howItWorks: {
      tag: 'HOW IT WORKS',
      title: 'In 3 Steps to Full Margin Control',
      subtitle:
        'From standalone cost elements to a dynamic, visual product calculation that reliably protects your margins.',
      cta: 'Book a Demo',
      card1PreviewRaw: 'RAW MATERIAL',
      card1PreviewRawTitle: 'Kraftboard 350g',
      card1PreviewMachine: 'MACHINE TIME',
      card1PreviewMachineTitle: 'Printing Press XL',
      card1PreviewMachineRate: '€110.00 / hour',
      card2PreviewDeck: 'Deck: Luxury Folding Box',
      card2PreviewYield: 'Yield: 96.5%',
      card2PreviewUnitLabel: 'Calculated Unit Cost:',
      card2PreviewUnitVal: '€2.47 / unit',
      card3PreviewGuarded: 'Margin Guarded:',
      card3PreviewEbitda: '+32.4% EBITDA',
      card3PreviewSim: 'Simulation: Paper +15%',
      card3PreviewProtected: 'Margin Protected ✓',
      steps: [
        {
          number: '01',
          title: 'Every cost element is converted into a card',
          subtitle: 'Raw materials, machine times, labour & storage',
          description:
            'Turn standalone raw material prices, hourly rates, setup times, and scrap percentages into modular, digital Cost Cards. A single source of truth.',
        },
        {
          number: '02',
          title: 'Cards are assembled into a Deck to calculate a product',
          subtitle: 'Dynamic assembly & instant unit cost',
          description:
            'Stack cards together to calculate a complete finished product. The unit cost recalculates automatically with every change.',
        },
        {
          number: '03',
          title: 'Decks serve as tools for fine-tuning & margin optimization',
          subtitle: 'Simulation, negotiation & ERP synchronization',
          description:
            'Use active Decks to negotiate quotes with strict EBITDA guards, simulate price increases, and sync price adjustments with your ERP.',
        },
      ],
    },
    comparison: {
      tag: 'THE SPREADSHEET PROBLEM',
      title: 'Why traditional spreadsheets erode your margins',
      subtitle:
        'Excel was built in 1985 for general bookkeeping—not for fluctuating raw material prices, complex scrap rates, and rapid manufacturing quotes.',
      leftTitle: 'Static Excel Files',
      leftBadge: 'HIGH RISK',
      rightTitle: 'CostCards Platform',
      rightBadge: 'DYNAMIC & CONNECTED',
      data: [
        {
          feature: 'Handling Price Fluctuations',
          excel:
            'Manual line-by-line updates across dozens of files. Formula errors and outdated raw material prices are commonplace.',
          costCards:
            'Centralized dynamic recipe. Update the cardboard or grain price once, and every dependent product recalculates in milliseconds.',
        },
        {
          feature: 'Margin Guardrails & Approvals',
          excel:
            'Blind sales discounts. Sales reps send quotes with negative gross margins because spreadsheets hide indirect labour and scrap.',
          costCards:
            'Visual EBITDA guards. The system warns immediately whenever a custom discount falls below the authorized margin threshold.',
        },
        {
          feature: 'Complex Multi-Level Bills of Materials (BOM)',
          excel:
            'Nested VLOOKUP formulas that break when columns shift. No accurate tracking of scrap or setup losses.',
          costCards:
            'Modular cards with visual inheritance, automatic scrap factors, and aggregated batch calculations.',
        },
      ],
    },
    features: {
      tag: 'INTERACTIVE OVERVIEW',
      title: 'The CostCards Builder in Action',
      subtitle:
        'Click the cards below to toggle them on or off and see how the calculated unit cost reacts instantly.',
      demoBadge: 'INTERACTIVE DEMO',
      deckTitle: 'Selected Product Deck: Custom Printed Packaging',
      unitCostLabel: 'CALCULATED UNIT COST',
      cardsActiveCount: (active: number, total: number) => `${active} of ${total} cards active`,
      unitSuffix: '/ unit',
      rateLabel: 'RATE',
      badgeOn: 'ON',
      badgeOff: 'OFF',
      interactiveHint: 'Click any card to see its immediate impact on the total unit cost.',
      pillarsTag: 'CORE CAPABILITIES',
      pillarsTitle: '4 Pillars of CostCards',
      keyBenefitsLabel: 'KEY BENEFITS:',
      cta: 'Request a Demonstration',
      interactiveCards: [
        {
          id: 'rawMaterial',
          num: '01',
          category: 'RAW MATERIAL',
          title: 'Kraftboard 350g',
          specs: 'Yield 94.2% · FSC Mix',
          cost: 1.45,
          unit: '/ kg',
          theme: 'white',
        },
        {
          id: 'labour',
          num: '02',
          category: 'DIRECT LABOUR',
          title: 'Operator Setup',
          specs: '12 min shift cycle',
          cost: 0.65,
          unit: '/ pass',
          theme: 'coral',
        },
        {
          id: 'machine',
          num: '03',
          category: 'MACHINE RATE',
          title: 'Heidelberg XL Press',
          specs: 'Press hourly pass',
          cost: 0.85,
          unit: '/ sheet',
          theme: 'slate',
        },
        {
          id: 'energy',
          num: '04',
          category: 'ENERGY & POWER',
          title: 'UV Drying Pass',
          specs: '0.42 kWh peak load',
          cost: 0.28,
          unit: '/ kWh',
          theme: 'amber',
        },
        {
          id: 'packaging',
          num: '05',
          category: 'PACKAGING',
          title: 'Pallet Outer Box',
          specs: 'Corrugated 3-ply',
          cost: 0.32,
          unit: '/ unit',
          theme: 'sky',
        },
        {
          id: 'scrap',
          num: '06',
          category: 'SCRAP & WASTE',
          title: '4.8% Trim Loss',
          specs: 'Die-cut allowance',
          cost: 0.12,
          unit: '/ margin',
          theme: 'rose',
        },
      ],
      pillars: [
        {
          id: 'feature-01',
          num: '01',
          title: 'Modular Builder',
          category: 'VISUAL BOM ARCHITECTURE',
          description:
            'Stack raw materials, machine times, labour, and storage like physical cards. Make complex multi-component products clear in seconds.',
          highlights: [
            'Atomic card structure',
            'Real-time BOM recalculation',
            'Multi-level scrap & waste factors',
          ],
        },
        {
          id: 'feature-02',
          num: '02',
          title: 'The Negotiator',
          category: 'COMMERCIAL MARGIN PROTECTION',
          description:
            'Empower your sales team to test live quotes and simulate discount tiers with strict EBITDA guardrails that prevent loss-making bids.',
          highlights: [
            'Real-time volume tiers',
            'Color-coded margin thresholds',
            '1-Click PDF quotes',
          ],
        },
        {
          id: 'feature-03',
          num: '03',
          title: 'Portfolio Analytics & Insights',
          category: 'STRATEGIC VISIBILITY',
          description:
            'Gain a panoramic view across all finished SKUs. Detect subtle margin erosion on client accounts before invoices are issued.',
          highlights: [
            'Raw material sensitivity analysis',
            'Detection of unprofitable accounts',
            'Bi-directional ERP integration',
          ],
        },
        {
          id: 'feature-04',
          num: '04',
          title: 'AI Simulation & Budget Forecast',
          category: 'PREDICTIVE INTELLIGENCE',
          description:
            'Simulate sudden market shocks (such as +8% steel or +25% energy) across 400+ products. Generate next year\'s budget in seconds.',
          highlights: [
            '1.2s Portfolio-wide AI scan',
            'Next-year indexation in 1 click',
            'Automated surcharge calculations',
          ],
        },
      ],
    },
    aiExtract: {
      tag: 'CANONICAL SPECIFICATIONS',
      title: 'Structured Overview for Manufacturing Leaders',
      card1: {
        title: 'What is a CostCard?',
        descriptionPart1: 'A ',
        strongWord: 'CostCard',
        descriptionPart2:
          ' is a modular digital building block representing operational inputs—such as raw materials, machine times, labour, or storage.',
        bullets: [
          'Dynamic dependency linking across all finished SKUs',
          'Integrated logic for scrap percentages & setup losses',
          'One-click pass-through of price increases',
        ],
        footer: 'Unit Economics & Bill of Materials Recipe',
      },
      card2: {
        title: 'Who is CostCards for?',
        description:
          'Specifically designed for manufacturing SMEs, contract manufacturers, and multi-step assembly operations.',
        bullets: [
          { bold: 'Packaging & Print: ', text: 'Folding carton, labels & corrugated board' },
          { bold: 'Food & Breweries: ', text: 'Craft beer, dairy & packaged goods' },
          { bold: 'Assembly & Metal: ', text: 'CNC machining & fabrication' },
        ],
        footer: 'Target Audience: Manufacturing SMEs & Operations',
      },
      card3: {
        title: 'ERP Companion Architecture',
        description:
          'CostCards sits between procurement and quoting to eliminate estimation errors without replacing your ERP.',
        bullets: [
          'Deployable within 72 hours alongside Odoo, Exact & SAP',
          'Estimators build accurate quotes without overburdening accounting',
          'No maintenance of fragile formulas or version fragmentation',
        ],
        footer: 'ERP Integrations: Odoo, Exact, SAP, Business Central',
      },
    },
    faq: {
      tag: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Frequently Asked Questions',
      subtitle:
        'Straightforward answers on migration, multi-level BOMs, ERP interoperability, and data security.',
      ctaBoxTitle: 'Have a specific machine configuration or ERP setup?',
      ctaBoxSubtitle:
        'Our costing architects are happy to review your current BOM setup during a live demo.',
      ctaButton: 'Book a Demo',
      items: [
        {
          question: 'How does CostCards replace Excel for manufacturing cost calculations?',
          answer:
            'Excel spreadsheets are siloed and static: when a raw material, resin, or machine hourly rate increases, someone must manually update dozens of files, leading to broken formulas and outdated quotes. CostCards creates centralized, linked "Cost Cards". If cardboard increases by €0.15/kg, every finished box recipe using that card updates automatically and immediately.',
        },
        {
          question: 'Can CostCards handle multi-level bills of materials (BOMs)?',
          answer:
            'Yes. CostCards is purpose-built for complex, multi-stage production processes. You can combine raw material cards into semi-finished components, add finishing cards (such as hot foil stamping), and attach final packaging and logistics cards with custom scrap percentages at each level.',
        },
        {
          question: 'How quickly can we implement CostCards in our SME?',
          answer:
            'Most SME manufacturers are operational within 48 to 72 hours. You can import existing catalogs and hourly rates via CSV/Excel or start with our pre-built templates for packaging, breweries, and industrial manufacturing.',
        },
        {
          question: 'Does CostCards integrate with our ERP or accounting software?',
          answer:
            'Yes. CostCards seamlessly connects with ERP and accounting software such as Odoo, Exact Online, Microsoft Dynamics Business Central, and custom databases via REST API. You can also export audit-ready Excel and PDF cost summaries with a single click.',
        },
        {
          question: 'What happens when suppliers raise their prices?',
          answer:
            'With our Price Simulator, you adjust any supplier card (e.g. +12% aluminum or +8% sugar) and instantly see the net impact across your entire product portfolio. You immediately identify which customer contracts dip below your minimum EBITDA threshold.',
        },
        {
          question: 'Is our proprietary recipe and pricing data secure?',
          answer:
            'Absolutely. CostCards uses enterprise-grade AES-256 encryption. Our infrastructure is hosted in ISO 27001 and SOC 2 certified European data centers with strict GDPR compliance.',
        },
      ],
    },
    footer: {
      tag: 'PROTECT YOUR MARGINS',
      title: 'Stop guessing your margins. Book a demo today.',
      subtitle:
        'Discover how packaging companies, breweries, and industrial manufacturers replace Excel chaos with modular CostCards.',
      thankYou: 'Thank you for your request.',
      emailPlaceholder: 'Enter your business email...',
      emailButton: 'Request Demo via Email',
      emailNote:
        'Opens your email client with all details pre-filled for info@costcards.io · No commitment',
      emailError: 'Please enter a valid business email address.',
      emailSubject: (mail: string) => `Demo Request via Footer: ${mail}`,
      emailBody: (mail: string) =>
        `Dear CostCards Team,\n\nI would like to request a demo.\n\nMy email address: ${mail}\n\nKind regards,\n${mail}`,
      brandDesc:
        'Modular bills of materials (BOM), manufacturing cost calculations, and real-time margin simulation software for manufacturing SMEs.',
      badgeAi: 'Certified AI Software',
      badgeEncrypted: 'Enterprise Encrypted',
      colPlatform: 'Platform',
      linkHowItWorks: 'How it works',
      linkModularCards: 'Modular Cost Cards',
      linkNegotiator: 'The Negotiator',
      linkSpreadsheetVs: 'Spreadsheets vs CostCards',
      colCompany: 'Company',
      linkBookDemo: 'Book a Demo',
      linkFaq: 'FAQ',
      linkDocs: 'Documentation',
      copyright: 'All rights reserved.',
      initiativeBy: 'An initiative by',
    },
    modals: {
      headerTitle: 'Book a 1-on-1 Demo',
      headerSubtitle: 'Tailored to your industry',
      thankYouTitle: 'Thank you for your request.',
      closeButton: 'Close',
      labelFullName: 'Full Name',
      placeholderFullName: 'e.g. Marcus Vandenberg',
      labelEmail: 'Business Email',
      placeholderEmail: 'marcus@packtech.be',
      labelCompany: 'Company Name',
      placeholderCompany: 'PackTech BV',
      labelIndustry: 'Industry Segment',
      industries: [
        'Packaging & Print',
        'Brewery & Food',
        'Assembly & Metalworking',
        'Plastics & Injection Molding',
        'Other Manufacturing',
      ],
      labelPreferredTime: 'Preferred Time Slot',
      timeSlots: [
        'Morning (09:00 - 12:00 CET)',
        'Afternoon (13:00 - 17:00 CET)',
      ],
      submitButton: 'Send to CostCards',
      submitNote:
        'Opens your email client with all details pre-filled for info@costcards.io',
      emailSubject: (company: string, name: string) =>
        `Demo Request: ${company || name || 'CostCards.io'}`,
      emailBody: (data: {
        name: string;
        email: string;
        company: string;
        industry: string;
        preferredTime: string;
      }) =>
        `Dear CostCards Team,\n\nI would like to request a 1-on-1 demo.\n\nMy details:\n----------------------------------------\nName: ${
          data.name || 'Not provided'
        }\nEmail: ${data.email || 'Not provided'}\nCompany: ${
          data.company || 'Not provided'
        }\nIndustry: ${
          data.industry || 'Not provided'
        }\nPreferred time slot: ${
          data.preferredTime || 'Not provided'
        }\n----------------------------------------\n\nKind regards,\n${
          data.name || data.company || 'Requester'
        }`,
    },
  },
};
