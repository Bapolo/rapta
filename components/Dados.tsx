import { FaUser, FaRoute, FaMoneyBill, FaCheckCircle } from "react-icons/fa";

export default function Dados() {
  return (
    <ul className="bg-[#F1F5F9] px-4 py-15 my-8 grid grid-cols-2 grid-rows-2 gap-10">
      <li className="flex flex-col justify-center items-center gap-2">
        <FaRoute className="text-amber-400 text-5xl"/>
        <h2 className="text-2xl font-semibold">1.4m+</h2>
        <p>Destinos registrados</p>
      </li>
      <li className="flex flex-col justify-center items-center gap-2">
        <FaUser className="text-amber-400 text-5xl"/>
        <h2 className="text-2xl font-semibold">50k+</h2>
        <p>Participantes</p>
      </li>
      <li className="flex flex-col justify-center items-center gap-2">
        <FaMoneyBill className="text-amber-400 text-5xl"/>
        <h2 className="text-2xl font-semibold">KZ 50M</h2>
        <p>Investidos</p>
      </li>
      <li className="flex flex-col justify-center items-center gap-2">
        <FaCheckCircle className="text-amber-400 text-5xl"/>
        <h2 className="text-2xl font-semibold">95%</h2>
        <p>Taxa de sucesso</p>
      </li>
    </ul>
  );
}
