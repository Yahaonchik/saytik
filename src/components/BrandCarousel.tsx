"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "Bosch",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/bosch-logo-a0b4d3?format=webp&width=800",
  },
  {
    name: "Whirlpool",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/whirlpool-logo-55fbe9?format=webp&width=800",
  },
  {
    name: "Indesit",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/indesit-logo-03de39?format=webp&width=800",
  },
  {
    name: "LG",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/lg-logo-2b43db?format=webp&width=800",
  },
  {
    name: "Electrolux",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/electrolux-logo-beb813?format=webp&width=800",
  },
  {
    name: "Zanussi",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/zanussi-logo-2814a3?format=webp&width=800",
  },
  {
    name: "Samsung",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/samsung-logo-2046de?format=webp&width=800",
  },
  {
    name: "Candy",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/candy-logo-6a1522?format=webp&width=800",
  },
  {
    name: "Ariston",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/ariston-logo-506450?format=webp&width=800",
  },
  {
    name: "Beko",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/beko-logo-ab9889?format=webp&width=800",
  },
  {
    name: "Gorenje",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/gorenje-logo-cd171e?format=webp&width=800",
  },
  {
    name: "Ardo",
    logo: "https://cdn.builder.io/api/v1/assets/e10e1c705a35478b8e390460ca43f5f3/ardo-logo-af7cdc?format=webp&width=800",
  },
];

export function BrandCarousel() {
  return (
    <div className="py-16 overflow-hidden w-full">
      <div className="w-full px-4 mb-8">
        <h2 className="text-center text-[20px] md:text-[24px] lg:text-[30px] font-pt-serif font-normal tracking-[1.2px] mb-12 md:mb-16 text-[#5D5D5D]">
          Ремонтируем все марки
        </h2>
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
                className="flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-4 border border-gray-200 flex items-center justify-center min-w-[160px] h-20"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
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
