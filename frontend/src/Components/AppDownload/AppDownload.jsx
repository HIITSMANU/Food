import React from 'react'
import { assets } from '../../assets/assets'
import "./AppDownload.css"
import { toast } from 'react-toastify'

const AppDownload = () => {
  const styling = {
    marginBottom: '50px'
  };
  function AppDownloadClickHandler(){
    toast("Coming Soon on iOS and Android.. : )")
  }
  return (
    <div className='get_app' id='mobile' style={styling}>
        <p>For Better Experience Download <br /> HungerEats App</p>
      <div className="platforms">
        <a onClick={AppDownloadClickHandler}><img src={assets.play_store} alt="Coming Soon.." /></a>
        <a onClick={AppDownloadClickHandler}><img src={assets.app_store} alt="Coming Soon.." /></a>
      </div>
    </div>
  )
}

export default AppDownload