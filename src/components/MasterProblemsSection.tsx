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
      "Если ваша стиральная машина перестала сливать воду, причина может быть как простой, так и требующей ремонта. Чаще всего проблема связана с засором сливного шланга, фильтра или поломкой насоса. Также возможны сбои в работе модуля управления или засор канализации. Наши мастера быстро найдут причину и устранят неисправность.",
    articleId: "ne-slivaet-vodu",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F6d7e7527c7234ea08f7783e1cbd2ccc9",
  },
  {
    title: "Не включается",
    description:
      "Если ваша стиральная машина не включается, проблема может крыться в различных узлах. Чаще всего это связано с неисправностью блока питания, поломкой кнопки включения или проблемами с электропроводкой. Также возможны сбои в работе электронного модуля или повреждение сетевого фильтра. Наши специалисты проведут диагностику и восстановят работоспособность.",
    articleId: "ne-vklyuchaetsya",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F3bed9eea197641c2809ddc9936e850b7",
  },
  {
    title: "Не крутит барабан",
    description:
      "Если барабан вашей стиральной машины не вращается, причины могут быть разными. Чаще всего это износ приводного ремня, поломка двигателя или неисправность подшипников. Также возможны проблемы с электроникой, блокировкой барабана посторонними предметами или поломкой редуктора. Наши мастера быстро определят причину и выполнят качественный ремонт.",
    articleId: "ne-krutit-baraban",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F0cddf25730054638a975c67d735114e6",
  },
  {
    title: "Протекает",
    description:
      "Если ваша стиральная машина протекает, важно быстро найти источник проблемы. Чаще всего причина в износе уплотнителей дверцы, повреждении шлангов или трещинах в баке. Также возможны проблемы с патрубками, неисправностью клапанов или ослаблением хомутов. Наши специалисты устранят течь и предотвратят повторные протечки.",
    articleId: "protekaet-voda",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F698531ce478a4d808c597c63038ce1ae",
  },
  {
    title: "Сильно шумит при отжиме",
    description:
      "Если ваша стиральная машина издает сильный шум при отжиме, это сигнал о серьезных неполадках. Чаще всего причина в износе подшипников, разбалансировке барабана или ослаблении креплений. Также возможны проблемы с амортизаторами, попадание посторонних предметов или износ приводного ремня. Наши мастера устранят источник шума и восстановят тихую работу.",
    articleId: "shumit-pri-otzhime",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2Ff3253ff1d3aa4a4cab219ddc14552016",
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
      className="w-full max-w-[208px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[295px] h-[140px] sm:h-[140px] md:h-[148px] lg:h-[152px] flex-shrink-0 border border-[#C4C4C4] bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative cursor-pointer magic-border-card mx-auto"
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
        src={`${problem.iconUrl}?format=webp&width=108&quality=90`}
        alt={problem.title}
        className="card-icon w-[48px] h-[48px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] flex-shrink-0  absolute left-1/2 top-3 sm:top-3 lg:top-4 transform -translate-x-1/2 transition-transform duration-500 ease-out"
        style={{
          imageRendering: "auto",
          WebkitImageRendering: "auto",
          MozImageRendering: "auto",
        }}
      />

      {/* Problem title in center */}
      <div
        className="w-full text-[#40444F] text-center absolute left-0 px-2"
        style={{
          fontFamily:
            "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
          fontSize: "clamp(13px, 2.5vw, 16px)",
          fontWeight: "400",
          lineHeight: "1.2",
          letterSpacing: "0.64px",
          top: "clamp(75px, 10vw, 80px)", // Опущено на 10px для мобильных
        }}
      >
        {problem.title}
      </div>

      {/* Learn more link */}
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

      {/* Static blue stripe for mobile */}
      <div
        className="sm:hidden absolute bottom-0 h-[4px] bg-[#72B5FF]"
        style={{
          width: "calc(100% - 30px)",
          left: "15px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* Animated underline SVG for desktop */}
      <svg
        className="hidden sm:block h-[4px] lg:h-[5px] flex-shrink-0 absolute bottom-[-3px] lg:bottom-[-4px]"
        style={{
          width: "calc(100% - 30px)",
          left: "15px",
          filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
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
    <section className="relative h-[1200px] sm:h-[937px] overflow-hidden">
      {/* MAIN VERSION - Now displays on all screen sizes */}
      <div className="relative z-10">
        {/* Desktop text - absolute positioned */}
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
              fontSize: "clamp(14px, 3vw, 18px)",
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
              от самых просты�� до самых сложных.
            </div>
            <div>
              Просто позвоните или оставьте заявку,{" "}
              <span style={{ color: "#72B5FF" }}>и мы вам перезвоним</span>.
            </div>
          </motion.div>
        </div>

        {/* Desktop washing machine diagram */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.75, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          src="https://cdn.builder.io/api/v1/image/assets%2Fd2a9e5c4643c4a31913e9e7710441da6%2Ff025183f397e4ba58fd2efa60101d45a"
          alt="Схема стиральной машины"
          className="washing-machine-desktop absolute w-[527px] h-[527px] object-contain pointer-events-none"
          style={{
            top: "calc(50% - 285px + 500px - 75px + 50px + 200px)",
            left: "calc(50% - 40px - 75px + 75px)",
            transform: "translate(-50%, -50%) scaleX(-1)",
            filter:
              "brightness(1.75) contrast(1.75) saturate(0.1) sepia(0.75) hue-rotate(15deg)",
            zIndex: -10,
          }}
        />
        <style jsx>{`
          @media (min-width: 640px) {
            .washing-machine-desktop {
              top: calc(50% - 285px + 500px - 75px + 50px) !important;
            }
          }
        `}</style>

        {/* Desktop cards - absolute positioned */}
        <div className="container mx-auto px-4 max-w-7xl h-full">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 px-3 sm:px-4"
            style={{
              top: "291px",
              width: "100%",
              maxWidth: "1086px",
            }}
          >
            {/* First row - 3 cards */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-[69px] mb-6 lg:mb-10">
              {allProblems
                .slice(0, 3)
                .map((problem, index) => renderCard(problem, index))}
            </div>

            {/* Second row - 2 cards manually created */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-[50px] mt-8 sm:mt-[50px] px-4 sm:px-0">
              {/* Протекает card */}
              <div
                className="w-full max-w-[208px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[295px] h-[140px] sm:h-[140px] md:h-[148px] lg:h-[152px] flex-shrink-0 border border-[#C4C4C4] bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative cursor-pointer magic-border-card"
                onClick={() => handleOpenModal(allProblems[3].articleId)}
                style={
                  {
                    "--border-width": "4px",
                    "--border-color": "#72B5FF",
                    "--duration": "0.3s",
                    transitionDelay: "0.3s",
                  } as React.CSSProperties
                }
              >
                <img
                  src={`${allProblems[3].iconUrl}?format=webp&width=108&quality=90`}
                  alt={allProblems[3].title}
                  className="card-icon w-[48px] h-[48px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] flex-shrink-0  absolute left-1/2 top-3 sm:top-3 lg:top-4 transform -translate-x-1/2 transition-transform duration-500 ease-out"
                  style={{
                    imageRendering: "auto",
                    WebkitImageRendering: "auto",
                    MozImageRendering: "auto",
                  }}
                />
                <div
                  className="w-full text-[#40444F] text-center absolute left-0 px-2"
                  style={{
                    fontFamily:
                      "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "clamp(13px, 2.5vw, 16px)",
                    fontWeight: "400",
                    lineHeight: "1.2",
                    letterSpacing: "0.64px",
                    top: "clamp(75px, 10vw, 80px)", // Опущено на 10px для мобильных
                  }}
                >
                  {allProblems[3].title}
                </div>
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
                <div
                  className="sm:hidden absolute bottom-0 h-[4px] bg-[#72B5FF]"
                  style={{
                    width: "calc(100% - 30px)",
                    left: "15px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <svg
                  className="hidden sm:block h-[4px] lg:h-[5px] flex-shrink-0 absolute bottom-[-3px] lg:bottom-[-4px]"
                  style={{
                    width: "calc(100% - 30px)",
                    left: "15px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  height="5"
                  viewBox="0 0 230 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5L230 2.5" stroke="#72B5FF" strokeWidth="3.8" />
                </svg>
              </div>

              {/* Силь��о шумит при отжиме card */}
              <div
                className="w-full max-w-[208px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[295px] h-[140px] sm:h-[140px] md:h-[148px] lg:h-[152px] flex-shrink-0 border border-[#C4C4C4] bg-white shadow-[0px_0px_12.5px_0px_rgba(0,0,0,0.25)] relative cursor-pointer magic-border-card"
                onClick={() => handleOpenModal(allProblems[4].articleId)}
                style={
                  {
                    "--border-width": "4px",
                    "--border-color": "#72B5FF",
                    "--duration": "0.3s",
                    transitionDelay: "0.4s",
                  } as React.CSSProperties
                }
              >
                <img
                  src={`${allProblems[4].iconUrl}?format=webp&width=108&quality=90`}
                  alt={allProblems[4].title}
                  className="card-icon w-[48px] h-[48px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] flex-shrink-0  absolute left-1/2 top-3 sm:top-3 lg:top-4 transform -translate-x-1/2 transition-transform duration-500 ease-out"
                  style={{
                    imageRendering: "auto",
                    WebkitImageRendering: "auto",
                    MozImageRendering: "auto",
                  }}
                />
                <div
                  className="w-full text-[#40444F] text-center absolute left-0 px-2"
                  style={{
                    fontFamily:
                      "'PT Serif', -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "clamp(13px, 2.5vw, 16px)",
                    fontWeight: "400",
                    lineHeight: "1.2",
                    letterSpacing: "0.64px",
                    top: "clamp(75px, 10vw, 80px)", // Опущено на 10px для мобильных
                  }}
                >
                  {allProblems[4].title}
                </div>
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
                <div
                  className="sm:hidden absolute bottom-0 h-[4px] bg-[#72B5FF]"
                  style={{
                    width: "calc(100% - 30px)",
                    left: "15px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <svg
                  className="hidden sm:block h-[4px] lg:h-[5px] flex-shrink-0 absolute bottom-[-3px] lg:bottom-[-4px]"
                  style={{
                    width: "calc(100% - 30px)",
                    left: "15px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  height="5"
                  viewBox="0 0 230 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5L230 2.5" stroke="#72B5FF" strokeWidth="3.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Background */}
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

      {/* Wave Background - positioned at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 w-full pointer-events-none"
        style={{
          height: "567px",
          zIndex: 1,
        }}
      >
        <svg
          width="1910"
          height="567"
          viewBox="0 0 1910 567"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 567V76.347C87.2775 134.962 174.555 193.578 314.683 143.076C454.812 92.5737 581.644 17.3735 763.105 4.57084C930.178 -7.21669 1114.78 5.93298 1216.97 48.0963C1319.17 90.2596 1423.95 141.347 1552 116C1676.82 76.7572 1759.31 59.6695 1912 76.347V567H0Z"
            fill="url(#paint0_linear_6509_123)"
            fillOpacity="0.82"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6509_123"
              x1="0"
              y1="282.205"
              x2="1912"
              y2="282.205"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#72B5FF" />
              <stop offset="1" stopColor="#B2D5FB" stopOpacity="0.62" />
            </linearGradient>
          </defs>
        </svg>
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
