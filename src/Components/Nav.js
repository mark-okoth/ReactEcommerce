import React from 'react'
import '../Nav.css'
import { BrowserRouter, Route,Routes , Link} from "react-router-dom";
import Home from './Home'
import Shoes from './Shoes'
import New from './New'

function Nav() {
  return (
    <BrowserRouter>
      <div className="navigation">
        <div className="logo">
          <a href="">SHOOPER</a>
        </div>
        <div className="navContent">
          <ul>
            <li> <Link to={"/new"}>NEW</Link></li>
            <li> <a href="/shoes">SHOE</a></li>
            <li> <a href="">SNEAKERS</a></li>
            <li> <a href="">DESIGNERS</a></li>
            <li> <a href="/">SALE</a></li>
          </ul>
        </div>
        <div className="nav-icons">
          <ul>
          <li><a href=""><span className="material-icons md-48">account_circle</span></a></li>
          <li><a href=""><span className="material-icons md-48">search</span></a></li>
          <li><a href=""><span className="material-icons md-48">location_on</span></a></li>
          <li><a href=""><span className="material-icons md-48">shopping_cart</span></a></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shoes' element={<Shoes/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
export default Nav