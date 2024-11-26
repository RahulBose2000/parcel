// why we use small letter use not USE beacause its a way in which react will understand its a hook

import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{
    
    const[resInfo,setresInfo] = useState(null);
    
    //fetch data
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        //console.log(json);
        setresInfo(json.data);
    }  

    useEffect(()=>{

        fetchMenu();

    },[])
    
    
    return resInfo;
}

export default useRestaurantMenu;