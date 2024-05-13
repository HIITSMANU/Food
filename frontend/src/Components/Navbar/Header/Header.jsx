import React from 'react'
import "./Header.css"
import video from "../../../assets/3195369-uhd_3840_2160_25fps.mp4"
const Header = () => {
  return (
    <div className="main_header">
      <div className='header'>
      <video autoplay muted  loop id="header-video" controls={true}>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
      <div className="header_content">
        <h2>Order Your  Favourite Food Here</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloribus delectus rerum accusantium pariatur obcaecati!</p>
        <button>View Menu</button>
      </div>
    </div>
    </div>
  )
}

export default Header
