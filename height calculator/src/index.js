import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Home from "./pages/Home";
import History from "./pages/solutions/qbounce/history/History.js";
import Layout from "./components/Layout";
import QbounceNav from "./pages/solutions/qbounce/QbounceNav";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="qbounce" element={<QbounceNav />}>
                <Route path="history" element={<History />} />
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={appRouter} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
