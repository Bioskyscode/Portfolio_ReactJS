import React from 'react'
import "./Button.css"

const Button = (prop) => {
  return (
    <button className={prop.className}>{prop.text}</button>
  )
}

export default Button