import React from 'react'
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class About extends Component{
  constructor(props){
    super(props);
    // console.log("parent Constructor");
    
  }
  componentDidMount(){
    // console.log("parent Component Did Mount");
  }

  render(){
    // console.log("Parent Render")
  
    return (
          <div>
            <div>
              LoggedInUser
              <UserContext.Consumer>
                {
                  ({LoggedInUser})=>(<h4 className=' p-2 font-bold'>{LoggedInUser}</h4>)
                    
          
                }
              </UserContext.Consumer>
            </div>
              
              <UserClass Name={"First"} Location={"Noida"} Contact={"anuragpandey4142@gmail.com"}/>
              {/* <User Name={"First"} Location={"Noida"} Contact={"anuragpandey4142@gmail.com"}/> */}
          
          </div>
        )
  }
}
export default About;


// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         <h2>food ordring App</h2>
    
//         <UserClass Name={"Anurag Pandey (Class)"} Location={"Noida"} Contact={"anuragpandey4142@gmail.com"}/>
//     </div>
//   )
// }
// export default About;
