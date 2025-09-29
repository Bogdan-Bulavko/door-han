'use client';

import { useState } from 'react';

export default function Header() {
  const [statusMenu, setStatusMenu] = useState(false);

  const openMenu = () => {
    setStatusMenu(!statusMenu);
  };

  return (
    <header className="max-w-5xl m-auto">
      <div className="py-5 px-3 flex items-center relative">
        <nav
          className={`py-5 px-3 absolute top-0 left-0 w-full flex justify-between backdrop-blur-sm duration-500 ${
            statusMenu ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="flex justify-between w-3xs">
            <li>Продукия</li>
            <li>Партнерам</li>
            <li>Контакты</li>
          </ul>
          <button
            className="text-lg font-medium cursor-pointer"
            onClick={openMenu}
          >
            Close nav
          </button>
        </nav>
        <div className="flex-1 flex justify-center">
          <div className="text-3xl font-semibold">LogoHan</div>
        </div>
        <button
          className="text-lg font-medium cursor-pointer"
          onClick={openMenu}
        >
          Open nav
        </button>
      </div>
    </header>
  );
}
