import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
