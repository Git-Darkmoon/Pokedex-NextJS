import Hero from "@/components/Hero"
import Pokemons from "@/components/Pokemons"
import SearchForm from "@/components/SearchForm"

function Home() {
  return (
    <main className="px-5">
      <Hero />
      <SearchForm />
      <Pokemons />
    </main>
  )
}
export default Home
