import { useEffect, useState } from "react";

export const useBody = ()=>{
    const[listOfRestaurants,setListOfRestaurants] = useState([]);
    useEffect(()=>{
        fetchData(); 
      },[]);
      const fetchData = async()=>{
        try{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6320535&lng=77.44581509999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const resp = await data.json();
          
          // console.log(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          setListOfRestaurants(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
        }
        catch(error){
          alert("api is not working");
        }
      }
      return {listOfRestaurants,setListOfRestaurants};

    
}
