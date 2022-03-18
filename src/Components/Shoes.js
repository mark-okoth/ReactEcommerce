import React, { useEffect, useState, useContext } from "react";
import "../Shoes.css";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BeatLoader";
import CartContext from "./CartContext";

function Shoes() {
  const { addtoCart } = useContext(CartContext);
  const { item } = useContext(CartContext);
  localStorage.setItem("carts", JSON.stringify(item));
  const [products, setProducts] = useState({ results: null, loading: true });
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts({ results: data, loading: false });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container-shoes">
      {products.loading ? (
        <div className="spinner">
          <p>Shopper loading....</p>
          <BarLoader height={4} width={200} color={"#000000"} />
        </div>
      ) : (
        <>
          {products.results.map((product) => (
            <div className="container" key={product.id}>
              <div
                className="card"
                onClick={() => addtoCart(product.title, product.price)}
              >
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
