import React, { useEffect, useState } from "react";
import { featured } from "../data";
import heart from "../icons/heart.png";
import cartIcon from "../icons/shopping-bag.png";
import styled from "styled-components";

const Featured = ({
  cart,
  setCart,
  liked,
  setLiked,
  fullPrice,
  setFullPrice,
  genra,
  setGenra,
  filtered,
  setFiltered,
  data,
}) => {
  const [count, setCount] = useState(1);

  const addToCart = (id) => {
    const find = data.find((f) => f.id === id);
    if (cart.includes(find)) {
      setCount(count + 1);
      setFullPrice((fullPrice += parseInt(find.price)));
    } else {
      setCart([...cart, find]);
      setFullPrice((fullPrice += parseInt(find.price)));
    }
  };

  console.log(cart);

  // Liked function to push liked elements if there is none
  const addToLiked = (id) => {
    // loop over the products and find the first occurence
    const find = data.find((f) => f.id === id);
    if (liked.includes(find)) {
      liked.splice(liked.indexOf(find), 1);
      setLiked([...liked]);
    } else {
      setLiked([...liked, find]);
    }
  };

  useEffect(() => {
    if (genra === "all") {
      setFiltered(data);
      return;
    }
    const filteredData = data.filter((product) => product.category === genra);
    setFiltered(filteredData);
  }, [genra]);

  return (
    <Container>
      <Head>Featured</Head>
      <Filter>
        <p onClick={() => setGenra("all")}>All</p>
        <p onClick={() => setGenra("Oranges")}>Oranges</p>
        <p onClick={() => setGenra("Fresh Meat")}>Fresh Meat</p>
        <p onClick={() => setGenra("Vegetables")}>Vegetables</p>
        <p onClick={() => setGenra("Fast Food")}>Fast Food</p>
      </Filter>
      <Grid>
        {filtered.map((card) => {
          return (
            <Card key={card.id}>
              <Images>
                <img src={card.img} alt="" />
                <Icons>
                  <img src={heart} alt="" onClick={() => addToLiked(card.id)} />
                  <img
                    src={cartIcon}
                    alt=""
                    onClick={() => addToCart(card.id)}
                  />
                </Icons>
              </Images>
              <h1>{card.title}</h1>
              <p>${card.price}</p>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Head = styled.h1`
  text-align: center;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 110%;
    left: 47%;
    width: 5%;
    background-color: #80ad3e;
    height: 4px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 90%;
  margin: 0 auto;
`;

const Images = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40vh;
  background: #f6f6f6;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Icons = styled.div`
  position: absolute;
  transition: all 0.3s linear;
  bottom: -20%;
  gap: 10px;
  left: 50%;
  translate: -50%;
  display: flex;
  align-items: center;
  img {
    width: 15px;
    background: #fff;
    padding: 10px;
    border-radius: 50%;
  }

  img:hover {
    background-color: #80ad3e;
    cursor: pointer;
    rotate: 360deg;
    transition: all 0.2s linear;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 30%;
  margin: 0 auto;
  p {
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 60vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 18px;
  }

  :hover ${Icons} {
    bottom: 10px;
    transition: all 0.3s linear;
  }

  h1 {
    font-weight: 400;
  }

  p {
    font-weight: 700;
  }
`;
