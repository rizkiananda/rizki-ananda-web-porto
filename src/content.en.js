const profile = {
  name: 'Rizki Ananda',
  role: 'Software Developer',
  tagline: ['Backend Engineer', 'Full-Stack Developer', 'IoT & Systems Builder'],
  summary:
    'I build the systems companies actually run on — point of sale, ERP, distribution and IoT telemetry platforms. Seven years of turning messy operational workflows into software that holds up in production, mostly with Laravel, Node.js, Golang and Vue.js.',
  location: 'Bekasi Timur, Bekasi — Indonesia',
  email: 'rizkinandatama30@gmail.com',
  phone: '085693608025',
  github: 'https://github.com/rizkiananda',
  linkedin: 'https://www.linkedin.com/in/rizki-ananda-utama-a63a72137/',
  education: {
    degree: 'Bachelor of Computer Science',
    school: 'Institut Pertanian Bogor',
    period: '2014 — 2018',
  },
  languages: [
    { name: 'Indonesia', level: 'First language' },
    { name: 'English', level: 'Intermediate' },
  ],
}


const skillGroups = [
  {
    title: 'Backend',
    note: 'Where most of my hours go',
    items: ['Golang (Fiber)', 'Node.js (Express)', 'PHP (Laravel)', 'CodeIgniter', 'Phalcon', 'OpenSwoole'],
  },
  {
    title: 'Frontend',
    note: 'Enough to own a feature end to end',
    items: ['Vue.js 3', 'Vite', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'Vuetify', 'HTML & CSS'],
  },
  {
    title: 'Data',
    note: 'Relational first, NoSQL when it earns it',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL', 'GORM', 'Knex'],
  },
  {
    title: 'Craft',
    note: 'Design the flow before writing the code',
    items: ['Git', 'REST API design', 'Flowchart', 'ERD', 'Activity Diagram', 'IoT integration'],
  },
]


