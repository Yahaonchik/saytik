import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { CallMasterModal } from "@/components/CallMasterModal";
import { Star } from "lucide-react";

const Reviews = () => {
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

  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      date: "15 декабря 2023",
      rating: 5,
      text: "Отличный сервис! Мастер приехал вовремя, быстро диагностировал проблему и починил стиральную машину. Работа заняла всего час, цена оказалась очень разумной. Рекомендую!",
      problem: "Не сливалась вода",
    },
    {
      id: 2,
      name: "Дмитрий В.",
      date: "8 декабря 2023",
      rating: 5,
      text: "Очень доволен качеством ремонта. Мастер профессионал своего дела, объяснил причину поломки и дал полезные советы по уходу за машиной. Гарантия 2 года!",
      problem: "Не включалась машина",
    },
    {
      id: 3,
      name: "Елена С.",
      date: "2 декабря 2023",
      rating: 5,
      text: "Замечательный сервис! Вызвала мастера через сайт, перезвонили в течение 10 минут. Мастер приехал в тот же день, быстро устранил неисправность. Спасибо за оперативность!",
      problem: "Сильная вибрация при отжиме",
    },
    {
      id: 4,
      name: "Михаил П.",
      date: "28 ноября 2023",
      rating: 5,
      text: "Профессиональный подход к работе. Мастер имел при себе все необходимые запчасти, ремонт выполнен качественно. Цены честные, без скрытых доплат. Очень рекомендую!",
      problem: "Не грела воду",
    },
    {
      id: 5,
      name: "Светлана Н.",
      date: "22 ноября 2023",
      rating: 5,
      text: "Спасибо за качественный ремонт! Машина работает как новая. Мастер аккуратный, объяснил все понятно, дал чек и гарантию. Обязательно обращусь еще при необходимости.",
      problem: "Не отжимает белье",
    },
    {
      id: 6,
      name: "Олег Р.",
      date: "18 ноября 2023",
      rating: 5,
      text: "Вызывал ��астера для ремонта стиральной машины Indesit. Очень доволен результатом - быстро, качественно, недорого. Мастер приехал точно в назначенное время.",
      problem: "Течь воды",
    },
  ];

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
                className="text-[#626B78] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Отзывы
              </a>
              <a
                href="/articles"
                className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
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
              Отзывы клиентов о ремонте стиральных машин
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#4C4C4C] font-pt-serif max-w-[800px] mx-auto leading-relaxed">
              Мы ценим доверие наших клиентов и гордимся положительными отзывами
              о качестве нашей работы
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        className="py-12 md:py-16 lg:py-20"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className="bg-white rounded-[15px] shadow-lg p-6 border border-gray-100"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-pt-serif-caption text-[18px] font-medium text-[#446D99]">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {review.problem}
                  </span>
                </div>

                <p className="text-[#4C4C4C] font-pt-serif text-[15px] leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <div className="bg-gradient-to-r from-[#446D99] to-[#72B5FF] rounded-2xl p-8 md:p-12 max-w-[800px] mx-auto">
              <h2 className="text-white font-pt-serif text-[24px] md:text-[28px] font-normal mb-4">
                Нужен ремонт стиральной машины?
              </h2>
              <p className="text-white/90 font-pt-serif text-[16px] md:text-[18px] mb-6">
                Присоединяйтесь к довольным клиентам! Вызовите мастера прямо
                сейчас
              </p>
              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="bg-white text-[#446D99] px-8 py-4 rounded-full font-ubuntu text-[16px] font-semibold hover:bg-gray-50 transition-colors"
              >
                Вызвать мастера
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

export default Reviews;
