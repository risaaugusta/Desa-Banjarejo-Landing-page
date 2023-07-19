import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Program Rumah Belajar Ceria oleh KKN UM",
    paragraph:
      "Kegiatan pembukaan Rumah Belajar Ceria yang diiniasi oleh mahasiswa KKN UM yang diisi dengan berbagai macam lomba anak.",
    image: "/images/blog/blog-01.png",
    author: {
      name: "Dina",
      image: "/images/blog/dina.jpg",
      designation: "Mahasiswa Sastra Inggris",
    },
    tags: ["Pendidikan"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Gelar Pamer Karya",
    paragraph:
      "SDN Banjarejo 01 Pakis mengadakan kegiatan Gelar Pamer Karya dan bazar yang dibersamai dengan acara pembagian raport siswa-siswi kelas 1-6.",
    image: "/images/blog/blog-02.png",
    author: {
      name: "Risa Augusta",
      image: "/images/blog/risa.jpg",
      designation: "Mahasiswa Teknik Informatika",
    },
    tags: ["Pendidikan"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Gotong Royong Membersihkan Makam",
    paragraph:
      "Kegiatan mingguan dari Desa Banjarejo adalah gotong royong warga untuk membersihkan makam per-RW.",
    image: "/images/blog/blog-03.png",
    author: {
      name: "Dimas Adi",
      image: "/images/blog/dimas.png",
      designation: "Mahasiswa Teknik Informatika",
    },
    tags: ["Sosial"],
    publishDate: "2023",
  },
];
export default blogData;
