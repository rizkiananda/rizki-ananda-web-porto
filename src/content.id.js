const profile = {
  name: 'Rizki Ananda',
  role: 'Software Developer',
  tagline: ['Backend Developer', 'Full-Stack Developer', 'IoT Developer'],
  summary:
    'Saya membuat software yang dipakai perusahaan untuk operasional sehari-hari: point of sale, ERP, distribusi, dan telemetri IoT. Kebanyakan pekerjaannya adalah mengambil alur kerja yang sudah berjalan, lalu menjadikannya software yang tetap jalan di produksi. Saya mengerjakan ini sejak 2018, paling sering dengan Laravel, Node.js, Golang, dan Vue.js.',
  location: 'Bekasi Timur, Bekasi, Indonesia',
  email: 'rizkinandatama30@gmail.com',
  phone: '085693608025',
  github: 'https://github.com/rizkiananda',
  linkedin: 'https://www.linkedin.com/in/rizki-ananda-utama-a63a72137/',
  education: {
    degree: 'Sarjana Ilmu Komputer',
    school: 'Institut Pertanian Bogor',
    period: '2014 - 2018',
  },
  languages: [
    { name: 'Indonesia', level: 'Bahasa ibu' },
    { name: 'Inggris', level: 'Menengah' },
  ],
}


const skillGroups = [
  {
    title: 'Backend',
    note: 'Sebagian besar waktu saya ada di sini',
    items: ['Golang (Fiber)', 'Node.js (Express)', 'PHP (Laravel)', 'CodeIgniter', 'Phalcon', 'OpenSwoole'],
  },
  {
    title: 'Frontend',
    note: 'Cukup untuk mengerjakan satu fitur dari awal sampai akhir',
    items: ['Vue.js 3', 'Vite', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'Vuetify', 'HTML & CSS'],
  },
  {
    title: 'Data',
    note: 'Kebanyakan relasional, NoSQL kalau proyeknya butuh',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL', 'GORM', 'Knex'],
  },
  {
    title: 'Proses',
    note: 'Saya gambar alurnya dulu, baru menulis kode',
    items: ['Git', 'Perancangan REST API', 'Flowchart', 'ERD', 'Activity Diagram', 'Integrasi IoT'],
  },
]

