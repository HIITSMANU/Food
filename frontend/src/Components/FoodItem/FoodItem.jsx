// import React, { useContext, useState } from 'react'
// import { assets } from '../../assets/assets'
// import "./FoodItem.css"
// import { StoreContext } from '../../Context/StoreContext'

// const FoodItem = ({id,name,price,description,image}) => {

//     const [count,Itemcount] = useState(0)
//     const {cartItem, addtoCart , removefromCart} = useContext(StoreContext)
//   return (
//     <div className='food_items'>
//         <div className="food_item_sub">
//             <img src={image} alt="" className="food_image" />
//             {!cartItem[id]
//                 ? <img className='add_item' onClick={()=> addtoCart(id)} src={assets.add_icon_white}/>
//                 : <div className="food_counter">
//                     <img src={assets.remove_icon_red} onClick={()=> removefromCart(id)} alt="" />
//                     <p>{cartItem[id]}</p>
//                     <img src={assets.add_icon_green} onClick={() => addtoCart(id)} alt="" />
//                 </div>
//             }
//         </div>
//         <div className="food_info">
//             <div className="food_rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food_description">{description}</p>
//             <p className="food_price">${price}</p>
//         </div>
      
//     </div>
//   )
// }

// export default FoodItem


import { useContext } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import { assets } from '../../assets/assets'
import "./FoodItem.css"
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {
    const {cartItem, addtoCart , removefromCart} = useContext(StoreContext)
    return (
        <div className='food_items'>
            <div className="food_item_sub">
                <img src={image} alt="" className="food_image" />
                {!cartItem[id]
                    ? <img className='add_item' onClick={()=> addtoCart(id)} src={assets.add_icon_white} alt=""/>
                    : <div className="food_counter">
                        <img src={assets.remove_icon_red} onClick={()=> removefromCart(id)} alt="" />
                        <p>{cartItem[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addtoCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="food_info">
                <div className="food_rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food_description">{description}</p>
                <p className="food_price">${price}</p>
            </div>
        </div>
    )
}

// Define PropTypes for FoodItem component
FoodItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default FoodItem
