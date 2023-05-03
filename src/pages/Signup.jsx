import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Signup = ({ inputs, setInputs }) => {
  const [exist, setExist] = useState(false);
  const navigate = useNavigate();

  const handlSubmit = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    const find = user.find((u) => u.email === inputs.email);

    if (find) {
      setExist(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setUser([
        ...user,
        {
          username: inputs.username,
          password: inputs.password,
          email: inputs.email,
        },
      ]);
      navigate("/login");
    }
  };

  return (
    <Container>
      <Text>Register</Text>
      <Inputs>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handlSubmit}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handlSubmit}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handlSubmit}
        />
        <button onClick={() => addUser()}>Register</button>
        {exist ? (
          <p>You already have an account redirecting you to login page</p>
        ) : (
          <p>
            Already have an account please <a href="">Login</a>{" "}
          </p>
        )}
      </Inputs>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 20%;
`;
const Text = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;
const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    padding: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #888888;
  }
  button {
    width: 35%;
    margin: 0 auto;
    padding: 5px;
    background-color: #80ad3e;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      background-color: #90d628;
    }
    :active {
      background-color: #80ad3e;
    }
  }
`;
