"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Question from "./_components/question";
import Products from "./mahsulotlar/page";

export default function Home() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.piknicuz.com/api/categories");
        const result = await response.json();
        console.log(result);
        setCategories(result.data);
      } catch (error) {
        console.error("Kategoriyalarni olib kelishda xatolik:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {/* Banner qismi */}
      <div className="zor container max-w-[1240px] mt-[80px] md:mt-[148px] mb-20 md:mb-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0">
        {/* Chap qism */}
        <div className="chap w-full md:w-[596px] h-auto md:h-[463px] flex flex-col justify-between">
          <div>
            <p className="text-4xl md:text-6xl font-bold md:!text-left text-center">
              Zoʻr jihozlar bilan sarguzashtlarni kashf eting
            </p>
            <p className="text-gray-400 mt-4 mb-8 md:mb-10 text-center md:!text-left text-sm md:text-base">
              Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli
              jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay
              lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish
              uchun.
            </p>
          </div>

          <div className="flex flex-col  md:!items-start md:justify-start">
            <div className="cursor-pointer flex justify-center mb-6 md:mb-10 bg-green-900 rounded-[60px] text-white items-center w-[210px] h-[52px] mx-auto md:!mx-0">
              Xarid qiling
            </div>

            <div className="flex gap-6 md:gap-4 justify-center md:justify-start">
              <div className="p-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold">
                  200 <span className="text-green-800">+</span>
                </h2>
                <p className="text-xs text-gray-400">Xalqaro Brendlar</p>
              </div>
              <div className="p-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold">
                  2,000 <span className="text-green-800">+</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Yuqori Sifatli Mahsulotlar
                </p>
              </div>
              <div className="p-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold">
                  30,000 <span className="text-green-800">+</span>
                </h2>
                <p className="text-xs text-gray-400">Baxtli mijoz</p>
              </div>
            </div>
          </div>
        </div>

        {/* O'ng qism */}
        <div className="o'ng w-full md:w-[596px] flex justify-center md:justify-end">
          <Image
            src="/sarguzasht.png"
            alt="img"
            width={614}
            height={463}
            className="w-full max-w-[400px] md:max-w-[614px] h-auto"
          />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mb-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Kategoriya va Mahsulotlar
        </h1>

        <div className="flex overflow-x-scroll gap-4 mb-10 px-2 scrollbar-none">
          <div
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center min-w-[100px] h-[80px] bg-[#F1F1F1] hover:bg-green-100 hover:border hover:border-green-500 rounded-lg p-2 text-center cursor-pointer transition-all duration-300 ${
              selectedCategory === null
                ? "bg-green-100 border border-green-500"
                : ""
            }`}
          >
            <div className="flex items-center min-w-[100px] gap-2 h-[80px] mx-auto">
              <p className="text-xs sm:text-sm font-medium">Barchasi</p>
            </div>
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] h-[80px] sm:h-[90px] md:h-[100px] bg-[#F1F1F1] hover:bg-green-100 hover:border hover:border-green-500 rounded-lg p-2 sm:p-4 text-center cursor-pointer transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-green-100 border border-green-500"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 mx-auto">
                <Image
                  src={`https://api.piknicuz.com/api/uploads/images/${category.image_src}`}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="sm:w-[50px] sm:h-[50px]"
                />
                <p className="text-xs sm:text-sm font-medium">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="products">
          <Products selectedCategory={selectedCategory} />
        </div>
      </div>

      <Question />
    </div>
  );
}
