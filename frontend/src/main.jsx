import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import ProductDetails from './screens/ProductDetails.jsx';
import CartScreen from './screens/Cart.jsx';
import store from './state/store.js'
import ProfileScreen from './screens/ProfileScreen.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/product/:id",
    element: <ProductDetails/>,
  },
{
  path:'/cart',
  element:<CartScreen/>

  },


  {
    path:'/profile',
    element:<ProfileScreen/>
  
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>,
)
