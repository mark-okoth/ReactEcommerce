import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../shoe.css";


function Shoe() {
  const [product, setProduct] = useState([]);
  const [count, setcount] = useState(0);
  const { id } = useParams();

  let counterIncreament = () => {
    setcount(count + 1);
  };
  let counterDecrement = () => {
    setcount(Math.max(count - 1, 0));
  };
  const getproduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        const data = res.data;
        setProduct(data);
      })
      .catch((err) => {});
  };

  if (count !== 0) {
    localStorage.setItem(product.id, count);
  }
  useEffect(() => {
    getproduct();
  },);
  return (
    <div  className="shoe">
      <div className="single-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="single-content">
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{Number(product.price).toLocaleString()}</p>
        <p>{product.category}</p>
        <div className="addbtn">
          <button onClick={counterDecrement}>-</button>
          <span>{count}</span>
          <button onClick={counterIncreament}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Shoe;
