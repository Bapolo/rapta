import Image from "next/image"
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"

interface MembrosProps {
    image: string,
    name: string,
    whatsapp: string,
    facebook: string,
    instagram: string,
    description: string,
    className: string
}

export default function CardMembros({image, name="sem nome", whatsapp="+244941553686", facebook="https://facebook.com", instagram="https://instagram.com", description="", className}: MembrosProps) {
    console.log(image)
    return(
        <section className={`flex flex-col border border-zinc-300 gap-2 py-2 px-1 w-70 justify-center items-center my-8 mx-auto rounded-md shadow-md bg-white ${className}`}>
            <Image 
                src={image}
                width={120}
                height={100}
                alt=""
                className="rounded-md"
            />
            <h2 className="text-3xl">{name}</h2>
            <p>{description}</p>
            <p>{whatsapp}</p>

            <div className="flex gap-4 text-2xl mb-4">
                <a href={facebook} target="_blank">
                    <FaFacebook />
                </a>
                <a href={instagram} target="_blank">
                    <FaInstagram />
                </a>
            </div>

            <button className="underline cursor-pointer text-zinc-700 hover:text-black">detalhes</button>
        </section>
    )
}

