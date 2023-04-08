import React, { useContext } from 'react'
import {useState, useEffect} from 'react';
import UserItem from './UserItem'


export default function Home() {


//fetching
const [users,setUsers ] = useState([]);
useEffect(
    ()=>{
if (users.length === 0){
    fetch('https://random-data-api.com/api/v2/users?size=10')
    .then( (res) => res.json())
    .then( (users) =>{
        setUsers(users);
    })
    .catch(console.error)
}}, []
);






  return (
    
    <div>
     
    <h2>Home</h2>


     {users.length > 0 ? (
              users.map((user) => <UserItem key={user.id} user={user} />)
            ) : (
              <li>No detail found</li>
            )}



    </div>
  )
}


