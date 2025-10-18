"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import clsx from "clsx";

interface MenuProps {
  menuActivo: boolean;
  handleMenu: React.MouseEventHandler<HTMLParagraphElement>;
  setMenuActivo: React.Dispatch<boolean>;
}

export default function Navbar({
  menuActivo,
  handleMenu,
  setMenuActivo,
}: MenuProps) {
  return (
    <nav className="bg-[#F1F5F9]  flex justify-between px-4 items-center p-4 transition-all mb-1 h-20 relative">
      <div className="text-4xl">Logo</div>

      <div className="md:hidden">
        <div
          onClick={handleMenu}
          className="cursor-pointer  font-thin md:hidden"
        >
          {menuActivo ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </div>

        {menuActivo ? (
          <ul
            className={clsx(
              "flex-col justify-center absolute left-0 top-6/6 w-full items-center border-t border-b border-zinc-300 bg-[#F1F5F9] transition-all duration-500 ease-in-out",
              menuActivo ? "flex" : "hidden"
            )}
          >
            <li className="border-b flex justify-center border-zinc-300 w-full text-center">
              <Link href="/" className="p-2 w-full" onClick={() => setMenuActivo(false)}>
                Home
              </Link>
            </li>
            <li className="border-b flex justify-center border-zinc-300 w-full text-center">
              <Link href="/sobre" className="p-2 w-full" onClick={() => setMenuActivo(false)}>
                Sobre
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>

      <ul
        className={
          "hidden md:flex gap-4 bg-[#F1F5F9] font-medium text-xl"
        }
      >
        <li className="text-center border border-zinc-300 rounded-md hover:bg-[#eceef0] transition duration-250 ease-in-out">
          <Link href="/" className="flex justify-center items-center py-2 px-4 curosr-pointer" onClick={() => setMenuActivo(false)}>
            Home
          </Link>
        </li>
        <li className="text-center border border-zinc-300 rounded-md hover:bg-[#eceef0] transition duration-250 ease-in-out">
          <Link href="/sobre" className="flex justify-center items-center py-2 px-4 curosr-pointer" onClick={() => setMenuActivo(false)}>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
