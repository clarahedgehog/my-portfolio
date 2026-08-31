const GuineaPigs = () => {
  return (
    <div className="bg-[#EAC3C0] lg:py-30 lg:px-80 text-center gap-5 flex flex-col text-taupe-600 px-7.5 py-10">
      <h3 className="text-3xl text-white drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)]">My Guinea Pigs</h3>
      <p>You wanted to see and hear more about my guinea pigs? Of course, just look right below! &#10084;</p>
      <div className="flex gap-5 justify-evenly border border-[#FBF6ED] rounded-md p-5">
        <div>
          <img className="rounded-lg" src="/tuffsen.png" alt="Tuffsen" height={500} width={500}></img>
        </div>
        <div>
          <img className="rounded-lg" src="/karamell.png" alt="Karamell" height={500} width={500}></img>
        </div>
      </div>
      <div className="flex gap-10 text-justify lg:text-center">
        <p className="w-[50%]">This furry little guy is called Tuffsen. He loves chin scratches and bell peppers. We have had him for 6 years now and under all that black and orange hair, silver is sprouting. I usually call him for a silver fox.</p>
        <p className="w-[50%]">Karamell is brown and white and has arthritis, but he is still thriving! His favorite activity is to cuddle up and sleep under a pile of hay. He eats everything (he might even take a nibble on your toes) except for celery!</p>
      </div>
    </div>
  )
}

export default GuineaPigs