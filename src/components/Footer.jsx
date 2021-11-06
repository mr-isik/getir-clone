import { BsDot, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Menu from "components/ui/Menu";

export default function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kullanım Şartları",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "İletişim",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Kurumsal",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Bilgi Bankası",
        },
        {
          title: "İletişim",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Kurumsal",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Bilgi Bankası",
        },
        {
          title: "İletişim",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white pt-12 mt-16">
      <div className="container mx-auto px-4 md:px-0">
        {/* Footer Top */}
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <section>
            <h4 className="mb-4 text-primary-brand-color font-normal text-lg">
              Getir'i Keşfedin
            </h4>
            <nav className="flex gap-y-3 flex-col">
              <a
                href="/"
                className="transform inline-block hover:scale-105 transition-transform"
              >
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </a>
              <a
                href="/"
                className="transform inline-block hover:scale-105 transition-transform"
              >
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="Google Play"
                />
              </a>
              <a
                href="/"
                className="transform inline-block hover:scale-105 transition-transform"
              > 
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="App Gallery"
                />
              </a>
            </nav>
          </section>

          {menus.map((menu, index) => (
            <Menu {...menu} key={index} />
          ))}
        </div>

        {/* Footer Alt */}
        <div className="w-full mt-6 pt-6 pb-8 border-t border-purple-50 flex flex-col md:flex-row gap-y-4 justify-between items-center">
          <div className="flex items-center">
            <p className="text-sm font-normal text-gray-500">
              &copy; 2021 Getir
            </p>
            <BsDot className="text-gray-600 mx-2" />
            <a href="/" className="text-sm font-weight-normal text-brand-color">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>

          {/* Social & Language */}
          <div className="flex gap-x-4 md:gap-x-6 items-center">
            <a
              href="/"
              className="text-gray-500 transition-colors hover:text-primary-brand-color p-2 rounded-md hover:bg-purple-100"
            >
              <BsFacebook size={22} />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors hover:text-primary-brand-color p-2 rounded-md hover:bg-purple-100"
            >
              <BsTwitter size={22} />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors hover:text-primary-brand-color p-2 rounded-md hover:bg-purple-100"
            >
              <BsInstagram size={22} />
            </a>
            <button className="border gap-x-2 flex text-sm text-gray-500 transition-colors hover:text-primary-brand-color border-gray-200 rounded-md p-2 hover:bg-purple-100">
              <HiOutlineGlobeAlt size={20} />
              Türkçe (TR)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
