import React from "react";
import SliderComponent from "./SliderComponent";
import styled from "styled-components";

const BigSlider = () => {
  return (
    <Container>
      <SliderComponent title="Latest Products" />
      <SliderComponent title="Top Rated Products" />
      <SliderComponent title="Review Products" />
    </Container>
  );
};

export default BigSlider;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
`;
