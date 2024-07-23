import ItemsCatgories from "./ItemCatgories";
import { useState } from "react";

const RestaurantCategry = ({data})=>{

    // console.log(data)
    const [showIndex,setShowIndex] = useState(null);
    return (
        <div className=" mx-auto ">
            <h1 className="  font-bold text-2xl text-center mx-2">{data.title}</h1>
            {
               data.categories.map((category,index)=><ItemsCatgories key={index} category = {category}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {()=>setShowIndex(index)}
               />)

            }

        </div>
    )
};
export default RestaurantCategry;