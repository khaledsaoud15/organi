import React from "react";
import { blog } from "../data";
import styled from "styled-components";
import calneder from "../icons/calendar.png";
import text from "../icons/chat.png";

const BlogPosts = () => {
  return (
    <Container>
      <h1 className="header">From Our Blog</h1>
      <Grid>
        {blog.map((b, key) => {
          return (
            <Card key={key}>
              <img src={b.img} alt="" />
              <div className="content">
                <div className="date">
                  <div className="left">
                    <img src={calneder} alt="" />
                    <p>May 4,2019,</p>
                  </div>
                  <div className="right">
                    <img src={text} alt="" />
                    <p>5</p>
                  </div>
                </div>
                <h1>{b.title}</h1>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat
                </p>
              </div>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default BlogPosts;

const Container = styled.div`
  padding: 50px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  .header {
    text-align: center;
    position: relative;
  }

  .header::after {
    content: "";
    position: absolute;
    top: 125%;
    left: 48%;
    width: 5%;
    height: 3px;
    background-color: #80ad3e;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 40px;
  width: 80%;
  margin: 0 auto;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  img {
    width: 100%;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    h1 {
      font-size: 20px;
      text-align: left;
    }
    p {
      font-size: 16px;
      line-height: 1.5rem;
      opacity: 0.4;
    }
    .date {
      display: flex;
      opacity: 0.3;
      align-items: center;
      gap: 10px;
      .left {
        display: flex;
        align-items: center;
        img {
          width: 15px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        img {
          width: 20px;
        }
      }
      p {
        opacity: 1;
      }
    }
  }
`;
