import * as React from "react";

interface ProblemCard {
  title: string;
  description: string;
  articleId: string;
}

const circularProblems: ProblemCard[] = [
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
];

const rectangularProblems: ProblemCard[] = [
  {
    title: "Не сушит",
    description:
      "Одежда остаётся влажной после отжима? Возможно, нужно проверить сливной шланг или вентиляцию.",
    articleId: "ne-sushit",
  },
  {
    title: "Эле��трические неисправности",
    description:
      "Если вы всё проверили, а один или несколько компонентов всё ещё не работают, возможно, проблема в электрике.",
    articleId: "elektricheskie-neispravnosti",
  },
];

const LearnMoreButton: React.FC<{
  articleId: string;
  isRectangular?: boolean;
}> = ({ articleId, isRectangular = false }) => {
  const handleClick = () => {
    window.location.href = `/articles?article=${articleId}`;
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
    {/* Desktop Background image */}
    <div className="absolute inset-0 w-full h-full hidden md:block">
      <img
        src="https://cdn.builder.io/api/v1/assets/3c425170d2e9403fa39537f962323753/frame-787-1-14126c"
        alt="Background"
        className="w-full h-full object-contain object-center opacity-100"
        style={{
          imageRendering: "crisp-edges",
          imageRendering: "-webkit-optimize-contrast",
        }}
      />
    </div>

    {/* Mobile Background image */}
    <div className="absolute inset-0 w-full h-full block md:hidden">
      <img
        src="https://cdn.builder.io/api/v1/assets/32b96ec7a6584934a6eabcd2caf16f2d/group-11-c25ea9?format=webp&width=800"
        alt="Mobile Background"
        className="w-full h-full object-cover object-center opacity-100"
        style={{
          imageRendering: "crisp-edges",
          imageRendering: "-webkit-optimize-contrast",
          minWidth: "100%",
          minHeight: "100%",
        }}
      />
    </div>
  </div>
);

export const MasterProblemsSection = () => {
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
          className="text-center font-pt-serif font-normal leading-normal mb-12 md:mb-16 text-[#40444F] max-w-4xl mx-auto tracking-[0.18px]
                      md:text-[18px]
                      text-[15px]"
        >
          <div className="mb-2">
            В <span className="text-[#72B5FF]">РемСтирМаш</span> мы заботимся о
            вашем спокойствии и надёжной работ�� вашей техники. Профессионально
            устраняем любые неисправности стиральных машин — от самых простых до
            сложных.
          </div>
          <div>Просто позвоните или оставьте заявку, и мы вам перезвоним.</div>
        </div>

        {/* Circular Problems Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 md:mb-10">
          {circularProblems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-full shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative
                         md:w-[281px] md:h-[281px] md:p-[44px_30px_20px_30px]
                         w-[268px] h-[268px] p-[42px_28px_18px_28px]"
            >
              {/* Title - Fixed height to ensure single line */}
              <h3
                className="text-[#40444F] text-center font-pt-serif italic leading-tight tracking-[0.64px] mb-[22px] h-[20px] flex items-center justify-center
                           md:text-[16px]
                           text-[15px]"
                style={{ fontWeight: "700" }}
              >
                {problem.title}
              </h3>

              {/* Description - Flexible height */}
              <p
                className="text-[#40444F] text-center font-pt-serif font-normal leading-normal tracking-[0.14px] flex-1
                          md:text-[14px]
                          text-[13px]"
              >
                {problem.description}
              </p>

              {/* Learn More Button - Fixed at bottom, moved up 15px */}
              <LearnMoreButton articleId={problem.articleId} />
            </div>
          ))}
        </div>

        {/* Rectangular Problems Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 max-w-5xl mx-auto">
          {rectangularProblems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)]
                         md:w-[448px] md:rounded-[15px] md:gap-[25px] md:p-[17px_30px_2px_30px]
                         w-[268px] h-[268px] rounded-full gap-[22px] p-[42px_28px_18px_28px]"
            >
              {/* Title */}
              <h3
                className="text-[#40444F] text-center font-pt-serif italic leading-tight tracking-[0.64px]
                           md:w-[458px] md:mb-0 md:leading-normal md:h-auto md:text-[16px]
                           mb-[22px] h-[20px] flex items-center justify-center text-[15px]"
                style={{ fontWeight: "700" }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#40444F] text-center font-pt-serif font-normal leading-normal tracking-[0.14px]
                          md:w-[246px] md:mb-0 md:flex-none md:text-[14px]
                          flex-1 text-[13px]"
              >
                {problem.description}
              </p>

              {/* Learn More Button */}
              <div
                onClick={() =>
                  (window.location.href = `/articles?article=${problem.articleId}`)
                }
                className="text-[#72B5FF] text-center font-pt-serif tracking-[0.6px] cursor-pointer
                          md:text-[15px] md:mt-0
                          text-[14px] mt-auto"
                style={{ fontWeight: "700" }}
              >
                Узнать подробнее
              </div>

              {/* Blue Line - SVG - Only on desktop */}
              <svg
                width="387"
                height="4"
                viewBox="0 0 388 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[387px] h-[4px] hidden md:block"
              >
                <path d="M0.5 2H387.5" stroke="#72B5FF" strokeWidth="4" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
