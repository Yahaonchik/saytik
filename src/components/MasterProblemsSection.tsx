import React, { useState } from "react";
import { RepairDetailsModal } from "./RepairDetailsModal";

interface ProblemCard {
  title: string;
  description: string;
  articleId: string;
}

const allProblems: ProblemCard[] = [
  {
    title: "Не крутит",
    description:
      "Это распространённая проблема, связанная с несколькими возможными причинами. Это может быть мотор или неисправный выключатель крышки.",
    articleId: "ne-krutit-baraban",
  },
  {
    title: "Протекает вода",
    description:
      "Это может быть вызвано засорённым шлангом или проблемой с насосом, который, возможно, придётся заменить.",
    articleId: "protekaet-voda",
  },
  {
    title: "Проблемы с мотором",
    description:
      "Существует несколько признаков того, что у вашей машины проблемы с мотором. Один из них — это если бельё не двигается во время стирки.",
    articleId: "problemy-s-motorom",
  },
  {
    title: "Не сушит",
    description:
      "Оде��да остаётся влажной после отжима? Возможно, нужно проверить сливной шланг или вентиляцию",
    articleId: "ne-sushit",
  },
  {
    title: "Электрические неисправности",
    description:
      "Если вы всё проверили, а один или несколько компонентов всё ещё не работают, возможно, проблема в электрике.",
    articleId: "elektricheskie-neispravnosti",
  },
];

