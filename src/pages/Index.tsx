import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WashingMachineDiagnostic } from "@/components/WashingMachineDiagnostic";
import { BrandCarousel } from "@/components/BrandCarousel";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CallMasterModal } from "@/components/CallMasterModal";
import { MobileMenu } from "@/components/MobileMenu";

const Index = () => {
  const [isCallMasterModalOpen, setIsCallMasterModalOpen] =
    React.useState(false);

  const scrollToDiagnosis = () => {
    const element = document.getElementById("online-diagnosis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 w-full">
        <div
          className="w-full h-[50px] sm:h-[60px] md:h-[84px] bg-white/95 md:bg-white/63 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] relative"
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
            <div className="flex items-center gap-2 lg:hidden">
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
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 7.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
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
                href="#"
                className="text-[#626B78] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
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
                href="#"
                className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Отзывы
              </a>
              <a
                href="#"
                className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Статьи
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[650px] overflow-hidden">
        <AuroraBackground className="absolute inset-0 hidden md:block">
          <div className="absolute inset-0" />
        </AuroraBackground>
        {/* Static background for mobile */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200"></div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 md:opacity-80"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/3a59cf27eda3ab0d95b23a26d9b81926cdadd41f?placeholderIfAbsent=true')",
          }}
        ></div>

        {/* Dark overlay for mobile to improve text readability */}
        <div className="absolute inset-0 bg-white/95 md:bg-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-evenly items-center text-center lg:justify-center">
          {/* Text Content */}
          <div className="w-full flex flex-col items-center mt-4 lg:mt-0 mb-6 lg:mb-16">
            <h1 className="text-[20px] sm:text-[22px] md:text-[38px] font-pt-serif-caption font-normal tracking-[1.0px] md:tracking-[1.52px] mb-3 md:mb-10 max-w-[803px] leading-tight text-center">
              <span className="text-[#40444F] block font-normal">
                Ремонт cтиральных машин
              </span>
              <span className="text-[#72B5FF] block font-normal">Одесса</span>
            </h1>

            <p className="text-[10px] sm:text-[10px] md:text-[15px] font-pt-serif font-normal tracking-[0.7px] md:tracking-[0.75px] max-w-[600px] mx-auto px-4 text-center">
              <span className="text-[#40444F] font-normal">
                Профессиональный ремонт стир��льных машин в тот же{" "}
              </span>
              <span className="text-[#72B5FF] font-normal">день!</span>
            </p>
          </div>

          {/* Call to Action Buttons - Mobile first, desktop right */}
          <div className="flex flex-col gap-3 w-full max-w-[253px] order-1 lg:order-2 mb-6 lg:mb-0 lg:hidden">
            <button
              onClick={() => setIsCallMasterModalOpen(true)}
              className="flex items-center justify-center gap-3 w-full h-[38px] md:h-[50px] px-[16px] md:px-[38px] py-[12px] md:py-[15px] rounded-[60px] bg-transparent border-2 border-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] button-shake"
            >
              <svg
                width="16"
                height="15"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="phone-shake md:w-[18px] md:h-[17px]"
              >
                <path
                  d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                  stroke="#72B5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#72B5FF] font-ubuntu text-[12px] md:text-[15px] font-medium">
                Вызвать мастера
              </span>
            </button>

            <button
              onClick={scrollToDiagnosis}
              className="flex items-center justify-center gap-3 w-full h-[38px] md:h-[50px] px-[16px] md:px-[38px] py-[12px] md:py-[15px] rounded-[60px] bg-white shadow-[8px_12px_4px_0px_rgba(0,0,0,0.09)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[20px] md:h-[20px]"
              >
                <path
                  d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                  stroke="#5E5C59"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[rgba(76,76,76,0.9)] font-ubuntu text-[12px] md:text-[15px] font-medium">
                Посмотреть цены
              </span>
            </button>
          </div>

          {/* Mobile Washing Machine Loader */}
          <div className="flex flex-col items-center gap-4 mb-6 lg:hidden">
            <div className="loader flex-shrink-0"></div>

            {/* Mobile features - horizontal layout under washing machine */}
            <div className="flex flex-row gap-4 justify-center lg:gap-6 xl:gap-8">
              <div className="flex items-center gap-1 md:gap-2 text-[rgba(76,76,76,0.9)] font-pt-serif text-[10px] md:text-[12px] italic tracking-[5%] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/image-3822595-dfa1a4?format=webp&width=800"
                  alt="Быстро"
                  width="14"
                  height="18"
                  className="w-[14px] h-[18px] md:w-[16px] md:h-[20px] object-contain flex-shrink-0"
                />
                Быстро
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-[rgba(76,76,76,0.9)] font-pt-serif text-[10px] md:text-[12px] italic tracking-[5%] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/2-0616fc?format=webp&width=800"
                  alt="Качественно"
                  width="20"
                  height="18"
                  className="w-[20px] h-[18px] md:w-[24px] md:h-[20px] object-contain flex-shrink-0"
                />
                Качественно
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-[rgba(76,76,76,0.9)] font-pt-serif text-[10px] md:text-[12px] italic tracking-[5%] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/3-470ac4?format=webp&width=800"
                  alt="С гарантией"
                  width="16"
                  height="17"
                  className="w-[16px] h-[17px] md:w-[18px] md:h-[19px] object-contain flex-shrink-0"
                />
                С гарантией
              </div>
            </div>
          </div>

          {/* Main Content Layout - Desktop layout */}
          <div className="hidden lg:flex lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-16 md:mb-20 w-full">
            {/* Washing Machine Loader - Left side on desktop */}
            <div className="order-2 lg:order-1 flex flex-col items-center gap-4">
              <div className="loader flex-shrink-0"></div>
            </div>

            {/* Call to Action Buttons - Right side on desktop */}
            <div className="flex flex-col gap-4 w-full max-w-[253px] order-1 lg:order-2">
              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="flex items-center justify-center gap-3 w-full h-[38px] md:h-[50px] px-[16px] md:px-[38px] py-[12px] md:py-[15px] rounded-[60px] bg-transparent border-2 border-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] button-shake"
              >
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="phone-shake md:w-[18px] md:h-[17px]"
                >
                  <path
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                    stroke="#72B5FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#72B5FF] font-ubuntu text-[12px] md:text-[15px] font-medium">
                  Вызвать мастера
                </span>
              </button>

              <button
                onClick={scrollToDiagnosis}
                className="flex items-center justify-center gap-3 w-full h-[38px] md:h-[50px] px-[16px] md:px-[38px] py-[12px] md:py-[15px] rounded-[60px] bg-white shadow-[8px_12px_4px_0px_rgba(0,0,0,0.09)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[20px] md:h-[20px]"
                >
                  <path
                    d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="#5E5C59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[rgba(76,76,76,0.9)] font-ubuntu text-[12px] md:text-[15px] font-medium">
                  Посмотреть цены
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Master Rules Section */}
      <section className="py-8 sm:py-10 md:py-16 lg:py-24 relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/frame-3232-7ecf25?format=webp&width=800')",
          }}
        ></div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <h2 className="text-center text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-pt-serif font-normal tracking-[0.8px] sm:tracking-[1.0px] md:tracking-[1.2px] mb-8 sm:mb-10 md:mb-16 bg-gradient-to-r from-[#446D99] to-[#72B5FF] bg-clip-text text-transparent max-w-[935px] mx-auto leading-tight px-2">
            Мастер по ремонту стиральных машин соблюдает ряд правил
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8 max-w-[1300px] mx-auto justify-items-center">
            {/* Card 1 - Image Left */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-shrink-0 w-full md:w-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/dc3a3566f86e4f86a1ec8c8f84e595f0/div.card-image-container-540a79?format=webp&width=800"
                    alt="Соблюдает договор и время прибытия на адрес"
                    className="w-full h-[200px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-4 py-4 md:px-6 md:py-0 md:h-full flex flex-col justify-center">
                  <div className="mb-3 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[16px] md:text-[16px] font-medium leading-tight text-center md:text-left">
                      Соблюдает договор и время прибытия на адрес
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)] mb-3 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#5C6570] text-[14px] md:text-[14px] font-normal leading-relaxed text-center md:text-left">
                      Наш мастер всегда приезжает вовремя и в назначенное время
                      согласно договоренности
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Image Right */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-1 px-4 py-4 md:px-6 md:py-0 md:h-full flex flex-col justify-center order-2 md:order-1">
                  <div className="mb-3 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[16px] md:text-[16px] font-medium leading-tight text-center md:text-left">
                      Предоставляет гарантию до 24 мес на работу и запчасти
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)] mb-3 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#5C6570] text-[14px] md:text-[14px] font-normal leading-relaxed text-center md:text-left">
                      Официальная гарантия на все виды ремонта работ и
                      установленные детали
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/2-27fe87?format=webp&width=800"
                    alt="Предоставляет гарантию до 24 мес на работу и запчасти"
                    className="w-full h-[200px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Image Left */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-shrink-0 w-full md:w-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/3-cdecca?format=webp&width=800"
                    alt="Соблюдает чистоту в квар��ире работая в бахилах"
                    className="w-full h-[200px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-4 py-4 md:px-6 md:py-0 md:h-full flex flex-col justify-center">
                  <div className="mb-3 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[16px] md:text-[16px] font-medium leading-tight text-center md:text-left">
                      Соблюдает чистоту в квартире работая в бахилах
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)] mb-3 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#5C6570] text-[14px] md:text-[14px] font-normal leading-relaxed text-center md:text-left">
                      Аккуратная работа без повреждений мебели и предметов
                      и��терьера
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Image Right */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-1 px-4 py-4 md:px-6 md:py-0 md:h-full flex flex-col justify-center order-2 md:order-1">
                  <div className="mb-3 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[16px] md:text-[16px] font-medium leading-tight text-center md:text-left">
                      Работает быстро и качественно
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)] mb-3 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#5C6570] text-[14px] md:text-[14px] font-normal leading-relaxed text-center md:text-left">
                      Эффективное решение проблем и качественная работа мастера
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/4-c4f7c0?format=webp&width=800"
                    alt="Работает быстро и качественно"
                    className="w-full h-[200px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 5 - Image Left - centered on all screens */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] overflow-hidden xl:col-span-2 xl:justify-self-center">
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-shrink-0 w-full md:w-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/5-234616?format=webp&width=800"
                    alt="Опыт мастера по ремонту стиральных машин не менее 5 лет"
                    className="w-full h-[200px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-4 py-4 md:px-6 md:py-0 md:h-full flex flex-col justify-center">
                  <div className="mb-3 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[16px] md:text-[16px] font-medium leading-tight text-center md:text-left">
                      Опыт мастера по ремонту стиральных машин не менее 5 лет
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)] mb-3 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#5C6570] text-[14px] md:text-[14px] font-normal leading-relaxed text-center md:text-left">
                      Большой опыт работы позволяет быстро находить и устранять
                      любые поломки
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions for desktop - Bottom as in Figma */}
        <div className="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-row gap-4 md:gap-8 z-20 px-4 items-center">
          <div className="flex items-center gap-3 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[15px] italic tracking-[5%] whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/image-3822595-dfa1a4?format=webp&width=800"
              alt="Быстро"
              width="20"
              height="25"
              className="w-[20px] h-[25px] md:w-[25px] md:h-[31px] object-contain flex-shrink-0"
            />
            Быстро
          </div>
          <div className="flex items-center gap-3 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[15px] italic tracking-[5%] whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/2-0616fc?format=webp&width=800"
              alt="Качественно"
              width="30"
              height="25"
              className="w-[30px] h-[25px] md:w-[37px] md:h-[31px] object-contain flex-shrink-0"
            />
            Качественно
          </div>
          <div className="flex items-center gap-3 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[15px] italic tracking-[5%] whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/3-470ac4?format=webp&width=800"
              alt="С гарантией"
              width="22"
              height="24"
              className="w-[22px] h-[24px] md:w-[27px] md:h-[30px] object-contain flex-shrink-0"
            />
            С гарантией
          </div>
        </div>
      </section>

      {/* Online Diagnosis & Brands Section */}
      <section
        className="py-12 md:py-16 lg:py-24 relative"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/frame-770-e7c0ef?format=webp&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Online Diagnosis */}
          <div id="online-diagnosis" className="mb-12 -mt-4">
            <WashingMachineDiagnostic />
          </div>

          {/* Brands Section */}
          <BrandCarousel />
        </div>
      </section>

      {/* What We're Proud Of Section */}
      <section className="py-12 md:py-16 lg:py-24 relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/frame-662323-2e1d32?format=webp&width=800')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-center text-[20px] md:text-[24px] lg:text-[30px] font-pt-serif font-normal tracking-[1.2px] mb-12 md:mb-16 bg-gradient-to-r from-[#446D99] to-[#72B5FF] bg-clip-text text-transparent">
            Чем мы гордимся
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 max-w-[1200px] mx-auto">
            {/* Card 1 */}
            <div className="w-full max-w-[350px] h-[269px] rounded-[15px] border-[3px] border-[rgba(108,170,212,0.25)] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.16)] group cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.2)]">
              <div className="h-full flex flex-col">
                <div className="flex justify-center pt-[27px] mb-[20px] relative">
                  <div className="relative w-[71px] h-[59px]">
                    {/* Default icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822600-26-b09e59?format=webp&width=800"
                      alt="Price tag icon"
                      className="w-[71px] h-[59px] object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Hover icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822600-27-d62316?format=webp&width=800"
                      alt="Price tag icon colored"
                      className="w-[71px] h-[59px] object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="px-[32px] h-[70px] flex items-center">
                  <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-normal w-full">
                    Низкие цены на весь сервисный диапазон услуг
                  </h3>
                </div>
                <div className="relative px-[32px] h-[3px] flex justify-center">
                  <div className="w-full h-[3px] bg-[rgba(114,181,255,0.25)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center px-[16px] pt-[16px] pb-[10px]">
                  <div className="text-[#5C6570] text-center font-arial text-[15px] font-normal leading-normal">
                    Доступные цены благодаря большому количеству клиентов и
                    оптимизированным процессам
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[350px] h-[269px] rounded-[15px] border-[3px] border-[rgba(108,170,212,0.25)] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.16)] group cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.2)]">
              <div className="h-full flex flex-col">
                <div className="flex justify-center pt-[27px] mb-[20px]">
                  <div className="relative w-[64px] h-[63px]">
                    {/* Default icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-382260023-4-359c68?format=webp&width=800"
                      alt="Modern equipment icon"
                      className="w-[64px] h-[63px] object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Hover icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-382260023-2-97223e?format=webp&width=800"
                      alt="Modern equipment icon colored"
                      className="w-[64px] h-[63px] object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="px-[32px] h-[70px] flex items-center">
                  <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-normal w-full">
                    Современное оборудование по диагностике
                  </h3>
                </div>
                <div className="relative px-[32px] h-[3px] flex justify-center">
                  <div className="w-full h-[3px] bg-[rgba(114,181,255,0.25)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center px-[16px] pt-[16px] pb-[10px]">
                  <div className="text-[#5C6570] text-center font-arial text-[15px] font-normal leading-normal">
                    Ежемесячно часть от прибыли мы вкладываем в работу и
                    развитие
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[350px] h-[269px] rounded-[15px] border-[3px] border-[rgba(108,170,212,0.25)] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.16)] group cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.2)]">
              <div className="h-full flex flex-col">
                <div className="flex justify-center pt-[27px] mb-[20px]">
                  <div className="relative w-[85px] h-[76px]">
                    {/* Default icon - replaced with user's image */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/image-3232-3-caf716?format=webp&width=800"
                      alt="24 month warranty icon"
                      className="w-[85px] h-[76px] object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Hover icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3232-2-829880?format=webp&width=800"
                      alt="24 month warranty icon colored"
                      className="w-[85px] h-[76px] object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="px-[32px] h-[70px] flex items-center">
                  <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-normal w-full">
                    Гарантийный срок до 24 месяцев
                  </h3>
                </div>
                <div className="relative px-[32px] h-[3px] flex justify-center">
                  <div className="w-full h-[3px] bg-[rgba(114,181,255,0.25)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center px-[16px] pt-[16px] pb-[10px]">
                  <div className="text-[#5C6570] text-center font-arial text-[15px] font-normal leading-normal">
                    Официальная гарантия на детали и услуги
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-[350px] h-[269px] rounded-[15px] border-[3px] border-[rgba(108,170,212,0.25)] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.16)] group cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.2)]">
              <div className="h-full flex flex-col">
                <div className="flex justify-center pt-[27px] mb-[20px]">
                  <div className="relative w-[112px] h-[85px]">
                    {/* Default icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/image-38226123232322-2-1-6af364?format=webp&width=800"
                      alt="Supplier connections icon"
                      className="w-[112px] h-[85px] object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Hover icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/image-38226123232322-3-9e8222?format=webp&width=800"
                      alt="Supplier connections icon colored"
                      className="w-[112px] h-[85px] object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="px-[32px] h-[70px] flex items-center">
                  <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-normal w-full">
                    Налаженные связи с поставщиками
                  </h3>
                </div>
                <div className="relative px-[32px] h-[3px] flex justify-center">
                  <div className="w-full h-[3px] bg-[rgba(114,181,255,0.25)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center px-[16px] pt-[16px] pb-[10px]">
                  <div className="text-[#5C6570] text-center font-arial text-[15px] font-normal leading-normal">
                    Оригинальные запчасти и европейские аналоги любых
                    комплектующих
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-[350px] h-[269px] rounded-[15px] border-[3px] border-[rgba(108,170,212,0.25)] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.16)] group cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.2)]">
              <div className="h-full flex flex-col">
                <div className="flex justify-center pt-[27px] mb-[20px]">
                  <div className="relative w-[85px] h-[76px]">
                    {/* Default icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822574-2-1b354a?format=webp&width=800"
                      alt="Master work quality icon"
                      className="w-[85px] h-[76px] object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Hover icon */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822574-30f1f6?format=webp&width=800"
                      alt="Master work quality icon colored"
                      className="w-[85px] h-[76px] object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="px-[32px] h-[70px] flex items-center">
                  <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-normal w-full">
                    Качество работы мастера
                  </h3>
                </div>
                <div className="relative px-[32px] h-[3px] flex justify-center">
                  <div className="w-full h-[3px] bg-[rgba(114,181,255,0.25)]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center px-[16px] pt-[16px] pb-[10px]">
                  <div className="text-[#5C6570] text-center font-arial text-[15px] font-normal leading-normal">
                    Высокие стандарты качества и профессионализма в работе
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div
            className="relative h-auto md:h-[218px] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden bg-cover bg-center bg-no-repeat p-6 md:p-8 mt-8 md:mt-12"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/frame-701-405886?format=webp&width=800')",
            }}
          >
            {/* Master Image positioned on left with head sticking out */}
            <div className="absolute -top-24 md:-top-32 left-0 md:-left-4 z-30">
              <img
                src="https://cdn.builder.io/api/v1/assets/b5993ffd3d3f4fc78326f8b01db580e9/image-3822591-40af3a?format=webp&width=800"
                alt="Мастер по ремонту"
                className="w-[160px] md:w-[220px] lg:w-[280px] h-auto object-contain"
              />
            </div>

            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <p className="text-black font-ibm-plex-serif text-[22px] font-normal tracking-[0.88px] mb-6 md:mb-8 max-w-[600px]">
                Оставьте заявку на ремонт и мы с вами свяжемся для уточнения
                деталей
              </p>

              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="flex items-center justify-center gap-3 w-full max-w-[253px] h-[50px] px-[20px] md:px-[38px] py-[15px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] button-shake"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="phone-shake"
                >
                  <path
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white font-ubuntu text-[15px] font-medium">
                  Вызвать мастера
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Service Content Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="w-full px-4">
          <div className="max-w-[889px] mx-auto">
            <div className="flex flex-col justify-center items-center gap-[15px] md:gap-[20px]">
              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h2 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Ремонт стиральных машин с выездом в Одессе — быстро и надёжно
                </h2>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  Если ваша стиральная машина вышла из строя — не стоит
                  переживать. Нет необходимости везти технику в сервис —
                  квалифицированный мастер мо��ет приехать к вам домой и
                  устранить неисправность на месте. Выездной ремонт стиральных
                  машин — это удобно, оперативно и без лишних хлопот.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Выездной ремонт: экономия времени и усилий
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  В условиях занятости многие ценят удобство. Выезд мастера —
                  это не только экономия времени, но и возможность сразу
                  получить консультацию и диагностику. Часто неполадки
                  оказываются незначительными и устраняются прямо на месте без
                  перевозки техники.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Стоимость ремонта: доступные расценки
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  Цена — один из ключевых факторов при выборе исполнителя. Мы
                  предлагаем честные и разумные цены на ремонт стиральных машин
                  в Одессе. Окончательная сумма зависит от сложности работ, но
                  вы всегда будете проинформированы заранее.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Как вызвать мастера на дом
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  При первых признаках сбоя в работе стиральной машины лучше не
                  откладывать — достаточно просто позвонить нам. Мы организуем
                  выезд мастера по ремонту стиральных машин в удобное для вас
                  время. Это позволяет не только сэкономить, но и избежать более
                  серьёзных поломок.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Опытный мастер по ремонту стиральных машин
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  При неисправностях бытовой техники важно обращаться к
                  профессионалам. Наши мастера обладают большим опытом и
                  способны устранить любые поломки — от неисправностей модуля
                  управления до проблем с мотором или системой подачи воды.
                  Ответственный подход и технические знания — залог долгой
                  службы вашей техники после ремонта.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Прозрачный прайс и честные условия
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  Наши клиенты знают: никаких скрытых платежей. Ориентировочные
                  расценки размещены на сайте, а итоговая стоимость озвучивается
                  до начала ремонта. Такой подход избавляет от неожиданностей и
                  формирует доверие.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Ремонт стиральных машин в Одессе — профессионально и
                  качественно
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  Мы ценим доверие наших клиентов и предлагаем услуги по ремонту
                  стиральных машин, соответствующие высоким стандартам. Наши
                  мастера проходят регулярное обучение и владеют современными
                  методиками ремонта.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  От чего зависит цена ремонта стиральной машины
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  Стоимость может варьироваться в зависимости от характера
                  поломки, модели устройства и необходимости замены
                  комплектующих. Мы стремимся предложить выгодные условия, не
                  снижая качества.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[8px] md:gap-[10px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[16px] md:text-[18px] font-normal leading-normal text-center">
                  Заключение
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[13px] md:text-[14px] font-normal leading-normal text-center">
                  Если ваша стиральная машина нуждается в ремонте — не
                  откладывайте. Вызов мастера на дом — это быстро, удобно и
                  эффективно. Мы работаем по всей Одессе, гарантируем качество и
                  доступные цены. Звоните — и ваша техника снова будет как
                  новенькая!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Buyout CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden bg-gradient-to-br from-[#446D99] via-[#72B5FF] to-[#5da3ff] p-8 md:p-12">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h2 className="text-white font-pt-serif text-[24px] md:text-[28px] lg:text-[32px] font-normal mb-4 leading-tight">
                  Выкупим вашу стиральную машину дорого!
                </h2>
                <p className="text-white/90 font-pt-serif text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed max-w-2xl mx-auto">
                  Не выбрасывайте технику — получите деньги за машину, которая
                  больше не нужна. Быстрая оценка и честная цена гарантированы.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/buyout"
                  className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-[#446D99] rounded-full font-ubuntu text-[16px] md:text-[18px] font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 min-w-[240px]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path
                      d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Узнать стоимость выкупа
                </a>

                <div className="text-white/80 font-pt-serif text-[14px] md:text-[16px] italic">
                  Бесплатная оценка за 5 минут
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Index;
