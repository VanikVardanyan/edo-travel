const galleryImages = [
  { id: 1, emoji: "🏝️", title: "Мальдивы", category: "Пляжный отдых" },
  { id: 2, emoji: "🏙️", title: "Дубай", category: "Городской туризм" },
  { id: 3, emoji: "🌴", title: "Бали", category: "Экзотика" },
  { id: 4, emoji: "🗼", title: "Париж", category: "Культура" },
  { id: 5, emoji: "🏯", title: "Токио", category: "Азия" },
  { id: 6, emoji: "🌺", title: "Сейшелы", category: "Пляжный отдых" },
  { id: 7, emoji: "🏔️", title: "Альпы", category: "Горы" },
  { id: 8, emoji: "🌊", title: "Санторини", category: "Греция" },
  { id: 9, emoji: "🕌", title: "Стамбул", category: "Ближний Восток" },
];

export default function Gallery() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Галерея</h1>
          <p className="text-xl opacity-90">Вдохновитесь красотой наших направлений</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Наши направления</h2>
            <p className="text-gray-600">Каждое путешествие — это уникальная история</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
              >
                <div className="text-7xl mb-4 text-center">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-center opacity-90">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Отзывы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                text: "Незабываемое путешествие на Мальдивы! Всё было организовано на высшем уровне.",
                rating: 5,
              },
              {
                name: "Дмитрий Смирнов",
                text: "Отличный сервис и внимательное отношение к деталям. Рекомендую!",
                rating: 5,
              },
              {
                name: "Мария Козлова",
                text: "Поездка в Дубай превзошла все ожидания. Спасибо команде Edo Travel!",
                rating: 5,
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-semibold text-gray-800">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
