import React, { useEffect, useState } from "react";
import "../Shoes.css";
function Shoes() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container-shoes">
      {products.map((product) => {
        return (
          <div className="container" key={product.id}>
            <div className="card">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <p className="name">
                {product.title.length > 33
                  ? product.title.slice(0, 32)
                  : product.title}
              </p>
              <p className="price">KES {product.price}</p>
              <p className="description">
                {product.description.length > 100
                  ? product.description.slice(0, 40)
                  : product.description}
              </p>
              <p>{product.rating.rate}</p>
              <button>ADD TO CART</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Shoes;
