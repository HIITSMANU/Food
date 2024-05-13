import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css"
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addtoCart, removefromCart, url, token } = useContext(StoreContext);
    const [showLoginToast, setShowLoginToast] = useState(false);

    // Function to show red toast when the user logs in and the token is not available
    useEffect(() => {
        if (!token && Object.keys(cartItem).length === 0) {
            setShowLoginToast(true);
            const timeout = setTimeout(() => {
                setShowLoginToast(false);
            }, 3000); // Adjust the timeout duration as needed
            return () => clearTimeout(timeout);
        }
    }, [token, cartItem]);

    return (
        <div className='food_items' id='dish'>
            {showLoginToast && <div className="red-toast">Please login to add items to the cart</div>}
            <div className="food_item_sub">
                <img src={url + "/images/" + image} alt="" className="food_image" />

                {token && !cartItem[id]
                    ? <img className='add_item' onClick={() => addtoCart(id)} src={assets.add_icon_white} />
                    : <div className="food_counter">
                        <img src={assets.remove_icon_red} onClick={() => removefromCart(id)} alt="" />
                        <p>{cartItem[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addtoCart(id)} alt="" />
                    </div>
                    
                }
            </div>
            <div className="food_info">
                <div className="food_rating">
                    <p style={{ marginTop: 10 }}>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food_description">{description}</p>
                <p className="food_price">${price}</p>
            </div>

        </div>
    )
}

export default FoodItem;
