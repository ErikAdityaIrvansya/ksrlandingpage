import { Heart, Shield, Users, Zap, BookOpen, HandHelping, Landmark, Ambulance } from "lucide-react";

export const stats = [
  { label: "Relawan Aktif", value: "150+", icon: Users },
  { label: "Kegiatan Sosial", value: "300+", icon: Heart },
  { label: "Bantuan Bencana", value: "50+", icon: Shield },
  { label: "Program Pelatihan", value: "25+", icon: BookOpen },
];

export const latestActivities = [
  {
    id: 1,
    title: "Aksi Tanggap Darurat Banjir",
    category: "Penanggulangan Bencana",
    date: "14 Okt 2025",
    image: "https://images.unsplash.com/photo-1547683908-21aa53841548?auto=format&fit=crop&q=80&w=800",
    description: "Distribusi bantuan logistik dan evakuasi warga terdampak banjir di wilayah Malang Selatan bersama tim BPBD.",
  },
  {
    id: 2,
    title: "Donor Darah Massal",
    category: "Layanan Kesehatan",
    date: "02 Sept 2025",
    image: "https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?auto=format&fit=crop&q=80&w=800",
    description: "Bekerjasama dengan UDD PMI Kota Malang dalam upaya menjaga ketersediaan stok darah di wilayah Malang.",
  },
  {
    id: 3,
    title: "Diklat Dasar Relawan Baru",
    category: "Pelatihan Dasar",
    date: "15 Agu 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad994e1?auto=format&fit=crop&q=80&w=800",
    description: "Pembekalan materi pertolongan pertama dan evakuasi bagi mahasiswa Universitas Merdeka Malang angkatan 2024.",
  },
];

export const visions = [
  "Terwujudnya KSR PMI Unit UNMER Malang sebagai organisasi relawan yang profesional, mandiri, dan berkarakter.",
  "Meningkatkan kualitas sumber daya manusia relawan melalui pelatihan yang berkelanjutan.",
  "Membangun jejaring kerjasama yang luas dalam misi kemanusiaan.",
  "Menyediakan layanan kepalangmerahan yang prima bagi masyarakat kampus dan sekitarnya."
];

export const values = [
  { 
    title: "Kemanusiaan", 
    desc: "Memberikan bantuan kepada yang membutuhkan tanpa membedakan suku, agama, dan ras.",
    icon: Heart 
  },
  { 
    title: "Kemandirian", 
    desc: "Menjalankan roda organisasi secara independen dan profesional.",
    icon: Shield 
  },
  { 
    title: "Kesukarelaan", 
    desc: "Bekerja tulus tanpa mengharapkan imbalan materi demi kesejahteraan sesama.",
    icon: HandHelping 
  },
  { 
    title: "Kesatuan", 
    desc: "Bersatu dalam satu visi dan misi kemanusiaan di bawah naungan PMI.",
    icon: Users 
  }
];

export const managementData = {
  pembina: [
    { name: "Dr. H. Bambang Satriono, M.M.", position: "Pembina Utama", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Dra. Siti Aminah, M.Pd.", position: "Pembina Teknis", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  ],
  inti: [
    { name: "Andhika Pratama", position: "Ketua Umum", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Salsabila Putri", position: "Wakil Ketua", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?auto=format&fit=crop&q=80&w=400" },
    { name: "Rizky Ramadhan", position: "Sekretaris I", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Dinda Lestari", position: "Bendahara I", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
  ],
  divisi: [
    {
      name: "Divisi Operasional & Penanggulangan Bencana",
      members: [
        { name: "Fajar Nugraha", position: "Koordinator Divisi", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
        { name: "Bagus Wijaya", position: "Anggota", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      ]
    },
    {
      name: "Divisi Kesehatan & Donor Darah",
      members: [
        { name: "Nabila Syakieb", position: "Koordinator Divisi", image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400" },
        { name: "Aditya Putra", position: "Anggota", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
      ]
    },
    {
      name: "Divisi Humas & Kerjasama",
      members: [
        { name: "Rina Nose", position: "Koordinator Divisi", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400" },
        { name: "Gading Marten", position: "Anggota", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" },
      ]
    }
  ]
};
