import React from 'react'
import SearchBtn from '../inputs/searchBtn'

function MainHeader() {
  return (
    <header className="w-full">
      <section className="p-2 flex justify-evenly items-center items-center lg:justify-evenly">
        <article className="flex items-center">
          <h1 className="text-5xl mr-8">PRO</h1>
          <SearchBtn />
        </article>

        <article className="flex items-center">
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
          <div className="mr-6">
            <img
              className="w-10 h-10 cursor-pointer"
              src="/images/user.png"
              alt="default-avatar"
            />
          </div>
        </article>
      </section>

      <section className="p-2 flex items-center">
        <article>CATEGORIES</article>
      </section>
    </header>
  )
}

export default MainHeader
