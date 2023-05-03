import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { resetCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Popup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetCart());
    navigate("/");
  };
  return (
    <Container>
      <div className="inputs">
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="phone number" />
        <input type="password" placeholder="password" />
        <div className="cart">
          <input type="text" placeholder="cart number" />
          <input type="text" placeholder="pin" />
        </div>
        <button onClick={() => reset()}>Procced to Payment</button>
      </div>
    </Container>
  );
};

export default Popup;

const Container = styled.div`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 50%;
  height: 60vh;
  border: 1px solid #ccc;
  padding: 10px;
  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    input {
      width: 100%;
      padding: 5px 0;
      border: none;
      border-bottom: 1px solid #ccc;
      outline: none;
      ::placeholder {
        padding-left: 15px;
      }
    }
    .cart {
      display: flex;
      align-items: center;
      gap: 15px;
      width: 100%;
    }
    button {
      padding: 5px 25px;
      border: none;
      background-color: #80ad3e;
      color: #fff;
      cursor: pointer;
    }
  }
`;
