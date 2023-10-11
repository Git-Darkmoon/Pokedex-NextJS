import Image from "next/image"

async function getPokemon(url) {
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

async function PokeCard({ url }) {
  const pokemon = await getPokemon(url)

  const { types } = pokemon

  const pokemonAvatar = pokemon?.sprites?.other?.dream_world?.front_default
  const pokemonName = pokemon?.forms[0]?.name || "N/A"

  return (
    <article className="flex justify-between gap-3 flex-col shadow-md lg:hover:shadow-xl lg:hover:scale-105 transition-all rounded-md p-6 bg-slate-100">
      <Image
        src={pokemonAvatar}
        alt={pokemonName}
        width={300}
        height={300}
        className="max-h-80"
        objectFit="cover"
      />
      <h1 className="text-xlg capitalize text-slate-900">{pokemonName}</h1>
      <div className="flex gap-6">
        <h4 className="text-slate-700">Type:</h4>
        <ul>
          {types.map((type) => (
            <li key={type.type.name} className="text-md text-slate-500">
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-orange-300 hover:bg-orange-400 transition-colors rounded-sm">
        Details
      </button>
    </article>
  )
}
export default PokeCard
