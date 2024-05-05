import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import ProductInfo from "./components/pages/ProductInfo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductInfo />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
