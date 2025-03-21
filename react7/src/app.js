import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

import {createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
      path:"/",
      element:<Body/>
      },
      {
        path:"/about",
        element :<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement:<Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);