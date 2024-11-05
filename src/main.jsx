import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './components/root/Root.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import GadgetCards from './components/GadgetCards/GadgetCards.jsx';
const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
          {
              path: "/",
              element: <Home />,
              loader: () => fetch('../public/Category.json'),
              children: [
                {
                  path: '/category/:category',
                  element: <GadgetCards />,
                  // loader:fetch('../public/gadget.json'),
              }
              ],
          },
          {
              path: '/dashboard',
              element: <Dashboard />,
          },
        
      ],
  },
]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
