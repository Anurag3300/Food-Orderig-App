import React from 'react'
import { CDN_LINK } from '../utils/constants'
const RestaurantCart = (props) => {
  // console.log(props);
  const {resData} = props;
  // console.log(resData.info);
  const {
    name,
    cloudinaryImageId
    ,cuisines,
    costForTwo,
    sla,
    avgRating}  = resData.info;
  return (
    <div className='m-4 p-4 w-[400px]  bg-gray-100 hover:bg-gray-200 '>
      <img className="p-2 rounded-2xl w-[350px] m-4" src={CDN_LINK+cloudinaryImageId} />
      <h3 className=' p-2 font-semibold text-lg'>{name}</h3>
      <h4 className='p-2 font-semibold '>{cuisines.join(",")}</h4>
      <h4 className='p-2 font-semibold '>{avgRating}Stars</h4>
      <h4 className='p-2 font-semibold '>{costForTwo}</h4>
      <h4 className='p-2 font-semibold '>{sla.deliveryTime}minutes</h4>
    </div>
    // <div></div>
  )
}

// Higher order Component 
// Input - RestaurantCard =>>RestaurantCardsPromoted
 export const WithPromotedLabel = (RestaurantCart)=>{
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCart/>
      </div>
    );
  };
}
export default RestaurantCart;
