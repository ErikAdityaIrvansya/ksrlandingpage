import { Heart, Shield, Users, Zap } from "lucide-react";

export const stats = [
  { label: "Relawan Aktif", value: "150+", icon: Users },
  { label: "Kegiatan Sosial", value: "300+", icon: Heart },
  { label: "Bantuan Bencana", value: "50+", icon: Shield },
  { label: "Pelatihan", value: "20+", icon: Zap },
];

export const latestActivities = [
  {
    id: 1,
    title: "Tanggap Darurat Banjir Malang",
    category: "Bencana",
    date: "12 Oct 2025",
    image: "https://images.unsplash.com/photo-1547683908-21aa53841548?auto=format&fit=crop&q=80&w=800",
    description: "Pemberian bantuan logistik dan evakuasi warga terdampak banjir di wilayah Malang Selatan.",
  },
  {
    id: 2,
    title: "Donor Darah Rutin Ormawa",
    category: "Kesehatan",
    date: "05 Sept 2025",
    image: "https://images.unsplash.com/photo-1615461066841-6116ecaaba7f?auto=format&fit=crop&q=80&w=800",
    description: "Kegiatan donor darah rutin bekerjasama dengan UDD PMI Kota Malang untuk memenuhi stok darah.",
  },
  {
    id: 3,
    title: "Pelatihan Pertolongan Pertama",
    category: "Pelatihan",
    date: "15 Aug 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad994e1?auto=format&fit=crop&q=80&w=800",
    description: "Pelatihan dasar pertolongan pertama bagi mahasiswa baru sebagai pembekalan jiwa kemanusiaan.",
  },
];
