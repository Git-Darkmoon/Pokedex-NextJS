import PokemonCard from "./PokeCard"

async function fetchPokemon(
  url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
) {
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

async function Pokemons() {
  const pokemons = await fetchPokemon()

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-20">
      {pokemons.results.map((eachPokemon) => {
        return <PokemonCard key={eachPokemon.name} {...eachPokemon} />
      })}
    </section>
  )
}
export default Pokemons
