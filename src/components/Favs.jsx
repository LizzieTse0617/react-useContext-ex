import React,{useContext} from 'react'
//import {MyComponent} from './useContext/userContext'
export default function Favs() {

  const favList = JSON.parse(localStorage.getItem('product-view-list')) || [];

  return (
    <div>
    <h1>Favorite Page</h1>

    {favList.map((user, index) => (
      <div key={index}>
    <li className="li">
    <img className="avatar" src={user.avatar}/>
    <div className="name">{user.first_name} {user.last_name}</div>
    <div>{user.email}</div>
    </li>
      </div>
    ))}
  </div>




  )
}
