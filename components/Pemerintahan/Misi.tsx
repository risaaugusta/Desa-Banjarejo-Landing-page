import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Misi = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-36">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Misi"
                paragraph="Untuk meraih Visi Desa Banjarejo seperti yang sudah dijabarkan sebelumnya, dengan mempertimbangan potensi dan hambatan baik internal maupun eksternal, maka disusunlah Misi Desa Banjarejo sebagai berikut:"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                 <div className="w-full px-3 lg:w-full ">
                    <List text="Mewujudkan dan mengembangkan kegiatan keagamaan untuk menambah keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa serta menciptakan kesalehan sosial dalam masyarakat" />
                    <List text="Mewujudkan dan mendorong terjadinya usaha-usaha kerukunan antar dan intern warga masyarakat yang disebabkan karena adanya perbedaan agama, keyakinan, organisasi, dan lainnya dalam suasana saling menghargai dan menghormati" />
                    <List text="Mewujudkan Pemerintahan Desa yang bersih dan bebas dari Kolusi, Korupsi dan Nepotisme (KKN)" />
                    <List text="Membangun dan meningkatkan pertanian dengan jalan penataan pengairan, perbaikan jalan sawah/jalan usaha tani, pemupukan, dan pola tanam yang baik" /> 
                    <List text="Menata Pemerintahan Desa Banjarejo yang kompak dan  bertanggung jawab dalam mengemban amanat masyarakat" /> 
                    <List text="Meningkatkan pelayanan masyarakat secara terpadu dan serius" /> 
                    <List text="Mewujudkan pembangunan desa yang merata dengan menitik beratkan pada skala prioritas" /> 
                    <List text="Menumbuh Kembangkan Kelompok Tani dan Gabungan Kelompok Tani serta bekerja sama denga HIPPA untuk memfasilitasi kebutuhan Petani karena 85 % perekonomian Desa Banjarejo digerakkan oleh sektor pertanian" /> 
                    <List text="Menumbuhkembangkan usaha kecil dan menengah" /> 
                    <List text="Bekerjasama dengan Dinas Pertanian dalam rangka peningkatan produktifitas pertanian" />
                    <List text="" />
                     
                  </div>
                
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Misi;
