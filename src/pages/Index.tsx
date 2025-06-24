import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WashingMachineDiagnostic } from "@/components/WashingMachineDiagnostic";
import { BrandCarousel } from "@/components/BrandCarousel";
import { FAQSection } from "@/components/FAQSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { CallMasterModal } from "@/components/CallMasterModal";
import { MobileMenu } from "@/components/MobileMenu";
import { MasterProblemsSection } from "@/components/MasterProblemsSection";

const Index = () => {
  const [isCallMasterModalOpen, setIsCallMasterModalOpen] = useState(false);

  const scrollToDiagnosis = () => {
    const element = document.getElementById("online-diagnosis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full">
        <div
          className="w-full h-[48px] sm:h-[58px] md:h-[82px] bg-white/95 md:bg-white/63 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] relative mt-[15px]"
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
                  className="phone-shake"
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

            <p className="text-[12px] sm:text-[12px] md:text-[15px] font-pt-serif font-normal tracking-[0.7px] md:tracking-[0.75px] max-w-[600px] mx-auto px-4 text-center mt-[20px] md:mt-0">
              <span className="text-[#40444F] font-normal">
                Профессиональный ремонт стиральных машин в тот же{" "}
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
            <div className="flex flex-row gap-4 justify-center lg:gap-6 xl:gap-8 mt-[30px] sm:mt-5">
              <div className="flex items-center gap-1 md:gap-2 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[14px] italic tracking-[5%] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/image-3822595-dfa1a4?format=webp&width=800"
                  alt="Быстро"
                  width="14"
                  height="18"
                  className="w-[14px] h-[18px] md:w-[16px] md:h-[20px] object-contain flex-shrink-0"
                />
                Быстро
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[14px] italic tracking-[5%] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/2-0616fc?format=webp&width=800"
                  alt="Качественно"
                  width="20"
                  height="18"
                  className="w-[20px] h-[18px] md:w-[24px] md:h-[20px] object-contain flex-shrink-0"
                />
                Качественно
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[14px] italic tracking-[5%] whitespace-nowrap">
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

          {/* Desktop features at bottom - for large screens from lg+ */}
          <div className="hidden lg:flex flex-row gap-4 md:gap-8 justify-center items-center mb-8">
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
        </div>
      </section>

      {/* Master Problems Section */}
      <MasterProblemsSection />

      {/* Master Rules Section */}
      <section className="py-8 sm:py-10 md:py-16 lg:py-24 relative">
        {/* ТЕСТОВЫЙ КОММЕНТАРИЙ - ВРЕМЯ: ${new Date().toISOString()} */}
        {/* Background image - отзеркаленное и смещенное изображение стиралки */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-80"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/assets/777536c48a5841ebbea4bcebb08ba44c/frame-645-3a9b26?format=webp&width=800')",
            transform: "scaleX(-1) translate(-150px, -200px)",
            backgroundPosition: "left top",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <h2 className="text-center text-[25px] font-pt-serif font-bold tracking-[4%] mb-8 sm:mb-10 md:mb-16 text-[#5D5D5D] max-w-[935px] mx-auto leading-tight px-2">
            Мастер по ремонту стиральных машин соблюдает ряд правил
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8 max-w-[1300px] mx-auto justify-items-center">
            {/* Card 1 - Image Left */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[400px] md:max-w-[622px] overflow-hidden drop-shadow-[7px_6px_10px_rgba(0,0,0,0.2)]">
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-shrink-0 w-full md:w-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/dc3a3566f86e4f86a1ec8c8f84e595f0/div.card-image-container-540a79?format=webp&width=1200"
                    alt="Соблюдает договор и время прибытия на адрес"
                    className="w-full h-[110px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-2 py-2 md:px-6 md:py-0 md:h-full flex flex-col justify-center">
                  <div className="mb-2 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#313131] font-vollkorn text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.2] md:leading-tight text-center md:text-left">
                      Соблюдает договор и время прибытия на адрес
                    </h3>
                  </div>
                  <div className="border-t-[1px] border-[rgba(0,0,0,0.3)] mb-2 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#484848] font-pt-serif text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[1.3] md:leading-relaxed text-center md:text-left max-w-[314px] drop-shadow-sm">
                      Наш Мастер всегда приезжает вовремя и выполняет все
                      договоренности
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Image Right */}
            <div
              className="animate-slide-right bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[400px] md:max-w-[622px] overflow-hidden drop-shadow-[1px_2px_10px_rgba(0,0,0,0.2)]"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-1 px-2 py-2 md:px-6 md:py-0 md:h-full flex flex-col justify-center order-2 md:order-1">
                  <div className="mb-2 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#313131] font-vollkorn text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.2] md:leading-tight text-center md:text-left">
                      Предоставляет гарантию до 24 мес на работу и запчасти
                    </h3>
                  </div>
                  <div className="border-t-[1px] border-[rgba(0,0,0,0.3)] mb-2 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#484848] font-pt-serif text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[1.3] md:leading-relaxed text-center md:text-left max-w-[314px] drop-shadow-sm">
                      Наш Мастер всегда приезжает вовремя и выполняет все
                      договоренности
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/2-27fe87?format=webp&width=1200"
                    alt="Предоставляет гарантию до 24 месяцев на работу и запчасти"
                    className="w-full h-[110px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[400px] md:max-w-[622px] overflow-hidden drop-shadow-[7px_6px_10px_rgba(0,0,0,0.2)]"
            >
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-shrink-0 w-full md:w-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/3-cdecca?format=webp&width=1200"
                    alt="Соблюдает чистоту в квартире работая в бахилах"
                    className="w-full h-[110px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-2 py-2 md:px-6 md:py-0 md:h-full flex flex-col justify-center">
                  <div className="mb-2 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#313131] font-vollkorn text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.2] md:leading-tight text-center md:text-left">
                      Соблюдает чистоту в квартире работая в бахилах
                    </h3>
                  </div>
                  <div className="border-t-[1px] border-[rgba(0,0,0,0.3)] mb-2 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#484848] font-pt-serif text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[1.3] md:leading-relaxed text-center md:text-left max-w-[314px] drop-shadow-sm">
                      Наш Мастер всегда приезжает вовремя и выполняет все
                      договоренности
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[400px] md:max-w-[622px] overflow-hidden drop-shadow-[1px_2px_10px_rgba(0,0,0,0.2)]"
            >
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-1 px-2 py-2 md:px-6 md:py-0 md:h-full flex flex-col justify-center order-2 md:order-1">
                  <div className="mb-2 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#313131] font-vollkorn text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.2] md:leading-tight text-center md:text-left">
                      Работает быстро и качественно
                    </h3>
                  </div>
                  <div className="border-t-[1px] border-[rgba(0,0,0,0.3)] mb-2 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#484848] font-pt-serif text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[1.3] md:leading-relaxed text-center md:text-left max-w-[314px] drop-shadow-sm">
                      Наш Мастер всегда приезжает вовремя и выполняет все
                      договоренности
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/4-c4f7c0?format=webp&width=1200"
                    alt="Работает быстро и качественно"
                    className="w-full h-[110px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Image Left - centered on all screens */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[400px] md:max-w-[622px] overflow-hidden xl:col-span-2 xl:justify-self-center drop-shadow-[7px_6px_10px_rgba(0,0,0,0.2)]"
            >
              <div className="flex flex-col md:flex-row items-center h-auto md:h-[179px]">
                <div className="flex-shrink-0 w-full md:w-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/5-234616?format=webp&width=1200"
                    alt="Опыт мастера по ремонту стиральных машин не менее 5 лет"
                    className="w-full h-[110px] md:w-[264px] md:h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-2 py-2 md:px-6 md:py-0 md:h-full flex flex-col justify-center">
                  <div className="mb-2 md:mb-2 md:h-1/2 flex items-center md:items-end md:pb-2">
                    <h3 className="text-[#313131] font-vollkorn text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.2] md:leading-tight text-center md:text-left">
                      Опыт мастера по ремонту стиральных машин не менее 5 лет
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)] mb-2 md:mb-0"></div>
                  <div className="md:h-1/2 flex items-center md:items-start md:pt-2">
                    <p className="text-[#484848] font-pt-serif text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[1.3] md:leading-relaxed text-center md:text-left max-w-[314px] drop-shadow-sm">
                      Наш Мастер всегда приезжает вовремя и выполняет все
                      договоренности
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Diagnosis & Brands Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
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
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-[25px] font-pt-serif font-bold tracking-[4%] mb-12 md:mb-16 text-[#5D5D5D]">
            Чем мы гордимся
          </h2>

          <div className="max-w-[1200px] mx-auto mb-16 px-4">
            {/* All cards in one responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {/* Card 1 - Modern Equipment (moved to first position) */}
              <div
                className="animate-slide-left w-full max-w-[359px] h-[300px] flex flex-col items-center text-center p-5 bg-white"
                style={{ animationDelay: "0.1s" }}
              >
                {/* Icon section - fixed height */}
                <div className="flex justify-center items-center w-full h-[70px] mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822654-2077cf?format=webp&width=800"
                    alt="Modern equipment icon"
                    className="w-[64px] h-[64px] object-contain"
                  />
                </div>

                {/* Content section - flexible layout */}
                <div className="flex flex-col w-full flex-1">
                  {/* Title section - fixed height */}
                  <div className="h-[55px] flex items-center justify-center mb-3">
                    <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-tight px-4">
                      Современное оборудование по диагностике
                    </h3>
                  </div>

                  {/* Divider - always at same position */}
                  <div className="h-[1px] bg-[#A4A4A4] mb-3"></div>

                  {/* Description - flexible height */}
                  <div className="flex-1 flex items-start">
                    <div className="text-[#484848] text-center font-vollkorn text-[14.5px] font-normal leading-relaxed px-4">
                      Ежемесячно часть от прибыли мы вкладываем в работу и
                      развитие
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Price */}
              <div
                className="animate-slide-right w-full max-w-[359px] h-[300px] flex flex-col items-center text-center p-5 bg-white"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Icon section - fixed height */}
                <div className="flex justify-center items-center w-full h-[70px] mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/group-8-474887?format=webp&width=800"
                    alt="Price tag icon"
                    className="w-[64px] h-[64px] object-contain"
                  />
                </div>

                {/* Content section - flexible layout */}
                <div className="flex flex-col w-full flex-1">
                  {/* Title section - fixed height */}
                  <div className="h-[55px] flex items-center justify-center mb-3">
                    <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-tight px-4">
                      Низкие цены на весь сервисный диапазон услуг
                    </h3>
                  </div>

                  {/* Divider - always at same position */}
                  <div className="h-[1px] bg-[#A4A4A4] mb-3"></div>

                  {/* Description - flexible height */}
                  <div className="flex-1 flex items-start">
                    <div className="text-[#484848] text-center font-vollkorn text-[14.5px] font-normal leading-relaxed px-4">
                      Доступные цены благодаря большому количеству клиентов и
                      оптими��ированным процессам
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Warranty */}
              <div
                className="animate-slide-left w-full max-w-[359px] h-[300px] flex flex-col items-center text-center p-5 bg-white"
                style={{ animationDelay: "0.3s" }}
              >
                {/* Icon section - fixed height */}
                <div className="flex justify-center items-center w-full h-[70px] mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822655-b66f5b?format=webp&width=800"
                    alt="24 month warranty icon"
                    className="w-[64px] h-[64px] object-contain"
                  />
                </div>

                {/* Content section - flexible layout */}
                <div className="flex flex-col w-full flex-1">
                  {/* Title section - fixed height */}
                  <div className="h-[55px] flex items-center justify-center mb-3">
                    <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-tight px-4">
                      Гарантийный ��рок до 24 месяцев
                    </h3>
                  </div>

                  {/* Divider - always at same position */}
                  <div className="h-[1px] bg-[#A4A4A4] mb-3"></div>

                  {/* Description - flexible height */}
                  <div className="flex-1 flex items-start">
                    <div className="text-[#484848] text-center font-vollkorn text-[14.5px] font-normal leading-relaxed px-4">
                      Официальная гарантия на детали и услуги
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Supplier Connections (moved next to warranty) */}
              <div
                className="animate-slide-right w-full max-w-[359px] h-[300px] flex flex-col items-center text-center p-5 bg-white"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Icon section - fixed height */}
                <div className="flex justify-center items-center w-full h-[70px] mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/group-2-4a23b8?format=webp&width=800"
                    alt="Supplier connections icon"
                    className="w-[64px] h-[64px] object-contain"
                  />
                </div>

                {/* Content section - flexible layout */}
                <div className="flex flex-col w-full flex-1">
                  {/* Title section - fixed height */}
                  <div className="h-[55px] flex items-center justify-center mb-3">
                    <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-tight px-4">
                      Налаженные связи с поставщиками
                    </h3>
                  </div>

                  {/* Divider - always at same position */}
                  <div className="h-[1px] bg-[#A4A4A4] mb-3"></div>

                  {/* Description - flexible height */}
                  <div className="flex-1 flex items-start">
                    <div className="text-[#484848] text-center font-vollkorn text-[14.5px] font-normal leading-relaxed px-4">
                      Оригинальные запчасти и европейские аналоги любых
                      комплектующих
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 - Masters (moved to last position) */}
              <div
                className="animate-slide-left w-full max-w-[359px] h-[300px] flex flex-col items-center text-center p-5 bg-white"
                style={{ animationDelay: "0.5s" }}
              >
                {/* Icon section - fixed height */}
                <div className="flex justify-center items-center w-full h-[70px] mb-3">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822653-b68b7d?format=webp&width=800"
                    alt="Master work quality icon"
                    className="w-[64px] h-[64px] object-contain"
                  />
                </div>

                {/* Content section - flexible layout */}
                <div className="flex flex-col w-full flex-1">
                  {/* Title section - fixed height */}
                  <div className="h-[55px] flex items-center justify-center mb-3">
                    <h3 className="text-[#484848] text-center font-vollkorn text-[16px] font-medium leading-tight px-4">
                      Лучшие мастера с многолетним стажем 7-10 лет
                    </h3>
                  </div>

                  {/* Divider - always at same position */}
                  <div className="h-[1px] bg-[#A4A4A4] mb-3"></div>

                  {/* Description - flexible height */}
                  <div className="flex-1 flex items-start">
                    <div className="text-[#484848] text-center font-vollkorn text-[14.5px] font-normal leading-relaxed px-4">
                      Опытные профессионалы с подтвержденной квалификацией
                    </div>
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
                "url('https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/frame-701232-3b1429?format=webp&width=800')",
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <p className="text-black font-ibm-plex-serif text-[22px] font-normal tracking-[0.88px] mb-6 md:mb-8 max-w-[600px]">
                Оставьте заявку на ремонт и мы с вами свяжемся для уточнения
                деталей
              </p>

              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="flex items-center justify-center gap-3 w-full max-w-[253px] h-[50px] px-[16px] md:px-[38px] py-[12px] md:py-[15px] rounded-[60px] bg-transparent border-2 border-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] button-shake"
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
            </div>
          </div>
        </div>
      </section>

      {/* Service Center Content Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="w-full px-4">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-black font-sans text-[16px] md:text-[18px] font-bold text-center mb-6 uppercase tracking-wider">
              РЕМОНТ СТИРАЛЬНЫХ МАШИН В СЕРВИСНОМ ЦЕНТРЕ РЕМСТИРМАШ В О��ЕССЕ
            </h2>

            <div className="text-black font-sans text-[13px] md:text-[14px] font-normal leading-[1.6] text-justify space-y-4">
              <p>
                Стиральная машина — это техника, которая должна работать
                исправно, отжимать, стирать �� радовать стабильностью. Но на
                практике даже самая надёжная техника со временем тр��бу��т
                внимания. Механические детали изнашиваются, электроника дает
                сбои, а бытовая нагрузка делает своё дело. Вот почему ремонт
                стиральных машин в Одессе — это не просто разовая услуга, а
                реальная необходимость для большинства владельцев. Важно
                доверить ремонт проверенным специалистам, а не случайному
                мастеру.
              </p>

              <p>
                Под брендом РемСтирМаш работает команда мастеров, каждый из
                которых занимается ремонтом стиральных машин ��олее десяти лет.
                Мы обучались у специалистов европейских брендов, прошли
                сертификацию, посещали техкурсы и накопили опыт работы с
                техникой любых поколений. Сегодня мы предлагаем ремонт
                стираль��ых машин в Одессе с гарантией, использованием
                оригинальных запчастей и вниманием к каждой детали. В нашем
                распоряжении — профессионально оснащённая мастерская, склад
                комплектующих и выездной сервис. Мы находим даже редкие детали и
                точно знаем, как продлить ��изнь вашей технике.
              </p>

              <div className="space-y-1 my-4">
                <p>1. На рынке ремонта бытовой техники с 2011 года.</p>
                <p>
                  2. Работаем напрямую с поставщиками — без переплат и
                  посредников.
                </p>
                <p>
                  3. В штате только опытные мастера с про��подготовкой и
                  практикой.
                </p>
                <p>
                  4. Использ��ем современное оборудование и точную диагностику.
                </p>
                <p>
                  5. Работаем как с типовыми, так и со сложными неисправностями.
                </p>
              </div>

              <h3 className="text-black font-sans text-[14px] md:text-[16px] font-bold mt-6 mb-3">
                Ремонт стиральных машин в Одессе
              </h3>

              <p>
                Ремонт стиральных машин в Одессе необходим и новым, и давно
                ��спользуемым моделям. Все узлы техники имеют ограниченный
                ресурс, и при активной эксплуатации однажды выходят из строя.
                собрали самые частые причины, по которым клиенты обращаются в
                наш с��рвис:
              </p>

              <div className="space-y-1 my-4">
                <p>
                  1. Машина не сливает воду. Пробл��ма с помпой или засор
                  сливной системы.
                </p>
                <p>
                  2. Шум и вибрации. Часто связано с износом амортизаторов или
                  подшипников.
                </p>
                <p>
                  3. Не запускается стирка. Диагностируем модуль управления или
                  кнопку питания.
                </p>
                <p>
                  4. Течёт корпус. Устраняем утечки, заменяем шланги, манжеты,
                  патрубки.
                </p>
                <p>5. Н�� греет вода. Проверим и заменим ТЭН.</p>
                <p>
                  6. Выдаёт ошибку. Определим код неисправности и устраним
                  причину.
                </p>
                <p>
                  7. Регулярное техобслуживание. Профилактика раз в 12 месяцев
                  продлевает срок службы.
                </p>
              </div>

              <p>
                Мы работаем с брендами LG, Samsung, Bosch, Electrolux,
                Whirlpool, Indesit, Zanussi, Gorenje, AEG, Miele и другими.
                Обслуживаем не только город, но и пригороды. Возможен выезд
                мастера на дом либо доставка машины в мастерскую.
              </p>

              <h3 className="text-black font-sans text-[14px] md:text-[16px] font-bold mt-6 mb-3">
                Мастерская по ремонту и обслуживанию стиральных машин
              </h3>

              <p>
                Сервисный центр РемСтирМаш — это современная про��ессиональная
                мастерская по ремонту стиральных машин в Одессе, где оказываются
                все виды услуг: от быстрой замены деталей до глубокого ремонта с
                полной разборкой. Мы берёмся за любую технику: от массовых
                моделей до премиальных.
              </p>

              <p>
                Вы��олняем замену амортизаторов, подшипников, сливных насосов,
                управляющих модулей, датчиков, ТЭНов. Также восстанавливаем
                герметичность, заменяем стекла и люки, устраняем вибрации и
                посторонние шумы. Проводим ��рофилактику и глубокую чистку
                барабана и бака.
              </p>

              <p>
                Работаем только с гарантией. Каждый ремонт начинается с
                диагностики, после которой мастер подробно объяс��яет, в ��ём
                проблема, и предлагает решение. Пос��е согласования с клиентом
                мы начинаем ремонт.
              </p>

              <p>
                Наша команда ценит доверие клиентов, поэтому относимся к каждой
                машине бережно — без спешки и халтуры. Вы можете выбрать
                стандартный или срочный ремонт (до 48 часов).
              </p>

              <p>
                Ниже на сайте — карта проезда к нашей мастерской. Также вы
                найдёте контактные телефоны службы поддержки. Звоните для
                записи, консультации или если вы заметили стран��ости в работе
                вашей стиральной машины. Мы всё объясним, рассчитаем стоимость и
                возьмёмся за дело.
              </p>

              <p>
                <strong>
                  Ремонт стиральных машин в Одессе с РемСтир��аш — это быстро,
                  надёжно и профессионал��но.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyout Section - moved here */}
      <section className="py-6 md:py-8 bg-white">
        <div className="w-full px-4">
          <div className="max-w-[1200px] mx-auto">
            <div
              className="relative h-auto md:h-[218px] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden bg-cover bg-center bg-no-repeat p-6 md:p-8"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/frame-777232-baec6c')",
              }}
            >
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <p className="text-black font-ibm-plex-serif text-[22px] font-normal tracking-[0.88px] mb-6 md:mb-8 max-w-[600px]">
                  Выкупаем б/у стиральные машины в любом состоянии. Быстрая
                  оценка и честная цена
                </p>

                <a
                  href="/buyout"
                  className="flex items-center justify-center gap-3 w-full max-w-[253px] h-[50px] px-[20px] md:px-[38px] py-[15px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] button-shake hover:bg-[#5FA3E6] transition-colors"
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white font-ubuntu text-[15px] font-medium">
                    Выкуп б/у машин
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection />

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
