// import React, { useContext } from 'react'
// import FoodItem from '../../FoodItem/FoodItem'
// import { StoreContext } from '../../../Context/StoreContext'
// import "./FoodDisplay.css"

// const FoodDisplay = ({category}) => {

//     const {food_list} = useContext(StoreContext)

//   return (
//     <div className='foods_menu'>
//       <h2>Top Dishes Near You</h2>
//       <div className="food_listing">
//         {food_list.map((item,index)=>{
//             if(category === "All" || category === item.category){
//                 return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//             }
//         })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Step 1: Import PropTypes
import FoodItem from '../../FoodItem/FoodItem';
import { StoreContext } from '../../../Context/StoreContext';
import "./FoodDisplay.css";

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);

    return (
        <div className='foods_menu'>
            <h2>Top Dishes Near You</h2>
            <div className="food_listing">
                {food_list.filter(item => category === "All" || category === item.category)
                          .map((item) => (
                              <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                          ))}
            </div>
        </div>
    );
}

// Step 2: Define PropTypes for FoodDisplay
FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired, // Define the expected type for category
};

export default FoodDisplay;