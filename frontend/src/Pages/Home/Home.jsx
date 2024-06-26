import React, { useContext, useState } from 'react'
import Header from '../../Components/Navbar/Header/Header'
import ExploreMenu from '../../Components/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/Navbar/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import { StoreContext } from '../../Context/StoreContext'
import { ToastContainer } from 'react-toastify'

const Home = () => {

    const [category , setcategory] = useState("All")
    const{token} = useContext(StoreContext)


  return (
    <div>
      <ToastContainer/>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
