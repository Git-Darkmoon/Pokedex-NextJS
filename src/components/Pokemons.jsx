import PokemonCard from "./PokeCard"

async function fetchPokemon() {
  const resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  )
  const data = await resp.json()
  return data
}

async function Pokemons() {
  const pokemons = await fetchPokemon()

  return (
    <section>
      {pokemons.results.map((eachPokemon) => {
        return <PokemonCard key={eachPokemon.name} {...eachPokemon} />
      })}
    </section>
  )
}
export default Pokemons
