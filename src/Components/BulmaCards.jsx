import React from 'react';

const BulmaCards = ({ image, title, description }) => {
  return (
    <>
      <div className='card mr-6  ml-6' >
        <div className='card-image'>
          <figure className='image is-1by1'>
            <img src={image} alt=""  />
          </figure>
        </div>
        <div className='card-content p-4'>
          <div className='media-content'>
            
            <p className='title is-4 pb-3'>
              {title}
            </p>
            <p className='subtitle is-6'>
              {description}
            </p>
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default BulmaCards;
