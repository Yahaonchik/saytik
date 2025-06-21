import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  isLong?: boolean;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Ivan Smirnov",
    avatar: "IS",
    rating: 5,
    text: "Мастер пришел точно в назначенное время по телефону. Диагностика моей стиральной машины LG понравилась мне больше всего. Работа получилась качественно и быстро. Рекомендую всем этого мастера для ремонта техники!",
    isLong: true,
  },
  {
    id: 2,
    name: "Oleg Mashuk",
    avatar: "OM",
    rating: 5,
    text: "Отличный мастер. Все быстро и качественно.",
    isLong: false,
  },
  {
    id: 3,
    name: "Igor Lynyuk",
    avatar: "IL",
    rating: 5,
    text: "Мастер пришел в назначенное время по телефону. Проблема была с внутренним механизмом стиральной машины. Мастер поставил правильный диагноз и всё заработало отлично. Диагностика качественная, сервис профессиональный!",
    isLong: true,
  },
  {
    id: 4,
    name: "Alexey Petrov",
    avatar: "AP",
    rating: 5,
    text: "Быстро приехал, все исправил. Рекомендую!",
    isLong: false,
  },
];

const ReadMoreButton: React.FC<{
  onClick: () => void;
  isExpanded: boolean;
}> = ({ onClick, isExpanded }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block text-[#72B5FF] font-medium text-sm mt-2 relative group"
    >
      <span className="relative z-10">
        {isExpanded ? "Скрыть" : "читать далее"}
      </span>

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

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate if text is longer than 15 words
  const words = review.text.split(" ");
  const isTextLong = words.length > 15;
  const shouldTruncate = isTextLong && !isExpanded;
  const displayText = shouldTruncate
    ? words.slice(0, 15).join(" ") + "..."
    : review.text;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full flex flex-col">
      {/* Header with avatar and name */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
          {review.avatar}
        </div>
        <div>
          <h4 className="font-medium text-gray-900 text-sm">{review.name}</h4>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "text-[#72B5FF]" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <div className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">{displayText}</p>

        {isTextLong && (
          <ReadMoreButton
            onClick={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
          />
        )}
      </div>
    </div>
  );
};

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[20px] md:text-[24px] lg:text-[30px] font-pt-serif font-normal tracking-[1.2px] mb-4 text-[#5D5D5D]">
            GOOGLE ОТЗЫВЫ
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewsData.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: review.id * 0.1 }}
                viewport={{ once: true }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
