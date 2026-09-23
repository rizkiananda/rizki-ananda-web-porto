const profile = {
  name: 'Rizki Ananda',
  role: 'Software Developer',
  tagline: ['Backend Engineer', 'Full-Stack Developer', 'IoT & Systems Builder'],
  summary:
    'Saya membangun sistem yang benar-benar dipakai perusahaan setiap hari — point of sale, ERP, distribusi, dan platform telemetri IoT. Tujuh tahun mengubah alur kerja operasional yang berantakan menjadi software yang tahan dipakai di produksi, terutama dengan Laravel, Node.js, Golang, dan Vue.js.',
  location: 'Bekasi Timur, Bekasi — Indonesia',
  email: 'rizkinandatama30@gmail.com',
  phone: '085693608025',
  github: 'https://github.com/rizkiananda',
  linkedin: 'https://www.linkedin.com/in/rizki-ananda-utama-a63a72137/',
  education: {
    degree: 'Sarjana Ilmu Komputer',
    school: 'Institut Pertanian Bogor',
    period: '2014 — 2018',
  },
  languages: [
    { name: 'Indonesia', level: 'Bahasa ibu' },
    { name: 'Inggris', level: 'Menengah' },
  ],
}


const skillGroups = [
  {
    title: 'Backend',
    note: 'Tempat sebagian besar waktu saya habis',
    items: ['Golang (Fiber)', 'Node.js (Express)', 'PHP (Laravel)', 'CodeIgniter', 'Phalcon', 'OpenSwoole'],
  },
  {
    title: 'Frontend',
    note: 'Cukup untuk menggarap satu fitur dari ujung ke ujung',
    items: ['Vue.js 3', 'Vite', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'Vuetify', 'HTML & CSS'],
  },
  {
    title: 'Data',
    note: 'Relasional dulu, NoSQL kalau memang perlu',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL', 'GORM', 'Knex'],
  },
  {
    title: 'Proses',
    note: 'Rancang alurnya dulu, baru tulis kodenya',
    items: ['Git', 'Perancangan REST API', 'Flowchart', 'ERD', 'Activity Diagram', 'Integrasi IoT'],
  },
]

