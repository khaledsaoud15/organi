import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const SinglProduct = ({ data }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const find = data.find((d) => d.id === +id);
    setProduct(find);
  }, []);

  // add to cart function to push  elements if there is none and increment price if it already exists
  const addToCartItem = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
        _id: Math.random().toString(36).slice(2, 8),
      })
    );
  };

  return (
    <>
      <Navbar />
      <Container>
        <img src={product.img} alt="" />
        <div className="content">
          <h1>Title: {product.title}</h1>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Deleniti blanditiis delectus exercitationem itaque reiciendis
            labore atque deserunt laborum, rerum sed optio? Sed, quae inventore
            illum aliquam animi corporis veniam! Quam sequi dolor quibusdam
            molestias, voluptatum harum sint reprehenderit quae nobis dolore
            nemo possimus omnis repudiandae quo eligendi officia. Hic, aperiam.
          </p>
          <p>price:${product.price * quantity}</p>
          <div className="prices">
            <div className="left">
              <button onClick={() => handleQuantity("dec")}>-</button>
              <h3>{quantity}</h3>
              <button onClick={() => handleQuantity("inc")}>+</button>
            </div>
            <div className="right">
              <button onClick={() => addToCartItem(product.id)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SinglProduct;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 50px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .prices {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 5px;

    button {
      padding: 5px 10px;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
    }
  }

  .right {
    button {
      padding: 5px 25px;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }
  }
`;
