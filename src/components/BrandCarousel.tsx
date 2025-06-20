"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "Bosch",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Whirlpool",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Indesit",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "LG",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Electrolux",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Zanussi",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Samsung",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Candy",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Ariston",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Beko",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Gorenje",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
  {
    name: "Ardo",
    logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50",
  },
];

export function BrandCarousel() {
  return (
    <div className="py-16 overflow-hidden w-full">
      <div className="w-full px-4 mb-8">
        <h2 className="text-center text-[20px] md:text-[24px] lg:text-[30px] font-pt-serif font-normal tracking-[1.2px] mb-12 md:mb-16 bg-gradient-to-r from-[#446D99] to-[#72B5FF] bg-clip-text text-transparent">
          Ремонтируем все марки
        </h2>
        <p className="text-lg text-gray-600 text-center font-light">
          Профессиональный ремонт стиральных машин любых брендов
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 border border-gray-200 flex items-center justify-center min-w-[160px] h-20 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50"
              >
                <span className="text-lg font-semibold text-gray-700">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
