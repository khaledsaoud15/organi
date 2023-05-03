import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeFromCart } from "../redux/cartSlice";
import Popup from "../components/Popup";

const Cart = () => {
  const cart = useSelector((props) => props.cart.cart);
  const total = useSelector((props) => props.cart.total);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [_id, setId] = useState("");

  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="cart-content">
          <h1>in Bag:{cart.length}</h1>
          <h1>total price:${total}</h1>
        </div>
        {cart.length === 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          <Grid>
            {cart.map((c) => {
              return (
                <div className="card" key={c.id}>
                  <img src={c.img} alt="" />
                  <div className="content">
                    <h3>{c.title}</h3>
                    <p>{c.price * c.quantity} </p>
                    <p>{c.quantity} </p>
                  </div>
                  <div className="buttons">
                    <button onClick={() => deleteFromCart(c._id)}>
                      Delete from cart
                    </button>
                  </div>
                </div>
              );
            })}
          </Grid>
        )}
        {cart.length !== 0 && (
          <button
            onClick={() => {
              setActive(!active);
            }}
            className="btn"
          >
            Submit Payment
          </button>
        )}
      </Container>

      {active && <Popup />}
      <Footer />
    </>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  .cart-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 20px;
    }
  }
  .btn {
    padding: 5px;
    width: 30%;
    margin: 0 auto;
    background-color: #80ad3e;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
  }
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  overflow-y: scroll;
  gap: 15px;
  width: 100%;
  .card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 30%;
    }
    border-bottom: 1px solid #ccc;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
    button {
      padding: 5px 15px;
      border: none;
      background-color: #80ad3e;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
