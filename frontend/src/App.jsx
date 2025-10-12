import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./components/Home/home.jsx"
import Courses from "./components/Courses/courses.jsx"
import Contact from "./components/contact.jsx"
import About from "./components/about.jsx"
import Signup from "./components/Signup.jsx"
function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </div>
    {/* <Home/>
    <Course/> */}
    </>
  )
}
export default App
