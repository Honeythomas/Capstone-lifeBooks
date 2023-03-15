import { createContext, useEffect, useState ,useContext} from "react";

export const BookContext=createContext({
    favorite_books:[],
    setFavorite:()=>{},

}
)

export function BookContextProvider({children}){
    const [favorite,setFavorite]=useState([]);
    return(
        <BookContext.Provider value={{favorite_books:favorite,setFavorite:setFavorite}}>
            {children}
        </BookContext.Provider>
    )
}