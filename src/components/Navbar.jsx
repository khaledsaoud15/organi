import React from "react";
import mail from "../icons/mail.png";
import styled from "styled-components";
import pinterest from "../icons/pinterest.svg";
import insta from "../icons/insta.svg";
import twitter from "../icons/twitter.svg";
import facebook from "../icons/facebook.svg";
import arrow from "../icons/arrow-down.png";
import usa from "../icons/usa.png";
import person from "../icons/account.png";
import logo from "../icons/logo.png";
import heart from "../icons/heart.png";
import cartItem from "../icons/shopping-bag.png";

const Navbar = ({ cart, liked, fullPrice }) => {
  return (
    <Nav>
      <TopNav>
        <TopNavLeft>
          <img src={mail} alt="" />
          <p>hello@colorlib.com</p>
        </TopNavLeft>
        <TopNavCentre>
          <p>Free Shipping for all Order of $99</p>
          <div className="icons">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={pinterest} alt="" />
          </div>
        </TopNavCentre>
        <TopNavRight>
          <div className="flag">
            <img src={usa} alt="" className="flagImg" />
            <p>English</p>
            <img src={arrow} alt="" />
          </div>
          <div className="logs">
            <img src={person} alt="" />
            <p>Login</p>
          </div>
        </TopNavRight>
      </TopNav>

      <BottomNav>
        <BottomNavLeft>
          <img src={logo} alt="" />
        </BottomNavLeft>
        <BottomNavCenter>
          <a href="">HOME</a>
          <a href="">SHOP</a>
          <a href="">PAGES</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </BottomNavCenter>
        <BottomNavRight>
          <div className="icon">
            <img src={heart} alt="" />
            <p>{liked.length}</p>
          </div>
          <div className="icon">
            <img src={cartItem} alt="" />
            <p>{cart.length}</p>
          </div>
          <p>
            items: <span>${fullPrice}</span>
          </p>
        </BottomNavRight>
      </BottomNav>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TopNav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px;
  background: #f5f5f5;
  height: 50px;
`;
const TopNavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px;
  gap: 10px;
  border-right: 1px solid #ccc;
  height: 20%;
  img {
    height: 15px;
  }
  p {
    font-size: 14px;
  }
`;
const TopNavCentre = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #ccc;
  height: 50%;
  flex: 4;
  padding: 0 25px;
  justify-content: space-between;
  .icons {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      height: 12px;
    }
  }
  p {
    font-size: 14px;
  }
`;
const TopNavRight = styled.div`
  display: flex;
  /* padding: 0 25px; */
  align-items: center;
  height: 50%;
  flex: 1;
  .flag {
    display: flex;
    padding: 0 25px;
    align-items: center;
    border-right: 1px solid #ccc;
    height: 100%;
    gap: 10px;
    p {
      font-size: 14px;
    }
    .flagImg {
      height: 45px;
    }
    img {
      height: 8px;
    }
  }
  .logs {
    display: flex;
    padding: 0 0 0 25px;
    align-items: center;
    gap: 10px;
    p {
      font-size: 14px;
    }
    img {
      height: 12px;
    }
  }
`;

const BottomNav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 85px;
  justify-content: space-between;
`;
const BottomNavLeft = styled.div``;
const BottomNavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  a {
    font-weight: 600;
    text-decoration: none;
    color: #000;
  }

  a:nth-child(1) {
    color: #80ad3e;
  }

  a:hover {
    color: #80ad3e;
  }
`;
const BottomNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  .icon {
    position: relative;
    p {
      position: absolute;
      top: -70%;
      right: -50%;
      font-size: 12px;
      color: #fff;
      background-color: #80ad3e;
      border-radius: 50%;
      padding: 1px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    margin: 0 5px;
  }

  img {
    height: 20px;
  }

  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;
