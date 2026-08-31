const HomeContent = () => {
  return (
    <div className="bg-[#b9c19c] lg:py-30 lg:px-40 flex lg:flex-row flex-col justify-between text-taupe-600 lg:gap-20 px-7.5 py-10 gap-10">
      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-3xl text-white drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)] lg:pt-10 lg:text-start text-center">Hässelby Strands Sjöscoutkår (HSS)</h3>
        <p className="text-justify">During my studies at Futuregames, we had a major project where five groups got to create and design a website for Hässelby Strand's Sea Scout Corps, where the winners would get their website published.<br></br><br></br>
          Out of these five groups, my group's website was named the best and <b>our website will become their official website</b> in the near future.</p>
        <div className="h-fit w-full hover:scale-97 transition-transform">
          <a href="https://hss-website-two.vercel.app/sv" target="_blank"><img className="rounded-lg" src="/hss.png" alt="HSS website" height={800} width={1000}></img></a>
        </div>
        <p className="text-center text-white drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)] underline underline-offset-3">Click on the image to access the website</p>
      </div>
      <div className="p-10 border border-[#FBF6ED] rounded-md lg:w-[40%]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl uppercase text-white drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)]">Skills</h3>
            <div className="flex flex-row lg:gap-15 gap-5 w-full">
              <ul>
                <li>&#10003; React</li>
                <li>&#10003; CSS</li>
                <li>&#10003; Typescript</li>
                <li>&#10003; AWS</li>
                <li>&#10003; Github</li>
                <li>&#10003; Vercel</li>
                <li>&#10003; Express.js</li>
                <li>&#10003; Automated testing</li>
                <li>&#10003; Material-UI</li>
                <li>&#10003; Deno Deploy</li>
              </ul>
              <ul>
                <li>&#10003; HTML5</li>
                <li>&#10003; Javascript</li>
                <li>&#10003; Next.js</li>
                <li>&#10003; Tailwind</li>
                <li>&#10003; Node</li>
                <li>&#10003; Jest</li>
                <li>&#10003; npm</li>
                <li>&#10003; EJS</li>
                <li>&#10003; jQuery</li>
                <li>&#10003; shadcn</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl uppercase text-white drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)]">Tools</h3>
            <ul className="list-disc">
              <li><b>Unity</b> (Game engine)</li>
              <li><b>Adobe:</b> InDesign, Photoshop and Illustrator</li>
              <li>Experience in the service industry</li>
              <li><b>Maya Software</b> (3D modeling)</li>
              <li><b>Substance Painter</b> (3D- painting software)</li>
              <li><b>Microsoft Office:</b> Word, Excel and PowerPoint</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl uppercase text-white drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)]">LANGUAGES</h3>
            <ul>
              <li><b>Swedish:</b> Native language</li>
              <li><b>English:</b> Fluent</li>
              <li><b>German:</b> Basic</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomeContent