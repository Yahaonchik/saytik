"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CallMasterMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-3 w-[253px] h-[50px] px-[38px] py-[15px] rounded-[60px] bg-transparent border-2 border-[#72B5FF] shadow-[9px_13px_4px_0px_rgba(0,0,0,0.06)] button-shake"
      >
        <svg
          width="20"
          height="19"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="phone-shake"
        >
          <path
            d="M12.832 14.354C13.0385 14.4409 13.2712 14.4608 13.4917 14.4103C13.7122 14.3598 13.9073 14.242 14.045 14.0762L14.4 13.65C14.5863 13.4223 14.8279 13.2375 15.1056 13.1102C15.3833 12.9829 15.6895 12.9167 16 12.9167H19C19.5304 12.9167 20.0391 13.1098 20.4142 13.4536C20.7893 13.7975 21 14.2638 21 14.75V17.5C21 17.9862 20.7893 18.4525 20.4142 18.7964C20.0391 19.1402 19.5304 19.3333 19 19.3333C14.2261 19.3333 9.64773 17.5949 6.27208 14.5006C2.89642 11.4062 1 7.20941 1 2.83333C1 2.3471 1.21071 1.88079 1.58579 1.53697C1.96086 1.19315 2.46957 1 3 1H6C6.53043 1 7.03914 1.19315 7.41421 1.53697C7.78929 1.88079 8 2.3471 8 2.83333V5.58333C8 5.86795 7.92771 6.14866 7.78885 6.40323C7.65 6.65779 7.44839 6.87923 7.2 7.05L6.732 7.37175C6.54842 7.50025 6.41902 7.68304 6.36579 7.88907C6.31256 8.09511 6.33878 8.31168 6.44 8.502C7.80668 11.0465 10.0544 13.1044 12.832 14.354Z"
            stroke="#72B5FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#72B5FF] font-ubuntu text-[15px] font-medium">
          Вызвать мастера
        </span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            >
              <div
                className="relative bg-white rounded-2xl p-8 w-[400px] shadow-2xl"
                style={{
                  backgroundImage: `url('https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/frame-747-75a839?format=webp&width=800')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-white/90 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    ×
                  </button>

                  <div className="flex items-start gap-6">
                    {/* Master illustration */}
                    <div className="flex-shrink-0">
                      <img
                        src="https://cdn.builder.io/api/v1/assets/485f32eaccd940459f228ddc7002fb07/acc8f5f7-5bb8-49af-b09c-e7bff01ba6f1-1-abf288?format=webp&width=800"
                        alt="Мастер"
                        className="w-20 h-24 object-contain"
                      />
                    </div>

                    {/* Form */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">
                        Заказать звонок
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          placeholder="Имя"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        />

                        <input
                          type="tel"
                          placeholder="Номер телефона"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        />

                        <button
                          type="submit"
                          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        >
                          Заказать
                        </button>
                      </form>

                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Нажмите ссылку в течение часа
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
