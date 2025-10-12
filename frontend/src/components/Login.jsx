import React from 'react'
import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
export default function Login() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" >
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <form>
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
