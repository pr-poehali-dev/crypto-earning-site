import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Smartphone" size={24} className="text-[#2563EB]" />
            <h1 className="text-xl font-bold">CryptoMobile</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#earnings" className="hover:text-[#2563EB] transition-colors">Как заработать</a>
            <a href="#payouts" className="hover:text-[#2563EB] transition-colors">Выплаты</a>
            <a href="#support" className="hover:text-[#2563EB] transition-colors">Поддержка</a>
          </nav>
          <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
            Начать зарабатывать
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2563EB] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Зарабатывайте криптовалюту с Android
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Просматривайте рекламу и получайте монеты прямо на свой смартфон. 
                Безопасно, просто и выгодно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-[#1A1A1A] hover:bg-gray-100">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать приложение
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1A1A]">
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,000+</div>
                  <div className="text-sm text-gray-400">Активных пользователей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50₽</div>
                  <div className="text-sm text-gray-400">Средний доход в день</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-400">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/img/80ab81eb-bfcf-4b48-a253-e005d67fe107.jpg" 
                alt="Заработок криптовалюты" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-[#2563EB]">₽12,450</CardTitle>
                <CardDescription>Всего выплачено</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600">
                  <Icon name="TrendingUp" size={16} className="mr-1" />
                  <span className="text-sm">+15% за месяц</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-[#2563EB]">2,847</CardTitle>
                <CardDescription>Просмотров рекламы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-blue-600">
                  <Icon name="Eye" size={16} className="mr-1" />
                  <span className="text-sm">Сегодня: 156</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-[#2563EB]">0.0045 BTC</CardTitle>
                <CardDescription>Заработано криптовалюты</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-orange-600">
                  <Icon name="Bitcoin" size={16} className="mr-1" />
                  <span className="text-sm">≈ ₽8,250</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-[#2563EB]">98%</CardTitle>
                <CardDescription>Довольных пользователей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600">
                  <Icon name="Star" size={16} className="mr-1" />
                  <span className="text-sm">Рейтинг 4.9/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Earn Section */}
      <section id="earnings" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Как заработать</h2>
            <p className="text-xl text-gray-600">Простой процесс в 3 шага</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Download" size={32} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#1A1A1A]">1. Скачайте приложение</CardTitle>
                <CardDescription>
                  Установите наше Android-приложение из Google Play Store
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Play" size={32} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#1A1A1A]">2. Смотрите рекламу</CardTitle>
                <CardDescription>
                  Просматривайте короткие видеоролики и получайте монеты
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Wallet" size={32} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-[#1A1A1A]">3. Выводите деньги</CardTitle>
                <CardDescription>
                  Конвертируйте монеты в криптовалюту и выводите на кошелек
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Payouts Section */}
      <section id="payouts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Выплаты</h2>
            <p className="text-xl text-gray-600">Поддерживаемые криптовалюты и способы вывода</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Поддерживаемые валюты</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Bitcoin" size={20} className="text-white" />
                    </div>
                    <span className="font-medium">Bitcoin (BTC)</span>
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="Circle" size={20} className="text-white" />
                    </div>
                    <span className="font-medium">Ethereum (ETH)</span>
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Icon name="Coins" size={20} className="text-white" />
                    </div>
                    <span className="font-medium">Tether (USDT)</span>
                  </div>
                  <Badge variant="secondary">Доступен</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Условия выплат</h3>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2">Минимальная сумма вывода</h4>
                  <p className="text-gray-600">100 монет (≈ ₽50)</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2">Время обработки</h4>
                  <p className="text-gray-600">1-24 часа</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2">Комиссия</h4>
                  <p className="text-gray-600">0% при выводе от 500 монет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Поддержка</h2>
            <p className="text-xl text-gray-600">Мы всегда готовы помочь</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Частые вопросы</h3>
              <div className="space-y-4">
                <details className="p-4 bg-gray-50 rounded-lg">
                  <summary className="font-medium cursor-pointer">Как начать зарабатывать?</summary>
                  <p className="mt-2 text-gray-600">Скачайте приложение, зарегистрируйтесь и начните просматривать рекламу. За каждый просмотр вы получаете монеты.</p>
                </details>
                
                <details className="p-4 bg-gray-50 rounded-lg">
                  <summary className="font-medium cursor-pointer">Сколько можно заработать в день?</summary>
                  <p className="mt-2 text-gray-600">В среднем пользователи зарабатывают 30-100 рублей в день, в зависимости от активности просмотра рекламы.</p>
                </details>
                
                <details className="p-4 bg-gray-50 rounded-lg">
                  <summary className="font-medium cursor-pointer">Безопасно ли это?</summary>
                  <p className="mt-2 text-gray-600">Да, наше приложение использует современные технологии шифрования и не требует доступа к личным данным.</p>
                </details>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Связаться с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Icon name="Mail" size={20} className="text-[#2563EB]" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">support@cryptomobile.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Icon name="MessageCircle" size={20} className="text-[#2563EB]" />
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-gray-600">@cryptomobile_support</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Icon name="Clock" size={20} className="text-[#2563EB]" />
                  <div>
                    <div className="font-medium">Время работы</div>
                    <div className="text-gray-600">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smartphone" size={24} className="text-[#2563EB]" />
                <h3 className="text-xl font-bold">CryptoMobile</h3>
              </div>
              <p className="text-gray-400">
                Зарабатывайте криптовалюту прямо с вашего Android-устройства
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Как заработать</a></li>
                <li><a href="#" className="hover:text-white">Выплаты</a></li>
                <li><a href="#" className="hover:text-white">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Условия</a></li>
                <li><a href="#" className="hover:text-white">Конфиденциальность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@cryptomobile.com</li>
                <li>@cryptomobile_support</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CryptoMobile. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;