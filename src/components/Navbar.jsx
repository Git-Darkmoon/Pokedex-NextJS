import Image from "next/image"
import pokeLogo from "@/assets/pokeball.webp"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="w-full h-20 px-5 md:px-10 lg:px-16 flex justify-between items-center  bg-yellow-50 shadow-sm">
      <div className="w-full flex items-center gap-3">
        <Image
          className="h-12 w-12"
          src={pokeLogo}
          alt="Pokeball in 3D"
          width={200}
          height={200}
          quality={100}
          priority
        />
        <h1>
          PokeNext <span className="text-red-500">JS</span>
        </h1>
      </div>
      <ul className="flex justify-center items-center gap-3">
        <li>
          <Link className="hover:text-orange-500 transition-colors" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-500 transition-colors"
            href={"/about"}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
