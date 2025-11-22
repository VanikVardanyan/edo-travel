export default function Contacts() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl opacity-90">Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Отправьте нам сообщение</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Расскажите нам о вашем запросе..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Наши контакты</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Адрес</h3>
                      <p className="text-gray-600">
                        г. Москва, ул. Примерная, д. 123
                        <br />
                        Офис 456
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Телефон</h3>
                      <p className="text-gray-600">
                        +7 (495) 123-45-67
                        <br />
                        +7 (800) 123-45-67 (бесплатно)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">✉️</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">
                        info@edotravel.ru
                        <br />
                        booking@edotravel.ru
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🕒</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Режим работы</h3>
                      <p className="text-gray-600">
                        Пн-Пт: 9:00 - 20:00
                        <br />
                        Сб-Вс: 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                <h3 className="text-xl font-bold mb-2">Следите за нами в соцсетях</h3>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    📘
                  </a>
                  <a
                    href="#"
                    className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    📷
                  </a>
                  <a
                    href="#"
                    className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
