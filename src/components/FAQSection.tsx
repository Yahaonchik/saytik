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
          "Диагностика стиральной машины бесплатная при условии согласия на ремонт. В случае отказа от ремонта стоимость диагностики составляет 150 грн.",
      },
      {
        id: 2,
        question: "Где мастер возьмет запчасти для моей стиральной машинки?",
        answer:
          "Перед выездом вы сообщаете марку и модель вашей стиральной машины, и мастер заранее подготавливает необходимые запчасти. У нас есть склад оригинальных деталей и качественных аналогов для всех популярных брендов.",
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
          "Проводите чистку лимонной кислотой (100г на 5-6 кг машину) раз в 3 месяца при мягкой воде, раз в месяц при жесткой. Запускайте пустую стирку при 90°C. Протирайте резинку манж��ты после каждой стирки.",
      },
      {
        id: 2,
        question: "Какое количество порошка использовать?",
        answer:
          "Для машины 5-6 кг: при мягкой воде — 1 ст.л. порошка, при жесткой — 1.5 ст.л. Жидкого средства нужно на 20% меньше. Передозировка приводит к излишней пене и плохому полосканию.",
      },
      {
        id: 3,
        question: "Как правильно чистить сливной фильтр?",
        answer:
          "Очищайте фильтр каждые 2 месяца. Он находится внизу справа за панелью. Перед откручиванием подставьте тазик — выльется до 0.5л воды. Промойте под краном, удалите волосы и мелкий мусор.",
      },
      {
        id: 4,
        question: "Какая оптимальная загрузка барабана?",
        answer:
          "Хлопок — до 90% объема барабана, синтетика — до 60%, деликатные ткани — до 30%. Белье должно свободно двигаться. Проверяйте карманы: монеты могут повредить барабан, а салфетк�� — засорить систему.",
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
    <section className="py-12 md:py-16 lg:py-24 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/assets/777536c48a5841ebbea4bcebb08ba44c/frame-6455-27563e?format=webp&width=800')",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-[25px] font-pt-serif font-bold tracking-[4%] mb-12 md:mb-16 text-[#5D5D5D]">
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
                    {activeCategory === "process" && (
                      <div className="space-y-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                          Как мы работаем
                        </h3>
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                              1
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                Бесплатная консультация по телефону
                              </h4>
                              <p className="text-gray-600">
                                Просто позвоните нам! Мы внимательно выслушаем
                                вашу ситуацию, дадим профессиональную
                                консультацию и подберем удобное для вас время
                                визита мастера.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                Точная диагностика у вас дома
                              </h4>
                              <p className="text-gray-600">
                                Наш опытный мастер приедет точно в назначенное
                                время, проведет тщательную диагностику и честно
                                озвучит стоимость. Никаких скрытых доплат!
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                              3
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                Качественный ремонт с проверкой
                              </h4>
                              <p className="text-gray-600">
                                После вашего согласия мы бережно выполняем ��се
                                необходимые работы, тщательно тестируем машину и
                                сразу оформляем гарантию. Ваша техника будет
                                работать как новая!
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                              4
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                Долгосрочная гарантия и поддержка
                              </h4>
                              <p className="text-gray-600">
                                Мы д��ем реальную гарантию до 24 месяцев на все
                                работы и детали. А также всегда готовы
                                проконсультировать вас по уходу за техникой. Мы
                                заботимся о наших клиентах!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Regular Questions */}
                    {currentCategory?.questions &&
                      currentCategory.questions.length > 0 && (
                        <div className="space-y-4">
                          {currentCategory.questions.map((item) => (
                            <div
                              key={item.id}
                              className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() =>
                                  setOpenQuestion(
                                    openQuestion === item.id ? null : item.id,
                                  )
                                }
                                className="w-full px-6 py-4 text-left bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex justify-between items-center"
                              >
                                <span className="font-medium text-gray-800">
                                  {item.question}
                                </span>
                                <svg
                                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                                    openQuestion === item.id ? "rotate-180" : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>
                              <AnimatePresence>
                                {openQuestion === item.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed">
                                      {item.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
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
