import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CallMasterModal } from "./CallMasterModal";

// Washing machine brands
const brands = [
  "Indesit",
  "LG",
  "Zanussi",
  "Candy",
  "Electrolux",
  "Ardo",
  "Miele",
  "Whirlpool",
  "Siemens",
  "Atlant",
  "Beko",
  "AEG",
  "Hansa",
  "Gorenje",
  "Brandt",
  "Vestel",
  "Daewoo",
  "Kaiser",
  "Samsung",
  "Bosch",
  "Ariston",
];

// Age options
const ageOptions = [
  "до 3 лет",
  "3-5 лет",
  "5-7 лет",
  "7-10 лет",
  "более 10 лет",
];

// Problems list
const problems = [
  "Течет вода (натекает небольшая лужа)",
  "Течет вода (большая лужа)",
  "Не открывается люк",
  "Машина не греет воду",
  "Не сливает воду",
  "Не отжимает",
  "Шум и вибрация",
  "Не включается",
  "Не набирается вода",
  "Не вращается барабан",
  "Звук постороннего предмета",
  "Выбивает пробки (автоматы)",
  "Бьется током или искрит",
  "Не закрывается",
  "Не работают программы (все или частично)",
  "Мигают все индикаторы",
  "Стирка не останавливается",
  "Стиральная машина зависает",
  "Не выключается",
  "Не полоскает",
];

// Brand reliability coefficients
const brandReliability = {
  // Премиум бренды - более надежные
  Miele: { electronics: 0.3, mechanics: 0.7, price: 1.4 },
  Bosch: { electronics: 0.5, mechanics: 0.8, price: 1.2 },
  Siemens: { electronics: 0.5, mechanics: 0.8, price: 1.2 },
  AEG: { electronics: 0.6, mechanics: 0.9, price: 1.1 },

  // Средний сегмент - сбалансированные
  LG: { electronics: 0.7, mechanics: 1.0, price: 1.0 },
  Samsung: { electronics: 0.7, mechanics: 1.0, price: 1.0 },
  Electrolux: { electronics: 0.8, mechanics: 1.0, price: 1.0 },
  Whirlpool: { electronics: 0.8, mechanics: 1.1, price: 0.95 },
  Zanussi: { electronics: 0.9, mechanics: 1.1, price: 0.9 },
  Gorenje: { electronics: 0.9, mechanics: 1.1, price: 0.9 },
  Beko: { electronics: 1.0, mechanics: 1.2, price: 0.85 },

  // Бюджетный сегмент - чаще ломаются
  Indesit: { electronics: 1.3, mechanics: 1.3, price: 0.8 },
  Ariston: { electronics: 1.2, mechanics: 1.2, price: 0.8 },
  Candy: { electronics: 1.4, mechanics: 1.4, price: 0.75 },
  Ardo: { electronics: 1.5, mechanics: 1.5, price: 0.7 },
  Hansa: { electronics: 1.3, mechanics: 1.3, price: 0.8 },
  Atlant: { electronics: 1.4, mechanics: 1.4, price: 0.7 },
  Brandt: { electronics: 1.1, mechanics: 1.2, price: 0.9 },
  Vestel: { electronics: 1.3, mechanics: 1.3, price: 0.75 },
  Daewoo: { electronics: 1.2, mechanics: 1.3, price: 0.8 },
  Kaiser: { electronics: 1.1, mechanics: 1.2, price: 0.85 },
};

// Age coefficients
const ageCoefficients = {
  "до 3 лет": { electronics: 0.5, mechanics: 0.7, price: 1.0 },
  "3-5 лет": { electronics: 0.8, mechanics: 1.0, price: 1.0 },
  "5-7 лет": { electronics: 1.2, mechanics: 1.3, price: 1.0 },
  "7-10 лет": { electronics: 1.8, mechanics: 1.6, price: 1.0 },
  "более 10 лет": { electronics: 2.5, mechanics: 2.0, price: 1.0 },
};

