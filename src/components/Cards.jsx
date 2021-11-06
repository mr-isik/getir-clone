export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
      <div className="rounded-lg shadow-md bg-white py-16 px-8 md:px-12 text-center flex items-center justify-center flex-col">
        <img
          src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
          alt="Getir Kart İkonu"
        />
        <h3 className="text-brand-color font-semibold text-xl mt-6">
          Her siparişinize bir kampanya
        </h3>
        <p className="mt-2 text-gray-500 font-normal text-md">
          Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
        </p>
      </div>
      <div className="rounded-lg shadow-md bg-white py-16 px-8 md:px-12 text-center flex items-center justify-center flex-col">
        <img
          src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
          alt="Getir Kart İkonu"
        />
        <h3 className="text-brand-color font-semibold text-xl mt-6">
          Dakikalar içinde kapınızda
        </h3>
        <p className="mt-2 text-gray-500 font-normal text-md">
          Getir’le siparişiniz dakikalar içinde kapınıza gelir.
        </p>
      </div>
      <div className="rounded-lg shadow-md bg-white py-16 px-8 md:px-12 text-center flex items-center justify-center flex-col">
        <img
          src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
          alt="Getir Kart İkonu"
        />
        <h3 className="text-brand-color font-semibold text-xl mt-6">
          Binlerce çeşit mutluluk
        </h3>
        <p className="mt-2 text-gray-500 font-normal text-md">
          Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
        </p>
      </div>
    </div>
  );
}
