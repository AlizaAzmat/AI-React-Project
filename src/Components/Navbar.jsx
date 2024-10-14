import React from 'react'
import logo from '../assets/Images/logo.jpg'
import Button from '../Button/Button'
const Navbar = () => {
  return (
    <>
    <div className='main'>
            <img className='image-logo' src={logo}></img>        
            <div class="tabs is-centered">
  <ul className='links'>
    <li ><a>Home</a></li>
    <li className="is-active"><a>Picture</a></li>
    <li><a>Blogs</a></li>
    <li><a>Contact</a></li>
</ul>
   </div>
   <div>
  <Button/>
   </div>
   </div>
   
    </>
  )
}

export default Navbar