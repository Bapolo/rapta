"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuActivo, setMenuActivo] = useState<boolean>(false);

  function handleMenu() {
    setMenuActivo(!menuActivo)
  }

  useEffect(() => {
    setMenuActivo(false)
  },[])

  return (
    <nav className="bg-[#F1F5F9] relative flex justify-between px-4 items-center p-4 transition-all mb-1 h-25">
      <div className="text-4xl">Logo</div>
      <div>
        <p onClick={handleMenu} className="cursor-pointer  font-thin">
          {menuActivo ?  <FaTimes className="text-3xl" /> : <FaBars className="text-3xl"/>}
        </p>
        <ul className="bg-[#F1F5F9] flex flex-col gap-3.5 left-0 top-25 absolute w-full justify-center items-center border-t border-zinc-500">
          {menuActivo ? (
            <>
              <li className="p-2">
                <Link href="/">Home</Link>
              </li>
              <li className="p-2">
                <Link href="/sobre">Sobre</Link>
              </li>
            </>
          ): ""}
        </ul>
      </div>
    </nav>
  );
}
