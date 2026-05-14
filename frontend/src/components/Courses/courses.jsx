import React,{useState,useEffect} from 'react'
import Navbar from "../navbar.jsx"
import Footer from "../footer.jsx"
import Cards from "../cards.jsx"
import {Link} from "react-router-dom"
// import list from "../../../public/list.json"
import axios from "axios"
function Courses() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const response=await axios.get("http://localhost:3001/book")
        console.log(response.data)
        setBook(response.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    getBook();
  },[])
  return(
    <>
    <Navbar/>
    <div className="min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-15 px-4">
      <div className=" mt-28 items-center justify-center text-center">
        <h1 className="foont-bold text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here!</span></h1>
        <p className="mt-12">Lorem dgj sfsk fksnjkdjkfsjk jkefjksejkf skjdjksfjk knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs knksdj wfjks lfjksdj lejfksne kfkse efkfkls seflfs</p>
        <Link to="/">
        <button className="text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
        {
          
            book.map((item)=>(
              <Cards key={item.id} items={item}/>
            ))
        }
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default Courses