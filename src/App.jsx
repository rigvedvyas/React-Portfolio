
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './componets/footer'
import Navbar from './componets/navbar'
import { useEffect, useState } from 'react'
import ThemeContextStore from './store/theme-store'
import { ToastContainer } from 'react-toastify'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  
  useEffect(()=>{
    Aos.init();
  },[])

  const [theme,setTheme] = useState("dark");

  useEffect(()=>{
    document.body.className = theme == "dark" ? "body-background-dark" : "body-background-light";
  },[theme]);


  const changeTheme = ()=>{
    setTheme((prev)=>prev == "dark" ? "light" : "dark");
  }

  return (
    <ThemeContextStore.Provider value={{theme,changeTheme}} >
      <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <ToastContainer/>
      <main className='flex-grow-1'>
        <Outlet />
      </main>
      
      <Footer/> 
      </div>
      
    </ThemeContextStore.Provider>
  )
}

export default App
