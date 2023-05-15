import { useEffect, useState } from "react";
import { featured } from "./data";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import SinglProduct from "./components/SinglProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Loader from "./components/Loader";
import Admin from "./pages/Admin";

function App() {
  const [data, setData] = useState(featured);
  const [filtered, setFiltered] = useState([]);
  const [genra, setGenra] = useState("all");
  const [inputs, setInputs] = useState({});
  const [active, setActive] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setActive(!active);
    }, 3000);
  }, []);

  return (
    <>
      {active ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
                filtered={filtered}
                genra={genra}
                setGenra={setGenra}
                setFiltered={setFiltered}
                inputs={inputs}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SinglProduct data={data} />} />
          <Route
            path="/register"
            element={<Signup inputs={inputs} setInputs={setInputs} />}
          />
          <Route
            path="/login"
            element={<Login inputs={inputs} setInputs={setInputs} />}
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      )}
    </>
  );
}

export default App;
