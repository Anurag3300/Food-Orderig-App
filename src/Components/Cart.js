import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    return(
        <div className=" w-6/12 p-4 flex flex-col justify-center items-center m-auto">
            <div className="  flex justify-center items-center gap-48 ">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className=" m-auto">
                <ItemList item={cartItems}/>
            </div>
        </div>
    );
}
export default Cart;