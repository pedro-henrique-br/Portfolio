import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from '../pages/Header/Header.jsx'
import About from '../pages/About/About.jsx'
import Projects from '../pages/Projects/Projects.jsx'
import Contact from '../pages/Contact/Contact.jsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AnimatePresence><Header isVisible={true}/></AnimatePresence>
    },
    {
      path: "/about",
      element: <AnimatePresence><About isVisible={true}/></AnimatePresence>
    },
    {
      path: "/projects",
      element:<AnimatePresence><Projects isVisible={true}/></AnimatePresence>
    },
    {
      path: "/contact",
      element: <AnimatePresence><Contact isVisible={true}/></AnimatePresence>
    },
   
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
