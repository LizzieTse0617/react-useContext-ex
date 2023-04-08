
import { createContext,useState,useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const FavContext = createContext();


function FavProvider({children}){


    const [fav, setFav] = useLocalStorage('product-view-list', []);
 
   return (
    <FavContext.Provider value={{ fav, setFav }}>
      {children}
    </FavContext.Provider>
  );
}




export {FavContext,FavProvider}