// Base problem causes and prices
const baseProblemCauses = {
  "Течет вода (натекает небольшая лужа)": [
    {
      cause: "Течь в бунке��е дозатора",
      probability: 5,
      price: 500,
      description: "Замена или ремонт бункера дозатора порошка",
      type: "mechanics",
    },
    {
      cause: "Порвался один из патрубков",
      probability: 15,
      price: 600,
      description: "Замена вышедшего из строя патрубка на новый",
      type: "mechanics",
    },
    {
      cause: "Засорение системы",
      probability: 25,
      price: 550,
      description: "Прочистка системы, герметизация соединений",
      type: "mechanics",
    },
    {
      cause: "Повреждение манжеты люка",
      probability: 15,
      price: 1000,
      description: "Установка новой манжеты, либо ремонт старой",
      type: "mechanics",
    },
    {
      cause: "Соскочил патрубок подачи воды",
      probability: 40,
      price: 300,
      description: "Закрепление патрубка на место",
      type: "mechanics",
    },
  ],
  "Течет вода (большая лужа)": [
    {
      cause: "Порвался один из патрубков",
      probability: 10,
      price: 600,
      description: "Замена вышедшего из строя патрубка на но��ый",
      type: "mechanics",
    },
    {
      cause: "Засорение системы",
      probability: 20,
      price: 550,
      description: "Прочистка системы, герметизация соединений",
      type: "mechanics",
    },
    {
      cause: "Соскочил патрубок подачи воды",
      probability: 70,
      price: 300,
      description: "Закрепление патрубка на место",
      type: "mechanics",
    },
  ],
  "Не открывается люк": [
    {
      cause: "Сломалась ручка люка",
      probability: 40,
      price: 800,
      description: "Замена или ремонт ручки",
      type: "mechanics",
    },
    {
      cause: "Вышел из строя замок блокировки",
      probability: 40,
      price: 1000,
      description: "Замена замка",
      type: "electronics",
    },
    {
      cause: "Нарушение работы электроцепи замка",
      probability: 15,
      price: 800,
      description: "Диагностика и восстановление работоспособности",
      type: "electronics",
    },
    {
      cause: "Сбой в работе модуля управления",
      probability: 5,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
  ],
  "Машина не греет воду": [
    {
      cause: "Перегорел ТЭН (нагреватель)",
      probability: 60,
      price: 750,
      description: "Установка нового ТЭНа (нагревателя)",
      type: "mechanics",
    },
    {
      cause: "Нарушение в работе датчика температуры",
      probability: 25,
      price: 500,
      description: "Замена датчика температуры",
      type: "electronics",
    },
    {
      cause: "Окисление контактов ТЭНа (нет контакта)",
      probability: 15,
      price: 400,
      description: "Чистка контактов и переподключение ТЭНа",
      type: "electronics",
    },
  ],
  "Не сливает воду": [
    {
      cause: "Неисправность помпы (сливного насоса)",
      probability: 45,
      price: 800,
      description: "Замена помпы (сливного насоса)",
      type: "mechanics",
    },
    {
      cause: "Засор��ние сливной системы",
      probability: 50,
      price: 500,
      description: "Прочистка системы (фильтра и патрубков)",
      type: "mechanics",
    },
    {
      cause: "Сбой в работе модуля управления",
      probability: 5,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
  ],
  "Не отжимает": [
    {
      cause: "Поломка двигателя",
      probability: 35,
      price: 1200,
      description: "Ремонт (переборка) двигателя, замена щеток",
      type: "mechanics",
    },
    {
      cause: "Износ приводного ремня",
      probability: 45,
      price: 500,
      description: "Замена приводного ремня",
      type: "mechanics",
    },
    {
      cause: "Износ подшипникового узла",
      probability: 15,
      price: 1900,
      description: "Замена узла (подшипники, сальники)",
      type: "mechanics",
    },
    {
      cause: "Сбой в работе модуля управления",
      probability: 5,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
  ],
  "Шум и вибрация": [
    {
      cause: "Вышел из строя амортизатор",
      probability: 40,
      price: 450,
      description: "Замена амортизатора",
      type: "mechanics",
    },
    {
      cause: "Износ подшипникового узла",
      probability: 10,
      price: 1900,
      description: "Замена узла (подшипники, сальники)",
      type: "mechanics",
    },
    {
      cause: "Противовес плохо закреплен",
      probability: 40,
      price: 500,
      description: "Регулировка противовеса",
      type: "mechanics",
    },
    {
      cause: "Неверная установка машины относительно пола",
      probability: 10,
      price: 450,
      description: "Переустановка стиральной машины",
      type: "mechanics",
    },
  ],
  "Не включается": [
    {
      cause: "Нарушение подключения к сети",
      probability: 5,
      price: 0,
      description:
        "Проверьте правильность подключения и работоспособность розетки",
      type: "self",
    },
    {
      cause: "Поврежден сет��вой кабель",
      probability: 20,
      price: 300,
      description: "Замена сетевого кабеля",
      type: "electronics",
    },
    {
      cause: "Перегорел конденсатор/фильтр",
      probability: 20,
      price: 400,
      description: "Замена конденсатора/фильтра",
      type: "electronics",
    },
    {
      cause: "Вышел из строя модуль управления",
      probability: 25,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
    {
      cause: "Неисправность кнопки включения",
      probability: 15,
      price: 800,
      description: "Замена кнопки включения",
      type: "electronics",
    },
    {
      cause: "Неполадки в электроцепи",
      probability: 15,
      price: 550,
      description: "Поиск и устранение неполадки",
      type: "electronics",
    },
  ],
  "Не набирается вода": [
    {
      cause: "Нет холодной воды",
      probability: 5,
      price: 0,
      description: "Проверить наличие холодной воды в системе водоснабжения",
      type: "self",
    },
    {
      cause: "Неисправен датчик уровня воды",
      probability: 40,
      price: 450,
      description: "Замена датчика уровня воды",
      type: "electronics",
    },
    {
      cause: "Неисправность системы залива воды",
      probability: 25,
      price: 800,
      description: "Ремонт системы залива воды",
      type: "mechanics",
    },
    {
      cause: "Вышел из строя модуль управления",
      probability: 10,
      price: 1500,
      description: "Ремо��т или перепрошивка модуля управления",
      type: "electronics",
    },
    {
      cause: "Засор в системе подачи воды",
      probability: 20,
      price: 500,
      description: "Чистка системы подачи воды",
      type: "mechanics",
    },
  ],
  "Не вращается барабан": [
    {
      cause: "Поломка двигателя",
      probability: 35,
      price: 1200,
      description: "Ремонт (переборка) двигателя, замена щеток",
      type: "mechanics",
    },
    {
      cause: "Износился или соскочил приводной ремень",
      probability: 45,
      price: 500,
      description: "Замена или установка приводного ремня",
      type: "mechanics",
    },
    {
      cause: "Износ подшипникового узла",
      probability: 15,
      price: 1900,
      description: "Замена узла (подшипники, сальники)",
      type: "mechanics",
    },
    {
      cause: "Неисправность модуля управления",
      probability: 5,
      price: 1500,
      description: "Ремонт модуля управления",
      type: "electronics",
    },
  ],
  "Звук постороннего предмета": [
    {
      cause: "Посторонний предмет между баком и барабаном",
      probability: 100,
      price: 600,
      description: "Извлече��ие посторонних предметов",
      type: "mechanics",
    },
  ],
  "Выбивает пробки (автоматы)": [
    {
      cause: "Неисправность ТЭНа (нагревателя)",
      probability: 40,
      price: 750,
      description: "Замена ТЭНа (нагревателя)",
      type: "mechanics",
    },
    {
      cause: "Короткое замыкание в розетке",
      probability: 20,
      price: 0,
      description: "Проверить работоспособность розетки",
      type: "self",
    },
    {
      cause: "Течь воды на электрооборудование стиральной машины",
      probability: 30,
      price: 500,
      description: "Диагностика и восстановление работоспособности",
      type: "electronics",
    },
    {
      cause: "Слишком большая нагрузка на электросеть",
      probability: 10,
      price: 0,
      description: "Выключить часть электроприборов (снизить нагрузку)",
      type: "self",
    },
  ],
  "Бьется током или искрит": [
    {
      cause: "Неисправность элек��роцепи",
      probability: 100,
      price: 500,
      description: "Поиск и устранение неисправности �� электроцепи",
      type: "electronics",
    },
  ],
  "Не закрывается": [
    {
      cause: "Сломалась ручка люка",
      probability: 40,
      price: 800,
      description: "Замена или ремонт ручки",
      type: "mechanics",
    },
    {
      cause: "Вышел из строя замок блокировки",
      probability: 40,
      price: 1000,
      description: "Замена замка",
      type: "electronics",
    },
    {
      cause: "Нарушение работы электроцепи замка",
      probability: 15,
      price: 800,
      description: "Диагностика и восстановление работоспособности",
      type: "electronics",
    },
    {
      cause: "Сбой в работе модуля управления",
      probability: 5,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
  ],
  "Не работают программы (все или частично)": [
    {
      cause: "Сбой в работе модуля управления",
      probability: 100,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
  ],
  "Мигают все индикаторы": [
    {
      cause: "Неисправность блока управления",
      probability: 100,
      price: 1500,
      description: "Ремонт блока управления",
      type: "electronics",
    },
  ],
  "Стирка не останавливается": [
    {
      cause: "Сбой в работе модуля управления",
      probability: 100,
      price: 1500,
      description: "Ремонт или перепрошивка модуля управления",
      type: "electronics",
    },
  ],
  "С��иральная машина зависает": [
    {
      cause: "Неисп��авность модуля управления",
      probability: 100,
      price: 1500,
      description: "Ремонт модуля управления",
      type: "electronics",
    },
  ],
  "Не выключается": [
    {
      cause: "Сбой в работе блока управления",
      probability: 100,
      price: 1500,
      description: "Ремонт или перепрошивка блока управления",
      type: "electronics",
    },
  ],
  "Не полоскает": [
    {
      cause: "Неисправность блока управления",
      probability: 100,
      price: 1500,
      description: "Ремонт блока управления",
      type: "electronics",
    },
  ],
};

function calculateProbabilities(brand: string, age: string, problem: string) {
  const brandCoeff =
    brandReliability[brand as keyof typeof brandReliability] ||
    brandReliability["LG"];
  const ageCoeff = ageCoefficients[age as keyof typeof ageCoefficients];
  const baseCauses =
    baseProblemCauses[problem as keyof typeof baseProblemCauses] ||
    baseProblemCauses["Течет вода (натекает небольшая лужа)"];

  const adjustedCauses = baseCauses.map((cause) => {
    let adjustedProbability = cause.probability;
    let adjustedPrice = cause.price;

    // Применяем коэффициенты в зависимости от типа поломки
    if (cause.type === "electronics") {
      adjustedProbability *= brandCoeff.electronics * ageCoeff.electronics;
    } else if (cause.type === "mechanics") {
      adjustedProbability *= brandCoeff.mechanics * ageCoeff.mechanics;
    }

    // Корректируем цену в зависимости от б��енда
    if (cause.price > 0) {
      adjustedPrice = Math.round(cause.price * brandCoeff.price);
    }

    return {
      ...cause,
      probability: adjustedProbability, // Не округляем пока
      price: adjustedPrice === 0 ? "Самостоятельно" : `от ${adjustedPrice}`,
    };
  });

  // Нормализуем вероятности чтобы сумма была ровно 100%
  const totalProbability = adjustedCauses.reduce(
    (sum, cause) => sum + cause.probability,
    0,
  );

  // Распределяем проценты пропорционально, чтобы сумма была 100
  let remainingPercent = 100;
  const normalizedCauses = adjustedCauses.map((cause, index) => {
    if (index === adjustedCauses.length - 1) {
      // Последнему элементу даем оставшиеся проценты
      return {
        ...cause,
        probability: remainingPercent,
      };
    } else {
      const normalizedProbability = Math.round(
        (cause.probability / totalProbability) * 100,
      );
      remainingPercent -= normalizedProbability;
      return {
        ...cause,
        probability: normalizedProbability,
      };
    }
  });

  return normalizedCauses;
}

export function WashingMachineDiagnostic() {
  const [brand, setBrand] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [problem, setProblem] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [isCallMasterModalOpen, setIsCallMasterModalOpen] = useState(false);

  const handleSubmit = () => {
    if (brand && age && problem) {
      setShowResults(true);
    }
  };

  const resetForm = () => {
    setShowResults(false);
    setBrand("");
    setAge("");
    setProblem("");
  };

  const results = showResults
    ? calculateProbabilities(brand, age, problem)
    : [];

  return (
    <div className="w-full max-w-[835px] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-[25px] font-pt-serif font-bold tracking-[4%] text-[#5D5D5D]">
          Онлайн диагностика стиральной машины
        </h2>
      </div>
      <Card className="bg-white border-gray-200 shadow-lg border-[3px] border-[rgba(114,181,255,0.34)] rounded-[15px]">
        <CardContent className="p-8">
          {!showResults ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[16px] font-vollkorn font-medium text-[#484848]">
                    Марка стиральной машины
                  </label>
                  <Select value={brand} onValueChange={setBrand}>
                    <SelectTrigger className="bg-[#E8E7E7] border-[rgba(0,0,0,0.23)] text-[14px] h-[40px] rounded-[5px] font-ibm-plex-serif text-[#4E5763]">
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((b) => (
                        <SelectItem key={b} value={b} className="text-[14px]">
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-[16px] font-vollkorn font-medium text-[#484848]">
                    Возраст стиральной машины
                  </label>
                  <Select value={age} onValueChange={setAge}>
                    <SelectTrigger className="bg-[#E8E7E7] border-[rgba(0,0,0,0.23)] text-[14px] h-[40px] rounded-[5px] font-ibm-plex-serif text-[#4E5763]">
                      <SelectValue placeholder="Выберите возраст" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageOptions.map((a) => (
                        <SelectItem key={a} value={a} className="text-[14px]">
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[16px] font-vollkorn font-medium text-[#484848]">
                  Выберите проблему из списка
                </label>
                <Select value={problem} onValueChange={setProblem}>
                  <SelectTrigger className="bg-[#E8E7E7] border-[rgba(0,0,0,0.23)] text-[14px] h-[40px] rounded-[5px] font-ibm-plex-serif text-[#4E5763]">
                    <SelectValue placeholder="Выбе��ите проблему" />
                  </SelectTrigger>
                  <SelectContent>
                    {problems.map((p) => (
                      <SelectItem key={p} value={p} className="text-[14px]">
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6 flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!brand || !age || !problem}
                  className="bg-white text-[#7C7878] px-4 py-2 text-[16px] font-ibm-plex-serif rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] hover:shadow-lg transition-all duration-300 w-[168px] h-[38px] disabled:opacity-50"
                >
                  Узнать
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-gray-50 p-4 md:p-8 rounded-xl shadow-md">
                <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
                  Результаты диагностики
                </h3>
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-8">
                  <p className="text-sm md:text-lg">
                    <span className="font-medium">Марка:</span> {brand}
                  </p>
                  <p className="text-sm md:text-lg">
                    <span className="font-medium">Возраст:</span> {age}
                  </p>
                  <p className="text-sm md:text-lg">
                    <span className="font-medium">Проблема:</span> {problem}
                  </p>
                </div>

                <h4 className="text-base md:text-xl font-semibold mb-3 md:mb-4">
                  Возможные причины поломки:
                </h4>
                <div className="space-y-4">
                  {results.map((cause, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 md:p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm md:text-lg">
                          {cause.cause}
                        </p>
                        <p className="text-gray-600 text-xs md:text-sm mt-1">
                          {cause.description}
                        </p>
                        <div className="flex items-center mt-2 md:mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 mr-3 md:mr-4 relative overflow-hidden">
                            <div
                              className={`h-3 md:h-4 rounded-full transition-all duration-1000 relative ${
                                cause.probability > 50
                                  ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                                  : "bg-gradient-to-r from-green-400 to-yellow-400"
                              }`}
                              style={{ width: `${cause.probability}%` }}
                            />
                            <div className="absolute top-0 left-1/2 w-0.5 h-3 md:h-4 bg-red-600 transform -translate-x-0.5"></div>
                          </div>
                          <span
                            className={`text-base md:text-xl font-bold ${cause.probability > 50 ? "text-red-600" : "text-gray-700"}`}
                          >
                            {cause.probability}%
                          </span>
                        </div>
                      </div>
                      <div className="ml-6 text-right">
                        <span
                          className={`text-lg md:text-xl font-semibold ${
                            cause.probability > 50
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {cause.price === "Самостоятельно"
                            ? cause.price
                            : `${cause.price} грн`}
                        </span>
                        <div className="text-xs md:text-sm text-gray-500 mt-1">
                          Вероятность: {cause.probability}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    onClick={() => setIsCallMasterModalOpen(true)}
                    className="bg-[#72B5FF] text-white px-6 py-2 text-[16px] font-ibm-plex-serif rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] hover:bg-[#5A9BFF] hover:shadow-lg transition-all duration-300"
                  >
                    Вызвать мастера
                  </Button>
                  <Button
                    onClick={resetForm}
                    className="bg-white text-[#7C7878] px-6 py-2 text-[16px] font-ibm-plex-serif rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] hover:shadow-lg transition-all duration-300"
                  >
                    Новая диагностика
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Модальное окно вызова мастера */}
      <CallMasterModal
        isOpen={isCallMasterModalOpen}
        onClose={() => setIsCallMasterModalOpen(false)}
      />
    </div>
  );
}
