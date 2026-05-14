import React,{useContext} from 'react'
import { AuthContext } from '../Context/authProvider.jsx'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const {setAuthUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
      try{
      setAuthUser(null)
    localStorage.removeItem("authUser")
    toast.success("Logged out successfully")
    navigate("/signup")
  }
  catch(err){
     toast.error("Error logging out")
  }
}
  return (
    <div>
      <button className='bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
