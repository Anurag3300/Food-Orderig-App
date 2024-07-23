import { useEffect, useState } from "react";
const User = ({Name,Location,Contact})=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Anurag Pandey");
        },1000)
        
        return ()=>{
            clearInterval(timer)
        }

    },[])
    return(
        <div className="user-card">
            <h1>Count= {count}</h1>
            <h1>Count={count2}</h1>
            <h2>Name:{Name}</h2>
            <h3>Location:{Location}</h3>
            <h3>Contact:{Contact}</h3>
        </div>
    )
}
export default User;