import Image from "next/image"
import pikachuLogo from "@/assets/pikachu-hero.webp"

function Hero() {
  return (
    <section className="h-[100dvh] flex justify-center items-center flex-col md:flex-row ">
      <article>
        <h1 className="text-3xl ">
          Find all your favorite Pokemon in one search
        </h1>
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
