import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import History from "./pages/solutions/qbounce/History.js";
import Layout from "./components/Layout";




const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='qbouncehistory' element={ <History/> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}/>

  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);