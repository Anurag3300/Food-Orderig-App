import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';


function App() {
  // console.log(<Body/>);virtual Dom (just a noraml javascript object to represent the actual Dom)
  const [userName,setUserName] = useState(null);

  useEffect(()=>{
    // authentication
    const data = {
      name : "Irshad"
    }
    setUserName(data.name);

  },[])
  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{LoggedInUser:userName , setUserName}}>
      <div className="App">
        <Header/>
        <Outlet/>
      </div>
    </UserContext.Provider>
    </Provider>
  );
}


export default App;
