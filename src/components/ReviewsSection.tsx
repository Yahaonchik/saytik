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
    name: "Alexey Petrov",
    avatar: "AP",
    rating: 5,
    text: "I have used a thousand development teams really quick and quality work",
    isLong: false,
  },
  {
    id: 2,
    name: "Ivan Smirnov",
    avatar: "IS",
    rating: 5,
    text: "Мастер пришел точно в назначенное время по телефону диагностика моей стиральной машины LG понравилась мне больше всего работа получилась качественно и быстро",
    isLong: true,
  },
  {
    id: 3,
    name: "Oleg Mashuk",
    avatar: "OM",
    rating: 5,
    text: "Отличный мастер по стиральным машинам. Все сделал быстро, качественно, дешево. Рекомендую всем нуждающимся",
    isLong: false,
  },
  {
    id: 4,
    name: "Igor Lynyuk",
    avatar: "IL",
    rating: 5,
    text: "Мастер пришел в назначенное время по телефону проблема ш мает из внутри духа. Мастер постановил провода диагностики и всё заработало. Диагностика внешняя хорошая сама звёт",
    isLong: true,
  },
  {
    id: 5,
    name: "Olya Elagin",
    avatar: "OE",
    rating: 5,
    text: "Быстро откликнулся и приехал на срочной заявки машина сервиса",
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

      {/* Zigzag snake wave underline */}
      <span className="absolute bottom-0 left-0 w-full h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
        <svg
          width="200%"
          height="4"
          viewBox="0 0 200 4"
          preserveAspectRatio="none"
          className="wave-animation"
        >
          <path
            d="M-50,2 L-45,0 L-40,4 L-35,0 L-30,4 L-25,0 L-20,4 L-15,0 L-10,4 L-5,0 L0,4 L5,0 L10,4 L15,0 L20,4 L25,0 L30,4 L35,0 L40,4 L45,0 L50,4 L55,0 L60,4 L65,0 L70,4 L75,0 L80,4 L85,0 L90,4 L95,0 L100,4 L105,0 L110,4 L115,0 L120,4 L125,0 L130,4 L135,0 L140,4 L145,0 L150,4 L155,0 L160,4 L165,0 L170,4 L175,0 L180,4 L185,0 L190,4 L195,0 L200,4 L205,0 L210,4 L215,0 L220,4 L225,0 L230,4 L235,0 L240,4 L245,0 L250,2"
            stroke="#72B5FF"
            strokeWidth="2"
            fill="none"
            className="wave-path"
          />
        </svg>
      </span>
    </button>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = review.isLong && !isExpanded;
  const displayText = shouldTruncate
    ? review.text.slice(0, 120) + "..."
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
            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
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

        {review.isLong && (
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
