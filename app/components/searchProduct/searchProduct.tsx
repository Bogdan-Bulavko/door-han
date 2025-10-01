'use client';

export default function SearchProduct() {
  return (
    <section className="p-12 max-sm:p-6 max-w-5xl m-auto text-white bg-color-company rounded-3xl">
      <h1 className="text-4xl max-sm:text-3xl font-bold">
        Современные ворота, рольставни и шлагбаумы
      </h1>
      <p className="mt-3.5">
        Надежные решения для вашего дома и бизнеса. Продажа, установка и
        автоматизация.
      </p>
      <label className="p-3.5 mt-7 flex bg-white/10 rounded-xl">
        <input
          type="text"
          className="w-full placeholder:text-white outline-0"
          placeholder="Введите название продукта или услуги"
        />
        <button className="ml-3.5 py-2.5 px-4 text-color-company rounded-xl bg-white">
          Найти
        </button>
      </label>
      <ul className="mt-5.5 flex gap-4 max-md:flex-col justify-between">
        <li className="p-4.5 bg-white text-center rounded-xl text-gray-500">
          Раздвижные, откатные и секционные ворота с надежной автоматикой.
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl text-gray-500">
          Эффективная защита окон и помещений от взлома и погодных условий.
        </li>
        <li className="p-4.5 bg-white text-center rounded-xl text-gray-500">
          Удобные решения для контроля доступа на территорию.
        </li>
      </ul>
    </section>
  );
}
