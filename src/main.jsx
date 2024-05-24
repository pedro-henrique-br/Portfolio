import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './pages/Header/Header.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Header />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/contact",
      element: <Contact />
    },
   
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
