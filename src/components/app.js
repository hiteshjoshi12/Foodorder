import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import About from "./About";
import Body from "./Body";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import {NoMatch} from "./NoMatch"
import Restromenu from "./Restromenu";
// const Instamart = lazy(()=> import ("./Components/Instamart"));





const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NoMatch />,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/Restro/:resid",
        element:<Restromenu />,
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);