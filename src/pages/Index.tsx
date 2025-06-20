import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WashingMachineDiagnostic } from "@/components/WashingMachineDiagnostic";
import { BrandCarousel } from "@/components/BrandCarousel";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CallMasterModal } from "@/components/CallMasterModal";

const Index = () => {
  const [isCallMasterModalOpen, setIsCallMasterModalOpen] =
    React.useState(false);

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
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              <div className="w-[35px] h-[34px] sm:w-[40px] sm:h-[39px] md:w-[47px] md:h-[46px] bg-[rgba(156,188,183,0.67)] flex-shrink-0"></div>
              <div className="font-ibm-plex-serif text-[14px] sm:text-[16px] md:text-[24px] font-normal leading-tight bg-gradient-to-r from-[#7F90A6] to-[#C2B4FC] bg-clip-text text-transparent whitespace-nowrap">
                Ремонт машинок
              </div>
            </div>

            {/* Mobile Phone Button */}
            <div className="flex lg:hidden">
              <a
                href="tel:+380671234567"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] border border-[rgba(0,0,0,0.18)] bg-white"
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
            </div>

            {/* Navigation - Hidden on mobile and tablet */}
            <nav className="hidden xl:flex items-center gap-[39px] flex-1 justify-center">
              <a
                href="#"
                className="text-[#626B78] font-ibm-plex-serif text-[17px] font-normal hover:text-[#72B5FF] transition-colors whitespace-nowrap"
              >
                Главная
              </a>
              <a
                href="#"
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

            {/* Contact Info - Desktop only */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-shrink-0">
              <div className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[14px] xl:text-[17px] font-normal whitespace-nowrap">
                Пн-Вс: 9:00-21:00
              </div>
              <div className="flex items-center justify-center gap-[10px] w-[160px] xl:w-[185px] h-[42px] px-[10px] py-[10px] rounded-[10px] border border-[rgba(0,0,0,0.18)] flex-shrink-0">
                <span className="text-[#626B78] font-ibm-plex-serif text-[14px] xl:text-[17px] font-normal whitespace-nowrap">
                  +38 (067) 123-45-67
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[650px] overflow-hidden">
        <AuroraBackground className="absolute inset-0">
          <div className="absolute inset-0" />
        </AuroraBackground>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/3a59cf27eda3ab0d95b23a26d9b81926cdadd41f?placeholderIfAbsent=true')",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start items-center text-center pt-8 md:pt-16">
          {/* Text Content */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-[20px] sm:text-[24px] md:text-[38px] font-pt-serif-caption font-normal tracking-[1.0px] md:tracking-[1.52px] mb-4 md:mb-8 max-w-[803px] leading-tight">
              <span className="text-[#40444F] block">
                Ремонт cтиральных машин
              </span>
              <span className="text-[#72B5FF] block">Одесса</span>
            </h1>

            <p className="text-[13px] sm:text-[14px] md:text-[15px] font-pt-serif font-normal tracking-[0.75px] max-w-[600px] mx-auto px-4 mb-6 md:mb-0">
              <span className="text-[#40444F]">
                Проффессиональный ремонт стиральных машин в тот же{" "}
              </span>
              <span className="text-[#72B5FF]">день!</span>
            </p>
          </div>

          {/* Main Content Layout - Following Figma arrangement */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12 w-full">
            {/* Washing Machine Loader - Left side on desktop */}
            <div className="order-2 lg:order-1">
              <div className="loader"></div>
            </div>

            {/* Call to Action Buttons - Right side on desktop */}
            <div className="flex flex-col gap-4 w-full max-w-[253px] order-1 lg:order-2">
              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="flex items-center justify-center gap-3 w-full h-[45px] md:h-[50px] px-[20px] md:px-[38px] py-[15px] rounded-[60px] bg-transparent border-2 border-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)]"
              >
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="phone-shake"
                >
                  <path
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                    stroke="#72B5FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#72B5FF] font-ubuntu text-[14px] md:text-[15px] font-medium">
                  Вызвать мастера
                </span>
              </button>

              <button className="flex items-center justify-center gap-3 w-full h-[45px] md:h-[50px] px-[20px] md:px-[38px] py-[15px] rounded-[60px] bg-white shadow-[8px_12px_4px_0px_rgba(0,0,0,0.09)]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="#5E5C59"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[rgba(76,76,76,0.9)] font-ubuntu text-[14px] md:text-[15px] font-medium">
                  Посмотреть цены
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions - Bottom as in Figma */}
        <div className="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-row gap-4 md:gap-8 z-20 px-4">
          <div className="flex items-center gap-3 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[15px] italic tracking-[5%]">
            <img
              src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/image-3822595-dfa1a4?format=webp&width=800"
              alt="Быстро"
              width="20"
              height="25"
              className="w-[20px] h-[25px] md:w-[25px] md:h-[31px] object-contain"
            />
            Быстро
          </div>
          <div className="flex items-center gap-3 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[15px] italic tracking-[5%]">
            <img
              src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/2-0616fc?format=webp&width=800"
              alt="Качественно"
              width="30"
              height="25"
              className="w-[30px] h-[25px] md:w-[37px] md:h-[31px] object-contain"
            />
            Качественно
          </div>
          <div className="flex items-center gap-3 text-[rgba(76,76,76,0.9)] font-pt-serif text-[12px] md:text-[15px] italic tracking-[5%]">
            <img
              src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/3-470ac4?format=webp&width=800"
              alt="С гарантией"
              width="22"
              height="24"
              className="w-[22px] h-[24px] md:w-[27px] md:h-[30px] object-contain"
            />
            С гарантией
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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-16 max-w-[1300px] mx-auto justify-items-center">
            {/* Card 1 - Image Left */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] h-[179px] overflow-hidden">
              <div className="h-full flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/image-771bab?format=webp&width=800"
                    alt="Соблюдает договор и время прибытия на адрес"
                    className="w-[264px] h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-3 sm:px-4 md:px-6 h-full flex flex-col justify-center">
                  <div className="h-1/2 flex items-end pb-1 sm:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-tight">
                      Соблюдает договор и время прибытия на адрес
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)]"></div>
                  <div className="h-1/2 flex items-start pt-1 sm:pt-2">
                    <p className="text-[#5C6570] text-[11px] sm:text-[12px] md:text-[14px] font-normal leading-tight sm:leading-relaxed">
                      Наш мастер всегда приезжает вовремя и в назначенное время
                      согласно договоренности
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Image Right */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] h-[179px] overflow-hidden">
              <div className="h-full flex items-center">
                <div className="flex-1 px-3 sm:px-4 md:px-6 h-full flex flex-col justify-center">
                  <div className="h-1/2 flex items-end pb-1 sm:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-tight">
                      Предоставляет гарантию до 24 мес на работу и запчасти
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)]"></div>
                  <div className="h-1/2 flex items-start pt-1 sm:pt-2">
                    <p className="text-[#5C6570] text-[11px] sm:text-[12px] md:text-[14px] font-normal leading-tight sm:leading-relaxed">
                      Официальная гарантия на все виды ремонта работ и
                      установленные детали
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/2-27fe87?format=webp&width=800"
                    alt="Предоставляет гарантию до 24 мес на работу и запчасти"
                    className="w-[264px] h-[179px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Image Left */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] h-[179px] overflow-hidden">
              <div className="h-full flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/3-cdecca?format=webp&width=800"
                    alt="Соблюдает чистоту в квартире работая в бахилах"
                    className="w-[264px] h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-3 sm:px-4 md:px-6 h-full flex flex-col justify-center">
                  <div className="h-1/2 flex items-end pb-1 sm:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-tight">
                      Соблюдает чистоту в квартире работая в бахилах
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)]"></div>
                  <div className="h-1/2 flex items-start pt-1 sm:pt-2">
                    <p className="text-[#5C6570] text-[11px] sm:text-[12px] md:text-[14px] font-normal leading-tight sm:leading-relaxed">
                      Аккуратная работа без повреждений мебели и предметов
                      интерьера
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Image Right */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] h-[179px] overflow-hidden">
              <div className="h-full flex items-center">
                <div className="flex-1 px-3 sm:px-4 md:px-6 h-full flex flex-col justify-center">
                  <div className="h-1/2 flex items-end pb-1 sm:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-tight">
                      Работает быстро и качественно
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)]"></div>
                  <div className="h-1/2 flex items-start pt-1 sm:pt-2">
                    <p className="text-[#5C6570] text-[11px] sm:text-[12px] md:text-[14px] font-normal leading-tight sm:leading-relaxed">
                      Эффективное решение проблем и качественная работа мастера
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/4-c4f7c0?format=webp&width=800"
                    alt="Работает быстро и качественно"
                    className="w-[264px] h-[179px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 5 - Image Left - centered on all screens */}
            <div className="bg-white rounded-[15px] shadow-lg border-[3px] border-[rgba(74,157,255,0.2)] w-full max-w-[622px] h-[179px] overflow-hidden xl:col-span-2 xl:justify-self-center">
              <div className="h-full flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/5-234616?format=webp&width=800"
                    alt="Опыт мастера по ремонту стиральных машин не менее 5 лет"
                    className="w-[264px] h-[179px] object-cover"
                  />
                </div>
                <div className="flex-1 px-3 sm:px-4 md:px-6 h-full flex flex-col justify-center">
                  <div className="h-1/2 flex items-end pb-1 sm:pb-2">
                    <h3 className="text-[#484848] font-vollkorn text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-tight">
                      Опыт мастера по ремонту стиральных машин не менее 5 лет
                    </h3>
                  </div>
                  <div className="border-t-[3px] border-[rgba(114,181,255,0.24)]"></div>
                  <div className="h-1/2 flex items-start pt-1 sm:pt-2">
                    <p className="text-[#5C6570] text-[11px] sm:text-[12px] md:text-[14px] font-normal leading-tight sm:leading-relaxed">
                      Большой опыт работы позволяет быстро находить и устранять
                      любые поломки
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Card 1 */}
            <div className="w-full max-w-[371px] h-auto md:h-[269px] mx-auto rounded-[15px] border-3 border-[rgba(108,170,212,0.25)] bg-white shadow-lg">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex justify-center mb-4 md:mb-6">
                  <img
                    src=""
                    alt=""
                    className="w-[56px] md:w-[71px] h-[47px] md:h-[59px] bg-gray-200 rounded"
                  />
                </div>
                <h3 className="text-[#484848] text-center font-vollkorn text-[14px] md:text-[16px] font-medium mb-3 md:mb-4">
                  Лучшие мастера с многолетним стажем 7-10 лет
                </h3>
                <div className="flex-1 flex items-center justify-center border-t border-[#A4A4A4] pt-3 md:pt-4">
                  <p className="text-[#5C6570] text-center font-arial text-[13px] md:text-[15px] font-normal">
                    Опытные профессионалы с подтвержденной квалификацией
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[371px] h-auto md:h-[269px] mx-auto rounded-[15px] border-3 border-[rgba(108,170,212,0.25)] bg-white shadow-lg">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex justify-center mb-4 md:mb-6">
                  <img
                    src=""
                    alt=""
                    className="w-[51px] md:w-[64px] h-[50px] md:h-[63px] bg-gray-200 rounded"
                  />
                </div>
                <h3 className="text-[#484848] text-center font-vollkorn text-[14px] md:text-[16px] font-medium mb-3 md:mb-4">
                  Современное оборудование по диагностике
                </h3>
                <div className="flex-1 flex items-center justify-center border-t border-[#A4A4A4] pt-3 md:pt-4">
                  <p className="text-[#5C6570] text-center font-arial text-[13px] md:text-[15px] font-normal">
                    Ежемесячно часть от прибыли мы вкладываем в работу и
                    развитие
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[371px] h-auto md:h-[269px] mx-auto rounded-[15px] border-3 border-[rgba(108,170,212,0.25)] bg-white shadow-lg">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex justify-center mb-4 md:mb-6">
                  <img
                    src=""
                    alt=""
                    className="w-[68px] md:w-[85px] h-[61px] md:h-[76px] bg-gray-200 rounded"
                  />
                </div>
                <h3 className="text-[#484848] text-center font-vollkorn text-[14px] md:text-[16px] font-medium mb-3 md:mb-4">
                  Гарантийный срок до 24 месяцев
                </h3>
                <div className="flex-1 flex items-center justify-center border-t border-[#A4A4A4] pt-3 md:pt-4">
                  <p className="text-[#5C6570] text-center font-arial text-[13px] md:text-[15px] font-normal">
                    Официальная гарантия на детали и услуги
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-[371px] h-auto md:h-[269px] mx-auto rounded-[15px] border-3 border-[rgba(108,170,212,0.25)] bg-white shadow-lg">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex justify-center mb-4 md:mb-6">
                  <img
                    src=""
                    alt=""
                    className="w-[89px] md:w-[112px] h-[68px] md:h-[85px] bg-gray-200 rounded"
                  />
                </div>
                <h3 className="text-[#484848] text-center font-vollkorn text-[14px] md:text-[16px] font-medium mb-3 md:mb-4">
                  Налаженные связи с поставщиками
                </h3>
                <div className="flex-1 flex items-center justify-center border-t border-[#A4A4A4] pt-3 md:pt-4">
                  <p className="text-[#5C6570] text-center font-arial text-[13px] md:text-[15px] font-normal">
                    Оригинальные запчасти и европейские аналоги любых
                    комплектующих
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-[371px] h-auto md:h-[269px] mx-auto rounded-[15px] border-3 border-[rgba(108,170,212,0.25)] bg-white shadow-lg">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex justify-center mb-4 md:mb-6">
                  <img
                    src=""
                    alt=""
                    className="w-[68px] md:w-[85px] h-[61px] md:h-[76px] bg-gray-200 rounded"
                  />
                </div>
                <h3 className="text-[#484848] text-center font-vollkorn text-[14px] md:text-[16px] font-medium mb-3 md:mb-4">
                  Качество работы мастера
                </h3>
                <div className="flex-1 flex items-center justify-center border-t border-[#A4A4A4] pt-3 md:pt-4">
                  <p className="text-[#5C6570] text-center font-arial text-[13px] md:text-[15px] font-normal">
                    Высокие стандарты качества и профессионализма в работе
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="w-full max-w-[371px] h-auto md:h-[269px] mx-auto rounded-[15px] border-3 border-[rgba(108,170,212,0.25)] bg-white shadow-lg">
              <div className="p-4 md:p-6 h-full flex flex-col justify-center items-center">
                <div className="text-[#484848] text-center font-vollkorn text-[14px] md:text-[16px] font-medium">
                  Дополнительные преимущества
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="relative h-auto md:h-[218px] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 p-6 md:p-8">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <p className="text-white font-ibm-plex-serif text-[16px] md:text-[18px] lg:text-[22px] font-normal tracking-[0.88px] mb-6 md:mb-8 max-w-[600px]">
                Оставьте заявку на ремонт и мы с вами свяжемся для уточнения
                деталей
              </p>

              <button
                onClick={() => setIsCallMasterModalOpen(true)}
                className="flex items-center justify-center gap-3 w-full max-w-[253px] h-[50px] px-[20px] md:px-[38px] py-[15px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)]"
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
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-[889px] mx-auto">
            <div className="flex flex-col justify-center items-center gap-[35px]">
              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h2 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Ремонт стиральных машин с выездом в Одессе — быстро и надёжно
                </h2>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  Если ваша стиральная машина вышла из строя — не стоит
                  переживать. Нет необходимости везт�� технику в сервис —
                  квалифицированный мастер может приехать к вам домой и
                  устранить неисправность на месте. Выездной ремонт стиральных
                  машин — это удобно, оперативно и без лишних хлопот.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Выездной ремонт: экономия времени и усилий
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  В условиях занятости многие ценят удобство. Выезд мастера —
                  это не только экономия времени, но и возможность сразу
                  получить консультацию и диагностику. Часто неполадки
                  оказываются незначительными и устраняются прямо на месте без
                  перевозки техники.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Стоимость ремонта: доступные расценки
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  Цена — один из ключевых факторов при выборе исполнителя. Мы
                  предлагаем честные и разумные цены на ремонт стиральных машин
                  в Одессе. Окончательная сумма зависит от сложности работ, но
                  вы всегда будете проинформированы заранее.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Как вызвать мастера на дом
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  При первых признаках сбоя в работе стиральной машины лучше не
                  откладывать — достаточно просто позвонить нам. Мы организуем
                  выезд мастера по ремонту стиральных машин в удобное для вас
                  время. Это позволяет не только сэкономить, но и избежать более
                  серьёзных поломок.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Опытный мастер по ремонту стиральных машин
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  При неисправностях бытовой техники важно обращаться к
                  профессионалам. Наши мастера обладают большим опытом и
                  способны устранить любые поломки — от неисправностей модуля
                  управления до проблем с мотором или системой подачи воды.
                  Ответственный подход и технические знания — залог долгой
                  службы вашей техники после ремонта.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Прозрачный прайс и честные условия
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  Наши клиенты знают: никаких скрытых платежей. Ориентировочные
                  расценки размещены на сайте, а итоговая стоимость озвучивается
                  до начала ремонта. Такой подход избавляет от неожиданностей и
                  формирует доверие.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Ремонт стиральных машин в Одессе — профессионально и
                  качественно
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  Мы ценим доверие наших клиентов и предлагаем услуги по ремонту
                  стиральных машин, соответствующие высоким стандартам. Наши
                  мастера проходят регулярное обучение и владеют современными
                  методиками ремонта.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  От чего зависит цена ремонта стиральной машины
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
                  Стоимость может варьироваться в зависимости от характера
                  поломки, модели устройства и необходимости замены
                  комплектующих. Мы стремимся предложить выгодные условия, не
                  снижая качества.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-[20px] w-full">
                <h3 className="text-[#5E5959] font-pt-serif-caption text-[20px] font-normal leading-normal text-center">
                  Заключение
                </h3>
                <p className="text-[#4C4C4C] font-pt-serif text-[16px] font-normal leading-normal text-center">
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
