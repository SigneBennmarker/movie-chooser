import React from 'react'
import './Nav.css'
import FindMovie from '../FindMovie/FindMovie'

const Nav = ({ stateChanger }) => {
  return (
    <div className='nav'>
      <h1 className='logo'>MOVIEPICKER</h1>

      <FindMovie stateChanger={stateChanger}></FindMovie>
    </div>
  )
}

export default Nav
