'use client'

import Image from "next/image"
import { redirect } from "next/navigation"

interface ImageArtigo {
    image: string
}

export default function CardArtigo({image}: ImageArtigo) {
    return (
        <article className="flex flex-col items-start  gap-2 bg-[#F1F5F9] p-0 border border-gray-300 rounded-md w-[230px] overflow-hidden">
            <Image
                src={image}
                width={286}
                height={180}
                alt=""
                className="w-full rounded-t-md mb-2"
            />
            <h3 className="px-4 text-xl">Título do artigo</h3>
            <p className="px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

            <button className="bg-amber-300 mx-4 my-2 py-1 px-5 rounded-md cursor-pointer hover:bg-amber-400" onClick={() => redirect('/')}>ler artigo</button>
        </article>
    )
}