import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './routes/router'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";

import {
  RouterProvider,
} from "react-router";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
