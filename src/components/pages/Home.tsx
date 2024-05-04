import Hero from "../home-components/Hero";
import Product from "../home-components/Products";
import Collections from "../home-components/Collection";
import Footer from "../layout/Footer";

function Home() {
  return (
    <div className="w-full mt-12">
      <Hero />
      <Collections />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
