import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pengenalan Umum"
        description="
        Desa Banjarejo memiliki sejarah dibalik terbentuknya nama ‘Banjarejo’. Diketahui bahwa nama Desa Banjarejo diambil dari kata ‘Banjar dan Rejo’. Nama ‘Banjar’ sendiri merupakan sebuah penggalan nama kampung pertama yang ada di desa dengan nama Banjarsari. Sedangkan nama ‘Rejo’ sendiri merupakan sebuah cerminan kondisi perkampungan yang ramai. Sejarah lain dibalik Banjarejo adalah bahwa kata ‘Banjar’ memiliki makna sebagai tanda, bahwa secara geografis Banjarejo terbagi menjadi beberapa wilayah yang berderet/sejajar. Ditarik dari sebelah Timur, terdapat wilayah Banjarsari, Purworejo. Sedangkan di sisi Barat merupakan wilayah Sindurejo.
Hingga kini, Desa Banjarejo sendiri terbagi menjadi dua dusun yang diantaranya adalah Dusun Krajan dan Dusun Ngamprong. Wilayah Dusun Krajan mencakup Banjarsari, Purworejo, serta daerah Sindurejo. Selanjutnya, Dusun Ngamprong merupakan wilayah yang terdiri dari Ngamprong Lor dan Ngamprong Kidul yang dipisahkan oleh Sungai Ngamprong atau yang biasa disebut sebagai Sungai Amprong. Membatasi daerah Dusun Krajan dan Dusun Ngamprong, terdapat sebuah sungai yang mengalir dan biasa disebut sebagai Sungai Lajing.
        "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
