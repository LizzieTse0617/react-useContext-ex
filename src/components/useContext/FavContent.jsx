
import { createContext,useState,useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

//const FavContext = createContext(); //create context object
const FavContext = createContext();


function FavProvider({children}){

   // const [fav, setFav] = useState([]);

   // const [isToggled, setIsToggled] = useState(false);
    const [isToggled, setIsToggled] = useLocalStorage('product-viewer-list', []);
   // const [fav,setFav] = useLocalStorage('My-favorite-List',[]);
   return (
    <FavContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </FavContext.Provider>
  );
}




export {FavContext,FavProvider}
/* function useFav(){
const context = useContext(FavContext);
if (!context)throw new Error('not inside the provider');
return context; 
} */

//export {useFav,FavProvider}