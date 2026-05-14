import React from "react"
import books from "../../public/books.jpg"
export default function Banner() {
    return(<>
    <div className="max-w-screen-2xl container mx-auto flex flex-col md:flex-row my-10">
        <div className="md:w-1/2 w-full md:mt-32 mt-12 px-15 md:order-1 order-2">
        <div className="space-y-10">
        <h1 className="font-bold text-4xl">Hello, welcome here to learn{" "} 
            something <span className="text-pink-500">new everyday!!!</span></h1>
            <p className="text-lg">Lorem jcjk isjdjjd djddkljfkl djej ekwejwke weoejhfwe ioejiowej eiojwoe
            </p>
        </div>
        <div className="mt-10 w-full">
        <label className="input validator w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input className="" type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
</div>
<button className="btn btn-secondary mt-5">Get Started</button>
        </div>
        <div className="md:w-1/2 w-full md:order-2 order-1"><img className="mt-3 h-120 w-120" src={books} alt=""></img></div>
    </div>
    </>)
}