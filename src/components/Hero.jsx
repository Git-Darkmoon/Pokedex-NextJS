import Image from "next/image"
import pikachuLogo from "../../public/pikachu-hero.webp"

function Hero() {
  return (
    <section className="h-[calc(100dvh-5rem)] flex justify-center items-center flex-col md:flex-row ">
      <article>
        <h1 className="text-3xl max-w-[35ch]">
          Find all your favorite Pokemon in one search
        </h1>
        <br />
        <h2 className="text-2xl">What are you waiting for? </h2>
        <a
          href="#query"
          className="bg-orange-400 hover:bg-orange-500 transition-colors px-6 py-3 rounded-md text-xl mt-3 inline-block "
        >
          Get Started
        </a>
      </article>
      <Image
        src={pikachuLogo}
        alt="Pikachu Logo"
        width={500}
        height={500}
        priority
      />
    </section>
  )
}
export default Hero
