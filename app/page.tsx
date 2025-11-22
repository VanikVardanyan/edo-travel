import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Откройте мир с Edo Travel</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Незабываемые путешествия по всему миру. Ваша мечта начинается здесь.
          </p>
          <Link
            href="/tours"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            Выбрать тур
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Лучшие цены</h3>
              <p className="text-gray-600">Специальные предложения и выгодные цены на все направления</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🏖️</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Эксклюзивные туры</h3>
              <p className="text-gray-600">Уникальные маршруты и индивидуальные программы путешествий</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">24/7 Поддержка</h3>
              <p className="text-gray-600">Круглосуточная поддержка наших клиентов в любой точке мира</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Популярные направления</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Мальдивы", image: "🏝️", desc: "Райские острова" },
              { name: "Дубай", image: "🏙️", desc: "Современный мегаполис" },
              { name: "Бали", image: "🌴", desc: "Тропический рай" },
            ].map((dest, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-6xl mb-4">{dest.image}</div>
                <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                <p className="text-lg opacity-90">{dest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
