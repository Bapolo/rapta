import Image from "next/image";

export default function MembrosDetalhes() {
  return (
    <div className="text-center">
      <h1 className="p-4 mt-4 mx-auto text-2xl font-bold">Detalhes dos membros</h1>
      <p className="text-zinc-500">Página em construção</p>
      <Image
        src="/images/paginaemconstrucao.svg"
        width={500}
        height={400}
        alt=""
        className="m-auto"
      />
    </div>
  );
}
