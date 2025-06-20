import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";
import { CallMasterModal } from "./CallMasterModal";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  questions: Question[];
  isSpecial?: boolean;
}

const stepperSteps = [
  {
    id: 1,
    title: "Звонок и запись",
    description:
      "Вы звоните нам, описываете проблему. Мы согласовываем удобное время выезда мастера и записываем вас на диагностику.",
  },
  {
    id: 2,
    title: "Выезд и диагностика",
    description:
      "Мастер приезжает в назначенное время, проводит полную диагностику стиральной машины и определяет причину поломки.",
  },
  {
    id: 3,
    title: "Согласование и ремонт",
    description:
      "Озвучиваем стоимость ремонта и сроки. После вашего согласия мастер выполняет ремонт с использованием качественных запчастей.",
  },
  {
    id: 4,
    title: "Проверка и гарантия",
    description:
      "Тестируем работу машины в разных режимах. Выдаем гарантийный талон на выполненные работы и установленные детали.",
  },
];

const categories: Category[] = [
  {
    id: "general",
    name: "Общие вопросы по ремонту",
    questions: [
      {
        id: 1,
        question: "Сколько стоит диагностика стиральной машины?",
        answer:
          "Диагностика стиральной машины бесплатная при условии согласия на ремонт. В случае отказа от ремонта стоимость диагностики составляет 300 грн.",
      },
      {
        id: 2,
        question: "Какие марки стиральных машин вы ремонтируете?",
        answer:
          "Мы ремонтируем стиральные машины всех популярных марок: Bosch, Siemens, LG, Samsung, Indesit, Ariston, Whirlpool, Candy, Electrolux, Zanussi и многие другие.",
      },
      {
        id: 3,
        question: "Сколько времени занимает ремонт?",
        answer:
          "Время ремонта зависит от сложности поломки. Простые неисправности устраняются в течение 1-2 часов, более сложный ремонт может занять до 3-4 часов.",
      },
      {
        id: 4,
        question: "Какую гарантию вы предоставляете?",
        answer:
          "На все виды ремонта и установленные запчасти мы предоставляем гарантию от 6 до 24 месяцев в зависимости от вида работ.",
      },
    ],
  },
  {
    id: "process",
    name: "Как мы работаем",
    questions: [],
    isSpecial: true,
  },
  {
    id: "care",
    name: "Советы по уходу за стиральной машиной",
    questions: [
      {
        id: 1,
        question: "Как часто нужно чистить стиральную машину?",
        answer:
          "Рекомендуется проводить профилактическую чистку стиральной машины не реже 1 раза в месяц. Это поможет избежать накопления накипи и неприятных запахов.",
      },
      {
        id: 2,
        question: "Какое средство лучше использовать для стирки?",
        answer:
          "Используйте качественные порошки и жидкие средства, соблюдайте дозировку. Избегайте перегрузки барабана и используйте специальные средства для смягчения воды.",
      },
      {
        id: 3,
        question: "Почему важно очищать фильтр?",
        answer:
          "Засоренный фильтр может привести к проблемам со сливом воды, неприятным запахам и даже поломке насоса. Очищайте фильтр каждые 2-3 месяца.",
      },
      {
        id: 4,
        question: "Как правильно загружать белье в машину?",
        answer:
          "Не перегружайте барабан, оставляйте место для свободного движения белья. Проверяйте карманы на наличие посторонних предметов перед стиркой.",
      },
    ],
  },
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  const toggleQuestion = (questionId: number) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[20px] md:text-[24px] lg:text-[30px] font-pt-serif font-normal tracking-[1.2px] mb-12 md:mb-16 bg-gradient-to-r from-[#446D99] to-[#72B5FF] bg-clip-text text-transparent">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Категории
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setOpenQuestion(null);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-[#72B5FF] text-white shadow-md"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm font-medium block leading-tight">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Call Master Button */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-[#72B5FF] text-white px-4 py-3 rounded-lg hover:bg-[#5da3ff] transition-colors font-medium button-shake"
                  >
                    <Phone size={18} />
                    Вызвать мастера
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Special Stepper Content */}
                    {currentCategory?.isSpecial ? (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                          Как мы работаем
                        </h3>
                        <div className="space-y-6">
                          {stepperSteps.map((step, index) => (
                            <motion.div
                              key={step.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-4"
                            >
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-[#72B5FF] text-white rounded-full flex items-center justify-center font-semibold">
                                  {step.id}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                  {step.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                              {index < stepperSteps.length - 1 && (
                                <div className="absolute left-5 mt-10 w-0.5 h-8 bg-gray-300"></div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Regular FAQ Content */
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                          {currentCategory?.name}
                        </h3>
                        <div className="space-y-4">
                          {currentCategory?.questions.map((question) => (
                            <div
                              key={question.id}
                              className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() => toggleQuestion(question.id)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                              >
                                <span className="font-medium text-gray-800 flex-1 pr-4">
                                  {question.question}
                                </span>
                                <motion.div
                                  animate={{
                                    rotate:
                                      openQuestion === question.id ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.2 }}
                                  className="flex-shrink-0"
                                >
                                  {openQuestion === question.id ? (
                                    <Minus
                                      size={20}
                                      className="text-[#72B5FF]"
                                    />
                                  ) : (
                                    <Plus size={20} className="text-gray-500" />
                                  )}
                                </motion.div>
                              </button>
                              <AnimatePresence>
                                {openQuestion === question.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-4 pt-0 text-gray-600 leading-relaxed">
                                      {question.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <CallMasterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};
