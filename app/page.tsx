import HomeAbout from './components/homeAbout/homeAbout';
import SearchProduct from './components/searchProduct/searchProduct';
export default function Home() {
  return (
    <main className="bg-gray-100">
      <SearchProduct />
      <HomeAbout />
    </main>
  );
}