const experience = [
  {
    role: 'Software Developer — Full Stack',
    company: 'PT Pitjarus',
    period: 'Des 2022 — Sekarang',
    current: true,
    points: [
      'Membangun software yang terintegrasi dengan image recognition untuk retail execution.',
      'Mengembangkan dan memelihara Distribution Management System serta modul-modul ERP.',
      'Bekerja lintas Node.js (Express), PHP (CodeIgniter), Golang, dan Vue.js.',
    ],
    stack: ['Node.js', 'Golang', 'CodeIgniter', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Software Developer — Backend',
    company: 'PT Bhinneka Nusantara Mandiri',
    period: 'Mei 2022 — Des 2022',
    points: [
      'Mengembangkan software yang terintegrasi dengan teknologi IoT.',
      'Membangun dan menganalisis sistem pemantauan kapal yang melacak RPM, konsumsi bahan bakar, dan data GPS.',
      'Menggunakan PHP (OpenSwoole, Phalcon) dan MySQL.',
    ],
    stack: ['OpenSwoole', 'Phalcon', 'MySQL', 'IoT'],
  },
  {
    role: 'Software Developer — Backend',
    company: 'PT Ravelware Technology Indonesia',
    period: 'Okt 2018 — Mei 2022',
    points: [
      'Mengembangkan software yang terintegrasi dengan teknologi IoT.',
      'Membangun sistem yang bisa dikustomisasi sesuai kebutuhan masing-masing klien.',
      'Menggunakan Node.js, Laravel, serta basis data relasional dan non-relasional.',
    ],
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
  },
  {
    role: 'Software Developer — Freelance',
    company: 'Proyek pribadi',
    period: 'Okt 2018 — Sekarang',
    points: [
      'Membangun beberapa sistem manajemen usaha berbasis web (POS, cuci mobil, parkir) yang dirancang mengikuti alur operasional tiap klien.',
      'Menerapkan arsitektur CRUD dengan Laravel & MySQL agar sistem tetap mudah dirawat dan dikembangkan.',
    ],
    stack: ['Laravel', 'MySQL', 'Vue.js'],
  },
  {
    role: 'Software Developer — Magang',
    company: 'Bank Syariah Mandiri',
    period: 'Jul 2017 — Agu 2017',
    points: [
      'Mengembangkan Refreshment Test System untuk karyawan Bank Syariah Mandiri.',
      'Dibangun dengan Laravel dan basis data MySQL.',
    ],
    stack: ['Laravel', 'MySQL'],
  },
]

/* Cerita CashierMedia, dipakai bersama oleh kedua entri POS unggulan */
const cashiermediaOverview = {
  title: 'Apa itu CashierMedia sebenarnya',
  body: [
    'CashierMedia terlihat seperti mesin kasir, padahal kasir hanya bagian depannya. Di balik satu layar itu ada back office retail dan distribusi yang lengkap: semua yang dibutuhkan pemilik toko antara membeli stok sampai menutup pembukuan.',
    'Layar kasir menangani pencarian barang per satuan dan tingkat harga, keranjang di sisi server, pembayaran campuran, kembalian dan piutang, lalu mencetak invoice ukuran besar atau thermal. Checkout adalah momen stok benar-benar bergerak — sekali proses ia menulis rekap penjualan, detail transaksi, kartu stok, dan piutang bila ada.',
    'Semua ini bukan demo. Sepuluh outlet memakai CashierMedia V1 saat ini dan tetap menjalankannya untuk menunjang penjualan mereka setiap hari, sehingga setiap perubahan harus aman bagi toko yang sedang beroperasi. V2 kini berada di tahap finishing redesign dan segera dipasarkan.',
  ],
  moduleGroups: [
    {
      label: 'Penjualan',
      items: ['Kasir / POS', 'Penjualan hari ini', 'Order online', 'Retur penjualan', 'Diskon & promo terjadwal', 'Golongan pelanggan'],
    },
    {
      label: 'Inventori',
      items: ['Barang & satuan', 'Stok', 'Kartu stok', 'Pembelian', 'Mutasi gudang', 'Pengiriman & armada', 'Pencatatan ritase'],
    },
    {
      label: 'Keuangan',
      items: ['Piutang', 'Hutang', 'Uang muka', 'Jurnal umum', 'Laporan keuangan', 'Laporan penjualan'],
    },
    {
      label: 'Platform',
      items: ['Master data', 'Pengaturan user & akun', 'Autentikasi JWT', 'Navigasi sesuai hak akses', 'Tema terang & gelap'],
    },
  ],
}

const featured = [
  {
    slug: 'cashiermedia-v2',
    index: '01',
    name: 'CashierMedia POS',
    version: 'V2 — ditulis ulang dengan Vue 3 + Golang',
    year: '2025 — 2026',
    role: 'Developer tunggal — arsitektur, backend, frontend',
    link: 'https://mediacashier.com/demo-pos-v2',
    linkLabel: 'Demo langsung — V2',
    summary:
      'Penulisan ulang total dari suite POS yang sama: monolit Laravel menjadi REST API Go (Fiber + GORM) dan SPA Vue 3 + TypeScript, berjalan di atas skema MySQL yang persis sama sehingga toko yang sudah berjalan bisa bermigrasi tanpa kehilangan satu transaksi pun. V2 adalah bentuk redesign dari sistem yang dipakai toko-toko itu sekarang, dan akan segera dipasarkan.',
    highlights: [
      'API Go + Fiber + GORM dengan autentikasi JWT, dipecah menjadi modul-modul fokus — katalog, keranjang, checkout, stok, pembelian, retur, pengiriman, armada, piutang, hutang, uang muka, jurnal, diskon, dashboard, dan pengaturan.',
      'SPA Vue 3 + Vite + TypeScript dengan PrimeVue dan Tailwind, Pinia untuk auth dan keranjang, responsif sampai lebar ponsel dengan keranjang berbentuk drawer, plus tema terang/gelap yang sungguhan.',
      'Stok dipotong saat checkout, bukan saat barang masuk keranjang — keranjang yang ditinggalkan tidak lagi menggerus stok, sebuah kelas bug yang nyata di V1.',
      'Hash password dari sistem Laravel lama dinormalisasi saat login, sehingga semua akun lama tetap bisa dipakai sejak hari pertama.',
    ],
    stack: ['Golang', 'Fiber', 'GORM', 'JWT', 'Vue 3', 'TypeScript', 'PrimeVue', 'Tailwind', 'Pinia', 'MySQL'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard — pendapatan hari ini, bulan ini, dan tahun ini, lengkap dengan grafik estimasi laba' },
      { file: 'cashier', caption: 'Kasir — grid produk dengan panel keranjang langsung' },
      { file: 'cashier-select-item', caption: 'Pencarian barang — lintas produk, satuan, dan tingkat harga' },
      { file: 'cashier-item-selected', caption: 'Pemilihan satuan & jumlah sebelum baris masuk keranjang' },
      { file: 'cashier-payment', caption: 'Pembayaran — metode, kembalian, dan piutang dalam satu dialog' },
      { file: 'cashier-invoice-preview', caption: 'Pratinjau invoice langsung setelah checkout' },
      { file: 'invoice', caption: 'Invoice siap cetak' },
      { file: 'today-sell', caption: 'Penjualan hari ini — seluruh transaksi dalam satu shift' },
      { file: 'reporting', caption: 'Laporan — rekap penjualan dan keuangan' },
    ],
  },
  {
    slug: 'cashiermedia-v1',
    index: '02',
    name: 'CashierMedia POS',
    version: 'V1 — versi asli berbasis Laravel',
    year: '2020 — 2024',
    role: 'Developer tunggal — backend & frontend',
    link: 'https://mediacashier.com/demo-pos-v1',
    linkLabel: 'Demo langsung — V1',
    summary:
      'Sistem aslinya, dibangun dan ditempa dengan Laravel dan MySQL untuk distributor dan toko retail sungguhan. Empat tahun di meja kasir sungguhan yang membentuknya: aturan harga, kartu stok, dan skemanya matang di sini, dan V2 mewarisinya tanpa diubah.',
    highlights: [
      'Masih berjalan di produksi: sepuluh outlet memakai V1 untuk penjualan sehari-hari, sehingga setiap perubahan harus aman bagi toko yang sedang beroperasi.',
      'Back office Laravel + MySQL yang lengkap: transaksi, pembelian, retur, mutasi masuk/keluar gudang, stok opname, laporan, keuangan, dan pengiriman.',
      'Alur kasir berbasis keyboard (Insert untuk menambah, F2 untuk membayar), dibuat untuk operator yang tidak menyentuh mouse saat ramai.',
      'Akumulasi promo dan diskon berjenjang diterapkan otomatis per baris saat order dibuat.',
      'Di-white-label per klien — tangkapan layar di sini berjalan dengan branding milik salah satu distributor.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'jQuery', 'Blade'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard — ringkasan operasional harian' },
      { file: 'cashier', caption: 'Layar order — input baris lewat keyboard' },
      { file: 'cashier-select-item', caption: 'Pemilih produk dengan satuan dan harga' },
      { file: 'cashier-payment', caption: 'Pembayaran dan perhitungan kembalian' },
      { file: 'invoice-small', caption: 'Invoice ukuran thermal' },
      { file: 'invoice-big', caption: 'Invoice A4 untuk pelanggan distribusi' },
      { file: 'today-sell', caption: 'Daftar transaksi harian' },
      { file: 'reporting', caption: 'Modul laporan' },
    ],
  },
  {
    slug: 'erp',
    index: '03',
    name: 'Enterprise ERP Suite',
    version: 'Keuangan · Gudang · HR · Laporan',
    year: '2023 — Sekarang',
    role: 'Full-stack developer — produk tim',
    link: null,
    linkLabel: 'Produk internal — branding disamarkan',
    summary:
      'ERP multi-perusahaan berupa SPA Vue 3 + Vuetify di atas API Node.js/Express + Knex + MySQL. Setiap dokumen keuangan dan gudang bergerak melalui matriks persetujuan, jadi software-nya merekam rantai wewenang perusahaan yang sesungguhnya, bukan sekadar menyimpan data.',
    highlights: [
      'Keuangan — Payment Voucher, Journal Voucher, Receive Voucher, Petty Cash, dan LPJ, masing-masing dengan siklus buat → persetujuan → konfirmasi → rilis, duplikasi dokumen, serta cetak/ekspor ke PDF atau ZIP.',
      'Gudang — penerimaan barang, pengeluaran, transfer, stok opname, dan inventori, plus dashboard analitik untuk barang paling diminati, slow moving, dan stok tersedia dengan ringkasan buatan AI.',
      'Purchasing — penerimaan dan pengeluaran barang dibuat dari Purchase Request atau Purchase Order, bukan diketik ulang: daftar PR/PO outstanding disaring dengan cut-off date yang bisa diatur, dokumen referensi yang sudah terpakai ditolak sebelum submit, dan setiap pergerakan stok menyimpan tautan ke dokumen yang mengesahkannya — sehingga satu barang bisa ditelusuri dari kartu stok sampai permintaan awalnya.',
      'HR — catatan dan dashboard absensi, pengajuan cuti & izin, klaim reimbursement, serta administrasi perjalanan dinas, sebagian disuplai dari API mobile/scanning terpisah.',
      'Master data & laporan — produk, vendor, gudang, dan Chart of Accounts per perusahaan, plus report builder ad-hoc asinkron: pengguna memilih modul, filter, dan kolom, lalu Excel/CSV dibuat di latar belakang.',
      'Di samping inti yang terdokumentasi, ada juga modul allocation, archive, checker, dispatch, purchase order, sales order, RMS, dan visit — suite ini mencakup seluruh operasi distribusi.',
    ],
    stack: ['Vue 3', 'Vuetify 3', 'Node.js', 'Express', 'Knex', 'MySQL', 'TypeScript'],
    shots: [
      { file: 'payment-voucher-list', caption: 'Keuangan — daftar Payment Voucher dengan alur status dan total terbayar/belum terbayar' },
      { file: 'goods-receipt-list', caption: 'Gudang — daftar penerimaan barang lintas perusahaan dan gudang' },
      { file: 'goods-receipt-create', caption: 'Penerimaan barang — formulir entri dokumen' },
      { file: 'goods-receipt-print', caption: 'Pratinjau cetak dengan ekspor PDF dan ZIP' },
      { file: 'dashboard-attendance', caption: 'HR — dashboard absensi dengan kartu ringkasan tulisan AI' },
    ],
    redacted:
      'Branding klien dan nama perusahaan pada tangkapan layar ini sudah diganti — produknya bersifat internal.',
  },
]

