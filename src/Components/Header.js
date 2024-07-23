import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header = () => {
    const[btnName,setBtnName] = useState("login");
    // console.log("Header is Render")
    const onlineStatus = useOnlineStatus();
    // if no dependency array => the useEffect is called on every render
    // if dependency array is empty = [] =>the useEffect is called on initial render
    // if dependency array is [btnName] = > this means when the btnName is changes useEffect is called
    // useEffect(()=>{
    //     console.log("useEffect is called");
    // },[btnName]);
    const {LoggedInUser}= useContext(UserContext);
    // Subscribing to the Store using Selector(Which is a hook which is provided by react-redux)
    const cartItems = useSelector((store)=>store.cart.items);
    // console.log("cart",cartItems);
   
  return (
    <div className='flex justify-between bg-white-400 shadow-sm'>
        <div className='logo-component'>
            <img className='w-24 bg-none' src={LOGO_URL}/>
        </div>
        <div className='flex items-center'>
            <ul className='flex p-4 m-4'>
                <li className='p-4 font-bold'>
                    Online Status : {onlineStatus ? "✅": "🔴"}
                </li>
                <li className='p-4 font-bold'>
                   <Link to="/">Home</Link> 
                </li>
                <li className='p-4 font-bold'>
                   <Link to="/about">About Us</Link> 
                </li>
                <li className='p-4 font-bold'>
                    <Link to="/contact" >Contact Us</Link>
                </li>
                <li className='p-4 font-bold text-xl'>
                   <Link to="/cart">Cart-({cartItems.length} items)</Link> 
                </li>
                <li className='p-4 font-bold'>
                    <Link to="/grocery">Grocery</Link>
                </li>
                
                <button className='btn font-bold' onClick={()=>{
                    btnName ==="login" ? setBtnName("logout") :setBtnName("login");
                
                  }}>{btnName}

                </button>

                <li className='p-4 font-bold'>{LoggedInUser}</li>
               
                
                
            </ul>
            
           
            
        </div>
       

    </div>
  )
}
export default Header;
