import React, { useState } from "react";
import { RepairDetailsModal } from "./RepairDetailsModal";

interface ProblemCard {
  title: string;
  description: string;
  articleId: string;
  iconUrl: string;
}

const allProblems: ProblemCard[] = [
  {
    title: "Не сливает воду",
    description:
      "Это распространённая проблема, связанная с несколькими возможными причинами. Это может быть мотор или неисправный выключатель крышки.",
    articleId: "ne-slivaet-vodu",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/810f7024ee0344baaafca74e1ef4c728/group-236-cf2c9b?format=webp&width=800",
  },
  {
    title: "Не включается",
    description:
      "Это может быть вызвано засорённым шлангом или проблемой с насосом, который, возможно, придётся заменить.",
    articleId: "ne-vklyuchaetsya",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/810f7024ee0344baaafca74e1ef4c728/image-3822682-0e6728?format=webp&width=800",
  },
  {
    title: "Не крутит барабан",
    description:
      "Существует несколько признаков того, что у вашей машины проблемы с мотором. Один из них — это если бельё не двигается во время стирки.",
    articleId: "ne-krutit-baraban",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/810f7024ee0344baaafca74e1ef4c728/image-3822683-ac5df0?format=webp&width=800",
  },
  {
    title: "Протекает",
    description:
      "Одежда остаётся влажной после отжима? Возможно, нужно проверить сливной шланг или вентиляцию",
    articleId: "protekaet-voda",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/810f7024ee0344baaafca74e1ef4c728/group-235-95a6de?format=webp&width=800",
  },
  {
    title: "Сильно шумит при отжиме",
    description:
      "Если вы всё проверили, а один или несколько компонентов всё ещё не работают, возможно, проблема в электрике.",
    articleId: "shumit-pri-otzhime",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/810f7024ee0344baaafca74e1ef4c728/image-3822684-6d1a7c?format=webp&width=800",
  },
];

