import Image from "next/image";

export default function CardHistoria() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center p-4 mb-6">
      <h2 className="text-4xl text-center">Destinos que inspiram pessoas</h2>

      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Image 
      src="/images/paisagem.jpg" 
      width={300} height={280} 
      alt="" 
      className="rounded-md shadow-xl"/>
    </section>
  );
}
