"use client";

import { FaArrowRight, FaRoute } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10 text-center text-[#000] mb-4"
    >
      <h1 className=" p-4 text-7xl text-amber-400 font-extrabold">RAPTA</h1>
      <p className="mb-16 md:w-2xl text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel,
        praesentium laboriosam maxime accusantium odio voluptatum?
      </p>

      <div className="flex flex-col gap-4 justify-center items-center">
        <button className="flex justify-around font-bold items-center bg-amber-400 p-2 text-white w-40 cursor-pointer border border-zinc-300 rounded-md">
          Saber mais <FaArrowRight />
        </button>
        <button className="flex justify-around font-bold items-center bg-[#F5F5FA]  p-2 text-amber-400 w-40 cursor-pointer border border-zinc-300 rounded-md">
          {" "}
          <FaRoute /> Ver destinos
        </button>
      </div>
    </motion.div>
  );
}
