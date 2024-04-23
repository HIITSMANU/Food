import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import {Routes,Route} from "react-router-dom"
import Add from './Pages/Add/Add'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="admin_content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/order' element={<Orders/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
