'use client'

import CardArtigo from "./CardArtigos"
import { redirect } from "next/navigation"

export default function Artigos() {
    return (
        <section className="p-4 mt-25 flex flex-col justify-center items-center gap-5">
            <h2 className="text-5xl text-center text-gray-700 underline mb-10">Artigos</h2>

            <ul className="flex gap-8 items-center justify-start  overflow-x-auto mb-10 w-full scroll-smooth xl:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <li><CardArtigo image="/images/artigos/artigo4.jpg"/></li>
                <li><CardArtigo image="/images/artigos/artigo4.jpg"/></li>
                <li><CardArtigo image="/images/artigos/artigo4.jpg"/></li>
                <li><CardArtigo image="/images/artigos/artigo4.jpg"/></li>
            </ul>
            
            <button className="text-2xl underline cursor-pointer" onClick={() => redirect('/')}>ver mais</button>
        </section>
    )
}