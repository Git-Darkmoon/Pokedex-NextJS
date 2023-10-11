function Footer() {
  return (
    <footer className="w-full h-20 flex justify-left items-center px-5 md:px-10 lg:px-16 text-slate-600">
      <p>
        Built by{" "}
        <a
          className="text-orange-500 hover:text-orange-700 transition-colors"
          href="https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicolas Mayorga
        </a>
        . The source code is on{" "}
        <a
          className="text-orange-500 hover:text-orange-700 transition-colors"
          href="https://github.com/Git-Darkmoon/Pokedex-NextJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}
export default Footer
