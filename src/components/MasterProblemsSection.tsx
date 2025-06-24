import React, { useState, useEffect, useRef } from "react";
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
      "Существует несколько признаков того, что у вашей машины проблемы с мотор��м. Один из них — это если бельё не двигается во время стирки.",
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
      "Если вы всё проверили, а один или нескольк�� компонентов всё ещё не работают, возможно, проблема в электрике.",
    articleId: "shumit-pri-otzhime",
    iconUrl:
      "https://cdn.builder.io/api/v1/assets/8bfc794e3c6f411abc1802f52bf6c057/image-3822684-2b13c7?format=webp&width=800",
  },
];

const BackgroundSVG: React.FC = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1910 920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full min-h-full"
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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Сразу показываем все карточки на мобильных для упрощения
    setVisibleCards(new Set([0, 1, 2, 3, 4]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (articleId: string) => {
    setSelectedArticleId(articleId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticleId(null);
  };

  const renderCard = (problem: ProblemCard, index: number) => (
    <div
      key={index}
      ref={(el) => (cardRefs.current[index] = el)}
      data-index={index}
      className="w-full max-w-[260px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[295px] h-[140px] sm:h-[140px] md:h-[148px] lg:h-[152px] flex-shrink-0 border border-[#C4C4C4] bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative cursor-pointer magic-border-card mx-auto opacity-100"
      onClick={() => handleOpenModal(problem.articleId)}
      style={
        {
          "--border-width": "4px",
          "--border-color": "#72B5FF",
          "--duration": "0.3s",
          transitionDelay: `${index * 0.1}s`,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        .magic-border-card {
          position: relative;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .magic-border-card:hover {
            box-shadow: 0px 0px 20px 0px rgba(114, 181, 255, 0.3);
          }

          .magic-border-card:hover .card-icon {
            transform: translate(-50%, 0) scale(1.2);
          }
        }

        @media (min-width: 640px) {
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
          }
        }
      `}</style>

      {/* Icon at top center */}
      <img
        src={problem.iconUrl}
        alt={problem.title}
        className="card-icon w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] flex-shrink-0 rounded-[85px] absolute left-1/2 top-3 sm:top-3 lg:top-4 transform -translate-x-1/2 transition-transform duration-500 ease-out"
      />

      {/* Problem title in center - увеличено расстояние от иконки на мобильных */}
      <div
        className="w-full text-[#40444F] text-center absolute left-0 px-2"
        style={{
          fontFamily:
            "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
          fontSize: "clamp(13px, 2.5vw, 16px)",
          fontWeight: "400",
          lineHeight: "1.2",
          letterSpacing: "0.64px",
          top: "clamp(65px, 10vw, 80px)", // Увеличили отступ от иконки
        }}
      >
        {problem.title}
      </div>

      {/* Learn more link - in one line at bottom */}
      <div
        className="text-[#72B5FF] text-center cursor-pointer absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap px-1"
        style={{
          fontFamily:
            "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
          fontSize: "clamp(11px, 2vw, 15px)",
          fontWeight: "700",
          lineHeight: "normal",
          letterSpacing: "0.6px",
          bottom: "15px",
        }}
      >
        Узнать подробнее
      </div>

      {/* Original Underline SVG - скрыта на мобильных */}
      <svg
        className="hidden sm:block h-[4px] lg:h-[5px] flex-shrink-0 absolute bottom-[-3px] lg:bottom-[-4px]"
        style={{
          width: "calc(100% - 30px)",
          left: "15px",
        }}
        height="5"
        viewBox="0 0 230 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 2.5L230 2.5" stroke="#72B5FF" strokeWidth="3.8" />
      </svg>
    </div>
  );

  return (
    <section className="relative overflow-x-hidden min-h-[930px] sm:h-[930px] sm:overflow-hidden">
      <BackgroundSVG />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl h-full">
        {/* Company Description - ONLY RESPONSIVE TEXT */}
        <div
          className="absolute w-full flex justify-center"
          style={{ top: "70px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              maxWidth: "1000px",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(14px, 3vw, 18px)", // Адаптивный размер шрифта
              fontWeight: "400",
              lineHeight: "1.4",
              letterSpacing: "1%",
              textAlign: "center",
              color: "#40444F",
              padding: "0 20px", // Адаптивные отступы
            }}
          >
            <div style={{ marginBottom: "8px" }}>
              В <span style={{ color: "#72B5FF" }}>РемСтирМаш</span> мы
              заботимся о надёжной работе вашей техники во всех уголках Одессы.
            </div>
            <div style={{ marginBottom: "8px" }}>
              Профессионально устраняем любые неисправности стиральных машин —
              от самых простых до самых сложных.
            </div>
            <div>
              Просто позвоните или оставьте заявку, и мы вам перезвоним.
            </div>
          </motion.div>
        </div>

        {/* Washing Machine Diagram - ORIGINAL SIZE */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.75, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          src="https://cdn.builder.io/api/v1/image/assets%2F18f3fbac7f774ce89fe20a202aac550a%2Fc58184f28f3140b2825ceac1a305af30"
          alt="Схема стиральной машины"
          className="absolute w-[529px] h-[529px] object-contain pointer-events-none"
          style={{
            top: "calc(50% - 285px)",
            left: "calc(50% - 40px)",
            transform: "translate(-50%, -50%) scaleX(-1)",
            filter:
              "brightness(1.75) contrast(1.75) saturate(0.1) sepia(0.75) hue-rotate(15deg)",
            zIndex: -30,
          }}
        />

        {/* Problem Cards - MOBILE RELATIVE, DESKTOP ABSOLUTE */}

        {/* Мобильная версия - относительное позиционирование */}
        <div
          className="relative sm:hidden w-full px-4 z-20"
          style={{ paddingTop: "280px" }}
        >
          <div className="flex flex-col items-center gap-4 w-full max-w-[300px] mx-auto">
            {allProblems.map((problem, index) => renderCard(problem, index))}
          </div>
        </div>

        {/* Планшеты и десктоп - абсолютное ��озиционирование */}
        <div
          className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 px-3 sm:px-4"
          style={{
            top: "291px",
            width: "100%",
            maxWidth: "1086px",
          }}
        >
          {/* Первый ряд - 3 карточки */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-[69px] mb-6 lg:mb-10">
            {allProblems
              .slice(0, 3)
              .map((problem, index) => renderCard(problem, index))}
          </div>

          {/* Второй ряд - 2 карточки */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-[69px]">
            {allProblems
              .slice(3, 5)
              .map((problem, index) => renderCard(problem, index + 3))}
          </div>
        </div>

        {/* Wave Background - ORIGINAL POSITION */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            bottom: "-20px",
            left: "50%",
            width: "100vw",
            height: "585px",
            transform: "translateX(-50%)",
            zIndex: -20,
          }}
        >
          <svg
            width="1910"
            height="565"
            viewBox="0 0 1910 565"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0 565V74.3469C92.6639 132.962 185.328 191.578 334.104 141.076C482.88 90.5736 617.541 15.3735 810.201 2.57079C987.584 -9.21674 1153.1 21.0022 1261.61 63.1655C1370.11 105.329 1437.3 105.582 1573.25 80.2348C1705.78 40.9919 1867.89 57.6694 2030 74.3469V565H0Z"
              fill="url(#paint0_linear_6509_123)"
              fillOpacity="0.82"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6509_123"
                x1="0"
                y1="280.205"
                x2="2030"
                y2="280.205"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#72B5FF" />
                <stop offset="1" stopColor="#B2D5FB" stopOpacity="0.62" />
              </linearGradient>
            </defs>
          </svg>
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
