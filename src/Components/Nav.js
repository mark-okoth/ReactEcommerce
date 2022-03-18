import React,{useState,useContext} from 'react'
import '../Nav.css'
import { BrowserRouter, Route,Routes , Link} from "react-router-dom";
import Home from './Home'
import Shoes from './Shoes'
import New from './New'
import Shoe from './Shoe'
import Login from './LogIn'
import Cart from './Cart'
import CartContext from "./CartContext";

function Nav() {
  const {item} = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="navigation">
        <div className="logo">
          <a href="/">SHOOPER</a>
        </div>
        <div className="navContent">
          <ul>
            <li> <Link to={"/new"}>NEW</Link></li>
            <li> <Link to={"/shoes"}>SHOE</Link></li>
            <li> <a href="/">SNEAKERS</a></li>
            <li> <a href="/">DESIGNERS</a></li>
            <li> <Link to={"/"}>HOME</Link></li>
          </ul>
        </div>
        <div className="nav-icons">
          <ul>
          <li><a href="/login"><span className="material-icons md-48">account_circle</span></a></li>
          <li><a href="/"><span className="material-icons md-48">search</span></a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="/"><span className="material-icons md-48">location_on</span></a></li>
          <li><a href="/cart"><span className="material-icons md-48">shopping_cart</span></a>{item.length}</li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shoes' element={<Shoes/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/shoes/:id' element={<Shoe/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
export default Nav