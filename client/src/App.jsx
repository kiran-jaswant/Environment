import { useState } from 'react'
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Review from './views/Review/Review';
import Blog from './views/Blog/Blog';
import Login from './views/Login/Login';
import Reward from './views/Rewards/Reward';
import Prevention from './views/Prevention/Prevention';


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/review",
      element:<Review></Review>
    },
    {
      path:"/blog",
      element:<Blog></Blog>
    },
    {
      path:"/rewards",
      element:<Reward></Reward>
    },
    {
      path:"/preventions/:id",
      element:<Prevention></Prevention>
    }
  ])


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
