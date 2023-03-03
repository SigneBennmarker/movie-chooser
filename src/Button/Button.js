import React from 'react'
import './Button.css'

const Button = ({ actionFunc, children }) => {
  return <button onClick={actionFunc}>{children}</button>
}

export default Button
