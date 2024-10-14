import React from 'react'
import Pic from '../assets/Images/Parrot.jpg'
import Pickuku from '../assets/Images/kuku.jpg'
import Picpigeon from '../assets/Images/pigeon.jpg'
import Picbird from '../assets/Images/bird.jpg'
const Card = () => {
  return (
    <>
    <hr />
    <div className='card'>    
      <img className='card-img' src={Pic} alt='Parrot'/>
      <h1 className='card-title'>Parrot</h1>
      <p className='card-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='card'>    
      <img className='card-img' src={Pickuku} alt='kuku'/>
      <h1 className='card-title'>Kuku</h1>
      <p className='card-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='card'>    
      <img className='card-img' src={Picpigeon} alt='Pigeon'/>
      <h1 className='card-title'>Pigeon</h1>
      <p className='card-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='card'>    
      <img className='card-img' src={Picbird} alt='Bird'/>
      <h1 className='card-title'>Bird
      </h1>
      <p className='card-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <hr/>
    
    </>
  )
}

export default Card