import React, { useState } from "react";
import { motion } from "framer-motion";
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
      "https://cdn.builder.io/api/v1/assets/3c425170d2e9403fa39537f962323753/group-236-5899b1?format=webp&width=800",
  },
  {
    title: "Не включается",
    description:
      "Это может быть вызвано засорённым шлангом или проблемой с насосом, который, возможно, придётся заменить.",
    articleId: "ne-vklyuchaetsya",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/8bfc794e3c6f411abc1802f52bf6c057/image-3822682-716cb3?format=webp&width=800",
  },
  {
    title: "Не крутит барабан",
    description:
      "Существует несколько признаков того, что у вашей машины проблемы с мотором. Один из них — это если бельё не двигается во время стирки.",
    articleId: "ne-krutit-baraban",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/8bfc794e3c6f411abc1802f52bf6c057/image-3822683-e84138?format=webp&width=800",
  },
  {
    title: "Протекает",
    description:
      "Одежда остаётся влажной после отжима? Возможно, нужно проверить сливной шланг или вентиляцию",
    articleId: "protekaet-voda",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/8bfc794e3c6f411abc1802f52bf6c057/group-235-1e74d6?format=webp&width=800",
  },
  {
    title: "Сильно шумит при отжиме",
    description:
      "Если вы всё проверили, а один или несколько компонентов всё ещё не работают, возможно, проблема в электрике.",
    articleId: "shumit-pri-otzhime",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/8bfc794e3c6f411abc1802f52bf6c057/image-3822684-2b13c7?format=webp&width=800",
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
    <section className="relative py-16 md:py-20 lg:py-24 pb-32 md:pb-36 lg:pb-40 overflow-hidden">
      <BackgroundSVG />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-[#40444F] mx-auto mb-12 md:mb-16 px-4 -mt-12"
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
        </motion.div>

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

        {/* Washing Machine Diagram - Absolutely positioned behind cards */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.57, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          src="https://cdn.builder.io/api/v1/assets/fa85d7386c224d4d9f5093703eaea3c5/image-3822679-f5df36?format=webp&width=800"
          alt="Схема стиральной машины"
          className="absolute w-[468px] h-[468px] object-contain pointer-events-none -z-10"
          style={{
            top: "calc(45% + 115px)",
            left: "calc(50% + 160px)",
            transform: "translate(-50%, -50%) scaleX(-1)",
          }}
        />

        {/* Problem Cards - All 5 cards in rectangular format */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-[40px_69px] max-w-[1086px] mx-auto"
        >
          {allProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100, // Четные слева, нечетные справа
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1, // Поочередное появление
              }}
              className="w-[295px] h-[152px] flex-shrink-0 border border-[#C4C4C4] bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative cursor-pointer magic-border-card"
              onClick={() => handleOpenModal(problem.articleId)}
              style={
                {
                  "--border-width": "4px",
                  "--border-color": "#72B5FF",
                  "--duration": "0.3s",
                } as React.CSSProperties
              }
            >
              <style jsx>{`
                .magic-border-card {
                  position: relative;
                  transition: all 0.3s ease;
                }

                .magic-border-card:hover {
                  box-shadow: 0px 0px 20px 0px rgba(114, 181, 255, 0.3);
                }

                .magic-border-card:hover .card-icon {
                  transform: translate(-50%, 0) scale(1.2);
                }

                .magic-border-card:before {
                  content: "";
                  position: absolute;
                  width: calc(100% + 8px);
                  height: calc(100% + 8px);
                  top: -4px;
                  left: -4px;
                  border-radius: 0px;
                  background:
                    linear-gradient(to right, #72b5ff 0%, #72b5ff 100%),
                    linear-gradient(to top, #72b5ff 50%, transparent 50%),
                    linear-gradient(to top, #72b5ff 50%, transparent 50%),
                    linear-gradient(to right, #72b5ff 0%, #72b5ff 100%),
                    linear-gradient(to left, #72b5ff 0%, #72b5ff 100%);
                  background-size:
                    100% 4px,
                    4px 200%,
                    4px 200%,
                    0% 4px,
                    0% 4px;
                  background-position:
                    50% 100%,
                    0% 0%,
                    100% 0%,
                    100% 0%,
                    0% 0%;
                  background-repeat: no-repeat;
                  transition:
                    transform 0.3s ease-in-out,
                    background-position 0.3s ease-in-out,
                    background-size 0.3s ease-in-out;
                  transform: scaleX(0);
                  transition-delay: 0.6s, 0.3s, 0s;
                  pointer-events: none;

                  /* Ensure rectangular corners match the card */
                  mask:
                    linear-gradient(to right, #000 0%, #000 100%),
                    linear-gradient(to top, #000 50%, transparent 50%),
                    linear-gradient(to top, #000 50%, transparent 50%),
                    linear-gradient(to right, #000 0%, #000 100%),
                    linear-gradient(to left, #000 0%, #000 100%);
                  mask-size:
                    100% 4px,
                    4px 200%,
                    4px 200%,
                    0% 4px,
                    0% 4px;
                  mask-position:
                    50% 100%,
                    0% 0%,
                    100% 0%,
                    100% 0%,
                    0% 0%;
                  mask-repeat: no-repeat;

                  /* Apply rectangular corners using clip-path */
                  clip-path: inset(0 round 0px);
                }

                .magic-border-card:hover:before {
                  background-size:
                    200% 4px,
                    4px 400%,
                    4px 400%,
                    55% 4px,
                    55% 4px;
                  background-position:
                    50% 100%,
                    0% 100%,
                    100% 100%,
                    100% 0%,
                    0% 0%;
                  transform: scaleX(1);
                  transition-delay: 0s, 0.3s, 0.6s;

                  mask-size:
                    200% 4px,
                    4px 400%,
                    4px 400%,
                    55% 4px,
                    55% 4px;
                  mask-position:
                    50% 100%,
                    0% 100%,
                    100% 100%,
                    100% 0%,
                    0% 0%;
                }
              `}</style>

              {/* Icon at top center */}
              <img
                src={problem.iconUrl}
                alt={problem.title}
                className="card-icon w-[54px] h-[54px] flex-shrink-0 rounded-[85px] absolute left-1/2 top-4 transform -translate-x-1/2 transition-transform duration-500 ease-out"
              />

              {/* Problem title in center - moved closer to icon */}
              <div
                className="w-full text-[#40444F] text-center absolute left-0 top-[80px] h-[21px]"
                style={{
                  fontFamily:
                    "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "normal",
                  letterSpacing: "0.64px",
                }}
              >
                {problem.title}
              </div>

              {/* Learn more link - in one line at bottom */}
              <div
                className="text-[#72B5FF] text-center cursor-pointer absolute left-1/2 top-[115px] transform -translate-x-1/2 whitespace-nowrap"
                style={{
                  fontFamily:
                    "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: "700",
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                Узнать подробнее
              </div>

              {/* Original Underline SVG - adjusted for new card size, made straight and aligned with animation */}
              <svg
                className="w-[230px] h-[5px] flex-shrink-0 absolute left-[32px] bottom-[-4px]"
                width="230"
                height="5"
                viewBox="0 0 230 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 2.5L230 2.5" stroke="#72B5FF" strokeWidth="3.8" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
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
