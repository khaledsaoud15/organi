import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Admin = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const PF = "http://localhost:4000/images/";

  const handlSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      price,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      console.log(fileName);
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;
      try {
        await axios.post("http://localhost:4000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("http://localhost:4000/api/product", newPost);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/");
      setData(res.data);
    };

    getData();
  }, []);

  const deleteFromCart = async (id) => {
    const find = data.find((p) => p._id === id);

    try {
      await axios.delete(`http://localhost:4000/api/product/${id}`);
    } catch {}
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <label for="input-file" className="file-upload">
          Image
        </label>
        <input
          type="file"
          id="input-file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handlSubmit}>Submit</button>
      </Content>
      <Grid>
        {data.map((p) => {
          return (
            <Card>
              <img src={PF + p.image} alt="" />
              <h1>{p.title}</h1>
              <button onClick={() => deleteFromCart(p._id)}>Delete</button>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Admin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 80px;
  padding: 80px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  gap: 15px;
  input[type="file"] {
    display: none;
  }
  .file-upload {
    padding: 5px 10px;
    width: 100%;
    font-size: 12px;
    background-color: #368e03;
    cursor: pointer;
    flex: 1;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    &:hover {
      background-color: #48c103;
    }
  }

  input {
    padding: 5px 15px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    flex: 1;
  }
  button {
    padding: 5px 15px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    flex: 1;
    background-color: #48c103;
    color: #fff;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 30px;
  justify-content: center;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  display: flex;
  flex-direction: column;
  button {
    padding: 5px;
    width: 30%;
    margin: 0 auto;
    border: none;
    background-color: #f52e27;
    color: #fff;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 45vh;
  }
`;
