import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../icons/arrow-down.png";
import phone from "../icons/phone-call.svg";
import header from "../images/header.png";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Menue>
        <div className="menueItem">
          <div className="ham">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>All departments</h1>
          <img src={arrow} alt="" />
        </div>
        <div className="dropDown">
          {items.map((i, index) => {
            return <p key={index}>{i}</p>;
          })}
        </div>
      </Menue>
      <Head>
        <Inputs>
          <div className="left">
            <p>All Categories</p>
            <img src={arrow} alt="" />
          </div>
          <input type="text" placeholder="What do you need" />
          <button>Search</button>
        </Inputs>
        <Operator>
          <img src={phone} alt="" />
          <div className="op">
            <h1>+65 11.188.888</h1>
            <p>support 24/7 time</p>
          </div>
        </Operator>
        <HeaderImg src={header} />
      </Head>
    </Container>
  );
};

export default Header;

const items = [
  "Fresh Meat",
  "Vegetables",
  "Fruite & Nut Gifts",
  "Fresh Berries",
  "Ocean Foods",
  "Butter & Eggs",
  "Fast Food",
  "Fresh Onion",
  "Papayaya & Crisps",
  "Oatmeal",
  "fresh Bananas",
];

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  gap: 25px;
  width: 90%;
  margin: 0 auto;
  margin-top: 1%;
`;

const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 15px;
  height: 100%;
`;

const Inputs = styled.div`
  width: 100%;
  height: 8vh;

  gap: 10px;
  grid-column: span 2;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  justify-content: space-between;
  .left {
    width: 100%;
    border-right: 1px solid #ccc;
    margin-left: 10px;
    justify-content: space-around;
    display: flex;
    align-items: center;
    height: 50%;
    flex: 1;
    img {
      height: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 700;
    }
  }

  input {
    flex: 2;
    border: none;
    outline: none;
  }
  input::placeholder {
    opacity: 0.5;
  }

  button {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background-color: #80ad3e;
    color: #fff;
  }
`;

const Menue = styled.div`
  padding: 5px;
  width: 37%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .menueItem {
    height: 8vh;
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    background: #80ad3e;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    gap: 10px;
    h1 {
      font-size: 20px;
    }
    img {
      height: 10px;
    }
    .ham {
      display: flex;
      flex-direction: column;
      gap: 2px;
      span {
        width: 15px;
        height: 2px;
        background-color: #fff;
      }
    }
  }

  .dropDown {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    height: 100%;
    border: 1px solid #ccc;
  }
`;

const Operator = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  img {
    height: 40px;
  }
  h1 {
    font-size: 18px;
  }

  img {
    height: 15px;
    background: #ddd;
    padding: 15px;
    border-radius: 50%;
  }
`;
const HeaderImg = styled.img`
  width: 100%;
  grid-column: span 3;
  height: 60vh;
  margin-top: 15px;
  margin-bottom: auto;
`;
