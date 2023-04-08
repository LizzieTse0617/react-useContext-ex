import React, { useState } from 'react'
import './All.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useContext } from 'react';
import { FavContext } from './hooks/FavContent';


export default function UserItem({ user }) {
  const [fav, setFav] = useState(FavContext);


  function handleToggle() {
    setFav((prevIsToggled) => {
      const newIsToggled = !prevIsToggled;
      if (newIsToggled) {
        // add the username to local storage
        const productList = JSON.parse(
          localStorage.getItem("product-view-list") 
        );
        console.log(productList)
 
        const updatedProductList = [...productList, {
          first_name: user.first_name,
          last_name: user.last_name,
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
          
{fav ?  <FavoriteIcon /> :<FavoriteIcon sx={{ fontSize: 40 }} color="secondary" />}
          </button>
        </div>
      </li>
    </div>
  );
}





