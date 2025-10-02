'use client';

export default function HomeAbout() {
  return (
    <section className="px-5 max-w-5xl mt-6 m-auto">
      <h2 className="text-3xl max-sm:text-3xl font-bold">
        Как мы работаем шаг за шагом
      </h2>
      <p className="mt-3.5 text-gray-500">
        Простая схема сотрудничества — от первого звонка до гарантийного
        обслуживания.
      </p>

      <ul className="mt-5.5 grid gap-4.5 grid-cols-4 max-md:grid-cols-1">
        <li className="p-4.5 bg-white text-center rounded-xl shadow-2xs">
          <h3 className="text-lg font-semibold">1. Заявка</h3>
          <p className="text-sm text-gray-500">
            Вы оставляете заявку на сайте или звоните нам.
          </p>
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl shadow-2xs">
          <h3 className="text-lg font-semibold">2. Консультация</h3>
          <p className="text-sm text-gray-500">
            Мы уточняем детали, подбираем решение и составляем смету.
          </p>
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl shadow-2xs">
          <h3 className="text-lg font-semibold">3. Установка</h3>
          <p className="text-sm text-gray-500">
            Монтаж ворот, рольставней или шлагбаума нашими специалистами.
          </p>
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl shadow-2xs">
          <h3 className="text-lg font-semibold">4. Сервис</h3>
          <p className="text-sm text-gray-500">
            Поддержка, обслуживание и гарантия качества
          </p>
        </li>
      </ul>
    </section>
  );
}
