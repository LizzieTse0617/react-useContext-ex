import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (

    <nav className="mainNav">

    <NavLink className={({ isActive }) => {return isActive ? 'big active' : '';}}to="/">Home</NavLink>
    <NavLink className={({ isActive }) => {return isActive ? 'big active' : '';}}to="Favs">Favourites</NavLink>
    </nav>
  )
}
