import React from "react";

import styled from "styled-components";

import { featured, slide } from "../data";

const SliderComponent = ({ title }) => {
  return (
    <SliderContainer>
      <h1>{title}</h1>
      <Container>
        {slide.map((p) => {
          return (
            <div className="card">
              <img src={p.img} alt="" />
              <div className="content">
                <p>{p.title}</p>
                <h1>${p.price}</h1>
              </div>
            </div>
          );
        })}
      </Container>
    </SliderContainer>
  );
};

export default SliderComponent;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 70%;
  margin: 0 auto;
  justify-content: center;
  height: 100%;
  h1 {
    font-size: 18px;
    text-align: left;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  .card {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 15px;
    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    h1 {
      font-size: 18px;
    }
  }
  img {
    width: 150px;
    background-color: #f5f5f5;
    padding: 10px;
  }
`;
