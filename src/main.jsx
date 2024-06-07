import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layout/Root/Root'
import Home from './Pages/Home/Home'
import Donation from './Pages/Donation/Donation'
import Statistics from "./Pages/Statistics/Statistics";
import ErrorElement from "./Pages/ErrorElement/ErrorElement";
import Details from './components/Details/Details'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/public/data.JSON"),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
