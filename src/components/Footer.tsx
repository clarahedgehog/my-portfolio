const Footer = () => {
  return (
    <footer className="bg-[#FBF6ED] lg:py-15 lg:px-40 text-taupe-600 text-center flex justify-center px-7.5 py-10">
      <div className="flex flex-col">
        <h4 className="text-3xl pb-5">Get in touch with me</h4>
        <div className="flex gap-3 justify-center">
          <a href="mailto:clara.swahn@gmail.com" target="_blank"><img src="/envelope.svg" alt="email" height={50} width={50}></img></a>
          <a href="https://www.linkedin.com/in/clara-swahn-54859917a/" target="_blank"><img src="/linkedin.svg" alt="linkedin" height={50} width={50}></img></a>
          <a href="https://github.com/clarahedgehog" target="_blank"><img src="/github.svg" alt="github" height={50} width={50}></img></a>
        </div>
        <div className="pt-2 hover:text-[#A3B1C7] hover:scale-99 transition-transform text-[20px]">
          <a href="CV-Clara-Swahn-ENG.pdf" target="_blank">View full resume &#8599;</a>
        </div>
        <p className="pt-5 text-[#A3B1C7]">&copy;Clara Swahn 2026</p>
      </div>
    </footer >
  )
}

export default Footer