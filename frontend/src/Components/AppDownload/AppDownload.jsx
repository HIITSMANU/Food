import React from 'react'
import { assets } from '../../assets/assets'
import "./AppDownload.css"

const AppDownload = () => {
  return (
    <div className='get_app' id='mobile'>
        <p>For Better Experience Download <br /> HungerEats App</p>
      <div className="platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
