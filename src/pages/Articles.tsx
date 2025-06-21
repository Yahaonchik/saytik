import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { CallMasterModal } from "@/components/CallMasterModal";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Articles = () => {
  const [isCallMasterModalOpen, setIsCallMasterModalOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const articles = [
    {
      id: 1,
      title: "5 признаков того, что стиральной машине нужен ремонт",
      excerpt:
        "Узнайте основные симптомы неисправностей, которые нельзя игнорировать. Раннее обнаружение проблем поможет избежать дорогостоящего ремонта.",
      date: "15 декабря 2023",
      readTime: "3 мин",
      category: "Диагностика",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    },
    {
      id: 2,
      title: "Как правильно ухаживать за стиральной машиной",
      excerpt:
        "Простые правила ухода, которые продлят срок службы вашей стиральной машины и сэкономят деньги на ремонте.",
      date: "10 декабря 2023",
      readTime: "5 мин",
      category: "Уход и обслуживание",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    },
    {
      id: 3,
      title: "Почему стиральная машина не сливает воду: причины и решения",
      excerpt:
        "Разбираем самые частые причины проблем со сливом воды и объясняем, что можно сделать самостоятельно.",
      date: "5 декабря 2023",
      readTime: "4 мин",
      category: "Ремонт",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    },
    {
      id: 4,
      title: "Как выбрать качественные запчасти для стиральной машины",
      excerpt:
        "Гид по выбору оригинальных и совместимых запчастей. Как не ошибиться при покупке и на чем не стоит экономить.",
      date: "28 ноября 2023",
      readTime: "6 мин",
      category: "Запчасти",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400",
    },
    {
      id: 5,
      title:
        "Энергоэффективность ��тиральных машин: как сэкономить на электричестве",
      excerpt:
        "Практические советы по снижению энергопотребления стиральной машины без ущерба для качества стирки.",
      date: "22 ноября 2023",
      readTime: "4 мин",
      category: "Экономия",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400",
    },
    {
      id: 6,
      title: "Шум и вибрация стиральной машины: причины и способы устранения",
      excerpt:
        "Что делать, если стиральная машина стала шуметь или сильно вибрировать. Пошаговая инструкция по диагностике.",
      date: "18 ноября 2023",
      readTime: "5 мин",
      category: "Диагностика",
      image:
        "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400",
    },
  ];

  const categories = [
    "Все статьи",
    "Диагностика",
    "Ремонт",
    "Уход и обслуживание",
    "Запчасти",
    "Экономия",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Все статьи");

  const filteredArticles =
    selectedCategory === "Все статьи"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 w-full">
        <div
          className="w-full h-[60px] sm:h-[70px] md:h-[84px] bg-white/63 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] relative"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="w-full px-3 sm:px-4 h-full flex items-center justify-between max-w-[1989px] mx-auto">
            {/* Logo */}
            <a href="/" className="flex items-center ml-8 md:ml-12 lg:ml-16">
              <img
                src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/image-914297923-c8caa2?format=webp&width=800"
                alt="РемСтирМаш - Ремонт стиральных машин"
                className="h-[34px] sm:h-[39px] md:h-[46px] w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </a>

            {/* Contact Info - Desktop only */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-8 flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <div className="flex items-center justify-center gap-[10px] w-[160px] xl:w-[185px] h-[42px] px-[10px] py-[10px] rounded-[10px] bg-[#72B5FF] flex-shrink-0">
                <span className="text-white font-ibm-plex-serif text-[14px] xl:text-[17px] font-normal whitespace-nowrap">
                  +38 (067) 123-45-67
                </span>
              </div>
              <div className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[14px] xl:text-[17px] font-normal whitespace-nowrap">
                Пн-Вс: 9:00-21:00
              </div>
            </div>

            {/* Navigation - Hidden on mobile and tablet */}
            <nav className="hidden xl:flex items-center gap-[39px] absolute left-1/2 transform -translate-x-1/2">
              <a
                href="/"
                className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Главная
              </a>
              <a
                href="/buyout"
                className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Выкуп б/у машин
              </a>
              <a
                href="/reviews"
                className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Отзывы
              </a>
              <a
                href="/articles"
                className="text-[#626B78] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Статьи
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-pt-serif-caption font-normal tracking-[1.2px] mb-6 text-[#5D5D5D]">
              Полезные статьи о ремонте стиральных машин
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#4C4C4C] font-pt-serif max-w-[800px] mx-auto leading-relaxed">
              Экспертные советы, инструкции и рекомендации по обслуживанию и
              ремонту стиральных машин
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        className="py-8 border-b border-gray-100"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            variants={fadeInUp}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#72B5FF] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Articles Grid */}
      <motion.section
        className="py-12 md:py-16 lg:py-20"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-[15px] shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="font-pt-serif-caption text-[18px] font-medium text-[#446D99] mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-[#4C4C4C] font-pt-serif text-[14px] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <button className="flex items-center text-[#72B5FF] hover:text-[#446D99] transition-colors">
                      <span className="text-sm font-medium mr-1">Читать</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <div className="bg-gradient-to-r from-[#446D99] to-[#72B5FF] rounded-2xl p-8 md:p-12 max-w-[800px] mx-auto">
              <h2 className="text-white font-pt-serif text-[24px] md:text-[28px] font-normal mb-4">
                Остались вопросы?
              </h2>
              <p className="text-white/90 font-pt-serif text-[16px] md:text-[18px] mb-6">
                Наши эксперты готовы помочь с любыми проблемами стиральных машин
              </p>
              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="bg-white text-[#446D99] px-8 py-4 rounded-full font-ubuntu text-[16px] font-semibold hover:bg-gray-50 transition-colors"
              >
                Получить консультацию
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Call Master Modal */}
      <CallMasterModal
        isOpen={isCallMasterModalOpen}
        onClose={() => setIsCallMasterModalOpen(false)}
      />
    </div>
  );
};

export default Articles;