const experience = [
  {
    role: 'Software Developer (Full Stack)',
    company: 'PT Pitjarus',
    period: 'Des 2022 - Sekarang',
    current: true,
    points: [
      'Membuat software yang terhubung dengan image recognition untuk retail execution.',
      'Mengembangkan dan merawat Distribution Management System serta modul-modul ERP.',
      'Bekerja dengan Node.js (Express), PHP (CodeIgniter), Golang, dan Vue.js.',
    ],
    stack: ['Node.js', 'Golang', 'CodeIgniter', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Software Developer (Backend)',
    company: 'PT Bhinneka Nusantara Mandiri',
    period: 'Mei 2022 - Des 2022',
    points: [
      'Mengembangkan software yang terhubung dengan perangkat IoT.',
      'Membangun dan menganalisis sistem pemantauan kapal yang melacak RPM, konsumsi bahan bakar, dan data GPS.',
      'Memakai PHP (OpenSwoole, Phalcon) dan MySQL.',
    ],
    stack: ['OpenSwoole', 'Phalcon', 'MySQL', 'IoT'],
  },
  {
    role: 'Software Developer (Backend)',
    company: 'PT Ravelware Technology Indonesia',
    period: 'Okt 2018 - Mei 2022',
    points: [
      'Mengembangkan software yang terhubung dengan perangkat IoT.',
      'Membangun sistem yang bisa diatur sesuai kebutuhan tiap klien.',
      'Memakai Node.js, Laravel, serta basis data relasional dan non-relasional.',
    ],
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
  },
  {
    role: 'Software Developer (Freelance)',
    company: 'Proyek pribadi',
    period: 'Okt 2018 - Sekarang',
    points: [
      'Membuat beberapa sistem berbasis web untuk menjalankan usaha (POS, cuci mobil, parkir), masing-masing mengikuti cara kerja klien yang sudah ada.',
      'Strukturnya CRUD biasa dengan Laravel dan MySQL, supaya mudah dirawat dan dikembangkan.',
    ],
    stack: ['Laravel', 'MySQL', 'Vue.js'],
  },
  {
    role: 'Software Developer (Magang)',
    company: 'Bank Syariah Mandiri',
    period: 'Jul 2017 - Agu 2017',
    points: [
      'Mengembangkan Refreshment Test System untuk karyawan Bank Syariah Mandiri.',
      'Dibuat dengan Laravel dan MySQL.',
    ],
    stack: ['Laravel', 'MySQL'],
  },
]

/* Cerita CashierMedia, dipakai bersama oleh kedua entri POS unggulan */
const cashiermediaOverview = {
  title: 'Apa saja isi CashierMedia',
  body: [
    'CashierMedia kelihatannya mesin kasir, padahal kasir cuma bagian depannya. Di belakang layar itu ada back office retail dan distribusi yang lengkap: semua urusan pemilik toko dari beli stok sampai tutup buku.',
    'Layar kasir mencari barang per satuan dan tingkat harga, menyimpan keranjang di server, menerima pembayaran campuran, menghitung kembalian dan piutang, lalu mencetak invoice ukuran besar atau thermal. Stok baru bergerak saat checkout. Di langkah itu sistem menulis rekap penjualan, detail transaksi, kartu stok, dan piutang kalau ada.',
    'Saat ini sepuluh outlet memakai CashierMedia V1 untuk penjualan harian, jadi setiap perubahan yang saya buat harus aman untuk toko yang sedang buka. V2 adalah hasil redesign yang sudah di tahap akhir dan sebentar lagi dipasarkan.',
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
    version: 'V2, ditulis ulang dengan Vue 3 dan Golang',
    year: '2025 - 2026',
    role: 'Developer tunggal: arsitektur, backend, frontend',
    link: 'https://mediacashier.com/demo-pos-v2',
    linkLabel: 'Buka demo V2',
    summary:
      'Penulisan ulang total dari POS yang sama. Monolit Laravel-nya menjadi REST API Go (Fiber + GORM) dan SPA Vue 3 + TypeScript. Keduanya memakai skema MySQL yang persis sama, jadi toko yang sudah berjalan bisa pindah tanpa kehilangan satu transaksi pun. Ini versi berikutnya dari sistem yang dipakai toko-toko itu sekarang, dan sedang saya siapkan untuk rilis.',
    highlights: [
      'API Go + Fiber + GORM dengan autentikasi JWT, dipecah per modul: katalog, keranjang, checkout, stok, pembelian, retur, pengiriman, armada, piutang, hutang, uang muka, jurnal, diskon, dashboard, dan pengaturan.',
      'SPA Vue 3 + Vite + TypeScript dengan PrimeVue dan Tailwind, serta Pinia untuk auth dan keranjang. Tampilannya tetap jalan sampai lebar ponsel, di mana keranjang berubah jadi drawer, dan ada tema terang dan gelap.',
      'Stok sekarang dipotong saat checkout, bukan saat barang masuk keranjang. Di V1, keranjang yang ditinggal dulu ikut memotong stok, dan bug jenis itu sekarang sudah tidak ada.',
      'Hash password dari sistem Laravel lama dinormalisasi saat login, jadi semua akun lama tetap bisa dipakai sejak hari pertama.',
    ],
    stack: ['Golang', 'Fiber', 'GORM', 'JWT', 'Vue 3', 'TypeScript', 'PrimeVue', 'Tailwind', 'Pinia', 'MySQL'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard: pendapatan hari ini, bulan ini, dan tahun ini, dengan grafik estimasi laba' },
      { file: 'cashier', caption: 'Kasir: grid produk dengan panel keranjang di sampingnya' },
      { file: 'cashier-select-item', caption: 'Pencarian barang berdasarkan produk, satuan, dan tingkat harga' },
      { file: 'cashier-item-selected', caption: 'Memilih satuan dan jumlah sebelum barang masuk keranjang' },
      { file: 'cashier-payment', caption: 'Pembayaran: metode, kembalian, dan piutang dalam satu dialog' },
      { file: 'cashier-invoice-preview', caption: 'Pratinjau invoice setelah checkout' },
      { file: 'invoice', caption: 'Invoice siap cetak' },
      { file: 'today-sell', caption: 'Penjualan hari ini: semua transaksi dalam satu shift' },
      { file: 'reporting', caption: 'Laporan: rekap penjualan dan keuangan' },
    ],
  },
  {
    slug: 'cashiermedia-v1',
    index: '02',
    name: 'CashierMedia POS',
    version: 'V1, versi asli dengan Laravel',
    year: '2020 - 2024',
    role: 'Developer tunggal: backend dan frontend',
    link: 'https://mediacashier.com/demo-pos-v1',
    linkLabel: 'Buka demo V1',
    summary:
      'Sistem aslinya, dibuat dengan Laravel dan MySQL untuk distributor dan toko retail. Selama empat tahun dipakai di meja kasir sungguhan, aturan harga, kartu stok, dan skemanya jadi matang, lalu V2 memakainya tanpa diubah.',
    highlights: [
      'Masih dipakai di produksi. Sepuluh outlet menjalankan V1 untuk penjualan sehari-hari, jadi setiap perubahan harus aman untuk toko yang sedang buka.',
      'Back office Laravel + MySQL yang lengkap: transaksi, pembelian, retur, mutasi masuk dan keluar gudang, stok opname, laporan, keuangan, dan pengiriman.',
      'Alur kasir lewat keyboard (Insert untuk menambah, F2 untuk bayar) untuk operator yang tidak sempat pegang mouse saat ramai.',
      'Promo dan diskon berjenjang dihitung otomatis per baris saat order diinput.',
      'Di-white-label per klien. Tangkapan layar di sini memakai branding salah satu distributor.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'jQuery', 'Blade'],
    shots: [
      { file: 'dashboard', caption: 'Dashboard: ringkasan operasional harian' },
      { file: 'cashier', caption: 'Layar order, input baris lewat keyboard' },
      { file: 'cashier-select-item', caption: 'Pemilih produk dengan satuan dan harga' },
      { file: 'cashier-payment', caption: 'Pembayaran dan kembalian' },
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
    year: '2023 - Sekarang',
    role: 'Full-stack developer di produk tim',
    link: null,
    linkLabel: 'Produk internal, branding disamarkan',
    summary:
      'ERP multi-perusahaan: SPA Vue 3 + Vuetify di atas API Node.js/Express + Knex + MySQL. Setiap dokumen keuangan dan gudang lewat matriks persetujuan, jadi software-nya mengikuti siapa di perusahaan yang berwenang menyetujui apa.',
    highlights: [
      'Keuangan: Payment Voucher, Journal Voucher, Receive Voucher, Petty Cash, dan LPJ. Masing-masing berjalan dari buat, persetujuan, konfirmasi, sampai rilis, bisa diduplikasi, dan bisa dicetak atau diekspor ke PDF atau ZIP.',
      'Gudang: penerimaan barang, pengeluaran, transfer, stok opname, dan inventori, plus dashboard untuk barang paling diminati, slow moving, dan stok tersedia dengan ringkasan buatan AI.',
      'Purchasing: penerimaan dan pengeluaran barang dibuat dari Purchase Request atau Purchase Order, tidak diketik ulang. Daftar PR dan PO outstanding disaring dengan cut-off date yang bisa diatur, dokumen referensi yang sudah terpakai ditolak sebelum submit, dan setiap pergerakan stok tersambung ke dokumen yang menyetujuinya. Satu barang bisa ditelusuri dari kartu stok sampai permintaan awalnya.',
      'HR: catatan dan dashboard absensi, pengajuan cuti dan izin, klaim reimbursement, serta administrasi perjalanan dinas. Sebagian datanya masuk dari API mobile dan scanning yang terpisah.',
      'Master data dan laporan: produk, vendor, gudang, dan Chart of Accounts per perusahaan, plus report builder ad-hoc. Pengguna memilih modul, filter, dan kolom, lalu file Excel atau CSV dibuat di latar belakang.',
      'Masih ada modul lain di luar yang di atas: allocation, archive, checker, dispatch, purchase order, sales order, RMS, dan visit. Semuanya mencakup seluruh operasi distribusi.',
    ],
    stack: ['Vue 3', 'Vuetify 3', 'Node.js', 'Express', 'Knex', 'MySQL', 'TypeScript'],
    shots: [
      { file: 'payment-voucher-list', caption: 'Keuangan: daftar Payment Voucher dengan tahapan status dan total terbayar dan belum terbayar' },
      { file: 'goods-receipt-list', caption: 'Gudang: daftar penerimaan barang lintas perusahaan dan gudang' },
      { file: 'goods-receipt-create', caption: 'Formulir penerimaan barang' },
      { file: 'goods-receipt-print', caption: 'Pratinjau cetak dengan ekspor PDF dan ZIP' },
      { file: 'dashboard-attendance', caption: 'HR: dashboard absensi dengan kartu ringkasan tulisan AI' },
    ],
    redacted:
      'Branding klien dan nama perusahaan di tangkapan layar ini sudah diganti, karena produknya internal.',
  },
]

const otherWork = [
  {
    name: 'Vessel Monitoring System',
    org: 'PT Bhinneka Nusantara Mandiri',
    year: '2022',
    desc: 'Telemetri IoT untuk armada kapal. Sistem ini menerima RPM mesin, konsumsi bahan bakar, dan posisi GPS, lalu menganalisisnya. Dibuat dengan PHP OpenSwoole karena koneksi socket-nya terbuka lama.',
    stack: ['OpenSwoole', 'Phalcon', 'MySQL'],
    icon: 'ship',
    tone: 0,
  },
  {
    name: 'Retail Image Recognition',
    org: 'PT Pitjarus',
    year: '2023 - Sekarang',
    desc: 'Layanan backend untuk software image recognition. Foto rak yang diambil di lapangan diolah menjadi data retail execution yang terstruktur.',
    stack: ['Node.js', 'Golang', 'Vue.js'],
    icon: 'scan',
    tone: 1,
  },
  {
    name: 'Distribution Management System',
    org: 'PT Pitjarus',
    year: '2023 - Sekarang',
    desc: 'DMS untuk penjualan distributor, stok, dan pengiriman. Saya mengembangkan dan merawatnya bersama modul ERP yang menerima datanya.',
    stack: ['Express', 'CodeIgniter', 'Golang', 'Vue.js'],
    icon: 'truck',
    tone: 2,
  },
  {
    name: 'Platform Integrasi IoT',
    org: 'PT Ravelware Technology Indonesia',
    year: '2018 - 2022',
    desc: 'Empat tahun membuat software yang terhubung ke perangkat. Data sensor masuk, lalu tiap klien mendapat sistem yang diatur mengikuti proses mereka sendiri, di basis data relasional maupun non-relasional.',
    stack: ['Node.js', 'Laravel', 'MySQL', 'NoSQL'],
    icon: 'cpu',
    tone: 3,
  },
  {
    name: 'Manajemen Cuci Mobil',
    org: 'Freelance',
    year: '2019 - 2023',
    desc: 'Penerimaan servis, antrean, harga, dan laporan pendapatan harian untuk usaha cuci mobil, mengikuti cara kerja kasirnya yang sudah ada.',
    stack: ['Laravel', 'MySQL'],
    icon: 'droplet',
    tone: 4,
  },
  {
    name: 'Sistem Parkir',
    org: 'Freelance',
    year: '2019 - 2023',
    desc: 'Mencatat kendaraan masuk dan keluar, menghitung tarif, serta mengurus serah terima shift dan rekap pendapatan untuk operator parkir.',
    stack: ['Laravel', 'MySQL'],
    icon: 'parking',
    tone: 5,
  },
  {
    name: 'Refreshment Test System',
    org: 'Bank Syariah Mandiri',
    year: '2017',
    desc: 'Tes penyegaran internal untuk karyawan bank, dengan bank soal, sesi berbatas waktu, dan nilai per karyawan. Sistem produksi pertama saya, dibuat waktu magang.',
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
    open: 'Terbuka untuk tawaran kerja',
    currently: 'Saat ini',
    note: 'Full-stack developer di PT Pitjarus, mengerjakan sistem ERP dan distribusi.',
    seeWork: 'Lihat proyek saya',
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
      operator: 'Nama',
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
    title: 'Alat yang saya pakai, dan tempat saya kuliah.',
  },
  experience: {
    label: 'Pengalaman',
    title: 'Tempat saya pernah bekerja, <span class="text-brand">dari yang terbaru</span>.',
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
    title: 'Tiga produk yang bisa saya tunjukkan, <span class="text-brand">sisanya</span> hanya bisa saya ceritakan.',
    caseStudy: 'Studi kasus',
    sameSystem:
      'CashierMedia punya dua versi, V1 dan V2, dan keduanya sistem yang sama dengan struktur basis data yang sama. V1 adalah monolit Laravel yang dipakai sepuluh outlet sekarang. V2 adalah hasil redesign-nya, monolit yang sama dipecah menjadi API Golang dan front end Vue.js, dan sedang saya siapkan untuk dipasarkan.',
    alsoBuilt: 'Pernah dibuat',
    alsoBuiltTitle: 'Sistem sebelumnya dan pekerjaan klien',
    screensCount: 'layar',
    myRole: 'Peran saya',
    builtWith: 'Dibuat dengan',
    screens: 'Tampilan',
    clickToEnlarge: 'klik untuk memperbesar',
  },
  contact: {
    label: 'Kontak',
    title: 'Punya sistem yang perlu <span class="text-brand">dibuat</span>, atau dibuat ulang?',
    body: 'Saya terbuka untuk posisi penuh waktu dan sebagian pekerjaan freelance. Ceritakan usaha Anda bergerak di bidang apa dan apa saja yang harus ditangani sistemnya, nanti saya bilang apakah saya orang yang cocok untuk itu.',
    links: {
      email: 'Email',
      phone: 'WhatsApp / Telepon',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    builtWith: 'Dibuat dengan Vue 3 · Vite · Tailwind CSS',
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
