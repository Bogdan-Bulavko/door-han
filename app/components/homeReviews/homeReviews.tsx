'use client';

export default function homeReviews() {
  return (
    <section className="max-lg:px-5 max-w-5xl mt-6 m-auto">
      <h2 className="text-3xl max-sm:text-3xl font-bold">
        Что говорят наши клиенты
      </h2>
      <p className="mt-3.5 text-gray-500">
        Отзывы людей и компаний, которые доверили нам безопасность и комфорт.
      </p>

      <ul className="w-full mt-5.5 flex gap-4.5 overflow-auto">
        <li className="min-w-70 p-4.5 bg-white rounded-xl shadow-xl">
          <img
            src="photo_reviews1.webp"
            alt="Фото отзыва"
            className="rounded-xl"
          />
          <p className="mt-4.5 text-gray-500">
            «Заказывали откатные ворота с автоматикой. Всё сделали быстро и
            качественно!»
          </p>
          <p className=" mt-4.5 text-lg font-semibold text-color-company">
            Андрей — частный клиент
          </p>
        </li>
        <li className="min-w-70 p-4.5 bg-white rounded-xl shadow-xl">
          <img
            src="photo_reviews2.webp"
            alt="Фото отзыва"
            className="rounded-xl"
          />
          <p className="mt-4.5 text-gray-500">
            «Установили шлагбаум во дворе. Работает идеально, обслуживание на
            высоте!»
          </p>
          <p className=" mt-4.5 text-lg font-semibold text-color-company">
            Ирина — управляющая ТСЖ
          </p>
        </li>
      </ul>
    </section>
  );
}