const experience = [
  {
    role: 'Software Developer — Full Stack',
    company: 'PT Pitjarus',
    period: 'Dec 2022 — Present',
    current: true,
    points: [
      'Build software integrated with image recognition for retail execution.',
      'Develop and maintain a Distribution Management System and ERP modules.',
      'Work across Node.js (Express), PHP (CodeIgniter), Golang and Vue.js.',
    ],
    stack: ['Node.js', 'Golang', 'CodeIgniter', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Software Developer — Backend',
    company: 'PT Bhinneka Nusantara Mandiri',
    period: 'May 2022 — Dec 2022',
    points: [
      'Developed software integrated with IoT technology.',
      'Built and analyzed a vessel monitoring system tracking RPM, fuel consumption and GPS data.',
      'Worked with PHP (OpenSwoole, Phalcon) and MySQL.',
    ],
    stack: ['OpenSwoole', 'Phalcon', 'MySQL', 'IoT'],
  },
  {
    role: 'Software Developer — Backend',
    company: 'PT Ravelware Technology Indonesia',
    period: 'Oct 2018 — May 2022',
    points: [
      'Developed software integrated with IoT technology.',
      'Built customizable systems tailored to each client’s requirements.',
      'Used Node.js, Laravel, and both relational and non-relational databases.',
    ],
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
  },
  {
    role: 'Software Developer — Freelance',
    company: 'Personal projects',
    period: 'Oct 2018 — Present',
    points: [
      'Built multiple web-based business management systems (POS, car wash, parking) around each client’s operational workflow.',
      'Implemented CRUD architecture with Laravel & MySQL so the systems stay maintainable and scalable.',
    ],
    stack: ['Laravel', 'MySQL', 'Vue.js'],
  },
  {
    role: 'Software Developer — Intern',
    company: 'Bank Syariah Mandiri',
    period: 'Jul 2017 — Aug 2017',
    points: [
      'Developed a Refreshment Test System for Bank Syariah Mandiri employees.',
      'Built with Laravel and a MySQL database.',
    ],
    stack: ['Laravel', 'MySQL'],
  },
]

/* The CashierMedia story, shared by both featured POS entries */
const cashiermediaOverview = {
  title: 'What CashierMedia actually is',
  body: [
    'CashierMedia looks like a cash register, but the register is only the front counter. Behind that one screen sits a full retail-and-distribution back office: everything a shop owner needs between buying stock and closing the books.',
    'The cashier screen handles product lookup by unit and price tier, a server-side cart, mixed payment methods, change and receivables, then prints the invoice in large or thermal format. Checkout is the moment stock actually moves — it writes the sales recap, the transaction lines, the stock ledger and any receivable in one pass.',
    'None of this is a demo. Ten outlets are running CashierMedia V1 right now and have kept it running to support their daily selling, which is why every change to it has to be safe for a live shop floor. V2 is in the finishing stage of its redesign and is coming soon to market.',
  ],
  moduleGroups: [
    {
      label: 'Selling',
      items: ['Cashier / POS', 'Today’s sales', 'Online orders', 'Sales returns', 'Discounts & scheduled promos', 'Customer tiers'],
    },
    {
      label: 'Inventory',
      items: ['Products & units', 'Stock', 'Stock card', 'Purchasing', 'Warehouse mutation', 'Delivery & fleet', 'Ritase tracking'],
    },
    {
      label: 'Finance',
      items: ['Receivables', 'Payables', 'Down payments', 'General journal', 'Financial reports', 'Sales reporting'],
    },
    {
      label: 'Platform',
      items: ['Master data', 'User & account settings', 'JWT auth', 'Role-aware navigation', 'Light & dark theme'],
    },
  ],
}

const featured = [
  {
    slug: 'cashiermedia-v2',
    index: '01',
    name: 'CashierMedia POS',
    version: 'V2 — Vue 3 + Golang rewrite',
    year: '2025 — 2026',
    role: 'Solo developer — architecture, backend, frontend',
    link: 'https://mediacashier.com/demo-pos-v2',
    linkLabel: 'Live demo — V2',
    summary:
      'A ground-up rewrite of the same POS suite: the Laravel monolith became a Go (Fiber + GORM) REST API and a Vue 3 + TypeScript SPA, running against the exact same MySQL schema so existing stores could migrate without losing a single transaction. It is the redesign of the system those stores run today, and it is being prepared for release.',
    highlights: [
      'Go + Fiber + GORM API with JWT auth, split into focused modules — catalog, cart, checkout, stock, purchasing, returns, delivery, fleet, receivables, payables, advances, journal, discounts, dashboard and settings.',
      'Vue 3 + Vite + TypeScript SPA with PrimeVue and Tailwind, Pinia stores for auth and cart, responsive down to phone width with a drawer cart, plus a real light/dark theme.',
      'Stock is deducted at checkout rather than when an item enters the cart — abandoned carts no longer leak inventory, which was a live bug class in V1.',
      'Password hashes from the old Laravel system are normalised on login, so every existing account kept working on day one.',
    ],
    stack: ['Golang', 'Fiber', 'GORM', 'JWT', 'Vue 3', 'TypeScript', 'PrimeVue', 'Tailwind', 'Pinia', 'MySQL'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard — revenue today, this month and this year, with profit estimation charts' },
      { file: 'cashier', caption: 'Cashier — product grid with live cart panel' },
      { file: 'cashier-select-item', caption: 'Item lookup — search across products, units and price tiers' },
      { file: 'cashier-item-selected', caption: 'Unit & quantity picker before the line hits the cart' },
      { file: 'cashier-payment', caption: 'Payment — method, change and receivable in one dialog' },
      { file: 'cashier-invoice-preview', caption: 'Invoice preview straight after checkout' },
      { file: 'invoice', caption: 'Printable invoice' },
      { file: 'today-sell', caption: 'Today’s sales — every transaction of the shift' },
      { file: 'reporting', caption: 'Reporting — sales and financial recap' },
    ],
  },
  {
    slug: 'cashiermedia-v1',
    index: '02',
    name: 'CashierMedia POS',
    version: 'V1 — Laravel original',
    year: '2020 — 2024',
    role: 'Solo developer — backend & frontend',
    link: 'https://mediacashier.com/demo-pos-v1',
    linkLabel: 'Live demo — V1',
    summary:
      'The original system, built and hardened with Laravel and MySQL for real distributors and retail shops. Four years at real counters is what shaped it: the pricing rules, the stock ledger and the schema were all settled here, and V2 inherited them unchanged.',
    highlights: [
      'Still in production: ten outlets use V1 for their day-to-day selling, so every change had to be safe for live stores.',
      'Full Laravel + MySQL back office: transactions, purchasing, returns, warehouse in/out mutation, stock opname, reporting, finance and delivery.',
      'Keyboard-first cashier flow (Insert to add, F2 to pay) built for operators who never touch the mouse during a rush.',
      'Automatic promo and tiered-discount accumulation applied per line at order time.',
      'White-labelled per client — the screenshots here run under a distributor’s own branding.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'jQuery', 'Blade'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard — daily operational summary' },
      { file: 'cashier', caption: 'Order screen — keyboard-driven line entry' },
      { file: 'cashier-select-item', caption: 'Product picker with unit and price selection' },
      { file: 'cashier-payment', caption: 'Payment and change calculation' },
      { file: 'invoice-small', caption: 'Thermal-size invoice' },
      { file: 'invoice-big', caption: 'A4 invoice for distribution customers' },
      { file: 'today-sell', caption: 'Daily transaction list' },
      { file: 'reporting', caption: 'Reporting module' },
    ],
  },
  {
    slug: 'erp',
    index: '03',
    name: 'Enterprise ERP Suite',
    version: 'Finance · Warehouse · HR · Reporting',
    year: '2023 — Present',
    role: 'Full-stack developer — team product',
    link: null,
    linkLabel: 'Internal product — branding redacted',
    summary:
      'A multi-company ERP built as a Vue 3 + Vuetify SPA over a Node.js/Express + Knex + MySQL API. Every financial and warehouse document moves through an approval matrix, so the software encodes the company’s real chain of authority rather than just storing records.',
    highlights: [
      'Finance — Payment Voucher, Journal Voucher, Receive Voucher, Petty Cash and LPJ (expense accountability), each with its own create → approval → confirmation → release lifecycle, document duplication and print/export to PDF or ZIP.',
      'Warehouse — Goods Receipt, Outbound, Transfer, Stock Opname and Inventory, plus an analytics dashboard covering highest-demand, slow-moving and available stock with AI-generated summaries.',
      'Purchasing — goods receipts and outbounds are raised from a Purchase Request or Purchase Order instead of being typed from scratch: the outstanding PR/PO list is filtered by a configurable cut-off date, a reference document already consumed is rejected before submit, and every stock movement keeps a link back to the document that authorised it — so an item can be traced from its stock card to the original request.',
      'HR — attendance records and dashboard, leave & absence requests, reimbursement claims and travel administration, fed partly by a separate mobile/scanning API surface.',
      'Master data & reporting — products, vendors, warehouses and per-company Chart of Accounts, plus an async ad-hoc report builder that lets users pick a module, filters and columns, then generates Excel/CSV in the background.',
      'Alongside the documented core sit allocation, archive, checker, dispatch, purchase order, sales order, RMS and visit modules — the suite spans the whole distribution operation.',
    ],
    stack: ['Vue 3', 'Vuetify 3', 'Node.js', 'Express', 'Knex', 'MySQL', 'TypeScript'],
    shots: [
      { file: 'payment-voucher-list', caption: 'Finance — Payment Voucher list with status pipeline and paid/unpaid totals' },
      { file: 'goods-receipt-list', caption: 'Warehouse — Goods Receipt list across companies and warehouses' },
      { file: 'goods-receipt-create', caption: 'Goods Receipt — document entry form' },
      { file: 'goods-receipt-print', caption: 'Print preview with PDF and ZIP export' },
      { file: 'dashboard-attendance', caption: 'HR — attendance dashboard with AI-written summary cards' },
    ],
    redacted: 'Client branding and company names in these screenshots have been replaced — the product is internal.',
  },
]

