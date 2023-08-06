import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import { Nosotros } from "./pages/Nosotros";
import { Galeria } from "./pages/Galeria";
import { Tienda } from "./pages/Tienda";
import { Blog } from "./pages/Blog";
import { Contacto } from "./pages/Contacto";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/Nosotros",
        element: <Nosotros/>,
      },
      {
        path: "/Galeria",
        element: <Galeria/>,
      },
      {
        path: "/Tienda",
        element: <Tienda/>,
      },
      {
        path: "/Blog",
        element: <Blog/>,
      },
      {
        path: "/Contacto",
        element: <Contacto/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
