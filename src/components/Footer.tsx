import React, { useState } from "react";
import { Phone } from "lucide-react";
import { CallMasterModal } from "./CallMasterModal";

export const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Шаг 3: Добавляем весь наш текст сверху на картинку с волнами */}
      <footer className="relative w-full">
        {/* Изображение с волнами как обычный img элемент */}
        <img
          src="https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/232232-d235b0"
          alt="Wave background"
          className="w-full h-auto block"
        />

        {/* Контент поверх изображения */}
        <div className="absolute inset-0 w-full h-full">
          {/* Top section - Call Master Form (поднято вверх) */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 lg:mb-8 max-w-[334px]">
                <h3 className="text-[#555C67]/90 text-[16px] lg:text-[20px] font-pt-serif-caption font-normal tracking-[0.8px] leading-normal">
                  Оставьте заявку на бесплатный выезд мастера и диагностику:
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 lg:gap-3 w-[230px] lg:w-[253px] h-[45px] lg:h-[50px] px-[12px] lg:px-[15px] py-[14px] lg:py-[17px] rounded-[60px] bg-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] hover:bg-[#5da3ff] transition-colors button-shake"
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
          </div>

          {/* Left Section - Contact Info (подвинуто левее) */}
          <div className="absolute top-8 left-4 lg:left-8">
            <div className="flex flex-col justify-start w-full lg:w-[368px] space-y-6 lg:space-y-8">
              <h3
                className="text-[#555C67] text-[24px] lg:text-[32px] font-pt-serif font-normal tracking-[1.28px]"
                style={{ WebkitTextStroke: "0.3px #D2D6DB" }}
              >
                Контакты
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div className="text-[15px] lg:text-[16px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#555C67]">Тел.: </span>
                  <a
                    href="tel:+380984671352"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (098) 467-13-52
                  </a>
                </div>

                <div className="text-[15px] lg:text-[16px] font-pt-serif-caption tracking-[0.64px]">
                  <span className="text-[#555C67]">Тел.: </span>
                  <a
                    href="tel:+380935435666"
                    className="text-[#72B5FF] underline hover:text-[#5da3ff] transition-colors"
                  >
                    +38 (093) 543-56-66
                  </a>
                </div>

                <div className="border-t border-black/22 pt-3 lg:pt-4">
                  <div className="text-[15px] lg:text-[16px] font-georgia text-[#555C67] tracking-[0.64px] leading-normal">
                    Адрес: пл. Независимости, 1, Одесса, Одесская область, 65000
                  </div>
                </div>

                <div className="text-[15px] lg:text-[16px] font-georgia tracking-[0.64px]">
                  <span className="text-[#555C67]">E-mail: </span>
                  <a
                    href="mailto:remstirmash@gmail.com"
                    className="text-[#72B5FF] hover:text-[#5da3ff] transition-colors"
                  >
                    remstirmash@gmail.com
                  </a>
                </div>

                <div className="text-[15px] lg:text-[16px] font-georgia text-[#555C67] tracking-[0.64px]">
                  Пн-Вс: 9:00-21:00
                </div>
              </div>
            </div>
          </div>

          {/* Bottom center section - Navigation (опущено вниз посредине) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-center">
              <nav className="flex flex-col space-y-3 lg:space-y-4 items-center">
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Выкуп б/у машин
                </a>
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
                >
                  Отзывы
                </a>
                <a
                  href="#"
                  className="text-[#555C67] font-georgia text-[15px] lg:text-[16px] font-normal tracking-[0.64px] hover:text-[#72B5FF] transition-colors"
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
