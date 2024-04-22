import React, { useContext } from 'react'
import FoodItem from '../../FoodItem/FoodItem'
import { StoreContext } from '../../../Context/StoreContext'
import "./FoodDisplay.css"

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='foods_menu'>
      <h2>Top Dishes Near You</h2>
      <div className="food_listing">
        {food_list.map((item,index)=>{
            if(category === "All" || category === item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
