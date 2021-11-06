export default function MobileApp() {
  return (
    <div className="bg-primary-brand-color bg-mobile-app flex flex-col md:flex-row justify-between pt-8 items-center rounded-lg text-white">
      <div className="p-10">
        <h3 className="font-bold text-2xl">Getir'i İndirin</h3>
        <p className="font-semibold text-lg mt-3">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br className="hidden md:block" /> getirelim.
        </p>
        <nav className="flex flex-wrap md:flex-nowrap gap-3 pt-8">
          <a href="/" className="transform hover:scale-105 transition-transform">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="App Store"
            />
          </a>
          <a href="/" className="transform hover:scale-105 transition-transform">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="Google Play"
            />
          </a>
          <a href="/" className="transform hover:scale-105 transition-transform">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="App Gallery"
            />
          </a>
        </nav>
      </div>
      <figure>
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt="Getir Mobil Uygulaması"
        />
      </figure>
    </div>
  );
}
