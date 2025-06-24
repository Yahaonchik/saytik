import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { repairArticles, RepairArticle } from "@/data/repairArticles";
import { CallMasterModal } from "./CallMasterModal";

interface RepairDetailsModalProps {
  isOpen: boolean;
  articleId: string | null;
  onClose: () => void;
}

export const RepairDetailsModal: React.FC<RepairDetailsModalProps> = ({
  isOpen,
  articleId,
  onClose,
}) => {
  const [isCallMasterOpen, setIsCallMasterOpen] = useState(false);

  // Закрытие по Escape
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
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#40444F] leading-tight">
                {article.title}
              </h2>
              <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                <span className="bg-[#72B5FF] text-white px-2 py-1 rounded-full text-xs">
                  {article.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
            <h3 className="text-lg font-semibold text-[#40444F] mb-4">
              Вероятные причины и стоимость ремонта
            </h3>
            <div className="space-y-3">
              {article.prices.map((price, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
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
                      <span className="inline-block bg-[#72B5FF] text-white px-3 py-2 rounded-lg font-semibold text-sm">
                        от {price.price} ₴
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#72B5FF] to-[#5AA3E8] rounded-xl p-6 text-center text-white">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-[60px] bg-white border-2 border-transparent shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#72B5FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#72B5FF] font-semibold text-sm">
                  Онлайн диагностика
                </span>
              </button>
              <button
                className="flex items-center justify-center gap-3 px-6 py-3 rounded-[60px] bg-white border-2 border-transparent shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => setIsCallMasterOpen(true)}
              >
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
                    stroke="#72B5FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#72B5FF] font-semibold text-sm">
                  Вызвать мастера
                </span>
              </button>
            </div>
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
