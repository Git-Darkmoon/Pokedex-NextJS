"use client"

import { useState } from "react"
import Link from "next/link"

function SearchForm() {
  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <section
      id="query"
      className="flex flex-col bg-yellow-100 shadow-lg my-4 p-5 rounded-md border-solid border-2 border-orange-200 md:w-[calc(100%/2)] mx-auto"
    >
      <label htmlFor="pokeSearch" className="">
        Looking for some specific Pokemon?
      </label>
      <input
        className="rounded-sm my-3 p-2 focus:outline-8 focus:outline-solid focus:outline-orange-300"
        type="search"
        placeholder="i.e. Pikachu"
        autoComplete="off"
        name="search"
        id="pokeSearch"
        value={searchValue.toLocaleLowerCase()}
        onChange={handleInputChange}
      />
      <Link
        href={`/${searchValue}`}
        className="bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-500 transition-colors text-center"
      >
        Search
      </Link>
    </section>
  )
}

export default SearchForm
