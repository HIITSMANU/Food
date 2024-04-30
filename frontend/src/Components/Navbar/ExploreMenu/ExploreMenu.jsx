// import React from 'react'
// import {menu} from "../../../assets/assets"
// import "./ExploreMenu.css"

// const ExploreMenu = ({category,setcategory}) => {
//   return (
//     <div className="varities">
//         <h1>Explore Various Varities of Dishes</h1>
//         <p className='var_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem ipsa dolores reiciendis magni?</p>
//         <div className="item_menu">
//             {menu.map((item,index) => {
//                 return (
//                     <div onClick={()=> setcategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="list_item">
//                         <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
//                         <p>{item.menu_name}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default ExploreMenu


// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import { menu } from "../../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => { // Corrected setCategory to match camelCase convention
  return (
    <div className="varieties"> {/* Corrected class name to match the correct spelling */}
        <h1>Explore Various Varieties of Dishes</h1> {/* Corrected spelling */}
        <p className='var_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem ipsa dolores reiciendis magni?</p>
        <div className="item_menu">
            {menu.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="list_item">
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} /> {/* Added alt text for accessibility */}
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

// Define PropTypes for ExploreMenu component
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;