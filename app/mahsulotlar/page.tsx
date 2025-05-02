"use client";

import { useEffect, useState } from "react";
import useProductStore from "../store/useStoreProduct";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductsProps {
  selectedCategory: number | null;
}

const Products = ({ selectedCategory }: ProductsProps) => {
  const { products, fetchProducts } = useProductStore((state) => state);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await fetchProducts();
      setLoading(false);
    };
    loadProducts();
  }, [fetchProducts]);

  if (loading) return <p className="text-center p-4">Yuklanmoqda...</p>;

  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.length === 0) {
      cart.push({ ...product, quantity: 1 });
    } else {
      const existingProduct = cart.find((item: any) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category_id === selectedCategory)
    : products;

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 20);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 w-full">
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <div className="relative h-60 bg-gray-100">
              <Link href={`/mahsulotlar/${product.id}`}>
                <img
                  src={`https://api.piknicuz.com/api/uploads/images/${product.image_src}`}
                  alt={String(product.name)}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            <div className="p-4 bg-white rounded-b-lg">
              <h2 className="text-xl font-semibold text-gray-900">
                {product.title}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <p className="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</p>
                  <p>5.0/5</p>
                </div>
                <div
                  className="bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart size={20} className="cursor-pointer" />
                </div>
              </div>
              <p className="text-xl font-bold text-[#000000]">
                {new Intl.NumberFormat("ru-RU").format(product.price)} UZS
              </p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredProducts.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 mb-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition "
        >
          Hammasini ko‘rish
        </button>
      )}
    </div>
  );
};

export default Products;
