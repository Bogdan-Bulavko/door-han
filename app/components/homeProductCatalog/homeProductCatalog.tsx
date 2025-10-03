'use client';

export default function HomeProductCatalog() {
  const dataCatalogProducts = [
    { name: 'Гаражные секционные ворота', img: 'sectional_garage_doors.webp' },
    {
      name: 'Промышленные секционные ворота и технические двери',
      img: 'industrial_sectional_doors.webp',
    },
    {
      name: 'Уличные ворота, калитки и заборные секции',
      img: 'outdoor_gates.webp',
    },
    { name: 'Рольворота и рольставни', img: 'roller_shutters.webp' },
    { name: 'Технические и противопожарные двери', img: 'fire_doors.webp' },
    { name: 'Автоматические раздвижные двери', img: 'auto_doors.webp' },
    { name: 'Автоматика для ворот', img: 'photo_reviews1.webp' },
    { name: 'Устройства управления', img: 'сontrol_devices.webp' },
    { name: 'Шлагбаумы и болларды', img: 'photo_reviews2.webp' },
  ];

  const itemsCatalogProducts = dataCatalogProducts.map((product) => {
    return (
      <li
        key={product.name}
        className="w-75 p-4.5 bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:shadow-xl/30"
      >
        <img
          src={product.img}
          alt="Фото отзыва"
          className="rounded-xl h-40 w-64"
        />
        <p className=" mt-4.5 text-lg font-semibold text-color-company">
          {product.name}
        </p>
      </li>
    );
  });
  return (
    <section className="px-5 max-w-5xl mt-6 m-auto">
      <h2 className="text-3xl max-sm:text-3xl font-bold">Категории товаров</h2>
      <p className="mt-3.5 text-gray-500">
        Широкий ассортимент товаров в различных категориях.
      </p>

      <ul className="w-full mt-5.5 flex flex-wrap justify-center gap-4.5 ">
        {itemsCatalogProducts}
      </ul>
    </section>
  );
}
