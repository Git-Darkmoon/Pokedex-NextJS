import Image from "next/image"

async function fetchPokemon(param) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
  const data = await resp.json()
  return data
}

export const metadata = {
  title: `PokeNext JS - details`,
  description: `Single page for seeing details of an specific pokemon in the PokeNext JS web app`,
}

async function PokemonPage({ params }) {
  const { pokemon } = params
  const pokemonData = await fetchPokemon(pokemon)

  const pokemonName = pokemonData?.name || "Pokemon Not Available"
  const pokeAvatar = pokemonData?.sprites?.other?.dream_world?.front_default
  const { types } = pokemonData

  return (
    <main className="h-[calc(100dvh-(5rem*2))] flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-16">
      <picture>
        <Image src={pokeAvatar} alt={pokemonName} width={400} height={400} />
      </picture>
      <article className="flex flex-col w-[50%]">
        <h1 className="capitalize text-7xl">{pokemonName}</h1>
        <div className="flex gap-1">
          {"("}
          {types.map((type) => {
            return <h5 key={crypto.randomUUID()}>{type.type.name} </h5>
          })}
          {")"}
        </div>

        <br />
        <h2>Statistics:</h2>
        <br />
        {pokemonData?.stats.map((stat) => {
          return (
            <div key={crypto.randomUUID()}>
              <div className="flex justify-between">
                <h3>{stat.stat.name}</h3>
                <h3>{stat.base_stat}</h3>
              </div>
            </div>
          )
        })}
      </article>
    </main>
  )
}
export default PokemonPage
