'use client';

export default function HomeAbout() {
  return (
    <section className="px-5 max-w-5xl mt-6 m-auto">
      <div className="flex gap-10 max-md:flex-col justify-between items-center">
        <div className="min-w-70 p-3 rounded-2xl bg-white">
          <img src="photo_reviews1.webp" alt="Фото продукции" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">О компании DoorHan</h2>
          <p className="mt-3.5 text-gray-500 text-xs">
            Мы специализируемся на продаже и установке ворот, рольставней и
            шлагбаумов. Более 10 лет опыта в сфере автоматизации.
          </p>
          <ul className="mt-5.5 grid gap-4.5 grid-cols-3 max-[850px]:grid-cols-1">
            <li className="p-4.5 bg-white rounded-xl shadow-xl">
              <h3 className="font-semibold">Гарантия качества</h3>
              <p className="text-sm text-gray-500">
                Мы используем только сертифицированные материалы и проверенные
                механизмы.
              </p>
            </li>
            <li className="p-4.5 bg-white rounded-xl shadow-xl">
              <h3 className="font-semibold">Установка под ключ</h3>
              <p className="text-sm text-gray-500">
                Быстрый и профессиональный монтаж с гарантией.
              </p>
            </li>
            <li className="p-4.5 bg-white rounded-xl shadow-xl">
              <h3 className="font-semibold">Сервис и поддержка</h3>
              <p className="text-sm text-gray-500">
                Обслуживание и ремонт оборудования в кратчайшие сроки.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="mt-6 text-3xl max-sm:text-3xl font-bold">
        Как мы работаем шаг за шагом
      </h2>
      <p className="mt-3.5 text-gray-500">
        Простая схема сотрудничества — от первого звонка до гарантийного
        обслуживания.
      </p>

      <ul className="mt-5.5 grid gap-4.5 grid-cols-4 max-md:grid-cols-1">
        <li className="p-4.5 bg-white text-center rounded-xl shadow-xl">
          <h3 className="text-lg font-semibold">1. Заявка</h3>
          <p className="text-sm text-gray-500">
            Вы оставляете заявку на сайте или звоните нам.
          </p>
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl shadow-xl">
          <h3 className="text-lg font-semibold">2. Консультация</h3>
          <p className="text-sm text-gray-500">
            Мы уточняем детали, подбираем решение и составляем смету.
          </p>
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl shadow-xl">
          <h3 className="text-lg font-semibold">3. Установка</h3>
          <p className="text-sm text-gray-500">
            Монтаж ворот, рольставней или шлагбаума нашими специалистами.
          </p>
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl shadow-xl">
          <h3 className="text-lg font-semibold">4. Сервис</h3>
          <p className="text-sm text-gray-500">
            Поддержка, обслуживание и гарантия качества
          </p>
        </li>
      </ul>
    </section>
  );
}
