import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/root/Root.jsx";
import ErrorPage from "./components/Error/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import GadgetCards from "./components/GadgetCards/GadgetCards.jsx";
import DetailsCard from "./components/DetailsCard/DetailsCard.jsx";
import About from "./components/about/About.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import { HelmetProvider } from "react-helmet-async";
import AddToCart from "./components/AddToCart/AddToCart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
        children: [
          {
            path: "/dashboard",
            element: <AddToCart></AddToCart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/details/:productId",
        element: <DetailsCard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