const otherWork = [
  {
    name: 'Vessel Monitoring System',
    org: 'PT Bhinneka Nusantara Mandiri',
    year: '2022',
    desc: 'IoT telemetry platform for a fleet of vessels — ingesting and analysing engine RPM, fuel consumption and GPS position, built on PHP OpenSwoole for long-running socket workloads.',
    stack: ['OpenSwoole', 'Phalcon', 'MySQL'],
    icon: 'ship',
    tone: 0,
  },
  {
    name: 'Retail Image Recognition',
    org: 'PT Pitjarus',
    year: '2023 — Present',
    desc: 'Backend services for software integrated with image recognition — turning shelf photos captured in the field into structured retail execution data.',
    stack: ['Node.js', 'Golang', 'Vue.js'],
    icon: 'scan',
    tone: 1,
  },
  {
    name: 'Distribution Management System',
    org: 'PT Pitjarus',
    year: '2023 — Present',
    desc: 'DMS covering distributor sales, stock and delivery operations, developed and maintained alongside the ERP modules it feeds.',
    stack: ['Express', 'CodeIgniter', 'Golang', 'Vue.js'],
    icon: 'truck',
    tone: 2,
  },
  {
    name: 'IoT Integration Platforms',
    org: 'PT Ravelware Technology Indonesia',
    year: '2018 — 2022',
    desc: 'Four years of device-integrated software: ingesting sensor streams and wrapping them in customisable systems shaped to each client’s process, on both relational and non-relational stores.',
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
    icon: 'cpu',
    tone: 3,
  },
  {
    name: 'Car Wash Management',
    org: 'Freelance',
    year: '2019 — 2023',
    desc: 'Service intake, queue, pricing and daily revenue reporting for a car wash business, modelled directly on how the counter already worked.',
    stack: ['Laravel', 'MySQL'],
    icon: 'droplet',
    tone: 4,
  },
  {
    name: 'Parking System',
    org: 'Freelance',
    year: '2019 — 2023',
    desc: 'Vehicle entry and exit logging with tariff calculation, shift handover and revenue recap for a parking operator.',
    stack: ['Laravel', 'MySQL'],
    icon: 'parking',
    tone: 5,
  },
  {
    name: 'Refreshment Test System',
    org: 'Bank Syariah Mandiri',
    year: '2017',
    desc: 'Internal competency refresher testing for bank employees — question banks, timed sessions and per-employee scoring. My first production system, built during an internship.',
    stack: ['Laravel', 'MySQL'],
    icon: 'clipboard',
    tone: 6,
  },
]

