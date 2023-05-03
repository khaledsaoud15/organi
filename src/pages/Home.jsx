import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Featured from "../components/Featured";
import Banner from "../components/Banner";
import BigSlider from "../components/BigSlider";
import BlogPosts from "../components/BlogPosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = ({ data, setData, filtered, setFiltered, genra, setGenra }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <Featured
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
      <Footer />
    </div>
  );
};

export default Home;
