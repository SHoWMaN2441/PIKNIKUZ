"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useProductStore, { Product } from "../../store/useStoreProduct";

export type Cart = {
  product: Product;
  id: string;
  quantity: number;
};

const ProductDetailClient = () => {
  const { id } = useParams();
  const { products, fetchProducts } = useProductStore((state) => state);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const loadProduct = async () => {
      if (products.length === 0) {
        await fetchProducts();
      }
    };
    loadProduct();
  }, [fetchProducts, products.length]);

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find((item) => item.id === id);
      setProduct(foundProduct!);
      setLoading(false);
    }
  }, [id, products]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = (product: Product) => {
    const productData = {
      id: product.id,
      title: product.title,
      image_src: product.image_src,
      price: product.price,
      description: product.description,
      category: product.category_id,
      quantity,
    };

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex(
      (item: Cart) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push(productData);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loading) return <div className="p-4 text-center">Yuklanmoqda...</div>;

  if (!product)
    return <div className="p-4 text-center">Mahsulot topilmadi...</div>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col sm:flex-row md:flex-row gap-4 md:min-w-[700px]">
            {product.product_images && product.product_images.length > 0 && (
              <div className="flex sm:flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto scrollbar-none md:min-w-[150px] md:h-[500px]">
                <div className="flex sm:flex-row md:flex-col gap-4">
                  {product.product_images.map((img) => {
                    const imageUrl = `https://api.piknicuz.com/api/uploads/images/${img.images_src}`;
                    const isSelected = selectedImage === imageUrl;

                    return (
                      <img
                        key={img.id}
                        src={imageUrl}
                        alt="Extra"
                        onClick={() => setSelectedImage(imageUrl)}
                        className={`h-24 w-full object-contain rounded-lg border transition-transform duration-300 cursor-pointer
                      ${
                        isSelected
                          ? "border-4 border-blue-600"
                          : "border-green-300 hover:border-blue-400"
                      }
                    `}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            <div className="bg-gray-100 rounded-lg p-4 border-2 shadow-lg flex-1">
              <img
                src={
                  selectedImage
                    ? selectedImage
                    : `https://api.piknicuz.com/api/uploads/images/${product.image_src}`
                }
                alt={product.title}
                className="w-full h-[500px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-2xl text-green-600 font-semibold mb-4">
            {Number(product.price).toLocaleString()} UZS
          </p>

          {product.category_id && (
            <p className="text-md text-gray-500 mb-2">
              Kategoriya:{" "}
              <span className="font-medium text-gray-800">
                {product.category.name}
              </span>
            </p>
          )}

          <div
            className="prose max-w-full mt-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <div className="flex items-center gap-4 mt-6 mb-5">
            <button
              onClick={handleDecrement}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-xl"
            >
              -
            </button>
            <p className="w-10 text-center flex items-center mt-3 justify-center border rounded py-2">
              {quantity}
            </p>
            <button
              onClick={handleIncrement}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-success text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {product.video_src && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Mahsulot Videosi</h2>
          <video
            controls
            src={`https://api.piknicuz.com/api/uploads/images/${product.video_src}`}
            className="w-full rounded-lg md:h-[650px] h-[300px] "
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailClient;
