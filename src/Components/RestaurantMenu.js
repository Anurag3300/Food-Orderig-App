import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestaurantMenu";
import RestaurantCategry from "./RestaurantCategry";

const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const resInfo = useResturantMenu(resId);


    if(resInfo === null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categries = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
        // console.log(categries)

    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold  text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {
                categries.map((c,index)=>{ return <RestaurantCategry key={index} data={c?.card?.card}/>})
            
            }
           
           
        </div>
    )
}
export default RestaurantMenu;