import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Привет! Я бот Dream Team. Могу помочь подобрать вакансии под твоё расписание и создать портфолио. Расскажи, когда ты свободен для работы?",
    sender: "bot",
  },
];

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";

      // Simple response logic based on user input
      const userText = input.toLowerCase();
      
      if (userText.includes("расписани") || userText.includes("график") || userText.includes("свободен")) {
        botResponse = "Отлично! Я учту твоё расписание при подборе вакансий. Какие у тебя навыки и в какой сфере ты хотел бы работать?";
      } else if (userText.includes("навык") || userText.includes("умени") || userText.includes("могу")) {
        botResponse = "Я подобрал несколько вакансий, которые подходят под твои навыки и расписание: 1) Junior Frontend Developer (удалённо, 15-20 часов в неделю), 2) Контент-менеджер (гибкий график), 3) Графический дизайнер (проектная работа). Какая вакансия тебя больше заинтересовала?";
      } else if (userText.includes("ваканс") || userText.includes("работ")) {
        botResponse = "Я могу автоматически сформировать для тебя портфолио под выбранную вакансию. Хочешь увидеть пример?";
      } else if (userText.includes("консультант") || userText.includes("помощ") || userText.includes("совет")) {
        botResponse = "У нас есть карьерные консультанты, которые помогут тебе определиться с выбором ниши для подработки. Хочешь записаться на бесплатную консультацию?";
      } else {
        botResponse = "Спасибо за информацию! Чтобы подобрать для тебя подходящие вакансии, расскажи пожалуйста о своем графике: в какие дни и время ты можешь работать?";
      }

      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Card className="w-full shadow-md border-gray-100">
      <CardHeader className="bg-[#9b87f5]/10 border-b">
        <CardTitle className="flex items-center gap-2 text-[#1A1F2C]">
          <Bot className="w-5 h-5 text-[#9b87f5]" />
          Dream Team Бот
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 h-[350px] overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-[#9b87f5] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === "bot" && (
                    <Bot className="w-5 h-5 mt-0.5 shrink-0" />
                  )}
                  <p>{message.text}</p>
                  {message.sender === "user" && (
                    <User className="w-5 h-5 mt-0.5 shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t p-3">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Напишите сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button 
            onClick={handleSend} 
            className="bg-[#9b87f5] hover:bg-[#8b5cf6]"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
