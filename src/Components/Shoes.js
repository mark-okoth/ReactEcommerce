import React, { useEffect, useState } from "react";
import "../Shoes.css";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

function Shoes() {
  const [products, setProducts] = useState({ results: null, loading: true });
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts({ results: data, loading: false });
  };
  useEffect(() => {
    getProducts();
  },[]);
  return (
    <div className="container-shoes">
      {products.loading ? (
        <div className="spinner">
         <BarLoader height={4} width={200} color={'#FF0000'}/>
        </div>
       
      ) : (
        <>
          {products.results.map((product) => (
            <div className="container" key={product.id}>
              <div className="card">
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <p className="name">
                  {product.title.length > 33
                    ? product.title.slice(0, 32)
                    : product.title}
                </p>
                <p className="price">Ksh {product.price}</p>
                <button>
                  <Link to={`/shoes/${product.id}`}>Show Details</Link>
                </button>
              </div>
            </div>
          ))}{" "}
        </>
      )}
    </div>
  );
}
export default Shoes;