const otherWork = [
  {
    name: 'Vessel Monitoring System',
    org: 'PT Bhinneka Nusantara Mandiri',
    year: '2022',
    desc: 'Platform telemetri IoT untuk armada kapal — menerima dan menganalisis RPM mesin, konsumsi bahan bakar, dan posisi GPS, dibangun di atas PHP OpenSwoole untuk beban socket yang berjalan lama.',
    stack: ['OpenSwoole', 'Phalcon', 'MySQL'],
    icon: 'ship',
    tone: 0,
  },
  {
    name: 'Retail Image Recognition',
    org: 'PT Pitjarus',
    year: '2023 — Sekarang',
    desc: 'Layanan backend untuk software yang terintegrasi dengan image recognition — mengubah foto rak yang diambil di lapangan menjadi data retail execution yang terstruktur.',
    stack: ['Node.js', 'Golang', 'Vue.js'],
    icon: 'scan',
    tone: 1,
  },
  {
    name: 'Distribution Management System',
    org: 'PT Pitjarus',
    year: '2023 — Sekarang',
    desc: 'DMS yang mencakup penjualan distributor, stok, dan operasi pengiriman, dikembangkan dan dirawat berdampingan dengan modul ERP yang disuplainya.',
    stack: ['Express', 'CodeIgniter', 'Golang', 'Vue.js'],
    icon: 'truck',
    tone: 2,
  },
  {
    name: 'Platform Integrasi IoT',
    org: 'PT Ravelware Technology Indonesia',
    year: '2018 — 2022',
    desc: 'Empat tahun menggarap software yang terhubung perangkat: menerima aliran data sensor dan membungkusnya dalam sistem yang bisa dikustomisasi mengikuti proses tiap klien, di atas basis data relasional maupun non-relasional.',
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
    icon: 'cpu',
    tone: 3,
  },
  {
    name: 'Manajemen Cuci Mobil',
    org: 'Freelance',
    year: '2019 — 2023',
    desc: 'Penerimaan servis, antrean, penetapan harga, dan laporan pendapatan harian untuk usaha cuci mobil, dimodelkan langsung dari cara kasirnya sudah bekerja.',
    stack: ['Laravel', 'MySQL'],
    icon: 'droplet',
    tone: 4,
  },
  {
    name: 'Sistem Parkir',
    org: 'Freelance',
    year: '2019 — 2023',
    desc: 'Pencatatan kendaraan masuk dan keluar dengan perhitungan tarif, serah terima shift, dan rekap pendapatan untuk operator parkir.',
    stack: ['Laravel', 'MySQL'],
    icon: 'parking',
    tone: 5,
  },
  {
    name: 'Refreshment Test System',
    org: 'Bank Syariah Mandiri',
    year: '2017',
    desc: 'Uji penyegaran kompetensi internal untuk karyawan bank — bank soal, sesi berbatas waktu, dan penilaian per karyawan. Sistem produksi pertama saya, dibuat saat magang.',
    stack: ['Laravel', 'MySQL'],
    icon: 'clipboard',
    tone: 6,
  },
]

