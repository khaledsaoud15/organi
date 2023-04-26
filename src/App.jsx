import { useState } from "react";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import { featured } from "./data";
import BigSlider from "./components/BigSlider";

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
      <Header />
      <Slider />
      <Featured
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
      <Banner />
      <BigSlider />
    </>
  );
}

export default App;
