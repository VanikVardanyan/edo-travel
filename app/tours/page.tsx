import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Мальдивы - Рай на земле",
    description: "7 дней на роскошном курорте с белоснежными пляжами",
    price: "от 150 000 ₽",
    duration: "7 дней",
    image: "🏝️",
    featured: true,
  },
  {
    id: 2,
    title: "Дубай - Город будущего",
    description: "Невероятная архитектура, шопинг и развлечения",
    price: "от 80 000 ₽",
    duration: "5 дней",
    image: "🏙️",
    featured: false,
  },
  {
    id: 3,
    title: "Бали - Тропический рай",
    description: "Экзотика, пляжи и древние храмы",
    price: "от 90 000 ₽",
    duration: "8 дней",
    image: "🌴",
    featured: false,
  },
  {
    id: 4,
    title: "Париж - Город любви",
    description: "Романтика, культура и изысканная кухня",
    price: "от 70 000 ₽",
    duration: "4 дня",
    image: "🗼",
    featured: false,
  },
  {
    id: 5,
    title: "Токио - Восточная сказка",
    description: "Современность и традиции в одном городе",
    price: "от 120 000 ₽",
    duration: "6 дней",
    image: "🏯",
    featured: false,
  },
  {
    id: 6,
    title: "Сейшелы - Экзотика",
    description: "Уникальная природа и кристально чистое море",
    price: "от 140 000 ₽",
    duration: "7 дней",
    image: "🌺",
    featured: true,
  },
];

export default function Tours() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Наши туры</h1>
          <p className="text-xl opacity-90">Выберите идеальное путешествие для себя</p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  tour.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-center text-white">
                  <div className="text-7xl mb-4">{tour.image}</div>
                  {tour.featured && (
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Популярный
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">{tour.duration}</span>
                    <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                  </div>
                  <Link
                    href="/contacts"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Забронировать
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Не нашли подходящий тур?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Свяжитесь с нами, и мы подберем индивидуальный маршрут специально для вас
          </p>
          <Link
            href="/contacts"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}
