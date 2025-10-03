'use client';

export default function Footer() {
  return (
    <footer className="px-5 py-5 max-w-5xl m-auto flex flex-wrap  gap-10 min-md:justify-center">
      <div>
        <div className="max-w-40">
          <img src="logo_color_company.svg" alt="logo" />
        </div>
        <p className="mt-3.5 text-gray-500 w-70">
          Мы специализируемся на продаже и установке ворот, рольставней и
          шлагбаумов. Более 10 лет опыта в сфере автоматизации.
        </p>
      </div>
      <nav>
        <h3 className="text-color-company text-lg font-semibold leading-[1.2]">
          Навигация
        </h3>
        <ul className="mt-3.5 flex flex-col gap-2">
          <li className="text-gray-500">О компании</li>
          <li className="text-gray-500">Продукция</li>
          <li className="text-gray-500">Отзывы</li>
          <li className="text-gray-500">FAQ</li>
          <li className="text-gray-500">Контакты</li>
        </ul>
      </nav>
      <div>
        <h3 className="text-color-company text-lg font-semibold leading-[1.2]">
          Контакты
        </h3>
        <p className="mt-3.5 text-gray-500">
          <a href="tel:+78005553535" className="hover:underline">
            +7 (800) 555-35-35
          </a>
        </p>

        <p className="mt-3.5 text-gray-500">
          <a href="mailto:info@doorhan.ru" className="hover:underline">
            info@doorhan.ru
          </a>
        </p>

        <p className="mt-3.5 text-gray-500">
          <a
            href="https://www.google.com/maps/search/?api=1&query=г.Москва,+ул.+Примерная,+10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            г. Москва, ул. Примерная, 10
          </a>
        </p>
      </div>
    </footer>
  );
}
