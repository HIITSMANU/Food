import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Login from './Components/Login/Login'
import Footer from './Components/Navbar/Footer/Footer'
import Verify from './Pages/Verify/Verify'
import Myorders from './Pages/Myorders/Myorders'

function App() {

  const [showLogin , setShowLogin] = useState(false)

  

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'> 
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/order' element={<PlaceOrder/>}></Route>
          <Route path='/verify' element={<Verify/>}></Route>
          <Route path='/myorders' element={<Myorders/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
