import React from 'react'
import NavBar from './components/navbar/navbar.tsx';
import Root from './routes/root.tsx';
import BackPage from './routes/back.tsx';
import FrontPage from './routes/front.tsx';
import SpeedDevPage from './routes/speeddev.tsx';
import TecPage from './routes/tec.tsx';
import ToolsPage from './routes/tools.tsx';
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Footer from './components/footer/footer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/front",
    element: <FrontPage />,
  },
  {
    path: "/back",
    element: <BackPage />,
  },
  {
    path: "/SpeedDev",
    element: <SpeedDevPage />,
  },
  {
    path: "/Tec",
    element: <TecPage />,
  },
  {
    path: "/Tools",
    element: <ToolsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
      <RouterProvider router={router}></RouterProvider>
    <Footer />
  </React.StrictMode>,
)
