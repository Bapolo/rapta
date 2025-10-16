import Image from "next/image"
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"

interface MembrosProps {
    image: string,
    name: string,
    whatsapp: string,
    site: string,
    description: string
}

export default function CardMembros(infoMembro: MembrosProps) {
    console.log(infoMembro.image)
    return(
        <section className="flex flex-col border border-zinc-300 gap-2 py-2 px-1 w-70 justify-center items-center my-8 mx-auto rounded-md shadow-md bg-white">
            <Image 
                src={infoMembro.image}
                width={140}
                height={20}
                alt=""
                className="rounded-md"
            />
            <h2 className="text-3xl">{infoMembro.name}</h2>
            <p>{infoMembro.description}</p>
            <p>{infoMembro.whatsapp}</p>
            <p>{infoMembro.site}</p>

            <div className="flex gap-4 text-2xl mb-4">
                <a href="https://www.facebook.com" target="_blank">
                    <FaFacebook />
                </a>
                <a href="https://www.FaLinkedin.com" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                </a>
            </div>
        </section>
    )
}

