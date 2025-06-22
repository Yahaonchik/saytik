import * as React from "react";

interface ProblemCard {
  title: string;
  description: string;
  icon: string;
  articleId: string;
}

const problems: ProblemCard[] = [
  {
    title: "Не крутит",
    description:
      "Это распространённая проблема, связанная с несколькими возможными причинами. Это может быть мотор или неисправный выключатель крышки.",
    icon: "https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822654-2077cf?format=webp&width=800",
    articleId: "ne-krutit-baraban",
  },
  {
    title: "Протекает вода",
    description:
      "Это может быть вызвано засорённым шлангом или проблемой с насосом, который, возможно, придётся заменить.",
    icon: "https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/group-8-474887?format=webp&width=800",
    articleId: "protekaet-voda",
  },
  {
    title: "Проблемы с мотором",
    description:
      "Существует несколько признаков того, что у вашей машины проблемы с мотором. Один из них — это если бельё не двигается во время стирки.",
    icon: "https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822655-b66f5b?format=webp&width=800",
    articleId: "problemy-s-motorom",
  },
  {
    title: "Не сушит",
    description:
      "Одежда остаётся влажной после отжима? Возможно, нужно проверить сливной шланг или вентиляцию.",
    icon: "https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/image-3822654-2077cf?format=webp&width=800",
    articleId: "ne-sushit",
  },
  {
    title: "Электрические неисправности",
    description:
      "Если вы всё проверили, а один или несколько компонентов всё ещё не работают, возможно, проблема в электрике.",
    icon: "https://cdn.builder.io/api/v1/assets/95be16b641a34dc4828b2b46057dd4a8/group-8-474887?format=webp&width=800",
    articleId: "elektricheskie-neispravnosti",
  },
];

const LearnMoreButton: React.FC<{ articleId: string }> = ({ articleId }) => {
  const handleClick = () => {
    window.location.href = `/articles?article=${articleId}`;
  };
  return (
    <button
      onClick={handleClick}
      className="inline-block text-[#72B5FF] font-pt-serif font-bold text-[15px] tracking-[0.6px] relative group cursor-pointer"
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
    </button>
  );
};

export const MasterProblemsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-center text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] font-pt-serif font-bold tracking-[0.3px] sm:tracking-[1px] mb-4 text-black mx-auto px-2 sm:px-4 leading-[1.2] sm:leading-tight max-w-[280px] sm:max-w-none">
          Ваш мастер на все случаи жизни
        </h2>

        {/* Description */}
        <p className="text-center text-[16px] font-nunito-sans font-normal leading-normal mb-12 md:mb-16 text-black max-w-[1056px] mx-auto px-4">
          В РемСтирМАш для нас главное — это ваше спокойствие и исправно
          работающая техника.Мы профессионально решаем любые поломки стиральных
          машин — от простых до самых сложных. Просто позвоните, и мы всё
          починим.
        </p>

        {/* Problems Grid */}
        <div className="max-w-[1200px] mx-auto mb-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="w-full max-w-[359px] flex flex-col items-center text-center p-4 sm:p-5 bg-white sm:min-h-[350px]"
              >
                {/* Icon section - fixed height */}
                <div className="flex justify-center items-center w-full h-[45px] sm:h-[70px] mb-1 sm:mb-3 flex-shrink-0">
                  <img
                    src={problem.icon}
                    alt={`${problem.title} icon`}
                    className="w-[35px] h-[35px] sm:w-[64px] sm:h-[64px] object-contain"
                  />
                </div>

                {/* Title section - responsive height */}
                <div className="flex items-center justify-center mb-1 sm:mb-3 flex-shrink-0">
                  <h3 className="text-[#484848] text-center font-vollkorn text-[13px] sm:text-[16px] font-medium leading-tight px-2 sm:px-4">
                    {problem.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-[#A4A4A4] mb-2 sm:mb-3 w-full flex-shrink-0"></div>

                {/* Description - compact spacing */}
                <div className="text-[#484848] text-center font-vollkorn text-[11px] sm:text-[14px] font-normal leading-relaxed px-2 sm:px-4 mb-1.5 sm:mb-4">
                  {problem.description}
                </div>

                {/* Button - close to description */}
                <div className="flex justify-center">
                  <LearnMoreButton articleId={problem.articleId} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
