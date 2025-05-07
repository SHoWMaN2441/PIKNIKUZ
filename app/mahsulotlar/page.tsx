"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Products from "../_components/Products";
type Category = {
  id: string;
  name: string;
  image_src: string;
};

const Products123 = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
    <div className="max-w-[1240px] mx-auto mb-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Kategoriya va Mahsulotlar
      </h1>

      <div className="flex overflow-x-scroll gap-4 mb-10 px-2 scrollbar-none">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              if (selectedCategory === category.id) {
                setSelectedCategory(null);
              } else {
                setSelectedCategory(category.id);
              }
            }}
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
              <p className="text-xs sm:text-sm font-medium">{category.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="products">
        <Products selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Products123;
