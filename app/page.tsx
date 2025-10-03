import HomeAbout from './components/homeAbout/homeAbout';
import SearchProduct from './components/searchProduct/searchProduct';
import HomeReviews from './components/homeReviews/homeReviews';
import HomeQuestions from './components/homeQuestions/homeQuestions';
import HomeProductCatalog from './components/homeProductCatalog/homeProductCatalog';

export default function Home() {
  return (
    <main className="py-6 bg-gray-100">
      <SearchProduct />
      <HomeProductCatalog />
      <HomeAbout />
      <HomeReviews />
      <HomeQuestions />
    </main>
  );
}
