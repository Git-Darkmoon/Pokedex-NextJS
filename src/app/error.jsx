"use client"

import Image from "next/image"
import sadPikachu from "../../public/pikachu_sad.webp"
import Link from "next/link"

function ErrorPage() {
  return (
    <main className="min-h-[calc(100dvh-(5rem*2))] w-full flex flex-col md:flex-row justify-around items-center ">
      <article>
        <h1>It looks like we have a Poke Error...</h1>
        <h4>Maybe the pokemon / route searched its not valid.</h4>
        <Link
          className="bg-orange-400 hover:bg-orange-500 transition-colors px-6 py-3 rounded-md text-xl mt-3 inline-block"
          href={"/"}
        >
          Go back
        </Link>
      </article>
      <Image src={sadPikachu} alt="sad pikachu" width={400} height={400} />
    </main>
  )
}
export default ErrorPage
