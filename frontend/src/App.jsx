import { useState,useContext } from 'react'
import {Route,Routes,Navigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import './App.css'
import { AuthContext } from './Context/authProvider.jsx'
import Home from "./components/Home/home.jsx"
import Courses from "./components/Courses/courses.jsx"
import Contact from "./components/contact.jsx"
import About from "./components/about.jsx"
import Signup from "./components/Signup.jsx"
function App() {
    const {authUser, setAuthUser} = useContext(AuthContext)
    console.log(authUser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup" />} />
      <Route path="/contact" element={authUser?<Contact/>:<Navigate to="/signup" />} />
      <Route path="/about" element={authUser?<About/>:<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Toaster/>
    </div>
    {/* <Home/>
    <Course/> */}
    </>
  )
}
export default App
