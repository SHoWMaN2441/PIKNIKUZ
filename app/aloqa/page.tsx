"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Page = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.firstName || !form.lastName || !form.email) {
      toast.error("Iltimos, barcha majburiy maydonlarni toʻldiring!");
      return;
    }
    toast.success("Xabar muvaffaqiyatli yuborildi!");
    console.log("Yuborilgan maʻlumot:", form);
  };

  return (
    <div>
      {/* Header image section */}
      <div className="relative bg-[url('/bizbilanboglaning.png')] bg-cover bg-no-repeat bg-center h-[300px] md:h-[463px] flex items-center">
        <div className="container">
          <h1 className="absolute top-1/2 left-5 ml-[120px] transform -translate-y-1/2 text-white text-2xl md:text-4xl font-bold hidden md:block">
            Biz bilan bogʻlaning
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto my-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#002f6c] leading-snug mb-4">
            Keling, biz bilan <br className="hidden sm:block" /> gaplashaylik
          </h1>
          <p className="text-gray-600 mb-6">
            Savollar, sharhlar yoki takliflar? Shaklni toʻldiring va biz tez
            orada bogʻlanamiz.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-green-600 text-xl mt-1" />
              <span>
                1055 Arthur ave Elk Groot, 67, New Palmas South Carolina.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MdPhone className="text-green-600 text-xl mt-1" />
              <span>+1 234 678 910 99</span>
            </div>
            <div className="flex items-start gap-3">
              <MdEmail className="text-green-600 text-xl mt-1" />
              <span>Contact@morcalizer.com</span>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="bg-white shadow-md p-6 md:p-8 rounded-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            style={{ borderRadius: "50px" }}
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white w-full py-3 font-semibold"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
