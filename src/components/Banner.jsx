import React from "react";
import styled from "styled-components";
import banner_1 from "../images/banner-1.jpg";
import banner_2 from "../images/banner-2.jpg";

const Banner = () => {
  return (
    <Container>
      <img src={banner_1} alt="" />
      <img src={banner_2} alt="" />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  padding: 50px;
  img {
    width: 50%;
  }
`;
