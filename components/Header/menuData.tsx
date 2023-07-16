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
    title: "Layanan",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Potensi Desa",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pemerintahan",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Struktur organisasi",
        path: "/about",
        newTab: false,
      }, 
      {
        id: 43,
        title: "Visi",
        path: "/visi",
        newTab: false,
      },
      {
        id: 44,
        title: "Misi",
        path: "/misi",
        newTab: false,
      },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      // path: "/blog",
      // path: "/blog-sidebar",
      //   path: "/blog-details",
      //   newTab: false,
      // }
    ],
  },
];
export default menuData;
