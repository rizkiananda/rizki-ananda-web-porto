const profile = {
  name: 'Rizki Ananda',
  role: 'Software Developer',
  tagline: ['Backend Developer', 'Full-Stack Developer', 'IoT Developer'],
  summary:
    'I build the software companies run their daily operations on: point of sale, ERP, distribution and IoT telemetry. Most of the job is taking a workflow that already exists and turning it into software that keeps working in production. I have been doing it since 2018, mostly with Laravel, Node.js, Golang and Vue.js.',
  location: 'Bekasi Timur, Bekasi, Indonesia',
  email: 'rizkinandatama30@gmail.com',
  phone: '085693608025',
  github: 'https://github.com/rizkiananda',
  linkedin: 'https://www.linkedin.com/in/rizki-ananda-utama-a63a72137/',
  education: {
    degree: 'Bachelor of Computer Science',
    school: 'Institut Pertanian Bogor',
    period: '2014 - 2018',
  },
  languages: [
    { name: 'Indonesian', level: 'Native' },
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
    note: 'Mostly relational, NoSQL when a project needs it',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL', 'GORM', 'Knex'],
  },
  {
    title: 'Process',
    note: 'I draw the flow before I write the code',
    items: ['Git', 'REST API design', 'Flowchart', 'ERD', 'Activity Diagram', 'IoT integration'],
  },
]


