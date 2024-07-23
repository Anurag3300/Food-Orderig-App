import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            UserInfo:{
                name:"Dimmy",
                location:"Dimmy_Location",

            }
          
        };
        // console.log("child Constructor")
    }
     async componentDidMount(){

        console.log("child component did mount");
        const data  = await fetch("https://api.github.com/users/anurag3300");
        const json = await data.json();
        // console.log(json);
        this.setState({
            UserInfo:json
        });
    }
    // componentDidMount(){
    // //     this.timer = setInterval(()=>{
    // //         console.log("Anurag Pandey");
    // //     },1000)
    // // }
    componentDidUpdate(){
        // console.log("componentDidUpdata");
    }
    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("component Will Unmount");
    }
    render(){
        // console.log("child render")
       const {name,location,avatar_url} = this.state.UserInfo;
       
        return(
            <div className="flex flex-col justify-center items-center">
                <img className="p-4 m-4 w-50 rounded-xl" src={avatar_url}/>
                <h2 className="p-2 text-xl font-semibold">Name:{name}</h2>
                <h3 className="p-2 text-xl font-semibold">Location:{location}</h3>
                <h3 className="p-2 text-xl font-semibold">Contact:anuragpandey4142@gmail.com</h3>
            </div>
        )
    }

}
export default UserClass;