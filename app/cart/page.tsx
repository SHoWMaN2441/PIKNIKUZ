"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CartModal from "../_components/CartModal";
import { useModalStore } from "../store/modalStore";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleIncrease = (index: number) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleDecrease = (index: number) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleDelete = (index: number) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-[1240px] mx-auto w-full min-h-[786px] px-[16px] sm:px-0">
      <CartModal />

      <h1 className="text-[36px] sm:text-left text-center font-bold text-black mt-[50px] sm:mt-[32px]">
        Sizning savatingiz
      </h1>
      <div className="max-w-[1240px] w-full flex flex-col sm:flex-row gap-[24px] sm:gap-[20px] mt-[50px] sm:mt-[45px]">
        <div className="max-w-[715px] w-full flex flex-col gap-[24px] border border-[#0000001A] rounded-[20px] items-center py-[24px] px-[16px] sm:px-[24px] sm:py-[30px]">
          {cartItems.map((item, index) => (
            <div key={index} className="max-w-[667px] w-full">
              <div className="flex gap-[16px]">
                <Link href={`/mahsulotlar/${item.id}`}>
                  <Image
                    className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
                    src={`https://api.piknicuz.com/api/uploads/images/${item.image_src}`}
                    alt={item.title}
                    width={124}
                    height={124}
                  />
                </Link>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold text-[#000000]">
                      {item.title}
                    </h1>
                    <h1 className="text-[24px] font-bold text-[#000000]">
                      {new Intl.NumberFormat("ru-RU").format(item.price)} UZS
                    </h1>{" "}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => handleDelete(index)}>
                      <MdDelete size={24} color="red" />
                    </button>
                    <div className="flex items-center bg-[#F0F0F0] rounded-[62px] px-4 py-2">
                      <FaMinus
                        className="cursor-pointer"
                        onClick={() => handleDecrease(index)}
                      />
                      <p className="px-4 mt-3">{item.quantity}</p>
                      <FaPlus
                        className="cursor-pointer"
                        onClick={() => handleIncrease(index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-full bg-[#0000001A] mt-4" />
            </div>
          ))}
        </div>

        <div className="max-w-[505px] w-full border border-[#0000001A] rounded-[20px] p-6">
          <h1 className="text-[24px] font-bold">Buyurtma xulosasi</h1>
          <div className="flex flex-col mt-6 gap-4">
            <div className="flex justify-between">
              <p className="text-[#00000099]">Oraliq jami</p>
              <p className="font-semibold">{total.toLocaleString()} UZS</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#00000099]">Chegirma (-20%)</p>
              <p className="text-[#FF3333] font-semibold">
                -{(total * 0.2).toLocaleString()} UZS
              </p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-[20px]">
              <p>Umumiy</p>
              <p>{(total * 0.8).toLocaleString()} UZS</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Promo code qoshing"
              className="w-full rounded-full px-4 py-2 bg-[#F0F0F0] text-center"
            />
            <button className="w-full bg-[#245D30] text-white rounded-full py-3">
              Tekshirish
            </button>
            <button
              onClick={() => useModalStore.getState().openModal()}
              className="w-full bg-[#245D30] text-white rounded-full py-3 mt-2 flex items-center justify-center gap-2"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
