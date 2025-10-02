'use client';

export default function HomeQuestions() {
  return (
    <section className="px-5 max-w-5xl m-auto">
      <h3 className="text-lg font-bold">Часто задаваемые вопросы</h3>

      <div className="flex gap-5 max-md:flex-col min-md:items-center">
        <ul className="mt-5.5 grid gap-4.5 grid-cols-1">
          <li className="p-4.5 bg-white max-md:text-center rounded-xl">
            <p>Вы оставляете заявку на сайте или звоните нам.</p>
          </li>
          <li className="p-4.5 bg-white max-md:text-center rounded-xl">
            <p>Мы уточняем детали, подбираем решение и составляем смету.</p>
          </li>
          <li className="p-4.5 bg-white max-md:text-center rounded-xl">
            <p>Монтаж ворот, рольставней или шлагбаума нашими специалистами.</p>
          </li>
        </ul>
        <div className="p-6 text-white bg-color-company rounded-3xl">
          <h4 className="text-2xl font-bold">
            Остались вопросы? Нужна консультация?
          </h4>
          <p className="mt-3.5">
            Оставьте заявку — наш менеджер свяжется с вами и ответит на вопросы.
          </p>
          <button className="py-2.5 px-4 mt-3.5 text-color-company rounded-full bg-white">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
}
