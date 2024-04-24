import React from 'react'
import {menu} from "../../../assets/assets"
import "./ExploreMenu.css"

const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className="varities" id='menu'>
        <h1>Explore Various Varities of Dishes</h1>
        <p className='var_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem ipsa dolores reiciendis magni?</p>
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
