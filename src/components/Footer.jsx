import logo from "../icons/logo.png";
import pinterest from "../icons/pinterest.svg";
import insta from "../icons/insta.svg";
import twitter from "../icons/twitter.svg";
import facebook from "../icons/facebook.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Left>
        <img src={logo} alt="" />
        <p>Address: 60-49 Road 11378 New York</p>
        <p>Phone: +65 11.188.888</p>
        <p>Email: hello@colorlib.com</p>
      </Left>
      <Center>
        <h1>Useful Links</h1>
        <div className="links">
          <div className="link">
            <p>About us</p>
            <p>About Our Shop</p>
            <p>Secure Shopping</p>
            <p>Delivery infomation</p>
            <p>Privacy Policy</p>
            <p>Our Sitemap</p>
          </div>
          <div className="link">
            <p>Who we are</p>
            <p>Our services</p>
            <p>Projects</p>
            <p>Contact</p>
            <p>Innpvation</p>
            <p>Testimonials</p>
          </div>
        </div>
      </Center>
      <Right>
        <h1>Join Our NewsLetter Now</h1>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <div className="inputs">
          <input type="text" placeholder="Enter your mail" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="icons">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
        </div>
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 30px;
  height: 50vh;

  background-color: #f4f6fa;
`;
const Left = styled.div`
  width: 100%;
  margin-bottom: auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  img {
    width: 100px;
  }

  p {
    opacity: 0.5;
  }
`;
const Center = styled.div`
  width: 100%;
  margin-top: 10%;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  h1 {
    font-size: 18px;
    font-weight: 800;
  }
  p {
    opacity: 0.5;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .link {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
const Right = styled.div`
  margin-bottom: auto;
  width: 100%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h1 {
    font-size: 18px;
    font-weight: 800;
  }
  p {
    font-size: 14px;
    opacity: 0.5;
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 16px;
      height: 16px;
      padding: 10px;
      background-color: #fff;
      border-radius: 50%;
    }
    img:hover {
      background-color: #80ad3e;
      fill: none !important;
    }
  }

  .inputs {
    margin-top: 10px;
    display: flex;

    height: 50px;
    padding: 0 0 0 15px;
    align-items: center;
    width: 90%;
    border: 1px solid #ccc;
    background-color: #fff;
    input {
      width: 70%;
      background-color: transparent;
      border: none;
      outline: none;
    }

    input::placeholder {
      font-size: 16px;
      color: #000;
    }
    button {
      width: 30%;
      height: 100%;
      border: none;
      outline: none;
      padding: 10px;
      background-color: #80ad3e;
      color: #fff;
      font-weight: 700;
    }
  }
`;
