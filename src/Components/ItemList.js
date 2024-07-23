import { CDN_LINK } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const ItemList = ({item})=>{
   
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    const handleRemoveItem= ()=>{
        dispatch(removeItem());
    }
    return(
        <div>
            {
                item.map((item)=><div className="p-2 m-2 border-gray-200 border-b-2 flex justify-between" key={item.card.info.id}>
                    <div className="py-2 flex flex-col w-9/12 ">
                        <span className="text-left p-2 font-bold">{item.card.info.name}</span>
                        <span className="text-left p-2 font-bold"> ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        <p className="text-xs p-2 m-2 text-left">{item.card.info.description}</p>
                    </div>
                    <div className=" w-3/12 p-4 " >
                    
                        <div className="absolute text-center m-auto bg-black text-white shadow-lg rounded-lg" >
                          <button className="font-bold m-2 p-2" onClick={()=>handleAddItem(item)}>+</button>
                        
                          <button className="font-bold m-2 p-2" onClick={handleRemoveItem}>-</button>
                        </div>
                        <img  src={CDN_LINK+item.card.info.imageId}/>
                    </div>
                   
                    
                    
                    
                    
                </div>)
            }
        </div>
    )
}
export default ItemList;