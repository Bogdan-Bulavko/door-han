import HomeAbout from './components/homeAbout/homeAbout';
import SearchProduct from './components/searchProduct/searchProduct';
import HomeReviews from './components/homeReviews/homeReviews';
export default function Home() {
  return (
    <main className="bg-gray-100">
      <SearchProduct />
      <HomeAbout />
      <HomeReviews />
    </main>
  );
}
