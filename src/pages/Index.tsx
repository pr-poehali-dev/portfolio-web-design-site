import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Интерактивный Дашборд",
      description:
        "Современная система аналитики с яркими градиентами и анимациями",
      image: "/img/b7618330-b80f-489e-9792-b31547785feb.jpg",
      tags: ["UI/UX", "Dashboard", "Analytics"],
      category: "Веб-дизайн",
    },
    {
      id: 2,
      title: "Креативная Платформа",
      description:
        "Платформа для демонстрации креативных проектов с интерактивными элементами",
      image: "/img/8d71824a-5f70-4073-ae71-3aa070b45b62.jpg",
      tags: ["Creative", "Portfolio", "Interactive"],
      category: "Веб-дизайн",
    },
    {
      id: 3,
      title: "Мобильное Приложение",
      description:
        "Современный дизайн мобильного приложения с ярким интерфейсом",
      image: "/img/6988454c-da34-40fc-89a8-af10be0f6f60.jpg",
      tags: ["Mobile", "App Design", "Modern"],
      category: "Мобильный дизайн",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Дизайн Портфолио
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Блог
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                🎨 Веб-дизайнер
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Создаю Яркие
              <br />
              Цифровые Решения
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Специализируюсь на создании современных веб-интерфейсов с яркими
              акцентами, интуитивной навигацией и незабываемым пользовательским
              опытом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть работы
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Избранные Работы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Каждый проект — это уникальная история с детальной проработкой
              UX/UI, от концепции до финальной реализации.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <Badge className="bg-white/20 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-blue-50 text-blue-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Экспертиза & Опыт
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Делюсь знаниями о современных тенденциях в дизайне и разработке
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <CardTitle>Тренды UI/UX 2024</CardTitle>
                <CardDescription>
                  Актуальные направления в дизайне интерфейсов и
                  пользовательского опыта
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <CardTitle>Мобильный Дизайн</CardTitle>
                <CardDescription>
                  Принципы создания удобных и красивых мобильных интерфейсов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <CardTitle>Анимации в Вебе</CardTitle>
                <CardDescription>
                  Как правильно использовать анимации для улучшения UX
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Обсудим Ваш Проект
            </h2>
            <p className="text-xl text-gray-600">
              Готов воплотить ваши идеи в яркий и современный дизайн
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Свяжитесь со мной
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon name="Mail" size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">designer@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <Icon name="Phone" size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Телефон</p>
                        <p className="text-gray-600">+7 (999) 123-45-67</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Icon name="MapPin" size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Локация</p>
                        <p className="text-gray-600">Москва, Россия</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4 text-gray-900">
                      Социальные сети
                    </h4>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        <Icon name="Github" size={20} />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-purple-600 text-purple-600 hover:bg-purple-50"
                      >
                        <Icon name="Linkedin" size={20} />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-pink-600 text-pink-600 hover:bg-pink-50"
                      >
                        <Icon name="Instagram" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Напишите мне
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <Input
                        placeholder="Как вас зовут?"
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        placeholder="Расскажите о вашем проекте..."
                        className="border-gray-300 focus:border-blue-600 min-h-[120px]"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Дизайн Портфолио
              </span>
            </div>
            <p className="text-gray-400">
              © 2024 Все права защищены. Создано с ❤️ в Поехали!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
