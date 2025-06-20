import React, { useState } from "react";
import { Phone } from "lucide-react";
import { CallMasterModal } from "./CallMasterModal";

export const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer
        className="relative w-full h-[680px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/frame-701-338b1d?format=webp&width=800)",
        }}
      >
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex flex-col lg:flex-row justify-between items-start h-full py-12 lg:py-20">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col justify-center lg:ml-[120px] w-full lg:w-[368px] space-y-8">
              <h3
                className="text-[#555C67] text-[28px] lg:text-[32px] font-pt-serif font-normal tracking-[1.28px]"
                style={{ WebkitTextStroke: "0.3px #D2D6DB" }}
              >
                Контакты
              </h3>

              <div className="space-y-6">
                <div className="text-[16px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#555C67]">Тел.: </span>
                  <a
                    href="tel:+380984671352"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (098) 467-13-52
                  </a>
                </div>

                <div className="text-[16px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#555C67]">Тел.: </span>
                  <a
                    href="tel:+380935435666"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (093) 543-56-66
                  </a>
                </div>

                <div className="border-t border-black/22 pt-4">
                  <div className="text-[16px] font-georgia text-[#555C67] tracking-[0.64px] leading-normal">
                    Адрес: пл. Независимости, 1, Одесса, Одесская область, 65000
                  </div>
                </div>

                <div className="text-[16px] font-georgia tracking-[0.64px]">
                  <span className="text-[#555C67]">E-mail: </span>
                  <a
                    href="mailto:remstirmash@gmail.com"
                    className="text-[#72B5FF] hover:text-[#5da3ff] transition-colors"
                  >
                    remstirmash@gmail.com
                  </a>
                </div>

                <div className="text-[16px] font-georgia text-[#555C67] tracking-[0.64px]">
                  Пн-Вс: 9:00-21:00
                </div>
              </div>
            </div>

            {/* Center Section - Call Master Form */}
            <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0 w-full lg:w-auto">
              <div className="text-center lg:text-left mb-8 max-w-[334px]">
                <h3 className="text-[#555C67]/90 text-[18px] lg:text-[20px] font-pt-serif-caption font-normal tracking-[0.8px] leading-normal">
                  Оставьте заявку на бесплатный выезд мастера и диагностику:
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-3 w-[253px] h-[50px] px-[15px] py-[17px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] hover:bg-[#5da3ff] transition-colors"
              >
                <Phone size={20} className="text-white" strokeWidth={2} />
                <span className="text-white font-ubuntu text-[15px] font-medium">
                  Вызвать мастера
                </span>
              </button>
            </div>

            {/* Right Section - Navigation */}
            <div className="flex flex-col space-y-8 mt-8 lg:mt-0 lg:mr-[120px] w-full lg:w-[192px]">
              <nav className="flex flex-col space-y-8">
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Выкуп б/у машин
                </a>
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Отзывы
                </a>
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
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
