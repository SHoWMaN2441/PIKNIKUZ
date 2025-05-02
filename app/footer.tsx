import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-green-900 mt-10">
      <div className="container flex flex-col md:flex-row justify-between items-start gap-8 md:gap-[79.5px] px-4 py-8">
        <div className="py-5 flex flex-col  md:items-start">
          <Image
            className="rounded-[50%] mb-6"
            src="/piknik.png"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="flex gap-3">
            <Image src="/twitter.png" alt="twitter" width={28} height={28} />
            <Image src="/facebook.png" alt="facebook" width={28} height={28} />
            <Image
              src="/instagramm.png"
              alt="instagram"
              width={28}
              height={28}
            />
            <Image src="/github.png" alt="github" width={28} height={28} />
          </div>
        </div>

        {/* Kompaniya */}
        <div className="py-2 md:py-5">
          <p className="text-white text-xl mb-4 text-center md:text-left">
            Kompaniya
          </p>
          <ul className="flex flex-col gap-2  md:items-start">
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Biz haqimizda
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Xususiyatlar
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Ishlash jarayoni
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Karyera imkoniyatlari
            </li>
          </ul>
        </div>

        {/* Yordam */}
        <div className="py-2 md:py-5">
          <p className="text-white text-xl mb-4 text-center md:text-left">
            Yordam
          </p>
          <ul className="flex flex-col gap-2  md:items-start">
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Mijozlarni qo‘llab-quvvatlash
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Yetkazib berish tafsilotlari
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Shartlar va qoidalar
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Maxfiylik siyosati
            </li>
          </ul>
        </div>

        {/* Savollar */}
        <div className="py-2 md:py-5">
          <p className="text-white text-xl mb-4 text-center md:text-left">
            Savollar
          </p>
          <ul className="flex flex-col gap-2  md:items-start">
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Hisob
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Yetkazib berishni boshqarish
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Buyurtmalar
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              To‘lovlar
            </li>
          </ul>
        </div>

        {/* Resurslar */}
        <div className="py-2 md:py-5">
          <p className="text-white text-xl mb-4 text-center md:text-left">
            Resurslar
          </p>
          <ul className="flex flex-col gap-2  md:items-start">
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Bepul e-kitoblar
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Dasturlash bo‘yicha qo‘llanmalar
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Qanday foydalanish - Blog
            </li>
            <li className="text-xs font-light text-slate-400 hover:cursor-pointer hover:text-gray-400">
              Youtube playlist
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
