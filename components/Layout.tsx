"use client";

import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuActivo, setMenuActivo] = useState<boolean>(false);

  useEffect(() => {
    setMenuActivo(false);
  }, []);

    
  function handleMenu() {
    setMenuActivo(!menuActivo);
  }

  return (
    <>
      <Navbar menuActivo={menuActivo} handleMenu={handleMenu} setMenuActivo={setMenuActivo}/>
      <main className="min-h-[20em]" onClick={() => setMenuActivo(false)}>{children}</main>
      <Footer setMenuActivo={setMenuActivo}/>
    </>
  );
}
