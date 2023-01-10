import { createContext, useState,useEffect } from "react";
import { favoritesStorageHelper } from "../library/helpers/FavoritesStorageHelper";

export const favoritesContext=createContext(null)

export const FavoritesProvider =({children}) =>{
    const [toDoes,setToDoes]=useState([])

    const values={
        toDoes,
        setToDoes
    }
    useEffect(() => {

        favoritesStorageHelper.get()
            .then(data => {
                setfavorites(data);
            })

    }, [])

    return <favoritesContext.Provider value={values}>{children}</favoritesContext.Provider>


}