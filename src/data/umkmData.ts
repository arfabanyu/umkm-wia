export interface Alamat {
    nama_jalan: string;
    nomor: string;
    kota: string;
    kode_pos: number;
    longitude: number;
    latitude: number;
    embed: string;
}

export interface Operasional {
    hari: string;
    operasional: boolean;
    jam: string;
}

export interface Produk {
    nama: string;
    harga: number;
    foto: string;
}

export interface UMKM {
    id: string;
    nama_usaha: string;
    jenis: string;
    deskripsi: string;
    tahun_berdiri: number;
    nama_pemilik: string;
    no_telepon: string;
    alamat_email: string;
    alamat: Alamat;
    operasional: Operasional[];
    nama_produk: Produk[];
    kategori: string;
    logo_umkm: string;
    gallery: string[];
    video: string;
    sosial_media: { [key: string]: string } | never[];
    ratings: number;
    pembayaran: string[];
    pengiriman: string[];
    target_pelanggan: string[];
    tanggal_dibuat: {
        hari: string;
        tanggal: number;
        bulan: string;
        tahun: number;
        jam: string;
    };
}

// Data dummy (menggunakan 3 data pertama untuk ringkasan)
// Masukkan data JSON 10 UMKM Anda di sini, pastikan formatnya benar
// Contoh data pertama (Kedai Kopi Senja):
export const umkmData: UMKM[] = [
    {
        id: "1",
        nama_usaha: "Setia Laundry",
        jenis: "Laundry",
        deskripsi:
            "Setia Laundry menyediakan jasa laundry kiloan dan satuan dengan harga terjangkau untuk orang dewasa dan pekerja. Buka setiap hari dari pagi hingga malam.",
        tahun_berdiri: 0,
        nama_pemilik: "Heri Setiawan",
        no_telepon: "082126666754",
        alamat_email: "sunartisetiawan2@gmail.com",
        alamat: {
            nama_jalan: "Taruna",
            nomor: "10a",
            kota: "Jakarta Pusat",
            kode_pos: 10650,
            longitude: -6.1601255,
            latitude: 106.8598526,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.923770565865!2d106.8597029028102!3d-6.160168217025901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50865e36017%3A0x7d8950b44a08a807!2sSetia%20Wash%20Laundry!5e0!3m2!1sid!2sid!4v1762061882929!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "07:00-20:00",
            },
        ],
        nama_produk: [
            {
                nama: "Kiloan",
                harga: 7000,
                foto: "",
            },
            {
                nama: "Jas",
                harga: 35000,
                foto: "",
            },
            {
                nama: "Toga",
                harga: 20000,
                foto: "",
            },
        ],
        kategori: "Jasa",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 0,
        pembayaran: ["Cash", "Qris"],
        pengiriman: ["Gojek", "Take in", "Delivery"],
        target_pelanggan: ["Orang Dewasa", "Pekerja"],
        tanggal_dibuat: {
            hari: "Senin",
            tanggal: 20,
            bulan: "Oktober",
            tahun: 2025,
            jam: "21:29",
        },
    },
    {
        id: "2",
        nama_usaha: "Kopi Sejuta Jiwa",
        jenis: "Kedai Kopi",
        deskripsi:
            "Kopi Sejuta Jiwa menawarkan berbagai varian es kopi kekinian dengan harga ekonomis yang cocok untuk remaja sekolah dan pekerja kantoran. Buka weekdays pagi hingga sore.",
        tahun_berdiri: 0,
        nama_pemilik: "Kak Niko",
        no_telepon: "",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Budi Utomo",
            nomor: "No.13",
            kota: "Jakarta Pusat",
            kode_pos: 10710,
            longitude: -6.1674252,
            latitude: 106.8363919,
            embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d701.2245936293085!2d106.83621430890427!3d-6.16752510600077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1762062085285!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "07:00-15:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "07:00-15:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "07:00-15:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "07:00-15:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "07:00-15:00",
            },
            {
                hari: "Sabtu",
                operasional: false,
                jam: "09:00-18:00",
            },
            {
                hari: "Minggu",
                operasional: false,
                jam: "",
            },
        ],
        nama_produk: [
            {
                nama: "Es Kopi Sejuta Video",
                harga: 8000,
                foto: "",
            },
            {
                nama: "Es Kopi Butterscotch",
                harga: 10000,
                foto: "",
            },
            {
                nama: "Es Kopi Hazelnut",
                harga: 0,
                foto: "",
            },
        ],
        kategori: "Makanan & Minuman",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: { instagram: "@sejutajiwa.id" },
        ratings: 0,
        pembayaran: ["Cash", "Qris"],
        pengiriman: [],
        target_pelanggan: ["Remaja sekolah", "Pekerja Kantoran"],
        tanggal_dibuat: {
            hari: "Rabu",
            tanggal: 22,
            bulan: "Oktober",
            tahun: 2025,
            jam: "17:08",
        },
    },
    {
        id: "3",
        nama_usaha: "Kartika Photocopy",
        jenis: "Fotokopi & Percetakan",
        deskripsi:
            "Kartika Photocopy menyediakan jasa fotokopi dan ATK terlengkap sejak 1987. Menawarkan berbagai alat tulis dan perlengkapan kantor dengan harga kompetitif.",
        tahun_berdiri: 1987,
        nama_pemilik: "Sriyanto",
        no_telepon: "0",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Budi Utomo",
            nomor: "No.9",
            kota: "Jakarta Pusat",
            kode_pos: 10710,
            longitude: -6.1667827,
            latitude: 106.8384728,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6825514658412!2d106.8376335313828!3d-6.166872309007498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c01d196175%3A0xd479dc8f321a777!2sFotocopy%20Kartika!5e0!3m2!1sid!2sid!4v1762062249756!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "07:30-16:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "09:00-18:00",
            },
            {
                hari: "Minggu",
                operasional: false,
                jam: "",
            },
        ],
        nama_produk: [
            {
                nama: "Lakban Hitam 1 inch",
                harga: 12500,
                foto: "",
            },
            {
                nama: "Gembok Nishio",
                harga: 15000,
                foto: "",
            },
            {
                nama: "Pulpen Faster",
                harga: 5000,
                foto: "",
            },
        ],
        kategori: "Jasa",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 0,
        pembayaran: ["Qris", "Cash", "Transfer"],
        pengiriman: [],
        target_pelanggan: ["Umum"],
        tanggal_dibuat: {
            hari: "Rabu",
            tanggal: 22,
            bulan: "Oktober",
            tahun: 2025,
            jam: "15:40",
        },
    },
    {
        id: "4",
        nama_usaha: "Toko Dian",
        jenis: "Toko Kelontong",
        deskripsi:
            "Toko Dian merupakan toko kelontong yang menyediakan kebutuhan sehari-hari sejak 1982. Buka pagi hingga sore dengan berbagai produk makanan dan minuman.",
        tahun_berdiri: 1982,
        nama_pemilik: "Arif",
        no_telepon: "0",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Budi Utomo",
            nomor: "No.9",
            kota: "Jakarta Pusat",
            kode_pos: 10710,
            longitude: -6.1667827,
            latitude: 106.8384728,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92062124547343!2d106.8382311953871!3d-6.166907859169452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c88a7fa9e1%3A0x565e8a098962be6f!2sTOKO%20DIAN!5e0!3m2!1sid!2sid!4v1762062293347!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "05:00-16:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "05:00-16:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "05:00-16:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "05:00-16:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "05:00-16:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "05:00-16:00",
            },
            {
                hari: "Minggu",
                operasional: false,
                jam: "",
            },
        ],
        nama_produk: [
            {
                nama: "Iwater",
                harga: 1000,
                foto: "",
            },
            {
                nama: "Indofood Racik Sayur Asem",
                harga: 2000,
                foto: "",
            },
            {
                nama: "Kapal Api",
                harga: 2000,
                foto: "",
            },
        ],
        kategori: "Ritel",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 0,
        pembayaran: ["Cash", "Qris"],
        pengiriman: [],
        target_pelanggan: ["Remaja", "Umum"],
        tanggal_dibuat: {
            hari: "Rabu",
            tanggal: 22,
            bulan: "Oktober",
            tahun: 2025,
            jam: "15:30",
        },
    },
    {
        id: "5",
        nama_usaha: "Ketan Susu Mba Aam",
        jenis: "Kedai Dessert",
        deskripsi:
            "Ketan Susu Mba Aam menyajikan ketan susu dan minuman segar untuk dinikmati sore hingga malam. Tempat nongkrong yang cozy dengan harga terjangkau.",
        tahun_berdiri: 2025,
        nama_pemilik: "Sugiarti",
        no_telepon: "0",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Lapangan Pors",
            nomor: "No.6, RT.6/RW.4",
            kota: "Jakarta Pusat",
            kode_pos: 10650,
            longitude: -6.1624509,
            latitude: 106.8606462,
            embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.92270556816644!2d106.86059130227395!3d-6.162448166392954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDknNDQuOCJTIDEwNsKwNTEnMzguMyJF!5e0!3m2!1sid!2sid!4v1762062430042!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "16:00-22:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "16:00-22:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "16:00-22:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "16:00-22:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "16:00-22:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "16:00-22:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "16:00-22:00",
            },
        ],
        nama_produk: [
            {
                nama: "Es Teh Manis Ijo",
                harga: 5000,
                foto: "",
            },
            {
                nama: "Ketan Abon",
                harga: 10000,
                foto: "",
            },
            {
                nama: "Ketan Keju Susu Reguler",
                harga: 0,
                foto: "",
            },
        ],
        kategori: "Makanan & Minuman",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 0,
        pembayaran: ["Qris", "Cash"],
        pengiriman: [],
        target_pelanggan: ["Umum"],
        tanggal_dibuat: {
            hari: "Kamis",
            tanggal: 24,
            bulan: "Oktober",
            tahun: 2025,
            jam: "17:10",
        },
    },
    {
        id: "6",
        nama_usaha: "Nasi Goreng Sedap Malam",
        jenis: "Warung Makanan",
        deskripsi:
            "Nasi Goreng Sedap Malam menghidangkan berbagai menu nasi goreng, mie goreng, dan bihun goreng yang lezat. Buka dari sore hingga dini hari.",
        tahun_berdiri: 2016,
        nama_pemilik: "Waryono",
        no_telepon: "085717448332",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Utan Panjang 3",
            nomor: "No. 9",
            kota: "Jakarta Pusat",
            kode_pos: 10640,
            longitude: -6.1681812,
            latitude: 106.8461867,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.6258696150535!2d106.8514243307813!3d-6.168226137010223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a4783a1d89%3A0x6af67b90609f5c7b!2sNasi%20Goreng%20Sedap%20Malam!5e0!3m2!1sid!2sid!4v1762062697002!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "16:00-02:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "16:00-02:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "16:00-02:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "16:00-02:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "16:00-02:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "16:00-02:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "16:00-02:00",
            },
        ],
        nama_produk: [
            {
                nama: "Nasi Goreng Ayam",
                harga: 20000,
                foto: "",
            },
            {
                nama: "Mie Goreng",
                harga: 15000,
                foto: "",
            },
            {
                nama: "Bihun Goreng",
                harga: 14000,
                foto: "",
            },
        ],
        kategori: "Makanan & Minuman",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 4.7,
        pembayaran: ["Qris", "Cash"],
        pengiriman: ["Take In", "Delivery"],
        target_pelanggan: [],
        tanggal_dibuat: {
            hari: "Jumat",
            tanggal: 25,
            bulan: "Oktober",
            tahun: 2025,
            jam: "17:00",
        },
    },
    {
        id: "7",
        nama_usaha: "Rm. Green Vill Raya",
        jenis: "Restoran Keluarga",
        deskripsi:
            "Rm. Green Vill Raya menyajikan masakan rumahan dengan spesialisasi ayam bakar, ayam goreng, dan gulai ikan. Cocok untuk keluarga dan kelompok.",
        tahun_berdiri: 2018,
        nama_pemilik: "Ali Adi Setiyan",
        no_telepon: "085100878772",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Budi Utomo",
            nomor: "No.9",
            kota: "Jakarta Pusat",
            kode_pos: 10710,
            longitude: -6.1668641,
            latitude: 106.8359485,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.84124348996386!2d106.83813438945398!3d-6.166906790787725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c88a8d69cf%3A0x15c766b066deb452!2sRm.%20Green%20Vill%20Raya!5e0!3m2!1sid!2sid!4v1762062757496!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "07:00-20:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "07:00-20:00",
            },
        ],
        nama_produk: [
            {
                nama: "Ayam Bakar",
                harga: 25000,
                foto: "",
            },
            {
                nama: "Ayam Goreng",
                harga: 27000,
                foto: "",
            },
            {
                nama: "Gulai Ikan",
                harga: 30000,
                foto: "",
            },
        ],
        kategori: "Makanan & Minuman",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 4.4,
        pembayaran: ["Cash"],
        pengiriman: ["Take In", "Delivery"],
        target_pelanggan: ["Umum"],
        tanggal_dibuat: {
            hari: "Sabtu",
            tanggal: 26,
            bulan: "Oktober",
            tahun: 2025,
            jam: "14:00",
        },
    },
    {
        id: "8",
        nama_usaha: "Citra Photocopy",
        jenis: "Fotokopi & Percetakan",
        deskripsi:
            "Citra Photocopy memberikan layanan fotokopi dan ATK 24 jam dengan harga terjangkau. Lengkap dengan berbagai kebutuhan alat tulis dan percetakan.",
        tahun_berdiri: 2020,
        nama_pemilik: "Citra",
        no_telepon: "082111076484",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Taruna Raya",
            nomor: "No.3 RT.2/RW.3",
            kota: "Jakarta Pusat",
            kode_pos: 10650,
            longitude: -6.1603814,
            latitude: 106.8585098,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92366797290174!2d106.86080373823643!3d-6.160387884848431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5bfabf7b4d5%3A0xa54f9651737bbef3!2sCitra%20Fotocopy!5e0!3m2!1sid!2sid!4v1762062858259!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "06:00-24:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "06:00-24:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "06:00-24:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "06:00-24:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "06:00-24:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "06:00-24:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "06:00-24:00",
            },
        ],
        nama_produk: [
            {
                nama: "Karton",
                harga: 5000,
                foto: "",
            },
            {
                nama: "Pulpen Joyko",
                harga: 7000,
                foto: "",
            },
            {
                nama: "Print",
                harga: 2000,
                foto: "",
            },
        ],
        kategori: "Jasa",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 5,
        pembayaran: ["Cash", "Qris"],
        pengiriman: ["Take In"],
        target_pelanggan: ["Umum", "Remaja Sekolah"],
        tanggal_dibuat: {
            hari: "Minggu",
            tanggal: 27,
            bulan: "Oktober",
            tahun: 2025,
            jam: "15:40",
        },
    },
    {
        id: "9",
        nama_usaha: "SGER Serdang Baru",
        jenis: "Kedai Minuman",

        deskripsi:
            "SGER Serdang Baru menawarkan minuman kekinian seperti jeruk genit, thai tea, dan es kopi gula aren. Tempat nongkrong yang nyaman sepanjang hari.",
        tahun_berdiri: 2022,
        nama_pemilik: "Danis Maulana",
        no_telepon: "081212201168",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Serdang Baru I",
            nomor: "No. 37 RT.2/RW.5",
            kota: "Jakarta Pusat",
            kode_pos: 10650,
            longitude: 0,
            latitude: 0,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6671.323012698116!2d106.85708797702777!3d-6.1585530703616955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f513f790d595%3A0x9d14c3b8d424ccdd!2sSGER%20Serdang%20Baru!5e0!3m2!1sid!2sid!4v1762062956034!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "10:00-21:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "10:00-21:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "10:00-21:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "10:00-21:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "10:00-21:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "10:00-21:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "10:00-21:00",
            },
        ],
        nama_produk: [
            {
                nama: "Jeruk Genit",
                harga: 8000,
                foto: "",
            },
            {
                nama: "Thai Tea Baper",
                harga: 10000,
                foto: "",
            },
            {
                nama: "Es Kopi Gula Aren",
                harga: 12000,
                foto: "",
            },
        ],
        kategori: "Makanan & Minuman",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 4.5,
        pembayaran: ["Cash", "Qris"],
        pengiriman: ["Delivery", "Take In"],
        target_pelanggan: ["Umum"],
        tanggal_dibuat: {
            hari: "Senin",
            tanggal: 28,
            bulan: "Oktober",
            tahun: 2025,
            jam: "19:20",
        },
    },
    {
        id: "10",
        nama_usaha: "Hisana Bendungan Jago",
        jenis: "Restoran Keluarga",
        deskripsi:
            "Hisana Bendungan Jago menghidangkan menu ayam cebar, geprek, dan goreng dengan nasi. Restoran keluarga yang buka dari pagi hingga malam.",
        tahun_berdiri: 2016,
        nama_pemilik: "-",
        no_telepon: "08958075242",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Bendungan Jago Raya",
            nomor: "RT.5/RW.3",
            kota: "Jakarta Pusat",
            kode_pos: 10650,
            longitude: -6.1616296,
            latitude: 106.84237,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.9345441241157!2d106.85623923028439!3d-6.160684114829251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a447464dc9%3A0x9830cdad836b3b6b!2sHisana%20Bendungan%20Jago!5e0!3m2!1sid!2sid!4v1762063070352!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "06:00-22:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "06:00-22:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "06:00-22:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "06:00-22:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "06:00-22:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "06:00-22:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "06:00-22:00",
            },
        ],
        nama_produk: [
            {
                nama: "Ayam Cebar (Celup Bakar)",
                harga: 12000,
                foto: "",
            },
            {
                nama: "Paket Geprek Sayap",
                harga: 17000,
                foto: "",
            },
            {
                nama: "Ayam Goreng Dada + Nasi",
                harga: 16000,
                foto: "",
            },
        ],
        kategori: "Makanan & Minuman",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 4.5,
        pembayaran: ["Cash"],
        pengiriman: ["Take In", "Delivery"],
        target_pelanggan: ["Umum", "Keluarga"],
        tanggal_dibuat: {
            hari: "Senin",
            tanggal: 28,
            bulan: "Oktober",
            tahun: 2025,
            jam: "13:20",
        },
    },
    {
        id: "11",
        nama_usaha: "B.O.S Laundry",
        jenis: "Laundry",
        deskripsi:
            "B.O.S Laundry memberikan layanan laundry kiloan 1 hari selesai, setrika kilat, dan shoes cleaning. Layanan 24 jam untuk kebutuhan keluarga.",
        tahun_berdiri: 2022,
        nama_pemilik: "Yudha Al Janata",
        no_telepon: "081218969929",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Serdang Baru Raya",
            nomor: "No. 43C",
            kota: "Jakarta Pusat",
            kode_pos: 10640,
            longitude: -6.1598436,
            latitude: 106.8425655,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.106648973448!2d106.84776021487255!3d-6.160658907735616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f57a6e4573d3%3A0xa034cdeb7562ffb3!2sB.O.S%20LAUNDRY%20%7C%20Laundry%20Kemayoran!5e0!3m2!1sid!2sid!4v1762063135511!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "00:00-24:00",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "00:00-24:00",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "00:00-24:00",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "00:00-24:00",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "00:00-24:00",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "00:00-24:00",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "00:00-24:00",
            },
        ],
        nama_produk: [
            {
                nama: "Kiloan 1 Hari Selesai",
                harga: 7000,
                foto: "",
            },
            {
                nama: "Setrika 4 Jam Selesai",
                harga: 9000,
                foto: "",
            },
            {
                nama: "Shoes Cleaning",
                harga: 45000,
                foto: "",
            },
        ],
        kategori: "Jasa",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: { instagram: "@bos_laundry" },
        ratings: 4.9,
        pembayaran: ["Cash"],
        pengiriman: ["Delivery", "Take In"],
        target_pelanggan: ["Keluarga"],
        tanggal_dibuat: {
            hari: "Selasa",
            tanggal: 29,
            bulan: "Oktober",
            tahun: 2025,
            jam: "17:08",
        },
    },
    {
        id: "12",
        nama_usaha: "Foto Copy Annisa Digital Printing",
        jenis: "Fotokopi & Percetakan",
        deskripsi:
            "Foto Copy Annisa Digital Printing menyediakan jasa print, fotokopi, dan ATK dengan harga murah. Terbuka dari pagi hingga malam untuk remaja sekolah.",
        tahun_berdiri: 2021,
        nama_pemilik: "Annisa",
        no_telepon: "081296121404",
        alamat_email: "",
        alamat: {
            nama_jalan: "Jl. Harapan Jaya Raya",
            nomor: "No.2 RT.3/RW.4",
            kota: "Jakarta Pusat",
            kode_pos: 10640,
            longitude: -6.1684087,
            latitude: 106.8630923,
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.455449903367!2d106.85692827218261!3d-6.167203948095878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a9bb9b4b23%3A0x4893aeefc24540c3!2sFoto%20Copy%20Annisa%20Digital%20Printing!5e0!3m2!1sid!2sid!4v1762063180981!5m2!1sid!2sid",
        },
        operasional: [
            {
                hari: "Senin",
                operasional: true,
                jam: "05:50-21:30",
            },
            {
                hari: "Selasa",
                operasional: true,
                jam: "05:50-21:30",
            },
            {
                hari: "Rabu",
                operasional: true,
                jam: "05:50-21:30",
            },
            {
                hari: "Kamis",
                operasional: true,
                jam: "05:50-21:30",
            },
            {
                hari: "Jumat",
                operasional: true,
                jam: "05:50-21:30",
            },
            {
                hari: "Sabtu",
                operasional: true,
                jam: "05:50-21:30",
            },
            {
                hari: "Minggu",
                operasional: true,
                jam: "05:50-21:30",
            },
        ],
        nama_produk: [
            {
                nama: "Print",
                harga: 1000,
                foto: "",
            },
            {
                nama: "Double Tip",
                harga: 4000,
                foto: "",
            },
            {
                nama: "Penggaris 30cm",
                harga: 5000,
                foto: "",
            },
        ],
        kategori: "Jasa",
        logo_umkm: "",
        gallery: [],
        video: "",
        sosial_media: [],
        ratings: 4.1,
        pembayaran: ["Cash", "Qris"],
        pengiriman: ["Take In"],
        target_pelanggan: ["Remaja Sekolah"],
        tanggal_dibuat: {
            hari: "Rabu",
            tanggal: 30,
            bulan: "Oktober",
            tahun: 2025,
            jam: "16:20",
        },
    },
];
