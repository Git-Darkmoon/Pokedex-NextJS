import Navbar from "@/components/Navbar"
import "./globals.css"
import { Poppins } from "next/font/google"

const ffPoppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
})

export const metadata = {
  title: "PokeNext JS",
  description: "PokeNext it's your reliable way to find pokemons.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ffPoppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
