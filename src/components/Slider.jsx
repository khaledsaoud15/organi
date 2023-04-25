import "./swiper.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../data";
import styled from "styled-components";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

const Slider = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swipe>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // loop={true}
      >
        <Container>
          {products.map((p) => {
            return (
              <SwiperSlide>
                <Card>
                  <img src={p.img} alt="" />
                  <h1>{p.text}</h1>
                </Card>
              </SwiperSlide>
            );
          })}
        </Container>
      </Swiper>
    </Swipe>
  );
};

export default Slider;

const Swipe = styled.div`
  height: 60vh;
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  width: 70%;
  height: 100%;
`;
const Card = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #f4f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
  }

  h1 {
    padding: 5px 25px;
    font-size: 23px;
    background-color: #fff;
    font-weight: 400;
  }
`;
