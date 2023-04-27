import { useState } from "react";
import Navbar from "./components/Navbar";
import { featured } from "./data";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import SinglProduct from "./components/SinglProduct";

function App() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(featured);
  const [liked, setLiked] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genra, setGenra] = useState("all");
  const [fullPrice, setFullPrice] = useState(0);

  return (
    <>
      <Navbar cart={cart} liked={liked} fullPrice={fullPrice} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              liked={liked}
              setLiked={setLiked}
              fullPrice={fullPrice}
              setFullPrice={setFullPrice}
              data={data}
              setData={setData}
              filtered={filtered}
              genra={genra}
              setGenra={setGenra}
              setFiltered={setFiltered}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SinglProduct data={data} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
