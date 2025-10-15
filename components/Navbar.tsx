"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import clsx from "clsx";

interface MenuProps {
  menuActivo: boolean;
  handleMenu: any;
}

export default function Navbar({ menuActivo, handleMenu }: MenuProps) {
  return (
    <nav className="bg-[#F1F5F9]  flex justify-between px-4 items-center p-4 transition-all mb-1 h-20 relative">
      <div className="text-4xl">Logo</div>
      <div>
        <p onClick={handleMenu} className="cursor-pointer  font-thin">
          {menuActivo ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </p>

        <ul
          className={clsx(
            "absolute left-0 top-20 w-full flex-col gap-3.5 justify-center items-center border-t border-zinc-500 bg-[#F1F5F9] transition-all duration-500 ease-in-out",
            menuActivo
              ? "opacity-100 translate-y-0 pointer-events-auto flex"
              : "opacity-0 pointer-events-none"
          )}
        >
          {menuActivo ? (
            <>
              <li className="p-2">
                <Link href="/">Home</Link>
              </li>
              <li className="p-2">
                <Link href="/sobre">Sobre</Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
}
