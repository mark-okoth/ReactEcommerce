import React from "react";
import '../Home.css'

function Home() {
  function btnclick(){
    console.log('clicked')
  }
  return (
    <div className="Home">
      <div className="banner"> 
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/61cce94febc3de6a77554665/0x0.jpg?format=jpg&width=1200&fit=bounds"
          alt=""
        />
      </div>
      <div className="promotion">
          <p className="discount">3O% OFF</p>
           <button onClick={()=> console.log('clicked again')}>CODE: THIRTY</button>
      </div>
    </div>
  );
}
export default Home;
