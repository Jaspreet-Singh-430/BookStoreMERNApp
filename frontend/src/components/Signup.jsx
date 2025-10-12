import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"
import Login from "./Login.jsx"
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex h-screen items-center justify-center">
  <div className="shadow-md p-5 rounded-md w-[600px] relative">
    
    <form className="" method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-4 space-y-1">
        <span>Name</span>
        <br/>
        <input type="text" className="w-80 px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
        {...register("name", { required: true })}
        placeholder="Enter your Fullname"/><br/>
        {errors.name && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="mt-4 space-y-1">
        <span>Email</span>
        <br/>
        <input type="email" className="w-80 px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
        {...register("email", { required: true })}
        placeholder="Enter your Email"/><br/>
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="mt-4 space-y-1">
        <span>Password</span>
        <br/>
        <input type="password" className="w-80 px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
        {...register("password", { required: true })}
        placeholder="Enter your Password"/><br/>
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="flex justify-around mt-4">
        <button onClick={handleSubmit(onSubmit)} className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
        <p>Have account? <button onClick={()=>document.getElementById("my_modal_3").showModal()} className="text-blue-500 underline cursor-pointer">Login</button>
        </p>
        <Login/>
    </div>
</div>
</div>
    </>
  )
}
