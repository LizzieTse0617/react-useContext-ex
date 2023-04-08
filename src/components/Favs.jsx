import React,{useContext} from 'react'
//import {MyComponent} from './useContext/userContext'
export default function Favs() {

  const favList = JSON.parse(localStorage.getItem('product-view-list')) || [];

  return (
    <div>
    <h1>Favorite Page</h1>
    {favList.map((product, index) => (
      <div key={index}>
        <p>{product.first_name} {product.last_name}</p>
        <p>{product.email}</p>
        <img src={product.avatar} alt={`${product.first_name} ${product.last_name}`} />
      </div>
    ))}
  </div>
  )
}
