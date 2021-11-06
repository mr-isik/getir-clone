import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

import { FaFacebook } from "react-icons/fa";

import { useWindowWidth } from "@react-hook/window-size";

export default function HeroSection() {

  const windowWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="before:bg-gradient-to-r relative h-auto md:h-[500px] before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {/* Slider */}
      {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="Getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt="Getir"
          />
        </div>
      </Slider>
}
      {/* Main Container */}
      <div className="md:container flex items-center justify-between relative md:absolute left-0 top-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden sm:block">
          {/* Brand */}
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Getir"
          />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>

        {/* Login or Signup */}
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-bold mb-4">
            Giriş Yap veya Kayıt Ol
          </h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  type="text"
                  className="h-14 px-4 border-2 peer border-gray-200 rounded w-full text-sm pt-2 transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none"
                />
                <span className="absolute cursor-text top-0 left-0 h-full px-4 flex items-center text-gray-500 text-sm peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:text-primary-brand-color peer-valid:text-xs peer-valid:h-7 ">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12 flex transition-colors hover:bg-primary-brand-color hover:text-brand-yellow items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
              Telefon Numarası ile Devam Et
            </button>
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <button className="bg-blue-100 h-12 flex transition-colors hover:bg-blue-600 hover:text-blue-100 items-center justify-center rounded-md w-full text-sm font-semibold text-blue-600">
              <FaFacebook size={18} className="mr-4" /> Facebook ile Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
