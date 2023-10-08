function SearchForm() {
  return (
    <form className="flex flex-col bg-yellow-100 shadow-xl my-4 p-5 rounded-sm  ">
      <label htmlFor="pokeSearch" className="">
        Looking for some specific pokemon ?
      </label>
      <input
        type="text"
        name=""
        id="pokeSearch"
        className="rounded-sm my-3 p-2"
      />
      <button className="bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-500 transition-colors">
        Search
      </button>
    </form>
  )
}
export default SearchForm
