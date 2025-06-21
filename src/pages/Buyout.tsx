import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { CallMasterModal } from "@/components/CallMasterModal";
import { MobileMenu } from "@/components/MobileMenu";

const Buyout = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 w-full mt-[15px]">
        <div
          className="w-full h-[48px] sm:h-[58px] md:h-[82px] bg-white/95 md:bg-white/63 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] relative"
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

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href="tel:+380671234567"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] border border-[rgba(0,0,0,0.18)] bg-white shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                    stroke="#72B5FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Mobile menu */}
              <MobileMenu />
            </div>

            {/* Contact Info - Desktop only */}
            <div className="hidden xl:flex items-center gap-3 xl:gap-8 flex-shrink-0 mr-8 md:mr-12 lg:mr-16">
              <div className="flex items-center justify-center gap-[10px] w-[160px] xl:w-[185px] h-[42px] px-[10px] py-[10px] rounded-[10px] bg-[#72B5FF] flex-shrink-0">
                <span className="text-white font-ibm-plex-serif text-[14px] xl:text-[17px] font-normal whitespace-nowrap">
                  +38 (067) 123-45-67
                </span>
              </div>
              <div className="text-[#626B78] font-ibm-plex-serif text-[14px] xl:text-[17px] font-normal whitespace-nowrap">
                Пн-Вс: 9:00-21:00
              </div>
            </div>

            {/* Navigation - Hidden on mobile and tablet */}
            <nav className="hidden xl:flex items-center gap-[39px] absolute left-1/2 transform -translate-x-1/2">
              <a
                href="/"
                className="text-[#626B78] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Главная
              </a>
              <a
                href="/buyout"
                className="text-[#626B78] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Выкуп б/у машин
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
              Выкуп б/у стиральных машин в Одессе
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#4C4C4C] font-pt-serif max-w-[800px] mx-auto leading-relaxed">
              Продайте вашу стиральную машину быстро и выгодно. Честная оценка,
              вывоз в день обращения, оплата сразу на руки.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-12 md:py-16 lg:py-20"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Основной текстовый контент */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  className="bg-white rounded-[15px] shadow-lg p-6 md:p-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] md:text-[24px] font-normal leading-normal mb-6">
                    Продать стиральную машину
                  </h3>
                  <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed mb-6">
                    Бесспорно это несвоевременная неприятность — когда ваша
                    верная подруга подводит Вас. Невероятно как много пользы она
                    приносила и тут вдруг… Теперь продать машинку в Одессе, это
                    ни сколько не сложно, гарантированно высокая оплата и
                    минимум действий.
                  </p>

                  <h4 className="text-[#5E5959] font-pt-serif-caption text-[18px] md:text-[20px] font-normal leading-normal mb-4">
                    Мы опираемся на:
                  </h4>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#72B5FF] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                        <strong>Честность</strong> – редкое качество в данной
                        отрасли, и мы им обладаем. Оценим фактическую стоимость
                        машинки в любом состоянии: рабочем или неисправном и не
                        будем ее занижать.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#72B5FF] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                        <strong>Работаем оперативно!</strong> Всегда на связи.
                        Собственный грузовичок. А значит мы всегда готовы к
                        выезду в любую точку Одессы.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#72B5FF] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                        <strong>Наши грузчики работают аккуратно.</strong> Вы же
                        не хотите немного заработав, остаться с поцарапанными
                        полом и дверями? Нет? Тогда доверяйте только
                        профессионалам!
                      </p>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white rounded-[15px] shadow-lg p-6 md:p-8"
                  variants={fadeInUp}
                >
                  <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed mb-6">
                    Дома стоит неисправная помощница по быту: Indesit (индезит),
                    старенькая Beko (веко), надежный Samsung (самсунг) или
                    долговечный LG (лж, lg)? Тогда непременно нужно продать
                    стиральную машину именно нашим специалистам! Более того,
                    посоветуем где найти в Одессе, другую дешевле.
                  </p>

                  <h4 className="text-[#5E5959] font-pt-serif-caption text-[18px] md:text-[20px] font-normal leading-normal mb-4">
                    Почему лучше не выбрасывать, а продать свою б/у машинку на
                    запчасти именно нашей компании:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#72B5FF] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                        <strong>Зачем выкидывать деньги?</strong> В рабочем
                        состоянии она облегчала быт, а неисправная – принесла
                        прибыль! LG, Indesit, Samsung — абсолютно не важно!
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#72B5FF] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                        Наблюдать за профессиональной работой грузчиков намного
                        комфортнее, чем самому тащить более 50 кг. Согласны?)
                        Продать стиральную машинку просто, а вот вытащить))
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#72B5FF] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                        <strong>Подумайте о нашей планете Земля.</strong> Мы
                        выбрасываем множество различного мусора. Наш вклад в
                        сохранение окружающей среды — перебрать помощницу на
                        запчасти и использовать их в ремонте.
                      </p>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Боковая колонка с фотографиями */}
              <motion.div
                className="lg:col-span-1 space-y-6"
                variants={staggerChildren}
              >
                <motion.div
                  className="bg-white rounded-[15px] shadow-lg p-4"
                  variants={fadeInUp}
                >
                  <div className="w-full h-[200px] rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/1-300x235-e61f8e?format=webp&width=800"
                      alt="Выкуп стиральных машин"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#4C4C4C] font-pt-serif text-[14px] text-center">
                    Выкуп стиральных машин
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-[15px] shadow-lg p-4"
                  variants={fadeInUp}
                >
                  <div className="w-full h-[200px] rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/2-300x235-c521cb?format=webp&width=800"
                      alt="Профессиональная оценка"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#4C4C4C] font-pt-serif text-[14px] text-center">
                    Профессиональная оценка
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-[15px] shadow-lg p-4"
                  variants={fadeInUp}
                >
                  <div className="w-full h-[200px] rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/3-300x234-cc1d63?format=webp&width=800"
                      alt="Быстрый вывоз"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#4C4C4C] font-pt-serif text-[14px] text-center">
                    Быстрый вывоз
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Прайс-лист */}
            <motion.div
              className="bg-white rounded-[15px] shadow-lg p-6 md:p-8 mb-8"
              variants={fadeInUp}
            >
              <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] md:text-[24px] font-normal leading-normal mb-6">
                Выкуп и вывоз по прайс-листу по Одессе и области
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-300"
                  variants={fadeInUp}
                >
                  <h4 className="text-[#446D99] font-pt-serif-caption text-[18px] font-medium mb-3">
                    До 5 лет эксплуатации
                  </h4>
                  <p className="text-[#72B5FF] font-ubuntu text-[20px] font-bold">
                    от 800 до 1500 грн
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.4)] transition-all duration-300"
                  variants={fadeInUp}
                >
                  <h4 className="text-[#446D99] font-pt-serif-caption text-[18px] font-medium mb-3">
                    До 10 лет
                  </h4>
                  <p className="text-[#72B5FF] font-ubuntu text-[20px] font-bold">
                    от 700 до 1000 грн
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgba(251,146,60,0.3)] hover:shadow-[0_12px_40px_rgba(251,146,60,0.4)] transition-all duration-300"
                  variants={fadeInUp}
                >
                  <h4 className="text-[#446D99] font-pt-serif-caption text-[18px] font-medium mb-3">
                    Свыше 10 лет
                  </h4>
                  <p className="text-[#72B5FF] font-ubuntu text-[20px] font-bold">
                    от 300 до 550 грн
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Заключительный текст */}
            <motion.div
              className="bg-white rounded-[15px] shadow-lg p-6 md:p-8"
              variants={fadeInUp}
            >
              <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed mb-6">
                Продать свою неисправную машинку — автомат — это также забота.
                Забота о людях, которые не могут позволить себе приобрести
                машинку из магазина или оригинальные запчасти от поставщика. Мы
                возьмемся за любую марку и модель стиральной машины: Electrolux,
                Indesit, Samsung, LG и т.д.
              </p>
              <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed mb-6">
                <strong>Если у Вас рабочая стиральная машина</strong> — В случае
                если Ваша стиральная машина в рабочем состоянии, Вы можете
                продать ее по весьма высокой цене. Будь то рабочая или
                неисправная машинка — мы найдем ей достойное применение.
              </p>
              <p className="text-[#4C4C4C] font-pt-serif text-[15px] md:text-[16px] font-normal leading-relaxed">
                <strong>
                  Не тяните с тем, чтобы продать стиральную машинку на запчасти!
                </strong>{" "}
                Под воздействием перепада температур, влажности и пересушки
                происходит серьезный износ — стиральная машинка резко падает в
                денежном эквиваленте. Продать рабочую машинку в Одессе, на
                запчасти нужно вовремя.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div className="text-center mt-8" variants={fadeInUp}>
              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#72B5FF] text-white rounded-[60px] font-ubuntu text-[16px] font-medium shadow-lg hover:bg-[#5ea3ff] transition-colors"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Получить оценку стоимости
              </button>
            </motion.div>
          </div>
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

export default Buyout;
