import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { AboutUs } from "./pages/AboutUs";
import { Lucky } from "./pages/Lucky";
import { Filler } from "./pages/Filler";
import { Home } from "./pages/Home";
import { OnlineCatalog } from "./pages/OnlineCatalog";
import { StoreInfo } from "./pages/StoreInfo";
import { Credits } from "./pages/Credits";

function App() {
  return (
    <div>
      <Navbar/>
        <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/onlinecatalog" element={<OnlineCatalog />} />
              <Route path="/store" element={<StoreInfo />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/filler" element={<Filler />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/lucky" element={<Lucky />} />
              <Route path="/credits" element={<Credits />} />
            </Routes>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;

/* Dependencies:
npm install @faker-js/faker
npm install react-icons
npm i react-router-dom bootstrap react-bootstrap
 */ 