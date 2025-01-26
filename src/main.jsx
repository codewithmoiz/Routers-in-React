import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import AllRoutes from './AllRoutes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: AllRoutes.map((route) => ({
      path: route.path,
      element: route.element
    }))
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
