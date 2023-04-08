import React, { useState } from 'react'
import './All.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useContext } from 'react';
import { FavContext } from './useContext/FavContent';


export default function UserItem({ user }) {
  const [isToggled, setIsToggled] = useState(FavContext);



  function handleToggle() {
    setIsToggled((prevIsToggled) => {
      const newIsToggled = !prevIsToggled;
      if (newIsToggled) {
        // add the username to local storage
        const productList = JSON.parse(
          localStorage.getItem("product-view-list") || "[]"
        );
 
        const updatedProductList = [...productList, {
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          avatar: user.avatar,
        },];
        localStorage.setItem(
          "product-view-list",
          JSON.stringify(updatedProductList)
        );
      }
      return newIsToggled;
    });
  }

  return (
    <div>
     
      <li className="li">
        <img className="avatar" src={user.avatar}/>
        <div className="name">{user.first_name} {user.last_name}</div>
        <div className="email">{user.email}</div>
        <div>
          <button className="fav_btn" onClick={handleToggle}>
          
{isToggled ? <FavoriteIcon sx={{ fontSize: 40 }} color="secondary" /> : <FavoriteIcon />}
          </button>
        </div>
      </li>
    </div>
  );
}





