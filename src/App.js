import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const Grocery = lazy(()=>import('./components/Grocery'));

const AppLayout = () => {


  const [username,setusername] = useState();
  //authentication

  useEffect(()=>{
    //make an api call and send username and password

    const data={
      name:"Rahul bose"
    };
    setusername(data.name);
  },[])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:username,setusername}}>
    <div className="app">
      <Header />
      {/* if path is / then show body if path is /about then show about  */}
      {/* <Body /> */}
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>,
        errorElement:<Error/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
        errorElement:<Error/>,
      },
      {
        path:'/restaurants/:resId',
        element:<ResMenu/>,
        errorElement:<Error/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
        errorElement:<Error/>,
      },
      {
        path:'/grocery',
        element: <Suspense fallback = {<Shimmer/>}> <Grocery/>  </Suspense>,
        errorElement:<Error/>,
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
