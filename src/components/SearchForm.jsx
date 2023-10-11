import Link from "next/link"

function SearchForm() {
  return (
    <form className="flex flex-col bg-yellow-100 shadow-lg my-4 p-5 rounded-md border-solid border-2 border-orange-200 md:w-[calc(100%/2)] mx-auto">
      <label htmlFor="pokeSearch" className="">
        Looking for some specific pokemon ?
      </label>
      <input
        type="search"
        placeholder="i.e. pikachu"
        autoComplete="off"
        name="search"
        id="pokeSearch"
        className="rounded-sm my-3 p-2 focus:outline-8 focus:outline-solid focus:outline-orange-300"
      />
      <Link className="bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-500 transition-colors">
        Search
      </Link>
    </form>
  )
}
export default SearchForm
