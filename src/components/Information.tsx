const Information = () => {
  return (
    <div className="bg-[#EAC3C0] lg:py-30 lg:px-40 flex lg:flex-row flex-col lg:gap-20 gap-10 px-7.5 py-10">
      <div className="h-full border border-[#FBF6ED] rounded-md p-5">
        <img className="rounded-lg" src="/portrait.jpg" alt="Clara Swahn" height={800} width={600}></img>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-white text-3xl drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)] lg:text-start text-center font-alice">Hi, my name is Clara Swahn!</h3>
        <p className="text-taupe-600 text-justify">
          I am a happy and active person with many hobbies, such as climbing, badminton, reading books about Greek mythology, and taking care of all my houseplants. <br></br><br></br>I also love cuddling with my two guinea pigs, Tuffsen and Karamell, and I gladly spend my weekends watching a good movie while eating chips.
        </p>
        <h4 className="text-white text-2xl drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)] lg:text-start text-center font-alice">Currently...</h4>
        <p className="text-taupe-600 text-justify">I am currently studying to become a Frontend Developer at the vocational university <b>Futuregames</b>. During the education, we have had the opportunity to do a variety of projects, ranging from individual development to group work in sizes of 6 people. <br></br><br></br> During group work, we use <b>Scrum</b> and <b>Agile Development</b>. The education places a lot of focus on industry-relevant technologies such as <b>React</b>, <b>TypeScript</b>, <b>Next.js</b>, and good knowledge of <b>Git</b> (GitHub). <br></br><br></br>We have also worked with automated testing and best practices in testing.</p>
      </div>
    </div>
  )
}

export default Information