const LearnMoreButton: React.FC<{
  articleId: string;
  isRectangular?: boolean;
  onOpenModal: (articleId: string) => void;
}> = ({ articleId, isRectangular = false, onOpenModal }) => {
  const handleClick = () => {
    onOpenModal(articleId);
  };

  if (isRectangular) {
    // Simple div for rectangular cards to avoid any button styling conflicts
    return (
      <div className="text-center mt-auto">
        <div
          onClick={handleClick}
          className="text-[#72B5FF] font-pt-serif font-bold text-[15px] tracking-[0.6px] cursor-pointer transition-opacity hover:opacity-80"
          style={{
            textDecoration: "none",
            border: "none",
            outline: "none",
            background: "none",
          }}
        >
          Узнать подробнее
        </div>
      </div>
    );
  }

  // Animated button for circular cards
  return (
    <div className="text-center mt-auto">
      <button
        onClick={handleClick}
        className="inline-block text-[#72B5FF] font-pt-serif font-bold tracking-[0.56px] relative group transition-all duration-200 cursor-pointer
                 md:text-[14px]
                 text-[14px]"
      >
        <span className="relative z-10">Узнать подробнее</span>

        {/* Straight underline */}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#72B5FF] transition-opacity duration-300 group-hover:opacity-0"></span>

        {/* Zigzag wavy underline - continuous animation */}
        <span className="absolute bottom-0 left-0 w-full h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
          <svg
            width="200%"
            height="4"
            viewBox="0 0 200 4"
            preserveAspectRatio="none"
            className="wave-animation"
          >
            <path
              d="M-20,2 Q-10,0.5 0,2 Q10,3.5 20,2 Q30,0.5 40,2 Q50,3.5 60,2 Q70,0.5 80,2 Q90,3.5 100,2 Q110,0.5 120,2 Q130,3.5 140,2 Q150,0.5 160,2 Q170,3.5 180,2 Q190,0.5 200,2 Q210,3.5 220,2"
              stroke="#72B5FF"
              strokeWidth="1.8"
              fill="none"
              className="zigzag-path"
            />
          </svg>
        </span>
      </button>

      <style jsx>{`
        .wave-animation {
          animation: wave-flow 3s linear infinite;
        }

        .zigzag-path {
          animation: zigzag-morph 2s ease-in-out infinite;
        }

        @keyframes wave-flow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes zigzag-morph {
          0%,
          100% {
            d: path(
              "M-20,2 Q-10,0.5 0,2 Q10,3.5 20,2 Q30,0.5 40,2 Q50,3.5 60,2 Q70,0.5 80,2 Q90,3.5 100,2 Q110,0.5 120,2 Q130,3.5 140,2 Q150,0.5 160,2 Q170,3.5 180,2 Q190,0.5 200,2 Q210,3.5 220,2"
            );
          }
          50% {
            d: path(
              "M-20,2 Q-10,3.5 0,2 Q10,0.5 20,2 Q30,3.5 40,2 Q50,0.5 60,2 Q70,3.5 80,2 Q90,0.5 100,2 Q110,3.5 120,2 Q130,0.5 140,2 Q150,3.5 160,2 Q170,0.5 180,2 Q190,3.5 200,2 Q210,0.5 220,2"
            );
          }
        }
      `}</style>
    </div>
  );
};

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
        {/* Main Title */}
        <h2 className="text-center text-[16px] sm:text-[18px] md:text-[20px] font-crisp font-medium tracking-[0.8px] mb-6 text-black mx-auto leading-tight max-w-2xl">
          Будем рады Вам помочь с любым видом проблемы
        </h2>

        {/* Company Description - 2 rows */}
        <div
          className="text-center font-pt-serif font-normal leading-relaxed mb-12 md:mb-16 text-[#40444F] mx-auto tracking-[0.18px] text-[18px] px-4"
          style={{
            maxWidth: "1000px",
            lineHeight: "1.4",
            wordSpacing: "-0.05em",
            letterSpacing: "0.18px",
          }}
        >
          <p
            className="mb-1"
            style={{
              display: "inline",
            }}
          >
            В <span className="text-[#72B5FF]">РемСтирМаш</span> мы заботимся о
            вашем спокойствии и надёжной работе вашей техники. Профессионально
            устраняем любые неисправности стиральных машин — от самых простых до
            сложных.{" "}
          </p>
          <span style={{ display: "inline" }}>
            Просто позвоните или оставьте заявку, и мы вам п��резвоним.
          </span>
        </div>

        {/* Circular Problems - First 3 */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 md:mb-10">
          {allProblems.slice(0, 3).map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-full shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative
                         md:w-[281px] md:h-[281px] md:p-[44px_30px_20px_30px]
                         w-[268px] h-[268px] p-[42px_28px_18px_28px]"
            >
              {/* Title - Fixed height to ensure single line */}
              <h3
                className="text-[#40444F] text-center leading-tight tracking-[0.64px] mb-[7px] h-[20px] flex items-center justify-center
                           md:text-[16px]
                           text-[15px]"
                style={{
                  fontFamily:
                    "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                  fontStyle: "italic",
                  fontWeight: "700",
                }}
              >
                {problem.title}
              </h3>

              {/* Description - Fixed 254x95 container, moved up 35px */}
              <div
                className="text-[#40444F] text-center font-pt-serif font-normal leading-normal tracking-[0.14px] flex items-center justify-center
                          md:text-[14px] md:w-[254px] md:h-[95px]
                          text-[13px] w-full flex-1"
                style={{
                  transform: "translateY(-35px) !important",
                  position: "relative",
                  top: "-10px",
                }}
              >
                {problem.description}
              </div>

              {/* Learn More Button - Fixed at bottom, moved up 20px */}
              <div style={{ transform: "translateY(-20px)" }}>
                <LearnMoreButton
                  articleId={problem.articleId}
                  onOpenModal={handleOpenModal}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Rectangular Problems - Last 2 cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 max-w-5xl mx-auto">
          {allProblems.slice(3).map((problem, index) => (
            <div
              key={index + 3}
              className="flex flex-col bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative
                         md:w-[418px] md:h-[220px] md:rounded-[15px] md:p-[30px_30px_50px_30px]
                         w-[268px] h-[268px] rounded-full gap-[22px] p-[42px_28px_18px_28px]"
            >
              {/* Title - Takes needed space */}
              <h3
                className="text-[#40444F] text-center leading-normal tracking-[0.64px] w-full
                           md:text-[16px] md:mb-[20px]
                           mb-[22px] h-[20px] flex items-center justify-center text-[15px]"
                style={{
                  fontFamily:
                    "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                  fontStyle: "italic",
                  fontWeight: "700",
                }}
              >
                {problem.title}
              </h3>

              {/* Description - Fills available space evenly, moved up 15px */}
              <div
                className="text-[#40444F] text-center leading-normal tracking-[0.14px] w-full flex-1 flex items-center justify-center
                          md:text-[14px] md:px-[20px]
                          text-[13px]"
                style={{
                  fontFamily:
                    "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                  fontWeight: "400",
                  transform: "translateY(-15px)",
                }}
              >
                {problem.description}
              </div>

              {/* Learn More Button - Fixed at bottom, moved up 15px */}
              <div
                onClick={() => handleOpenModal(problem.articleId)}
                className="text-[#72B5FF] text-center tracking-[0.6px] cursor-pointer transition-opacity hover:opacity-80
                          md:text-[15px] md:mb-[20px]
                          text-[14px]"
                style={{
                  fontFamily:
                    "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                  fontWeight: "700",
                  transform: "translateY(-15px)",
                }}
              >
                Узнать подробнее
              </div>

              {/* Blue Line - Positioned at the very bottom */}
              <svg
                width="387"
                height="4"
                viewBox="0 0 388 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[387px] max-w-full h-[4px] hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2"
              >
                <path d="M0.5 2H387.5" stroke="#72B5FF" strokeWidth="4" />
              </svg>
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
