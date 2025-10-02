'use client';
import { useState } from 'react';
export default function Header() {
  const [statusMenu, setStatusMenu] = useState(false);

  const openMenu = () => {
    setStatusMenu(!statusMenu);
  };
  return (
    <header className="px-5 py-7.5 max-w-5xl m-auto flex justify-between items-center max-md:relative">
      <div className="max-w-40">
        <img src="logo_doorhan.svg" alt="logo" className="min-w-40" />
      </div>
      <nav className="flex justify-between">
        <ul
          className={`px-5 py-2 flex flex-wrap justify-center gap-5 max-md:absolute max-md:left-0 duration-500 bg-white rounded-b-2xl ${
            statusMenu ? 'max-md:translate-y-10' : 'max-md:-translate-y-30'
          }`}
        >
          <li className="text-gray-500">О компании</li>
          <li className="text-gray-500">Продукция</li>
          <li className="text-gray-500">Отзывы</li>
          <li className="text-gray-500">FAQ</li>
          <li className="text-gray-500">Контакты</li>
        </ul>
      </nav>
      <button className="min-md:hidden" onClick={openMenu}>
        <img src="menu.svg" alt="menu" />
      </button>
    </header>
  );
}
