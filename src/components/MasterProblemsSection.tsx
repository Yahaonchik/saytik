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
    title: "Электрические неисправности",
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

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className={`inline-block text-[#72B5FF] font-pt-serif font-bold ${
          isRectangular ? "text-[15px]" : "text-[14px]"
        } tracking-[0.56px] underline hover:no-underline transition-all duration-200 cursor-pointer`}
      >
        Узнать подробнее
      </button>
      {isRectangular && (
        <div className="w-full h-[4px] bg-[#72B5FF] mt-1"></div>
      )}
    </div>
  );
};

const BackgroundSVG: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Background image */}
    <div className="absolute inset-0 w-full h-full">
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
  </div>
);

export const MasterProblemsSection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-[#F8FAFE] to-[rgba(215,232,250,0.54)] overflow-hidden">
      <BackgroundSVG />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Main Title */}
        <h2 className="text-center text-[16px] sm:text-[18px] md:text-[20px] font-crisp font-medium tracking-[0.8px] mb-6 text-black mx-auto leading-tight max-w-2xl">
          Будем рады Вам помочь с любым видом проблемы
        </h2>

        {/* Company Description */}
        <div className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-crisp font-normal leading-normal mb-12 md:mb-16 text-[#40444F] max-w-4xl mx-auto tracking-[0.18px]">
          В{" "}
          <span className="text-[#72B5FF] font-crisp font-medium">
            РемСтирМаш
          </span>{" "}
          мы заботимся о вашем спокойствии и надёжной работе вашей техники.
          Профессионально устраняем любые неисправности стиральных машин — от
          самых простых до сложных. Просто позвоните или оставьте заявку, и мы
          вам перезвоним.
        </div>

        {/* Circular Problems Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 md:mb-10">
          {circularProblems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[281px] h-[281px] bg-white rounded-full shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] gap-[22px] relative"
              style={{ padding: "44px 30px 2px 30px" }}
            >
              {/* Title */}
              <h3 className="text-[#40444F] text-center font-pt-serif text-[16px] font-bold italic leading-normal tracking-[0.64px] max-w-[94px]">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-[#40444F] text-center font-pt-serif text-[14px] font-normal leading-normal tracking-[0.14px] max-w-[254px]">
                {problem.description}
              </p>

              {/* Learn More Button */}
              <button
                onClick={() =>
                  (window.location.href = `/articles?article=${problem.articleId}`)
                }
                className="text-[#72B5FF] text-center font-pt-serif text-[14px] font-bold leading-normal tracking-[0.56px] underline max-w-[168px]"
              >
                Узнать подробнее
              </button>
            </div>
          ))}
        </div>

        {/* Rectangular Problems Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 max-w-5xl mx-auto">
          {rectangularProblems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[448px] bg-white rounded-[15px] shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] gap-[25px]"
              style={{ padding: "17px 30px 2px 30px" }}
            >
              {/* Title */}
              <h3 className="text-[#40444F] text-center font-pt-serif text-[16px] font-bold italic leading-normal tracking-[0.64px] w-[458px]">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-[#40444F] text-center font-pt-serif text-[14px] font-normal leading-normal tracking-[0.14px] max-w-[246px]">
                {problem.description}
              </p>

              {/* Learn More Button */}
              <button
                onClick={() =>
                  (window.location.href = `/articles?article=${problem.articleId}`)
                }
                className="text-[#72B5FF] text-center font-pt-serif text-[15px] font-bold leading-normal tracking-[0.6px]"
              >
                Узнать подробнее
              </button>

              {/* Blue Line */}
              <div className="w-[387px] h-[4px] bg-[#72B5FF]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