const experience = [
  {
    role: 'Software Developer (Full Stack)',
    company: 'PT Pitjarus',
    period: 'Dec 2022 - Present',
    current: true,
    points: [
      'Build software that works with image recognition for retail execution.',
      'Develop and maintain a Distribution Management System and ERP modules.',
      'Work in Node.js (Express), PHP (CodeIgniter), Golang and Vue.js.',
    ],
    stack: ['Node.js', 'Golang', 'CodeIgniter', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Software Developer (Backend)',
    company: 'PT Bhinneka Nusantara Mandiri',
    period: 'May 2022 - Dec 2022',
    points: [
      'Developed software connected to IoT devices.',
      'Built and analysed a vessel monitoring system that tracks RPM, fuel consumption and GPS data.',
      'Worked with PHP (OpenSwoole, Phalcon) and MySQL.',
    ],
    stack: ['OpenSwoole', 'Phalcon', 'MySQL', 'IoT'],
  },
  {
    role: 'Software Developer (Backend)',
    company: 'PT Ravelware Technology Indonesia',
    period: 'Oct 2018 - May 2022',
    points: [
      'Developed software connected to IoT devices.',
      'Built systems that could be configured to fit each client.',
      'Used Node.js, Laravel, and both relational and non-relational databases.',
    ],
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
  },
  {
    role: 'Software Developer (Freelance)',
    company: 'Personal projects',
    period: 'Oct 2018 - Present',
    points: [
      'Built several web-based systems for running a business (POS, car wash, parking), each one following how that client already worked.',
      'Kept them on a plain CRUD structure in Laravel and MySQL, so they are easy to maintain and extend.',
    ],
    stack: ['Laravel', 'MySQL', 'Vue.js'],
  },
  {
    role: 'Software Developer (Intern)',
    company: 'Bank Syariah Mandiri',
    period: 'Jul 2017 - Aug 2017',
    points: [
      'Developed a Refreshment Test System for Bank Syariah Mandiri employees.',
      'Built with Laravel and MySQL.',
    ],
    stack: ['Laravel', 'MySQL'],
  },
]

/* The CashierMedia story, shared by both featured POS entries */
const cashiermediaOverview = {
  title: 'What CashierMedia covers',
  body: [
    'CashierMedia looks like a cash register, but the register is only the front counter. Behind that screen is a full retail and distribution back office: everything a shop owner deals with between buying stock and closing the books.',
    'The cashier screen looks products up by unit and price tier, keeps the cart on the server, takes mixed payments, works out change and receivables, and prints the invoice in large or thermal size. Stock only moves at checkout. That one step writes the sales recap, the transaction lines, the stock ledger and any receivable.',
    'Ten outlets use CashierMedia V1 for their daily sales right now, so every change I make has to be safe for a shop that is open. V2 is a redesign in its final stage and goes on the market soon.',
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
    version: 'V2, rewritten in Vue 3 and Golang',
    year: '2025 - 2026',
    role: 'Solo developer: architecture, backend, frontend',
    link: 'https://mediacashier.com/demo-pos-v2',
    linkLabel: 'Open the V2 demo',
    summary:
      'A full rewrite of the same POS. The Laravel monolith became a Go REST API (Fiber + GORM) and a Vue 3 + TypeScript SPA. Both run on the exact same MySQL schema, so existing stores can move over without losing a single transaction. This is the next version of the system those stores use today, and I am getting it ready for release.',
    highlights: [
      'Go + Fiber + GORM API with JWT auth, split into modules: catalog, cart, checkout, stock, purchasing, returns, delivery, fleet, receivables, payables, advances, journal, discounts, dashboard and settings.',
      'Vue 3 + Vite + TypeScript SPA with PrimeVue and Tailwind, and Pinia stores for auth and the cart. It works down to phone width, where the cart becomes a drawer, and it has a proper light and dark theme.',
      'Stock now comes off at checkout instead of when an item goes into the cart. In V1, abandoned carts used to eat into stock, and that whole class of bug is gone.',
      'Password hashes from the old Laravel system are normalised on login, so every existing account worked from day one.',
    ],
    stack: ['Golang', 'Fiber', 'GORM', 'JWT', 'Vue 3', 'TypeScript', 'PrimeVue', 'Tailwind', 'Pinia', 'MySQL'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard: revenue for today, this month and this year, with profit estimate charts' },
      { file: 'cashier', caption: 'Cashier: product grid with the cart panel beside it' },
      { file: 'cashier-select-item', caption: 'Item search across products, units and price tiers' },
      { file: 'cashier-item-selected', caption: 'Picking the unit and quantity before the line goes into the cart' },
      { file: 'cashier-payment', caption: 'Payment: method, change and receivable in one dialog' },
      { file: 'cashier-invoice-preview', caption: 'Invoice preview right after checkout' },
      { file: 'invoice', caption: 'Printable invoice' },
      { file: 'today-sell', caption: 'Today’s sales: every transaction in the shift' },
      { file: 'reporting', caption: 'Reporting: sales and financial recap' },
    ],
  },
  {
    slug: 'cashiermedia-v1',
    index: '02',
    name: 'CashierMedia POS',
    version: 'V1, the original Laravel build',
    year: '2020 - 2024',
    role: 'Solo developer: backend and frontend',
    link: 'https://mediacashier.com/demo-pos-v1',
    linkLabel: 'Open the V1 demo',
    summary:
      'The original system, built with Laravel and MySQL for distributors and retail shops. Four years at real counters settled the pricing rules, the stock ledger and the schema, and V2 kept them as they were.',
    highlights: [
      'Still in production. Ten outlets use V1 for day-to-day selling, so every change had to be safe for a store that was open.',
      'Full Laravel + MySQL back office: transactions, purchasing, returns, warehouse in and out, stock opname, reporting, finance and delivery.',
      'Keyboard-first cashier flow (Insert to add, F2 to pay) for operators who don’t touch the mouse during a rush.',
      'Promos and tiered discounts stack automatically on each line when the order is entered.',
      'White-labelled per client. The screenshots here show one distributor’s own branding.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'jQuery', 'Blade'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard: daily operations summary' },
      { file: 'cashier', caption: 'Order screen, with lines entered from the keyboard' },
      { file: 'cashier-select-item', caption: 'Product picker with unit and price' },
      { file: 'cashier-payment', caption: 'Payment and change' },
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
    year: '2023 - Present',
    role: 'Full-stack developer on a team product',
    link: null,
    linkLabel: 'Internal product, branding hidden',
    summary:
      'A multi-company ERP: a Vue 3 + Vuetify SPA on a Node.js/Express + Knex + MySQL API. Every finance and warehouse document goes through an approval matrix, so the software follows who in the company is allowed to sign off on what.',
    highlights: [
      'Finance: Payment Voucher, Journal Voucher, Receive Voucher, Petty Cash and LPJ (expense accountability). Each one goes from create to approval, confirmation and release, can be duplicated, and prints or exports to PDF or ZIP.',
      'Warehouse: Goods Receipt, Outbound, Transfer, Stock Opname and Inventory, plus a dashboard for highest-demand, slow-moving and available stock with AI-generated summaries.',
      'Purchasing: goods receipts and outbounds start from a Purchase Request or Purchase Order instead of being typed in by hand. The outstanding PR and PO list is filtered by a cut-off date you can configure, a reference document that was already used is rejected before submit, and every stock movement links back to the document that approved it. You can follow an item from its stock card back to the original request.',
      'HR: attendance records and dashboard, leave and absence requests, reimbursement claims and travel admin. Part of the data comes in from a separate mobile and scanning API.',
      'Master data and reporting: products, vendors, warehouses and a Chart of Accounts per company, plus an ad-hoc report builder. Users pick a module, filters and columns, and the Excel or CSV file is generated in the background.',
      'There are more modules beyond these: allocation, archive, checker, dispatch, purchase order, sales order, RMS and visit. Together they cover the whole distribution operation.',
    ],
    stack: ['Vue 3', 'Vuetify 3', 'Node.js', 'Express', 'Knex', 'MySQL', 'TypeScript'],
    shots: [
      { file: 'payment-voucher-list', caption: 'Finance: Payment Voucher list with status steps and paid and unpaid totals' },
      { file: 'goods-receipt-list', caption: 'Warehouse: Goods Receipt list across companies and warehouses' },
      { file: 'goods-receipt-create', caption: 'Goods Receipt entry form' },
      { file: 'goods-receipt-print', caption: 'Print preview with PDF and ZIP export' },
      { file: 'dashboard-attendance', caption: 'HR: attendance dashboard with AI-written summary cards' },
    ],
    redacted: 'Client branding and company names in these screenshots have been replaced, because the product is internal.',
  },
]

const otherWork = [
  {
    name: 'Vessel Monitoring System',
    org: 'PT Bhinneka Nusantara Mandiri',
    year: '2022',
    desc: 'IoT telemetry for a fleet of vessels. It takes in engine RPM, fuel consumption and GPS position and analyses them. Built on PHP OpenSwoole because the socket connections stay open for a long time.',
    stack: ['OpenSwoole', 'Phalcon', 'MySQL'],
    icon: 'ship',
    tone: 0,
  },
  {
    name: 'Retail Image Recognition',
    org: 'PT Pitjarus',
    year: '2023 - Present',
    desc: 'Backend services for image recognition software. Shelf photos taken in the field come out as structured retail execution data.',
    stack: ['Node.js', 'Golang', 'Vue.js'],
    icon: 'scan',
    tone: 1,
  },
  {
    name: 'Distribution Management System',
    org: 'PT Pitjarus',
    year: '2023 - Present',
    desc: 'A DMS for distributor sales, stock and delivery. I develop and maintain it alongside the ERP modules it feeds.',
    stack: ['Express', 'CodeIgniter', 'Golang', 'Vue.js'],
    icon: 'truck',
    tone: 2,
  },
  {
    name: 'IoT Integration Platforms',
    org: 'PT Ravelware Technology Indonesia',
    year: '2018 - 2022',
    desc: 'Four years of software connected to devices. Sensor data comes in, and each client gets a system configured around their own process, on relational or non-relational databases.',
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
    icon: 'cpu',
    tone: 3,
  },
  {
    name: 'Car Wash Management',
    org: 'Freelance',
    year: '2019 - 2023',
    desc: 'Service intake, queue, pricing and daily revenue reports for a car wash, modelled on how the counter already worked.',
    stack: ['Laravel', 'MySQL'],
    icon: 'droplet',
    tone: 4,
  },
  {
    name: 'Parking System',
    org: 'Freelance',
    year: '2019 - 2023',
    desc: 'Logs vehicles in and out, calculates the tariff, and handles shift handover and the revenue recap for a parking operator.',
    stack: ['Laravel', 'MySQL'],
    icon: 'parking',
    tone: 5,
  },
  {
    name: 'Refreshment Test System',
    org: 'Bank Syariah Mandiri',
    year: '2017',
    desc: 'An internal refresher test for bank employees, with question banks, timed sessions and a score per employee. My first production system, built during an internship.',
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
    greeting: 'Hi, I’m',
    open: 'Available for work',
    currently: 'Currently',
    note: 'Full-stack developer at PT Pitjarus, working on ERP and distribution systems.',
    seeWork: 'See my projects',
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
      operator: 'Name',
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
    title: 'What I work with, and where I studied.',
  },
  experience: {
    label: 'Experience',
    title: 'Where I have worked, <span class="text-brand">newest first</span>.',
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
    title: 'Three products I can show you, and <span class="text-brand">the rest</span> I can only describe.',
    caseStudy: 'Case study',
    sameSystem:
      'CashierMedia has two versions, V1 and V2, and they are the same system on the same database structure. V1 is the Laravel monolith that ten outlets use today. V2 is its redesign, with the monolith split into a Golang API and a Vue.js front end, and I am getting it ready for market.',
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
    title: 'Got a system that needs <span class="text-brand">building</span>, or rebuilding?',
    body: 'I’m open to full-time roles and some freelance work. Tell me what your business does and what the system has to handle, and I’ll tell you whether I’m the right person for it.',
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
