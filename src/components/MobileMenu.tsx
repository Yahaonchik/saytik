import React, { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="xl:hidden relative">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] border border-[rgba(0,0,0,0.18)] bg-white shadow-sm"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-[999]"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu content - dropdown from header */}
          <div
            className="fixed left-0 right-0 top-[50px] bg-gray-100 shadow-xl z-[1000] border-b border-gray-300"
            style={{
              animation: "slideDown 0.3s ease-out",
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Navigation */}
              <nav className="space-y-3">
                <a
                  href="/"
                  className="block text-[#626B78] font-ibm-plex-serif text-[16px] font-normal hover:text-[#72B5FF] transition-colors py-2 px-2 rounded-md hover:bg-white/50"
                  onClick={() => setIsOpen(false)}
                >
                  Главная
                </a>
                <a
                  href="/buyout"
                  className="block text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[16px] font-normal hover:text-[#72B5FF] transition-colors py-2 px-2 rounded-md hover:bg-white/50"
                  onClick={() => setIsOpen(false)}
                >
                  Выкуп б/у машин
                </a>
                <a
                  href="/articles"
                  className="block text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[16px] font-normal hover:text-[#72B5FF] transition-colors py-2 px-2 rounded-md hover:bg-white/50"
                  onClick={() => setIsOpen(false)}
                >
                  Статьи
                </a>
              </nav>
              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-300 space-y-3">
                <div className="text-[rgba(98,107,120,0.8)] font-ibm-plex-serif text-[14px] font-normal px-2">
                  Пн-Вс: 9:00-21:00
                </div>
                <a
                  href="tel:+380671234567"
                  className="flex items-center justify-center gap-[10px] w-full h-[42px] px-[10px] py-[10px] rounded-[10px] border border-[rgba(0,0,0,0.18)] bg-white shadow-sm"
                >
                  <span className="text-[#626B78] font-ibm-plex-serif text-[14px] font-normal">
                    +38 (067) 123-45-67
                  </span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
