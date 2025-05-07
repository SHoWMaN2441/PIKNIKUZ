import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "Shop.co orqali olgan jihozlarim sifati va uslubi meni hayratda qoldirdi. Kundalik foydalanishdan tortib, maxsus tadbirlar uchun hamma narsa yuqori darajada!",
  },
  {
    name: "Alex K.",
    review:
      "Shaxsiy uslubimga mos keladigan jihozlarni topish qiyin edi, lekin Shop.co bilan tanishganimdan so‘ng, barcha kerakli narsalarni bir joydan topa oldim. Ularning tanlovi ajoyib!",
  },
  {
    name: "James L.",
    review:
      "Yangi va o‘ziga xos jihozlar qidirib yurganimda Shop.co saytini topdim. Ularning assortimentlari xilma-xil va dolzarb.",
  },
  {
    name: "Maya R.",
    review:
      "Harid jarayoni juda oson va tez edi. Buyurtmam kutilganidan tez yetib keldi, mahsulot sifati ham a'lo darajada!",
  },
  {
    name: "John D.",
    review:
      "Do‘stlarim tavsiyasi bilan sinab ko‘rdim. Endi o‘zim ham boshqalarga tavsiya qilaman!",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) setSlidesPerView(3);
    else if (width >= 768) setSlidesPerView(2);
    else setSlidesPerView(1);
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Bizning mamnun mijozlarimiz
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(testimonials.length * 100) / slidesPerView}%`,
            transform: `translateX(-${
              (currentIndex * 100) / testimonials.length
            }%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`w-full px-4 flex-shrink-0`}
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="bg-white rounded-xl border shadow p-6 h-full">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 text-lg">{"★★★★★"}</div>
                </div>
                <h3 className="font-semibold flex items-center gap-1 text-base">
                  {item.name}
                  <CheckCircle className="text-green-500 w-4 h-4" />
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item.review}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
