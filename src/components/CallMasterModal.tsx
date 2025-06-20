import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CallMasterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallMasterModal: React.FC<CallMasterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form and close modal
    setFormData({ name: "", phone: "" });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg shadow-xl overflow-hidden relative"
              style={{
                width: "535px",
                height: "439px",
                backgroundImage:
                  "url(https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/frame-747-52952e?format=webp&width=800)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="h-full flex">
                {/* Left Side - Master Image (1/3) - scaled down 1.2x */}
                <div className="w-1/3 relative overflow-hidden flex items-center justify-center">
                  <div className="transform scale-[0.83]">
                    {" "}
                    {/* 1/1.2 = 0.83 */}
                    <img
                      src="https://cdn.builder.io/api/v1/assets/5f43915d1cce45c489b075510e2da397/acc8f5f7-5bb8-49af-b09c-e7bff01ba6f1-1-e6f200?format=webp&width=800"
                      alt="Мастер по ремонту стиральных машин"
                      className="w-full h-full object-cover object-center brightness-110 contrast-105 saturate-110"
                    />
                  </div>
                  {/* Gradient overlay to blend with form */}
                  <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent opacity-30"></div>
                </div>

                {/* Right Side - Form (2/3) */}
                <div className="w-2/3 p-6 flex flex-col justify-center bg-white/90 backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Вызвать мастера
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Оставьте свои контакты и мы свяжемся с вами в течение 15
                      минут
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#72B5FF] focus:border-transparent outline-none transition-colors"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-gray-700 mb-1"
                      >
                        Номер телефона
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#72B5FF] focus:border-transparent outline-none transition-colors"
                        placeholder="+38 (0__) ___-__-__"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#72B5FF] text-white font-medium rounded-lg hover:bg-[#5da3ff] transition-colors mx-auto block text-sm"
                      style={{ width: "242px", height: "40px" }}
                    >
                      Заказать
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Нажимая кнопку "Заказать", вы соглашаетесь с обработкой
                    персональных данных
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