const ui = {
  nav: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    theme: 'Switch theme',
    about: 'About',
    experience: 'Experience',
    work: 'Work',
    contact: 'Contact',
    hire: 'Get in touch',
    menu: 'Toggle menu',
    top: 'Back to top',
    language: 'Language',
  },
  hero: {
    scroll: 'Scroll',
    greeting: 'Hi, I am',
    open: 'Open to opportunities',
    currently: 'Currently',
    note: 'Full-stack developer at PT Pitjarus, building ERP and distribution systems.',
    seeWork: 'See the work',
    cv: 'CV',
  },
  about: {
    label: 'About',
    title: 'About<span class="text-brand">.me</span>',
    bio: [
      'Software Developer with a strong background in backend and full-stack development, specializing in <strong class="font-semibold text-fg">Laravel, Node.js, Golang, and Vue.js</strong>. Proven track record building IoT-based systems and custom business systems (POS, ERP, distribution management) for various industries. Seeking to bring strong problem-solving skills and technical versatility to a full-time development role.',
      'Turning messy business processes into systems a company can actually run on. Currently focused on <strong class="font-semibold text-fg">ERP &amp; distribution systems</strong>, <strong class="font-semibold text-fg">document approval flows</strong>, and <strong class="font-semibold text-fg">data models that stay correct at scale</strong>.',
    ],
    education: 'Education',
    languages: 'Languages',
    downloadCv: 'Download CV',
    spec: {
      operator: 'Operator',
      role: 'Role',
      location: 'Location',
      status: 'Status',
      open: 'OPEN',
    },
    log: 'user_profile.log',
    cards: [
      { label: 'Experience', value: '7+', unit: 'yrs' },
      { label: 'Projects', value: '10', unit: 'shipped' },
      { label: 'Core stacks', value: '4', unit: 'deep' },
    ],
    portrait: 'Portrait of Rizki Ananda',
    toolbox: 'Toolbox',
  },
  skills: {
    label: 'Skills & education',
    title: 'The stack I reach for — and where it came from.',
  },
  experience: {
    label: 'Experience',
    title: 'Seven years, four companies, <span class="text-brand">one habit</span> — ship it and keep it running.',
    now: 'Now',
  },
  work: {
    back: 'Back to work',
    viewDetail: 'View detail',
    overview: 'Overview',
    prev: 'Previous project',
    next: 'Next project',
    dragHint: 'drag or use the arrows',
    featuredTag: 'Featured',
    liveTag: 'Live demo',
    internalTag: 'Internal',
    label: 'Selected work',
    title: 'Three products, and the <span class="text-brand">operational mess</span> behind each one.',
    caseStudy: 'Case study',
    sameSystem:
      'CashierMedia currently comes in two versions, V1 and V2. They are one system on the same database structure: V1 is the Laravel monolith serving ten outlets today, and V2 is its redesign — the same monolith split into a Golang API and a Vue.js front end — now being readied for market.',
    alsoBuilt: 'Also built',
    alsoBuiltTitle: 'Earlier systems and client work',
    screensCount: 'screens',
    myRole: 'My role',
    builtWith: 'Built with',
    screens: 'Screens',
    clickToEnlarge: 'click to enlarge',
  },
  contact: {
    label: 'Contact',
    title: 'Got a system that needs <span class="text-brand">building</span> — or rebuilding?',
    body: 'I am open to full-time roles and selected freelance work. Tell me what the business actually does and I will tell you honestly whether I am the right person for it.',
    links: {
      email: 'Email',
      phone: 'WhatsApp / Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    builtWith: 'Built with Vue 3 · Vite · Tailwind CSS',
  },
  lightbox: {
    caseStudyLabel: 'Case study',
    close: 'Close',
    previous: 'Previous',
    next: 'Next',
  },
}

export default {
  profile,
  skillGroups,
  experience,
  cashiermediaOverview,
  featured,
  otherWork,
  ui,
}
