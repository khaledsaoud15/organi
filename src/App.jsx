import { useState } from "react";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);
  const [fullPrice, setFullPrice] = useState(0);
  console.log(fullPrice);
  return (
    <>
      <Navbar cart={cart} liked={liked} fullPrice={fullPrice} />
      <Header />
      <Slider />
      <Featured
        cart={cart}
        setCart={setCart}
        liked={liked}
        setLiked={setLiked}
        fullPrice={fullPrice}
        setFullPrice={setFullPrice}
      />
    </>
  );
}

export default App;
