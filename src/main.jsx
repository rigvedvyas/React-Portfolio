import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './componets/contact.jsx'
import Home from './componets/home.jsx'
import Profile from './componets/profile.jsx'

const router = createBrowserRouter([
  {path:"/",
   element:<App />,
   children:[
    {
      index:true,
      element:<Home />
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
