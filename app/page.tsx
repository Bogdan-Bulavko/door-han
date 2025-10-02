import HomeAbout from './components/homeAbout/homeAbout';
import SearchProduct from './components/searchProduct/searchProduct';
import HomeReviews from './components/homeReviews/homeReviews';
import HomeQuestions from './components/homeQuestions/homeQuestions';
export default function Home() {
  return (
    <main className="py-6 bg-gray-100">
      <SearchProduct />
      <HomeAbout />
      <HomeReviews />
      <HomeQuestions />
    </main>
  );
}
