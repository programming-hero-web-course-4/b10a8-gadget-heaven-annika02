import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/root/Root.jsx";
import ErrorPage from "./components/Error/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import GadgetCards from "./components/GadgetCards/GadgetCards.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Category.json"),
        id: "Home",
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: () => fetch("/gadget.json"),
            id: "allGadgets",
          },
          {
            path: "/:category",
            element: <GadgetCards />,
            loader: () => fetch("/gadget.json"),
            id: "categoryGadgets",
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "category/:category",
      //   element: <GadgetCards />,
      //   loader: () => fetch("../public/gadget.json"),
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