const BackgroundSVG: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1910 920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100%" height="100%" fill="url(#paint0_linear_6396_1083)" />
      <defs>
        <linearGradient
          id="paint0_linear_6396_1083"
          x1="956"
          y1="-7.13079e-05"
          x2="1331"
          y2="834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D7E8FA" stopOpacity="0.54" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const MasterProblemsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null,
  );

  const handleOpenModal = (articleId: string) => {
    setSelectedArticleId(articleId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticleId(null);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <BackgroundSVG />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Company Description */}
        <div
          className="text-center text-[#40444F] mx-auto mb-12 md:mb-16 px-4"
          style={{
            maxWidth: "1000px",
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "1.4",
            letterSpacing: "1%",
          }}
        >
          В <span className="text-[#72B5FF]">РемСтирМаш</span> мы заботимся о
          надёжной работе вашей техники во всех уголках Одессы. Профессионально
          ус��раняем любые неисправности стиральных машин — от самых простых до
          самых сложных. Просто позвоните или оставьте заявку, и мы вам
          перезвоним.
        </div>

        {/* Wave Background - Adaptive and Stable */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            top: "calc(45% - 13px)", // Опускаем на 12px вниз от предыдущей позиции
            left: "50%",
            width: "100vw",
            height: "90%",
            transform: "translateX(-50%)",
            zIndex: -20,
          }}
        >
          {/* Десктопная волна */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1910 514"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full hidden md:block"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-4 517V71.6489C83.5514 124.852 171.103 178.056 311.671 132.217C452.239 86.3774 630.418 -8.41736 781.093 0.600469C931.769 9.61829 1054.94 122.449 1157.46 160.719C1259.97 198.989 1357.23 112.613 1482.45 76.9931C1607.67 41.3736 1760.83 56.5113 1914 71.6489V517H-4Z"
              fill="url(#paint0_linear_6454_986_desktop)"
              fillOpacity="0.33"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6454_986_desktop"
                x1="-4"
                y1="258.5"
                x2="1914"
                y2="258.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#72B5FF" />
                <stop offset="0.471154" stopColor="#5D93CF" />
                <stop offset="1" stopColor="#83B2E6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Мобильная волна с более выраженными изгибами */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block md:hidden"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-10 300V90C30 130 70 170 120 120C170 70 220 30 270 60C320 90 360 140 400 90V300H-10Z"
              fill="url(#paint0_linear_6454_986_mobile)"
              fillOpacity="0.33"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6454_986_mobile"
                x1="-10"
                y1="150"
                x2="400"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#72B5FF" />
                <stop offset="0.471154" stopColor="#5D93CF" />
                <stop offset="1" stopColor="#83B2E6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Дополнительный градиент для сглаживания на мобильных */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(114,181,255,0.1) 0%, rgba(93,147,207,0.2) 47%, rgba(131,178,230,0.1) 100%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>

        {/* Circular Problems - First 3 */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-[60px] mb-8 md:mb-10">
          {allProblems.slice(0, 3).map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-full shadow-[0px_-3px_29.8px_0px_rgba(0,0,0,0.34)] relative
                         w-[191px] h-[191px] p-[23px_10px_10px_10px] gap-[10px]"
            >
              {/* SVG Border with Linear Gradient */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1, opacity: 0.6 }}
              >
                <defs>
                  <linearGradient
                    id={`borderGradient${index}`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(114,181,255,1)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="calc(50% - 1.5px)"
                  fill="none"
                  stroke={`url(#borderGradient${index})`}
                  strokeWidth="3"
                />
              </svg>

              <div className="flex flex-col items-center w-full h-full relative z-10">
                {/* Icon - 20px from top */}
                <img
                  src={problem.iconUrl}
                  alt={problem.title}
                  className="w-[50px] h-[50px] rounded-[85px] absolute top-[20px]"
                />

                {/* Title - centered vertically */}
                <div
                  className={`text-[#40444F] text-center tracking-[0.64px] absolute top-1/2 transform -translate-y-1/2 ${
                    problem.title === "Не крутит барабан"
                      ? "w-[150px]"
                      : "w-[130px]"
                  }`}
                  style={{
                    fontFamily:
                      "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "700",
                    lineHeight:
                      problem.title === "Не крутит барабан" ? "1.1" : "normal",
                  }}
                >
                  {problem.title}
                </div>

                {/* Learn More Button - Fixed at bottom */}
                <div
                  className="text-[#72B5FF] text-center tracking-[0.56px] cursor-pointer w-full absolute bottom-[15px]"
                  style={{
                    fontFamily:
                      "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#72B5FF",
                    textDecoration: "underline",
                    textDecorationStyle: "solid",
                    textDecorationSkipInk: "none",
                    textDecorationThickness: "auto",
                    textUnderlineOffset: "auto",
                    textUnderlinePosition: "from-font",
                  }}
                  onClick={() => handleOpenModal(problem.articleId)}
                >
                  Подробнее
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Washing Machine Diagram - Absolutely positioned behind cards */}
        <img
          src="https://cdn.builder.io/api/v1/assets/fa85d7386c224d4d9f5093703eaea3c5/image-3822679-f5df36?format=webp&width=800"
          alt="Схема стиральной машины"
          className="absolute w-[272px] h-[272px] object-contain pointer-events-none -z-10"
          style={{
            top: "calc(45% + 130px)",
            left: "calc(50% + 120px)",
            opacity: "0.57",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Circular Problems - Last 2 cards with responsive positioning */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
          {allProblems.slice(3).map((problem, index) => (
            <div
              key={index + 3}
              className={`flex flex-col items-center justify-center bg-white rounded-full shadow-[0px_-3px_29.8px_0px_rgba(0,0,0,0.34)] relative
                         w-[191px] h-[191px] p-[23px_10px_10px_10px] gap-[10px]
                         ${index === 0 ? "md:-translate-x-[30px]" : "md:translate-x-[30px]"}`}
            >
              {/* SVG Border with Linear Gradient */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1, opacity: 0.6 }}
              >
                <defs>
                  <linearGradient
                    id={`borderGradient${index + 3}`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(114,181,255,1)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="calc(50% - 1.5px)"
                  fill="none"
                  stroke={`url(#borderGradient${index + 3})`}
                  strokeWidth="3"
                />
              </svg>

              <div className="flex flex-col items-center w-full h-full relative z-10">
                {/* Icon - 20px from top */}
                <img
                  src={problem.iconUrl}
                  alt={problem.title}
                  className="w-[50px] h-[50px] rounded-[85px] absolute top-[20px]"
                />

                {/* Title - centered vertically */}
                <div
                  className={`text-[#40444F] text-center tracking-[0.64px] absolute top-1/2 transform -translate-y-1/2 ${
                    problem.title === "Сильно шумит при отжиме"
                      ? "w-[150px]"
                      : "w-[130px]"
                  }`}
                  style={{
                    fontFamily:
                      "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "700",
                    lineHeight:
                      problem.title === "Сильно шумит при отжиме"
                        ? "1.1"
                        : "normal",
                  }}
                >
                  {problem.title}
                </div>

                {/* Learn More Button - Fixed at bottom */}
                <div
                  className="text-[#72B5FF] text-center tracking-[0.56px] cursor-pointer w-full absolute bottom-[15px]"
                  style={{
                    fontFamily:
                      "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#72B5FF",
                    textDecoration: "underline",
                    textDecorationStyle: "solid",
                    textDecorationSkipInk: "none",
                    textDecorationThickness: "auto",
                    textUnderlineOffset: "auto",
                    textUnderlinePosition: "from-font",
                  }}
                  onClick={() => handleOpenModal(problem.articleId)}
                >
                  Подробнее
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <RepairDetailsModal
        isOpen={isModalOpen}
        articleId={selectedArticleId}
        onClose={handleCloseModal}
      />
    </section>
  );
};
