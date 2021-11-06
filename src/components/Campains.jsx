import Slider from "react-slick";
import Banners from "api/banners.json";

import { useState, useEffect } from "react/cjs/react.development";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Title from "./ui/Title";

function NextButton({ className, onClick }) {
  return (
    <button
      className={`text-brand-color z-10 absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevButton({ className, onClick }) {
  return (
    <button
      className={`text-brand-color z-10 absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

export default function Campains() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    setBanner(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "ease",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:py-6">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Slider className="md:-mx-2" {...settings}>
        {banner.length &&
          banner.map((banner, index) => (
            <div key={banner.id}>
              <figure className="block md:px-2">
                <img
                  src={banner.image}
                  className="md:rounded-lg"
                  alt="Kampanya Afişi"
                />
              </figure>
            </div>
          ))}
      </Slider>
    </div>
  );
}
