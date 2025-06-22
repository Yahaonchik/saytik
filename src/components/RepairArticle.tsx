import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { RepairArticle as RepairArticleType } from "@/data/repairArticles";

interface RepairArticleProps {
  article: RepairArticleType;
  onBack: () => void;
}

export const RepairArticle: React.FC<RepairArticleProps> = ({
  article,
  onBack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#72B5FF] font-medium mb-6 hover:opacity-80 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        Назад к статьям
      </button>

      {/* Article header */}
      <div className="mb-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            {article.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-pt-serif font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      {/* Article content */}
      <div
        className="prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Pricing table */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-pt-serif font-bold mb-6 text-center">
          Стоимость ремонта
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-medium text-gray-700">
                  Причина поломки
                </th>
                <th className="text-right py-3 px-2 font-medium text-gray-700">
                  Цена работ (грн.)
                </th>
              </tr>
            </thead>
            <tbody>
              {article.prices.map((price, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-2">
                    <div>
                      <div className="font-medium text-gray-900">
                        {price.cause}
                      </div>
                      <div className="text-sm text-gray-600">
                        {price.description}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right font-medium text-gray-900">
                    от {price.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-[#446D99] to-[#72B5FF] rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-pt-serif font-bold mb-4">
          Нужен ремонт стиральной машины?
        </h3>
        <p className="text-lg opacity-90 mb-6">
          Наши мастера готовы выехать к вам в течение часа и устранить любую
          поломку
        </p>
        <button className="bg-white text-[#446D99] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Вызвать мастера
        </button>
      </div>
    </motion.div>
  );
};
