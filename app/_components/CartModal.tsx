"use client";
import { useModalStore } from "@/app/store/modalStore";
import toast from "react-hot-toast";
import { useState } from "react";

export default function CartModal() {
  const { isModalOpen, closeModal } = useModalStore();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address) {
      toast.error("Iltimos, barcha majburiy maydonlarni toʻldiring!");
      return;
    }

    toast.success("Buyurtma muvaffaqiyatli yuborildi!");
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl space-y-4 w-full max-w-md">
        <p className="text-xl font-bold mb-4 text-center">
          Buyurtma Berish Maʻlumotlarini Kiriting
        </p>
        <div>
          <p>Ism va familiya</p>
          <input
            type="text"
            name="name"
            placeholder="Ism va familiyangizni kiriting..."
            value={form.name}
            onChange={handleChange}
            className="w-full mb-2 border p-2 rounded"
          />
        </div>
        <div>
          <p>Telefon raqam</p>
          <input
            type="text"
            name="phone"
            placeholder="Telefon raqamingizni kiriting..."
            value={form.phone}
            onChange={handleChange}
            className="w-full mb-2 border p-2 rounded"
          />
        </div>
        <p>Manzil</p>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Manzilingizni kiriting..."
            value={form.address}
            onChange={handleChange}
            className="w-full mb-2 border p-2 rounded"
          />
        </div>
        <div>
          <p>Xabar</p>
          <textarea
            name="message"
            placeholder="Qo‘shimcha ma’lumot yoki talablaringizni yozing"
            value={form.message}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-900 text-white w-full py-2 rounded hover:bg-green-950"
        >
          Yuborish
        </button>
        <button
          onClick={closeModal}
          className="mt-2 text-center text-red-500 underline w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
