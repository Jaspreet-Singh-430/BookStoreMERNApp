import React from "react"
export default function Cards({items}) {
    console.log(items)
    return(
        <>
        <div className="mt-4 p-3">
            <div className="card bg-base-100 dark:bg-slate-900 dark:text-white shadow-sm hover:scale-110 duration-500 dark:border">
  <figure>
    <img
      src={items.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions justify-between">
      <div className=" badge badge-outline mt-0.43 rounded-lg px-3 py-1">${items.price}</div>
      <div className="cursor-pointer border border-gray-200 border-[2px] hover:text-white hover:font-semibold rounded-full hover:bg-pink-500 px-2 py-1 duration-200">Buy now</div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}