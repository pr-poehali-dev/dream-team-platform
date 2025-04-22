import { Calendar, MessageSquareText, BookUser, BarChart4 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-[#9b87f5]" />,
      title: "Гибкий график",
      description: "Находите работу, которая идеально подходит под ваше расписание занятий"
    },
    {
      icon: <MessageSquareText className="w-12 h-12 text-[#9b87f5]" />,
      title: "Умный чат-бот",
      description: "Наш бот подбирает вакансии исходя из вашего расписания и создает портфолио"
    },
    {
      icon: <BookUser className="w-12 h-12 text-[#9b87f5]" />,
      title: "Карьерные консультанты",
      description: "Получите профессиональный совет по выбору ниши для подработки"
    },
    {
      icon: <BarChart4 className="w-12 h-12 text-[#9b87f5]" />,
      title: "Автоматическое портфолио",
      description: "Система автоматически формирует портфолио под конкретные вакансии"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dream Team предлагает уникальные инструменты, которые помогут студентам 
            найти идеальную работу
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
