import Hero from "../home-components/Hero";
import Product from "../home-components/Products";
import Collections from "../home-components/Collection";

function Home() {
  return (
    <div className="w-full mt-12  border border-black">
      <Hero />
      <Collections />
      <Product />
    </div>
  );
}

export default Home;
