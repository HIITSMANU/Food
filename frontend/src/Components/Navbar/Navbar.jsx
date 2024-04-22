import React from 'react'
import search from "../../assets/search_icon.png"
import basket from "../../assets/basket_icon.png"
const Navbar = ({setShowLogin}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <form class="d-flex">
        <span><img src={search} alt="" width={20} style={{margin:15}} /></span><img width={30} height={30} src={basket} style={{margin:10}} alt="" />
        <button onClick={() => setShowLogin(true)} class="btn btn-outline-success">SignIn</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
