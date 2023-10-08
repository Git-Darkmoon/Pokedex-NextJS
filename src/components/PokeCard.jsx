import Image from "next/image"

async function getPokemon(url) {
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

async function PokeCard({ url }) {
  const pokemon = await getPokemon(url)
  console.log(pokemon)

  const {
    "sprites.other.dream_world.front_default": pokemonAvatar,
    forms: { name: pokemonName },
    types,
  } = pokemon

  return (
    <article>
      <img src={pokemonAvatar} alt={pokemonName} width={300} height={300} />
      <h1>{pokemonName}</h1>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </article>
  )
}
export default PokeCard
