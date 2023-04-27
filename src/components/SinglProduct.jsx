import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglProduct = ({ data }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const find = data.find((d) => d.id === +id);
    setProduct(find);
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default SinglProduct;
