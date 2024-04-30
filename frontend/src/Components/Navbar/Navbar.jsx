// import React from 'react'
// import search from "../../assets/search_icon.png"
// import basket from "../../assets/basket_icon.png"
// import {Link} from "react-router-dom"
// const Navbar = ({setShowLogin}) => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <Link to={'/'} class="navbar-brand" href="#">Navbar</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <span><img src={search} alt="" width={20} style={{margin:15}} /></span><Link to={'/cart'}><img width={30} height={30} src={basket} style={{margin:10}} alt="" /></Link>
//         <button onClick={() => setShowLogin(true)} className="btn btn-outline-success">SignIn</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar




import React from 'react';
import search from "../../assets/search_icon.png";
import basket from "../../assets/basket_icon.png";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = ({ setShowLogin }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* Repeat for other nav items as needed */}
            </ul>
            <form className="d-flex">
              <span><img src={search} alt="Search" width={20} style={{ margin: 15 }} /></span>
              <Link to={'/cart'}><img width={30} height={30} src={basket} style={{ margin: 10 }} alt="Basket" /></Link>
              <button type="button" onClick={() => setShowLogin(true)} className="btn btn-outline-success">SignIn</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from "react-router-dom";
// import { useCart } from "../../Context/StoreContext.jsx"; // Adjust the path as necessary
// import searchIcon from "../../assets/search_icon.png";
// import basketIcon from "../../assets/basket_icon.png";
// import "./Navbar.css"; // Ensure this path is correct
// const Navbar = () => {
//     const { cartCount } = useCart();

//     return (
//         <nav className="navbar">
//             <Link to="/" className="navbar-brand">Brand</Link>
//             <div className="navbar-links">
//                 <Link to="/" className="nav-link">Home</Link>
//                 {/* Add more links as needed */}
//             </div>
//             <div className="navbar-actions">
//                 <Link to="/search" className="icon-button">
//                     <img src={searchIcon} alt="Search" />
//                 </Link>
//                 <Link to="/cart" className="icon-button">
//                     <img src={basketIcon} alt="Cart" />
//                     {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
//                 </Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;