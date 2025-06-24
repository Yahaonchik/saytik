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
      "Если вы всё проверили, а один или нескольк�� компонентов всё ещё не работают, возможно, проблема в электрике.",
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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
      className={`w-[295px] h-[152px] flex-shrink-0 border border-[#C4C4C4] bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative cursor-pointer magic-border-card ${
        index % 2 === 0 ? "slide-from-left" : "slide-from-right"
      } ${visibleCards.has(index) ? "show" : ""}`}
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
    </div>
  );

  return (
    <section className="relative overflow-hidden" style={{ height: "930px" }}>
      <BackgroundSVG />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl h-full">
        {/* Company Description */}
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
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "1.4",
              letterSpacing: "1%",
              textAlign: "center",
              color: "#40444F",
              padding: "0 20px",
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
              Просто позвоните или оставьте заявку, и м�� вам перезвоним.
            </div>
          </motion.div>
        </div>

        {/* Washing Machine Diagram - Absolutely positioned behind cards */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.75, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          src="https://cdn.builder.io/api/v1/image/assets%2F18f3fbac7f774ce89fe20a202aac550a%2Fc58184f28f3140b2825ceac1a305af30"
          alt="Схема стиральной машины"
          className="absolute w-[529px] h-[529px] object-contain pointer-events-none -z-10"
          style={{
            top: "calc(50% - 285px)", // Вниз на 15px от предыдущей позиции
            left: "calc(50% - 40px)", // Влево на 75px от предыдущей позиции
            transform: "translate(-50%, -50%) scaleX(-1)",
            filter:
              "brightness(1.75) contrast(1.75) saturate(0.1) sepia(0.75) hue-rotate(15deg)",
          }}
        />

        {/* Problem Cards - 3 cards in first row, 2 cards in second row */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: "291px",
            width: "1086px", // Фиксированная ширина: 3 карточки (295px) + 2 гапа (69px) = 295*3 + 69*2 = 1023px + отступы
            maxWidth: "90vw", // Максимальная ширина для мобильных устройств
          }}
        >
          {/* Первый ряд - 3 карточки */}
          <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[69px] mb-[40px]">
            {allProblems
              .slice(0, 3)
              .map((problem, index) => renderCard(problem, index))}
          </div>

          {/* Второй ряд - 2 карточки */}
          <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[69px]">
            {allProblems
              .slice(3, 5)
              .map((problem, index) => renderCard(problem, index + 3))}
          </div>
        </div>

        {/* Bottom Text - positioned between cards and end of block */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 text-center"
          style={{
            top: "calc(291px + 152px + 40px + 152px + 50px)", // После карточек + отступ
            color: "#40444F",
            fontFamily: "Georgia, serif",
            fontSize: "24px",
            fontWeight: "400",
            zIndex: 10,
          }}
        >
          Не нашли свою проблему? Не волнуйтесь.
        </div>

        {/* Wave Background - New SVG */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            bottom: "0",
            left: "50%",
            width: "100vw",
            height: "565px",
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
