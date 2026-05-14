import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"
export default function Contact() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen items-center justify-center">
  <div className="shadow-md p-5 rounded-md w-[600px] relative">
        <h2 className="font-bold text-2xl">Contact us</h2>
        <form method="dialog">
        <div className="mt-4 space-y-1">
            <span className='font-semibold'>Name</span>
            <br/>
            <input type="text" className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
            {...register("name", { required: true })}
            placeholder="Enter your Fullname"/><br/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-4 space-y-1">
            <span className='font-semibold'>Email</span>
            <br/>
            <input type="email" className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
            {...register("email", { required: true })}
            placeholder="Enter your Email"/><br/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-4 space-y-1">
            <span className='font-semibold'>Message</span>
            <br/>
            <textarea rows="4" className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md outline-none" 
            {...register("password", { required: true })}
            placeholder="Enter your Message"/><br/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="flex mt-4">
            <button onClick={handleSubmit(onSubmit)} className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">Signup</button>
        </div>
            </form>
    </div>
    </div>
  )
}
