import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatBot } from "@/components/ChatBot";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#e9edf5]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] leading-tight mb-4">
                Найди идеальную работу <span className="text-[#9b87f5]">под твоё расписание</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Dream Team помогает студентам найти работу на гибком графике, 
                автоматически подбирая вакансии под ваше расписание и создавая портфолио.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8b5cf6]">
                  Найти работу
                </Button>
                <Button variant="outline" size="lg">
                  Для работодателей
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/placeholder.svg" 
                alt="Dream Team" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* How It Works */}
        <HowItWorks />

        {/* Chat Bot Demo */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Попробуй наш чат-бот</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наш умный бот поможет отфильтровать вакансии по твоему расписанию и автоматически 
              подготовит портфолио
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <ChatBot />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
              Истории успеха студентов
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <img 
                        src="/placeholder.svg" 
                        alt="Student" 
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg">Студент {i}</CardTitle>
                        <CardDescription>Специальность {i}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Благодаря Dream Team я нашел работу с гибким графиком, которая идеально 
                      подходит под мое расписание занятий. Теперь я успеваю и учиться, и зарабатывать!"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-[#9b87f5]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Готов найти идеальную работу?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Зарегистрируйся сейчас и получи доступ к эксклюзивным вакансиям 
              и карьерным консультантам
            </p>
            <Button size="lg" className="bg-white text-[#9b87f5] hover:bg-gray-100">
              Начать бесплатно
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
