import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Dream Team" className="h-8 w-auto" />
            <span className="font-bold text-xl text-[#1A1F2C]">Dream Team</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-[#9b87f5] font-medium">
              Главная
            </Link>
            <Link to="/vacancies" className="text-gray-600 hover:text-[#9b87f5] font-medium">
              Вакансии
            </Link>
            <Link to="/for-employers" className="text-gray-600 hover:text-[#9b87f5] font-medium">
              Работодателям
            </Link>
            <Link to="/consultants" className="text-gray-600 hover:text-[#9b87f5] font-medium">
              Консультанты
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Войти</Button>
            <Button className="bg-[#9b87f5] hover:bg-[#8b5cf6]">Регистрация</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/vacancies" 
              className="text-gray-600 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Вакансии
            </Link>
            <Link 
              to="/for-employers" 
              className="text-gray-600 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Работодателям
            </Link>
            <Link 
              to="/consultants" 
              className="text-gray-600 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Консультанты
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" onClick={() => setMobileMenuOpen(false)}>
                Войти
              </Button>
              <Button 
                className="bg-[#9b87f5] hover:bg-[#8b5cf6]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Регистрация
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
