export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">О нас</h1>
          <p className="text-xl opacity-90">Ваш надежный партнер в мире путешествий</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Наша история</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Edo Travel — это турагентство с многолетним опытом организации незабываемых путешествий. Мы начали свою
              деятельность с простой идеи: сделать качественный отдых доступным для каждого.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              За годы работы мы помогли тысячам клиентов осуществить их мечты о путешествиях. Наша команда
              профессионалов тщательно отбирает лучшие отели, разрабатывает интересные маршруты и обеспечивает высокий
              уровень сервиса.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы гордимся тем, что каждый наш клиент получает не просто поездку, а незабываемые впечатления и эмоции,
              которые останутся с ним на всю жизнь.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Наша миссия</h3>
              <p className="text-gray-600">
                Сделать путешествия доступными, безопасными и незабываемыми для каждого, кто мечтает открыть для себя
                новые горизонты.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Наши ценности</h3>
              <p className="text-gray-600">
                Честность, профессионализм, внимание к деталям и забота о каждом клиенте — это основа нашей работы.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Наши достижения</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg">Лет опыта</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-lg">Довольных клиентов</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Направлений</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
