import React from 'react'
import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../Context/authProvider.jsx'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
export default function Login() {
  const {setAuthUser} = useContext(AuthContext)
  const navigate = useNavigate()
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
        const userInfo={
      
      email:data.email,
      password:data.password
    }
  await axios.post("http://localhost:3001/user/login",userInfo)
  .then((res)=>{
    console.log(res.data)
    if(res.data.msg==="User logged in successfully") {
      // document.getElementById("my_modal_3").showModal()
      toast.success("User logged in successfully")
      document.getElementById("my_modal_3").close()
        localStorage.setItem("authUser",JSON.stringify(res.data.user))
        setAuthUser(res.data.user)
        setTimeout(()=>{
          navigate("/")
        },2500)
      
    }
  }).catch((err)=>{
    
    if(err.response)
    toast.error("Error: "+err.response.data.message)
  })
  }
  return (
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" >
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
    
    <div className="mt-4 space-y-1">
        <span>Email</span>
        <br/>
        <input type="email" className="w-80 px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
        {...register("email", { required: true })}
        placeholder="Enter your Email"/><br/>
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}

    </div>
    <div className="mt-4 space-y-2">
        <span className="">Password</span>
        <br/>
        <input type="password" className="w-80 px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
        {...register("password", { required: true })}
        placeholder="Enter your Password"/><br/>
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}

    </div>
    <div className="flex justify-around mt-4">
        <button onClick={handleSubmit(onSubmit)} className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
        <p>Not registered? <Link to='/signup' className="text-blue-500 underline cursor-pointer">Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
  )
}
