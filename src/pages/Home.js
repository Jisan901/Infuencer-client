import useTitle from "../utilities/hooks/useTitle";
import Hero from '../components/Home/Hero';
import HeroBottom from '../components/Home/HeroBottom';
import CompanyLogos from '../components/Home/CompanyLogos'
import Popular from '../components/Home/Popular';

function Home() {
  useTitle("Home");
  return (
    <div className="px-3 md:px-10 mx-auto my-4">
        <Hero></Hero>
        <CompanyLogos></CompanyLogos>
        <Popular></Popular>
        <HeroBottom></HeroBottom>
    </div>
  );
}

export default Home;
