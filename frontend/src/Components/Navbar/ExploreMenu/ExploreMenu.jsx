import React from 'react'
import {menu} from "../../../assets/assets"
import "./ExploreMenu.css"

const ExploreMenu = ({category, setcategory}) => {
    const styling ={
        padding: "20px",
    };
  return (
    <div className="varities" id='menu' style={styling}>
        <h1>Explore Various Varieties of Dishes</h1>
        <p className='var_text' style={styling}>
            Discover a world of culinary delights with Hunger Bites! From savory to sweet, our diverse range of dishes caters to every taste. Indulge in our flavorful creations made with care and quality ingredients. Elevate your dining experience with Hunger Bites – explore a variety of delicious dishes today!</p>
        <div className="item_menu">
            {menu.map((item,index) => {
                return (
                    <div onClick={()=> setcategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="list_item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
