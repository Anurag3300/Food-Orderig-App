import React, { useContext, useEffect, useState } from 'react'
import RestaurantCart from './RestaurantCart';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useBody } from '../utils/useBody';
const Body = () => {
  // const[listOfRestaurants,setListOfRestaurants] = useState([]);
  const  {listOfRestaurants,setListOfRestaurants} = useBody();
  // console.log(listOfRestaurants)
  const[filteredRestaurants,setFilteredRestaurants] = useState([]);
  const[searchText,setSearchText] = useState("");
  


  useEffect(()=>{
    setFilteredRestaurants(listOfRestaurants);
    console.log("useeffect",listOfRestaurants);
  },[listOfRestaurants])
  
  // console.log(filteredRestaurants);
  // const RestaurantCardsPromoted = WithPromotedLabel(RestaurantCart); 
  // console.log("bodyRenders", listOfRestaurants);
  // useEffect(()=>{
  //   fetchData(); 
  // },[]);
  // const fetchData = async()=>{
  //   try{
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6320535&lng=77.44581509999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const resp = await data.json();
      
  //     // console.log(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  //     setListOfRestaurants(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setFilteredRestaurants(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  //   }
  //   catch(error){
  //     alert("api is not working");
  //   }
  // }
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  //  }
  

  const {LoggedInUser,setUserName} = useContext(UserContext);
  console.log(LoggedInUser)
  
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)return(<h1>
    Looks like you're offline!! Please check your internet connection.
  </h1>);
  
  
  
  return listOfRestaurants.length === 0 ? <Shimmer/>: (
    <div className='body'>
        <div className='flex '>
          <div className='m-4 p-4'>
            <input className='border border-solid border-black p-2 rounded-sm' type='text' value={searchText} onChange={(e)=>{
             setSearchText(e.target.value);
            }}/>
            {/* We have to make filter on the of listofrestaurants  baise of search box and the update the UI */}
            <button className='px-4 py-2 m-4 bg-green-100 rounded-lg text-lg font-medium' 
             onClick={()=>{
              // console.log(searchText);
               const filterList = listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              //  console.log("dkdldk");
               setFilteredRestaurants(filterList);
              
               }}>
              Submit
            </button>
          </div>
          <div className='m-4 p-4 flex items-center'>
            <button className='px-4 py-2 m-4 bg-green-100 rounded-lg' onClick={()=>{
              const FilteredList = listOfRestaurants.filter((res)=>res?.info?.avgRating > 4.2);
              setListOfRestaurants(FilteredList);
              //  console.log("button is clicked");
            }}>Top Rated Restaurants</button>
          </div>
          <div className='m-4 p-4 flex items-center'>
            <label>UserName</label>
            <input type='text' className='border border-solid border-black p-2 rounded-sm' value={LoggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        
        </div>
        <div className='flex flex-wrap justify-center items-center'>
           {
            filteredRestaurants.map((restaurant)=>(
              <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}>
               <RestaurantCart resData={restaurant}/>
              </Link>))
           }
        </div>
        
    </div>
  )
}
export default Body;
