import ItemList from "./ItemList";
import { useState } from "react";

const ItemsCatgories = ({category,showItems, setShowIndex})=>{
    // const [showItems,setShowItem] = useState(false);
    // console.log(setshowIndex)
    // console.log(category);
    const clickHandler = ()=>{
        setShowIndex()
        
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between" onClick={clickHandler}>
                    <span className="font-bold text-lg " >{category.title}({category.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList item = {category.itemCards}/>}
            </div>

       </div>
    )
}
export default ItemsCatgories;