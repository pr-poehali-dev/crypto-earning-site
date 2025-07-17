import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isEditingNews, setIsEditingNews] = useState(false);
  const [isEditingPromotions, setIsEditingPromotions] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState<number | null>(null);
  
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Новая формула Anti-Age геля",
      description: "Представляем революционную формулу с пептидами и гиалуроновой кислотой",
      date: "15 июля 2024",
      link: "#news1"
    },
    {
      id: 2,
      title: "Расширение линейки продуктов",
      description: "Скоро в продаже: гели для чувствительной кожи с экстрактами трав",
      date: "10 июля 2024",
      link: "#news2"
    }
  ]);
  
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: "Скидка 30% на все гели",
      description: "При покупке от 3 тюбиков - скидка 30% на всю линейку",
      discount: "30%",
      validUntil: "31 июля 2024",
      link: "#promo1"
    },
    {
      id: 2,
      title: "Новинка месяца",
      description: "Увлажняющий гель с алоэ - специальная цена при заказе до 25 июля",
      discount: "20%",
      validUntil: "25 июля 2024",
      link: "#promo2"
    }
  ]);
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Увлажняющий гель с алоэ",
      price: 890,
      image: "/img/3c76cc5f-7899-4f58-a827-2863290a16f5.jpg",
      description: "Интенсивное увлажнение для всех типов кожи",
      composition: "Алоэ вера, гиалуроновая кислота, пантенол",
      volume: "50 мл",
      benefits: ["Увлажняет на 24 часа", "Успокаивает раздражения", "Подходит для чувствительной кожи"]
    },
    {
      id: 2,
      name: "Anti-Age гель с пептидами",
      price: 1290,
      image: "/img/3c76cc5f-7899-4f58-a827-2863290a16f5.jpg",
      description: "Омолаживающий гель для зрелой кожи",
      composition: "Пептиды, ретинол, коллаген",
      volume: "30 мл",
      benefits: ["Разглаживает морщины", "Повышает эластичность", "Стимулирует обновление клеток"]
    },
    {
      id: 3,
      name: "Очищающий гель",
      price: 650,
      image: "/img/3c76cc5f-7899-4f58-a827-2863290a16f5.jpg",
      description: "Мягкое очищение без пересушивания",
      composition: "Салициловая кислота, экстракт зеленого чая",
      volume: "150 мл",
      benefits: ["Глубоко очищает поры", "Контролирует жирность", "Предотвращает воспаления"]
    },
    {
      id: 4,
      name: "Восстанавливающий гель",
      price: 1150,
      image: "/img/3c76cc5f-7899-4f58-a827-2863290a16f5.jpg",
      description: "Восстановление после повреждений",
      composition: "Центелла азиатская, D-пантенол, ниацинамид",
      volume: "40 мл",
      benefits: ["Заживляет микротрещины", "Снимает воспаления", "Укрепляет защитный барьер"]
    }
  ]);

  const updateProductPrice = (id: number, newPrice: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, price: newPrice } : product
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <Icon name="Droplets" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">GelPro</h1>
                <p className="text-sm text-gray-600">Премиальная косметика</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">О бренде</a>
              <a href="#news" className="text-gray-700 hover:text-emerald-600 transition-colors">Новости</a>
              <a href="#promotions" className="text-gray-700 hover:text-emerald-600 transition-colors">Акции</a>
              <a href="#catalog" className="text-gray-700 hover:text-emerald-600 transition-colors">Каталог</a>
            </nav>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Натуральная красота в каждой капле
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                GelPro — это инновационные косметические гели, созданные с использованием 
                передовых технологий и натуральных компонентов для здоровья вашей кожи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Посмотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/img/112b1b10-bfc9-439e-ba95-6f8fe37cc485.jpg" 
                alt="Продукция GelPro" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Brand Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/04b4736d-1748-4832-b1e9-6904fa23a1be.jpg" 
                alt="Лаборатория GelPro" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О бренде GelPro</h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 15 лет мы создаем инновационные косметические гели, которые заботятся 
                о здоровье и красоте вашей кожи. Наша лаборатория использует только проверенные 
                компоненты и современные технологии производства.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-gray-600">продуктов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                  <div className="text-gray-600">натуральность</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-gray-700">Сертифицированные компоненты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-gray-700">Дерматологические тесты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600" />
                  <span className="text-gray-700">Экологичная упаковка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Новости</h2>
            <Button 
              variant="outline" 
              onClick={() => setIsEditingNews(!isEditingNews)}
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              <Icon name="Edit" size={16} className="mr-2" />
              {isEditingNews ? 'Сохранить' : 'Редактировать'}
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge variant="secondary">{item.date}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Акции</h2>
            <Button 
              variant="outline" 
              onClick={() => setIsEditingPromotions(!isEditingPromotions)}
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              <Icon name="Edit" size={16} className="mr-2" />
              {isEditingPromotions ? 'Сохранить' : 'Редактировать'}
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800">{promo.discount}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {promo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Действует до: {promo.validUntil}
                    </span>
                    <a 
                      href={promo.link} 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог гелей</h2>
            <p className="text-xl text-gray-600">Выберите подходящий гель для вашего типа кожи</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="sm"
                      variant="outline"
                      onClick={() => setIsEditingProduct(isEditingProduct === product.id ? null : product.id)}
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      <Icon name="Edit" size={14} />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">
                      {isEditingProduct === product.id ? (
                        <Input
                          type="number"
                          value={product.price}
                          onChange={(e) => updateProductPrice(product.id, Number(e.target.value))}
                          className="w-24 text-lg"
                        />
                      ) : (
                        `₽${product.price}`
                      )}
                    </span>
                    <Badge variant="secondary">{product.volume}</Badge>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Описание:</h4>
                            <p className="text-gray-600">{product.description}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Состав:</h4>
                            <p className="text-gray-600">{product.composition}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Преимущества:</h4>
                            <ul className="space-y-1">
                              {product.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                  <Icon name="CheckCircle" size={16} className="text-emerald-600 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t">
                            <span className="text-2xl font-bold text-emerald-600">₽{product.price}</span>
                            <Button className="bg-emerald-600 hover:bg-emerald-700">
                              Купить
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">GelPro</span>
              </div>
              <p className="text-gray-400">
                Премиальные косметические гели для здоровья и красоты вашей кожи
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Увлажняющие гели</a></li>
                <li><a href="#" className="hover:text-white">Anti-age серия</a></li>
                <li><a href="#" className="hover:text-white">Очищающие гели</a></li>
                <li><a href="#" className="hover:text-white">Восстанавливающие</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Новости</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@gelpro.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GelPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;