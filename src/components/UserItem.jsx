import React, { useState } from 'react'
import './All.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useContext } from 'react';
import { FavContext } from './useContext/FavContent';


export default function UserItem({ user }) {
  const [isToggled, setIsToggled] = useState(false);



  function handleToggle() {
    setIsToggled(prevIsToggled => !prevIsToggled);
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





