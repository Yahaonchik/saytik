import React, { useEffect, useState } from "react";
import { X, Search } from "lucide-react";
import { repairArticles, RepairArticle } from "@/data/repairArticles";
import { CallMasterModal } from "./CallMasterModal";

interface RepairDetailsModalProps {
  isOpen: boolean;
  articleId: string | null;
  onClose: () => void;
}

// Данные о проблемах с иконками (импортируем из MasterProblemsSection)
const problemsData = [
  {
    articleId: "ne-slivaet-vodu",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F6d7e7527c7234ea08f7783e1cbd2ccc9",
  },
  {
    articleId: "ne-vklyuchaetsya",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F3bed9eea197641c2809ddc9936e850b7",
  },
  {
    articleId: "ne-krutit-baraban",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F0cddf25730054638a975c67d735114e6",
  },
  {
    articleId: "protekaet-voda",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2F698531ce478a4d808c597c63038ce1ae",
  },
  {
    articleId: "shumit-pri-otzhime",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F0a52773350824337b93dd713c9b778a2%2Ff3253ff1d3aa4a4cab219ddc14552016",
  },
];

export const RepairDetailsModal: React.FC<RepairDetailsModalProps> = ({
  isOpen,
  articleId,
  onClose,
}) => {
  const [isCallMasterOpen, setIsCallMasterOpen] = useState(false);

  // З��крытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Блокируем скролл body
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !articleId) return null;

  const article = repairArticles.find((a) => a.id === articleId);
  if (!article) return null;

  // Найти иконку для текущей проблемы
  const problemIcon = problemsData.find(
    (p) => p.articleId === articleId,
  )?.iconUrl;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Извлекаем первый абзац из контента как краткое описание
  const getExcerpt = (content: string) => {
    const firstParagraph =
      content.match(/<p>(.*?)<\/p>/)?.[1] || article.excerpt;
    return firstParagraph.replace(/<[^>]*>/g, ""); // Убираем HTML теги
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 p-6 pb-4 relative">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#72B5FF] leading-tight">
                {article.title}
              </h2>
            </div>

            {/* Problem Icon in top right corner */}
            {problemIcon && (
              <div
                className="absolute top-6 right-6"
                style={{ transform: "translate(-25px, 5px)" }}
              >
                <img
                  src={`${problemIcon}?format=webp&width=150&quality=90`}
                  alt={article.title}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                  style={{
                    imageRendering: "auto",
                    WebkitImageRendering: "auto",
                    MozImageRendering: "auto",
                  }}
                />
              </div>
            )}

            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative z-10"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#40444F] mb-3">
              О проблеме
            </h3>
            <p className="text-[#40444F] leading-relaxed text-base">
              {getExcerpt(article.content)}
            </p>
          </div>

          {/* Prices Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#8EC0F6] mb-4">
              Вероятные причины и стоимость ремонта
            </h3>
            <div className="space-y-3">
              {article.prices.map((price, index) => (
                <div
                  key={index}
                  className="border border-black border-opacity-20 rounded-xl p-4"
                  style={{ borderWidth: "1px" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-[#40444F] text-sm mb-1">
                        {price.cause}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {price.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-[#8EC0F6] text-white px-3 py-2 rounded-lg font-semibold text-sm">
                        от {price.price} ₴
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Master Button */}
            <button
              className="group relative flex items-center justify-center gap-3 rounded-[60px] bg-[#8EC0F6] text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden button-shake"
              onClick={() => setIsCallMasterOpen(true)}
              style={{
                width: "253px",
                height: "50px",
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7AB8F5] to-[#8EC0F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <svg
                width="20"
                height="19"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path
                  d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="relative z-10">Вызвать мастера</span>
            </button>

            {/* Online Diagnosis Button */}
            <button
              className="flex items-center justify-center gap-3 rounded-[60px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-black border-opacity-40"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const diagnosticElement =
                    document.getElementById("online-diagnosis");
                  if (diagnosticElement) {
                    diagnosticElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 300);
              }}
              style={{
                width: "253px",
                height: "50px",
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "500",
                fontSize: "15px",
                color: "#4C4C4C",
                borderWidth: "1px",
              }}
            >
              <Search size={18} style={{ color: "#4C4C4C" }} />
              <span>Онлайн диагностика</span>
            </button>
          </div>
        </div>
      </div>

      {/* Call Master Modal */}
      <CallMasterModal
        isOpen={isCallMasterOpen}
        onClose={() => setIsCallMasterOpen(false)}
      />
    </div>
  );
};
