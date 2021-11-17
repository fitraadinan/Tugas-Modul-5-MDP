import { Fragment } from "react";
import "./Profile.css";
import CardProfile from '../component/CardProfile'

export default function Profile() {

  const data = [
    {
      nama: "Rahmadien Akbariza Syifa Ul Haq",
      id: 1,
      nim:"21120119140144",
      about: "Saya mahasiswa Jurusan Teknik Komputer, Fakultas Teknik, Universitas Diponegoro. Saya sedang mengikuti Praktikum MDP 2021.",
      univ: "Universitas Diponegoro",
      img: "https://cdn.pixabay.com/photo/2017/07/28/13/51/grape-2548692_960_720.png",
      ig: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",
      git: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      wa: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png",
      mail: "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png",
      in: "https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
    },
    {
      nama: "Elvitro Gumelar Agung",
      id: 2,
      nim:"21120117140022",
      about: "Saya mahasiswa Jurusan Teknik Komputer, Fakultas Teknik, Universitas Diponegoro. Saya sedang mengikuti Praktikum MDP 2021.",
      univ: "Universitas Diponegoro",
      img: "https://img.pikbest.com/png-images/qiantu/food-element-hand-drawn-cute-cartoon-fruit-strawberry_2551903.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024",
      ig: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",
      git: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      wa: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png",
      mail: "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png",
      in: "https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
    },
    {
      nama: "Hajime Yudha Iqbal Pranata",
      id: 3,
      nim:"21120119120017",
      about: "Saya mahasiswa Jurusan Teknik Komputer, Fakultas Teknik, Universitas Diponegoro. Saya sedang mengikuti Praktikum MDP 2021.",
      univ: "Universitas Diponegoro",
      img: "https://www.kibrispdr.org/data/gambar-handuk-kartun-5.jpg",
      ig: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",
      git: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      wa: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png",
      mail: "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png",
      in: "https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
    },
    {
      nama: "Fitra Adina Nuzulia",
      id: 4,
      nim:"21120119140130",
      about: "Saya mahasiswi Jurusan Teknik Komputer, Fakultas Teknik, Universitas Diponegoro. Saya sedang mengikuti Praktikum MDP 2021.",
      univ: "Universitas Diponegoro",
      img: "https://cdn.kibrispdr.org/data/gambar-animasi-buah-mangga-0.jpg",
      ig: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",
      git: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      wa: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png",
      mail: "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png",
      in: "https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
    },
  ];

  return (
    <>
      <p id="judulprofil">Anggota Kelompok</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile
            nama={item.nama}
            img={item.img}
            nim={item.nim}
            about={item.about}
            univ={item.univ}
            ig={item.ig}
            git={item.git}
            wa={item.wa}
            mail={item.mail}
            in={item.in}
            onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}