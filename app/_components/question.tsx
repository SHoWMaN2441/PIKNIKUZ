import React from "react";

export default function Question() {
  const question = [
    {
      title: "Mahsulotlarni qanday buyurtma qilsa bo`ladi?",
      description:
        "Siz tanlagan mahsulotni savatchaga qo`shib, to`lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay.",
    },
    {
      title: "Toʻlov usullari qanday?",
      description:
        "Toʻlov qilish jarayoni butunlay xavfsiz boʻlib, barcha maʻlumotlar shifrlanadi va maxfiyligi taʻminlanadi. Agar sizda toʻlov bilan bogʻliq har qanday savollar yoki muammolar boʻlsa, mijozlarga xizmat koʻrsatish boʻlimi bilan bogʻlanishingiz mumkin.",
    },
    {
      title: "Yetkazib berish qancha vaqt oladi?",
      description:
        "Standart Yetkazib Berish - 3-5 ish kuni. Tezkor Yetkazib Berish - 1-2 ish kuni (qoʻshimcha toʻlov bilan).",
    },
    {
      title: "Mahsulotlarni qaytarish mumkinmi?",
      description:
        "Siz sotib olgan mahsulotni 14 kun ichida, shartlar va qoidalar asosida qaytarishingiz mumkin. Mahsulot qaytarilishi uchun original holatda va yorliqlarni saqlagan holda boʻlishi kerak. Mahsulot qaytarish jarayonini boshlash uchun mijozlarga xizmat koʻrsatish boʻlimi bilan bogʻlaning.",
    },
    {
      title: "Mahsulotlar kafolatlanganmi?",
      description:
        "Ha, barcha mahsulotlarimiz kafolatlangan. Agar mahsulotda ishlab chiqarish xatoliklari yoki nuqsonlar boʻlsa, kafolat muddati davomida mahsulotni qaytarish yoki almashtirish mumkin. Kafolat shartlari haqida batafsil maʻlumot olish uchun mijozlarga xizmat koʻrsatish boʻlimi bilan bogʻlaning.",
    },
    {
      title: "Sayohat mahsulotlarini tanlashda yordam bera olasizmi?",
      description:
        "Sayohat turi: Agar siz sayohatingizni ish uchun, dam olish uchun yoki aventurist sifatida qilmoqchi boʻlsangiz, mahsulotlar turini shunga mos ravishda tanlang (masalan, yengil ruxsatnoma, yashash uchun asbob-uskunalar, trekking uskunalari, va boshqalar).",
    },
    {
      title: "Yetkazib berish narxi qancha turadi?",
      description:
        "Yetkazib berish narxi buyurtmaning ogʻirligi, hajmi va manzilingizga qarab farq qiladi. Standart yetkazib berish uchun narxlarni mahsulotni tanlaganingizda avtomatik ravishda koʻrishingiz mumkin. Shuningdek, tezkor yetkazib berish yoki xalqaro yetkazib berish uchun qoʻshimcha xarajatlar boʻlishi mumkin.",
    },
    {
      title: "Agar buyurtma noto`g`ri kelsa, nima qilish kerak?",
      description:
        "Agar sizning buyurtmangiz noto`g`ri kelsa, iltimos, 14 kun ichida mijozlarga xizmat koʻrsatish boʻlimiga murojaat qiling. Biz sizga mahsulotni almashtirish yoki qaytarish bo`yicha yordam beramiz. Mahsulotni original holatda, yorliqlar va paket bilan qaytarishingiz kerak. Savollar yoki yordam uchun biz bilan bog`laning.",
    },
    {
      title: "Mahsulotlarni ko`rish uchun oflayn do`koningiz bormi?",
      description:
        "Ha, bizda oflayn do`kon mavjud. Mahsulotlarimizni ko`rish va sinash uchun do`konimizga tashrif buyurishingiz mumkin. Do`kon manzili va ish vaqti haqida batafsil maʻlumotni saytimizda topishingiz mumkin. Agar qoʻshimcha savollar boʻlsa, biz bilan bogʻlaning.",
    },
    {
      title: "Saytingizda qanday mahsulotlarni topish mumkin?",
      description:
        "Har bir kategoriyada eng so`nggi va sifatli mahsulotlar mavjud. Sizning ehtiyojlaringizga mos mahsulotlarni osongina topishingiz mumkin.",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto mt-[50px] mb-[50px] px-4">
      <p className="text-center text-[36px] font-bold mb-10">
        Tez-tez beriladigan savollar
      </p>
      <div className="max-w-[792px] mx-auto space-y-4">
        {question.map((ques, ind) => (
          <div
            key={ind}
            className="border rounded-lg bg-gray-100 overflow-hidden relative"
          >
            <input
              type="checkbox"
              id={`accordion_${ind}`}
              className="peer hidden "
            />
            <label
              htmlFor={`accordion_${ind}`}
              className="flex items-center cursor-pointer p-4 font-semibold text-lg"
            >
              <span className="flex-1">{ques.title}</span>
              <span className="absolute right-2 peer-checked:hidden">+</span>
            </label>

            <div className="max-h-0 peer-checked:max-h-[500px] overflow-hidden transition-all duration-500 bg-white px-4 text-gray-700">
              {ques.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
