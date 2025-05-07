"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import useProductStore from "./store/useStoreProduct";

export default function Header() {
  const pathname = usePathname();
  const { searchTerm, setSearchTerm, fetchProducts, cartItems } =
    useProductStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    fetchProducts(term);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <Link style={{ textDecoration: "none" }} href="/">
          <Image
            className="rounded-[50%]"
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>

        <div className="hidden md:flex gap-4">
          <Link
            style={{ textDecoration: "none" }}
            href="/"
            className={`${
              pathname === "/" ? "text-green-600 font-semibold" : "text-black"
            }`}
          >
            Bosh sahifa
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/mahsulotlar"
            className={`${
              pathname === "/mahsulotlar"
                ? "text-green-600 font-semibold"
                : "text-black"
            }`}
          >
            Mahsulotlar
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/aloqa"
            className={`${
              pathname === "/aloqa"
                ? "text-green-600 font-semibold"
                : "text-black"
            }`}
          >
            Aloqa
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="/blog"
            className={`${
              pathname === "/blog"
                ? "text-green-600 font-semibold"
                : "text-black"
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1"
          >
            <CiSearch size={24} />
            <input
              type="text"
              placeholder="Qidiruv..."
              className="border-0 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          <div className="relative">
            <Link href="/cart">
              <BsCart2 size={26} className="text-gray-600" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <GiHamburgerMenu size={26} />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300"></div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 mt-2 space-y-2">
          <Link className="block text-black" href="/">
            Bosh sahifa
          </Link>
          <Link className="block text-black" href="/mahsulotlar">
            Mahsulotlar
          </Link>
          <Link className="block text-black" href="/aloqa">
            Aloqa
          </Link>
          <Link className="block text-black" href="/blog">
            Blog
          </Link>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 mt-2"
          >
            <CiSearch size={24} />
            <input
              type="text"
              placeholder="Qidiruv..."
              className="border-0 w-full focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      )}
    </div>
  );
}
