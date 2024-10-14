import React from 'react'
import stylesmodule from './Button.module.css'

const Button = () => {
  return (
    <div >
         <button className={stylesmodule.btn}>Log In</button>
         &nbsp;
         <button className={stylesmodule.btn}>Sign Up</button>
    </div>
  )
}

export default Button