import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Сколько времени занимает ремонт стиральной машины?",
    answer:
      "Время ремонта зависит от сложности поломки. Простые неисправности устраняются за 1-2 часа, более сложные ремонты могут занять до 3-4 часов. В редких случаях, когда требуется заказ запчастей, ремонт может занять 1-2 дня.",
  },
  {
    question: "Какая гарантия предоставляется на ремонт?",
    answer:
      "Мы предоставляем официальную гарантию на выполненные работы и установленные запчасти от 6 до 24 месяцев в зависимости от типа ремонта и используемых комплектующих.",
  },
  {
    question: "Что делать, если стиральная машина не включается?",
    answer:
      "Сначала проверьте подключение к электросети и работоспособность розетки. Убедитесь, что дверца плотно закрыта, а фильтр подачи воды не засорен. Если проблема не решается, обратитесь к нашим мастерам для профессиональной диагностики.",
  },
  {
    question: "Выезжаете ли вы в выходные дни?",
    answer:
      "Да, мы работаем без выходных с 9:00 до 21:00. Аварийный выезд возм��жен и в более позднее время по предварительному согласованию с доплатой за срочность.",
  },
  {
    question: "Сколько стоит диагностика стиральной машины?",
    answer:
      "Диагностика в случае ремонта бесплатная. Если ремонт не производится по любым причинам, стоимость диагностики составляет 200 грн в пределах города Одессы.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-800 pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
