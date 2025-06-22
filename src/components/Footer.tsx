import React, { useState } from "react";
import { Phone } from "lucide-react";
import { CallMasterModal } from "./CallMasterModal";

export const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile footer for screens < 1280px */}
      <footer
        className="hidden max-xl:block relative w-full bg-cover bg-center bg-no-repeat mt-8"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/assets/ab9c320785cc40dbb2ad955655018371/frame-70123232-588194?format=webp&width=800)",
          minHeight: "400px",
        }}
      >
        {/* Content overlay for small screens */}
        <div className="w-full h-full px-4 py-4 flex items-start justify-center min-h-[400px] pt-6">
          <div className="flex flex-col justify-start items-center gap-3 max-w-sm mx-auto text-center w-full">
            {/* Contact Information */}
            <div className="space-y-3">
              <h3
                className="text-[#626B78] text-[18px] font-pt-serif font-normal tracking-[1.28px] mb-3"
                style={{ WebkitTextStroke: "0.3px #D2D6DB" }}
              >
                Контакты
              </h3>

              <div className="space-y-3">
                <div className="text-[14px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#626B78]">Тел.: </span>
                  <a
                    href="tel:+380984671352"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (098) 467-13-52
                  </a>
                </div>

                <div className="text-[14px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#626B78]">Тел.: </span>
                  <a
                    href="tel:+380935435666"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (093) 543-56-66
                  </a>
                </div>

                <div className="text-[14px] font-georgia text-[#626B78] tracking-[0.64px] leading-normal">
                  E-mail:{" "}
                  <a
                    href="mailto:remstirmash@gmail.com"
                    className="text-[#72B5FF] hover:text-[#5da3ff] transition-colors"
                  >
                    remstirmash@gmail.com
                  </a>
                </div>

                <div className="text-[14px] font-georgia text-[#626B78] tracking-[0.64px]">
                  Пн-Вс: 9:00-21:00
                </div>
              </div>
            </div>

            {/* Call to Action - Simplified */}
            <div className="space-y-2 flex flex-col items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 w-[180px] h-[36px] px-[10px] py-[10px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] hover:bg-[#5da3ff] transition-colors button-shake mx-auto"
              >
                <Phone size={14} className="text-white" strokeWidth={2} />
                <span className="text-white font-ubuntu text-[12px] font-medium">
                  Вызвать мастера
                </span>
              </button>
            </div>

            {/* Navigation - Mobile visible (horizontal centered layout) */}
            <div className="w-full mt-4">
              <nav className="flex flex-row justify-center items-center gap-4 sm:gap-6 w-full px-2">
                <a
                  href="/"
                  className="text-[#626B78] font-georgia text-[13px] sm:text-[15px] font-normal tracking-[0.4px] hover:text-[#72B5FF] transition-colors text-center py-1 whitespace-nowrap"
                >
                  Главная
                </a>
                <a
                  href="/buyout"
                  className="text-[#626B78] font-georgia text-[11px] sm:text-[15px] font-normal tracking-[0.4px] hover:text-[#72B5FF] transition-colors text-center py-1 whitespace-nowrap"
                >
                  Выкуп б/у машин
                </a>
                <a
                  href="/articles"
                  className="text-[#626B78] font-georgia text-[13px] sm:text-[15px] font-normal tracking-[0.4px] hover:text-[#72B5FF] transition-colors text-center py-1 whitespace-nowrap"
                >
                  Статьи
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      {/* Full footer for screens >= 1200px */}
      <footer className="hidden xl:block relative w-full h-[500px] overflow-hidden">
        {/* Background image */}
        <img
          src="https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/232232-d235b0"
          alt="Wave background"
          className="absolute inset-0 w-full h-full object-fill"
        />

        {/* Content overlay with CSS Grid */}
        <div className="relative w-full h-full px-4 md:px-8 lg:px-16 z-10">
          <div className="h-full grid grid-cols-3 gap-4 lg:gap-6 py-12 max-w-[1100px] mx-auto items-center">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col justify-start items-start text-left">
              <h3
                className="text-[#626B78] text-[24px] lg:text-[32px] font-pt-serif font-normal tracking-[1.28px] mb-6 lg:mb-8"
                style={{ WebkitTextStroke: "0.3px #D2D6DB" }}
              >
                Контакты
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div className="text-[15px] lg:text-[16px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#626B78]">Тел.: </span>
                  <a
                    href="tel:+380984671352"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (098) 467-13-52
                  </a>
                </div>

                <div className="text-[15px] lg:text-[16px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#626B78]">Тел.: </span>
                  <a
                    href="tel:+380935435666"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (093) 543-56-66
                  </a>
                </div>

                <div className="border-t border-black/22 pt-3 lg:pt-4">
                  <div className="text-[15px] lg:text-[16px] font-georgia text-[#626B78] tracking-[0.64px] leading-normal">
                    Адрес: пл. Независимости, 1, Одесса, Одесская область, 65000
                  </div>
                </div>

                <div className="text-[15px] lg:text-[16px] font-georgia tracking-[0.64px]">
                  <span className="text-[#626B78]">E-mail: </span>
                  <a
                    href="mailto:remstirmash@gmail.com"
                    className="text-[#72B5FF] hover:text-[#5da3ff] transition-colors"
                  >
                    remstirmash@gmail.com
                  </a>
                </div>

                <div className="text-[15px] lg:text-[16px] font-georgia text-[#626B78] tracking-[0.64px]">
                  Пн-Вс: 9:00-21:00
                </div>
              </div>
            </div>

            {/* Center Column - Call to Action */}
            <div className="flex flex-col justify-center items-center text-center">
              <div className="mb-6 lg:mb-8 max-w-[334px]">
                <h3 className="text-[#626B78]/90 text-[16px] lg:text-[20px] font-pt-serif-caption font-normal tracking-[0.8px] leading-normal">
                  Оставьте заявку на бесплатный выезд мастера и диагностику
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 lg:gap-3 w-[230px] lg:w-[253px] h-[45px] lg:h-[50px] px-[12px] lg:px-[15px] py-[14px] lg:py-[17px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] hover:bg-[#5da3ff] transition-colors button-shake mx-auto"
              >
                <Phone
                  size={18}
                  className="text-white lg:w-[20px] lg:h-[20px]"
                  strokeWidth={2}
                />
                <span className="text-white font-ubuntu text-[14px] lg:text-[15px] font-medium">
                  Вызвать мастера
                </span>
              </button>
            </div>

            {/* Right Column - Navigation */}
            <div className="flex flex-col justify-start items-end text-right md:items-end md:text-right pr-8 lg:pr-12">
              <nav className="flex flex-col space-y-3 lg:space-y-4 items-end">
                <a
                  href="/"
                  className="text-[#626B78] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Главная
                </a>
                <a
                  href="/buyout"
                  className="text-[#626B78] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Выкуп б/у машин
                </a>
                <a
                  href="/articles"
                  className="text-[#626B78] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Статьи
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <CallMasterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
