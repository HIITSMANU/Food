import React from 'react'
import search from "../../assets/search_icon.png"
import basket from "../../assets/basket_icon.png"
import {Link} from "react-router-dom"
import { assets } from '../../assets/assets'
const Navbar = ({setShowLogin}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to={'/'} class="navbar-brand" href="#"><img width={100} src={assets.Hunger} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#dish">Dishes Avaliable</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#mobile">Mobile App</a>
        </li>
      </ul>
      <form class="d-flex">
        <span><img src={search} alt="" width={20} style={{margin:15}} /></span><Link to={'/cart'}><img width={30} height={30} src={basket} style={{margin:10}} alt="" /></Link>
        <button onClick={() => setShowLogin(true)} class="btn btn-outline-success">SignIn</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
