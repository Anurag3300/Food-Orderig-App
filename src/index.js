import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './Components/Body';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart';
// import Grocery from './Components/Grocery';
const Grocery = lazy(()=>import('./Components/Grocery'))
const About = lazy(()=>import('./Components/About'))
const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Body/>
        },
        {
          path:'/about',
          element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/grocery',
          element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
        },
        {
          path:'/restaurants/:resId',
          element:<RestaurantMenu/>
        }
  
      ],
      errorElement:<Error/>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}/>
  
);


