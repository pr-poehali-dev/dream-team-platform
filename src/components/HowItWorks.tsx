import { Check } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Создай профиль",
      description: "Укажи свои навыки, расписание занятий и желаемые условия работы"
    },
    {
      number: "02",
      title: "Получи подборку вакансий",
      description: "Наш умный алгоритм подберет вакансии, которые подходят под твое расписание"
    },
    {
      number: "03",
      title: "Автоматическое портфолио",
      description: "Система создаст персонализированное портфолио под каждую вакансию"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Три простых шага для поиска идеальной работы на гибком графике
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm h-full">
                <div className="text-4xl font-bold text-[#9b87f5]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[#9b87f5] rounded-full p-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="h-0.5 w-12 bg-[#9b87f5] absolute top-1/2 left-full ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
