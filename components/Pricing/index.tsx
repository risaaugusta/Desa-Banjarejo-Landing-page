"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Kelembagaan Desa"
          // paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          paragraph=""
          center
          width="665px"
        />
 

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price='PKK (Pemberdayaan dan Kesejahteraan Keluarga)'
            duration=''
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="menggali, menggerakkan dan mengembangkan potensi masyarakat." status="active" /> 
            <OfferList text="menyuluh dan menggerakkan kelompok-kelompok PKK Dusun, RW, RT, dan dasa wisma" status="active" /> 
            <OfferList text="fasilitator, perencana, pelaksana, pengendali, pembina, dan pembombing Gerakan PKK" status="active" /> 
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price='Posyandu Balita'
            duration=''
            subtitle=""
          
          >            
            <OfferList text="terdapat 7 posko Posyandu Balita" status="active" /> 
            <OfferList text="Imunisasi untuk membentuk kekebalan imunitas pada anak balita" status="active" />
            <OfferList text="mencegah dan mengatasi masalah gizi buruk serta menekan angka kematian balita.
            " status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price='Posyandu Lansia'
            duration=''
            subtitle=""
          
          >
            <OfferList text="terdapat 7 posko Posyandu Lansia" status="active" />
            <OfferList text="Pelayanan kesehatan tiap bulan, seperti Pemeriksaan fisik" status="active" /> 
            <OfferList text="Penyuluhan kesehatan, seperti penyuluhan gizi, penyakit dan lainnya terkait dengan kesehatan lansia." status="active" /> 
            <OfferList text="Kegiatan Olah Raga seperti jalan sehat dan senam lansia." status="active" /> 
            <OfferList text="Kegiatan Non Kesehatan untuk meningkatkan interaksi sosial." status="active" /> 
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price='Kelompok Tani'
            duration=''
            subtitle=""
          >
            <OfferList text="Kegiatan pelatihan bagi petani untuk meningkatkan kualitas dan kuantitas hasil panen" status="active" />
            <OfferList text='Kelompok Tani "Banjar Tani I" terletak di Dusun Krajan' status="active" />
            <OfferList text='Kelompok Tani "Banjar Tani II" terletak di Dusun Ngamprong' status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price='Karang Taruna "Adinata"'
            duration=''
            subtitle=""
          >
            <OfferList text="Kegiatan pemuda-pemuda Desa Banjarejo " status="active" />
            <OfferList text="mengembangkan potensi generasi muda dan masyarakat" status="active" />
            <OfferList text="pencegahan dan penanggulangan permasalahan sosial" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price='Gapoktan "Banjar Tani"'
            duration=''
            subtitle=""
          >
            <OfferList text="Gabungan Kelompok Tani seluruh Desa Banjarejo" status="active" />
            <OfferList text="Penyediaan modal usaha dan menyalurkannya secara kredit /pinjaman kepada para petani " status="active" />
            <OfferList text="Melakukan proses pengolahan produk para anggota" status="active" />
            <OfferList text="Menyelenggarakan perdagangan, memasarkan/menjual produk petani kepada pedagang/industri" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price='LPMD'
            duration=''
            subtitle=""
          >
            <OfferList text="Lembaga Pemberdayaan Masyarakat Desa" status="active" /> 
            <OfferList text="Mengendalikan pembangunan desa" status="active" />
            <OfferList text="Menggerakkan swadaya gotong royong masyarakat" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price='Koperasi Wanita "Dewi-Dewi'
            duration=''
            subtitle=""
          >
            <OfferList text="Memenuhi kebutuhan hidup kaum perempuan " status="active" />
            <OfferList text="Menjadi wadah untuk memberdayakan perempuan" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
