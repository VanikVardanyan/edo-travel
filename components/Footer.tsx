import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">✈️ Edo Travel</h3>
            <p className="text-gray-400">Ваш надежный партнер в мире путешествий. Мы делаем ваши мечты реальностью.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-white transition">
                  Туры
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Галерея
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +7 (495) 123-45-67</li>
              <li>✉️ info@edotravel.ru</li>
              <li>📍 г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                📘
              </a>
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                📷
              </a>
              <a
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Edo Travel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
