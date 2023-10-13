import Image from "next/image"
import Link from "next/link"

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
    <article className="flex justify-between gap-3 flex-col shadow-md lg:hover:shadow-xl lg:hover:scale-105 transition-all rounded-md p-6 bg-slate-100 object-cover object-center">
      <Image
        src={pokemonAvatar}
        alt={pokemonName}
        width={300}
        height={300}
        className="max-h-80 "
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
      <Link
        href={`/${pokemonName}`}
        className="bg-orange-400 px-2 py-1 hover:bg-orange-500 transition-colors rounded-md text-center"
      >
        Details
      </Link>
    </article>
  )
}
export default PokeCard
