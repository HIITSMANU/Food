import React, { useContext } from 'react'
import search from "../../assets/search_icon.png"
import basket from "../../assets/bag_icon.png"
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { toast } from 'react-toastify'
const Navbar = ({setShowLogin}) => {

  const {token,settoken} = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    settoken("");
    navigate('/')
    toast.success("Logged out Successfully")
  }

  const cartButtonStyle = {
    paddingRight: '10px'
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to={'/'} class="navbar-brand" href="#logo"><img  width={110} src={assets.logo_dup} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home" style={{color:"black"}}>Home</a>
        </li>
        <li className="nav-item">
          <a  style={{color:"black"}} className="nav-link active" aria-current="page" href="#menu">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#dish">Dishes Avaliable</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#mobile">Mobile App</a>
        </li>
      </ul>
      <form className="d-flex">
        {/* <span><img src={search} alt="" width={20} style={{margin:15}} /></span>    REMOVED THE SEARCH ICON SINCE WE ARE NOT IMPLEMENTING SEARCH..... */}
        <Link to={'/cart'}><img width={30} height={30} src={basket} style={{margin:10}} alt="" /></Link>
        {!token?<button onClick={() => setShowLogin(true)} className="btn btn-outline-success" style={cartButtonStyle}>SignIn</button>:
        <div className='navbar_profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav_drop">
          <p>Welcome {localStorage.getItem("name")}</p>
            <li onClick={()=> navigate('/myorders')}><img src={assets.bag_icon} alt="" />Orders</li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
          </ul>
        </div>}
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
