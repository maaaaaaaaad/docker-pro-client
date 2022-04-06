import React from 'react'

function SearchBtn() {
  return (
    <section className="relative">
      <input
        type="text"
        name="search"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 lg:w-96"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-3 right-1 stroke-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </section>
  )
}

export default SearchBtn