const ui = {
  nav: {
    home: 'Beranda',
    skills: 'Keahlian',
    projects: 'Proyek',
    theme: 'Ganti tema',
    about: 'Tentang',
    experience: 'Pengalaman',
    work: 'Karya',
    contact: 'Kontak',
    hire: 'Hubungi saya',
    menu: 'Buka menu',
    top: 'Kembali ke atas',
    language: 'Bahasa',
  },
  hero: {
    scroll: 'Gulir',
    greeting: 'Halo, saya',
    open: 'Terbuka untuk peluang baru',
    currently: 'Saat ini',
    note: 'Full-stack developer di PT Pitjarus, membangun sistem ERP dan distribusi.',
    seeWork: 'Lihat karya',
    cv: 'CV',
  },
  about: {
    label: 'Tentang',
    title: 'About<span class="text-brand">.me</span>',
    bio: [
      'Software Developer dengan latar belakang kuat di pengembangan backend dan full-stack, dengan spesialisasi <strong class="font-semibold text-fg">Laravel, Node.js, Golang, dan Vue.js</strong>. Punya rekam jejak membangun sistem berbasis IoT dan sistem bisnis khusus (POS, ERP, manajemen distribusi) untuk berbagai industri. Ingin membawa kemampuan pemecahan masalah dan keluwesan teknis itu ke sebuah peran pengembangan penuh waktu.',
      'Mengubah proses bisnis yang berantakan menjadi sistem yang benar-benar bisa dijalankan perusahaan. Saat ini fokus pada <strong class="font-semibold text-fg">sistem ERP &amp; distribusi</strong>, <strong class="font-semibold text-fg">alur persetujuan dokumen</strong>, dan <strong class="font-semibold text-fg">model data yang tetap benar saat skalanya membesar</strong>.',
    ],
    education: 'Pendidikan',
    languages: 'Bahasa',
    downloadCv: 'Unduh CV',
    spec: {
      operator: 'Operator',
      role: 'Peran',
      location: 'Lokasi',
      status: 'Status',
      open: 'TERBUKA',
    },
    log: 'profil_pengguna.log',
    cards: [
      { label: 'Pengalaman', value: '7+', unit: 'thn' },
      { label: 'Proyek', value: '10', unit: 'dirilis' },
      { label: 'Stack inti', value: '4', unit: 'dikuasai' },
    ],
    portrait: 'Foto Rizki Ananda',
    toolbox: 'Perkakas',
  },
  skills: {
    label: 'Keahlian & pendidikan',
    title: 'Stack yang saya andalkan — dan dari mana asalnya.',
  },
  experience: {
    label: 'Pengalaman',
    title: 'Tujuh tahun, empat perusahaan, <span class="text-brand">satu kebiasaan</span> — rilis, lalu jaga tetap jalan.',
    now: 'Kini',
  },
  work: {
    back: 'Kembali ke proyek',
    viewDetail: 'Lihat detail',
    overview: 'Ringkasan',
    prev: 'Proyek sebelumnya',
    next: 'Proyek berikutnya',
    dragHint: 'geser atau pakai panah',
    featuredTag: 'Unggulan',
    liveTag: 'Demo langsung',
    internalTag: 'Internal',
    label: 'Karya pilihan',
    title: 'Tiga produk, dan <span class="text-brand">kekusutan operasional</span> di balik masing-masing.',
    caseStudy: 'Studi kasus',
    sameSystem:
      'CashierMedia saat ini punya dua versi, V1 dan V2. Keduanya satu sistem dengan struktur basis data yang sama: V1 adalah monolit Laravel yang melayani sepuluh outlet hari ini, dan V2 adalah hasil redesign-nya — monolit yang sama dipecah menjadi API Golang dan front end Vue.js — yang kini disiapkan untuk dipasarkan.',
    alsoBuilt: 'Pernah dibangun',
    alsoBuiltTitle: 'Sistem terdahulu dan pekerjaan klien',
    screensCount: 'layar',
    myRole: 'Peran saya',
    builtWith: 'Dibangun dengan',
    screens: 'Tampilan',
    clickToEnlarge: 'klik untuk memperbesar',
  },
  contact: {
    label: 'Kontak',
    title: 'Punya sistem yang perlu <span class="text-brand">dibangun</span> — atau dibangun ulang?',
    body: 'Saya terbuka untuk posisi penuh waktu dan pekerjaan freelance tertentu. Ceritakan apa yang sebenarnya dikerjakan bisnis Anda, dan saya akan jujur apakah saya orang yang tepat untuk itu.',
    links: {
      email: 'Email',
      phone: 'WhatsApp / Telepon',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    builtWith: 'Dibangun dengan Vue 3 · Vite · Tailwind CSS',
  },
  lightbox: {
    caseStudyLabel: 'Studi kasus',
    close: 'Tutup',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
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
