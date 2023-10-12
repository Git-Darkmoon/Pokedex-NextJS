import Navbar from "@/components/Navbar"
import "./globals.css"
import { Poppins } from "next/font/google"
import Footer from "@/components/Footer"

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
  generator: "Next.js",
  applicationName: "PokeNextJS",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TailwindCSS",
    "Pokemon",
    "PokeApi",
    "Frontend Development",
  ],
  authors: [
    {
      name: "Nicolas Mayorga",
      url: "https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/",
    },
  ],
  category: "education",
  colorScheme: "light",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={ffPoppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
