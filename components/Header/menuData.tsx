import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Profil Desa",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Dokumentasi",
    path: "/blog",
    newTab: false,
  }, 
  {
    id: 4,
    title: "Pemerintahan",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Struktur pemerintahan",
        // path: "/about",
        path: "/struktur",
        newTab: false,
      }, 
      {
        id: 43,
        title: "Visi dan Misi",
        path: "/visi",
        newTab: false,
      }
    ],
  },
];
export default menuData;
