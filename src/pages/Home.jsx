import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Featured from "../components/Featured";
import Banner from "../components/Banner";
import BigSlider from "../components/BigSlider";
import BlogPosts from "../components/BlogPosts";

const Home = ({
  cart,
  setCart,
  liked,
  setLiked,
  fullPrice,
  setFullPrice,
  data,
  setData,
  filtered,
  setFiltered,
  genra,
  setGenra,
}) => {
  return (
    <div>
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
      <BlogPosts />
    </div>
  );
};

export default Home;
