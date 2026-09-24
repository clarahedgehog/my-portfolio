import { NavLink } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav className='flex flex-row text-white border-b border-b-white'>
      <div className='m-8 flex justify-between w-full'>
        <NavLink className="hover:text-shadow-lg/100 hover:text-shadow-taupe-600 self-center font-alice" to="/">My Portfolio</NavLink>
        <div className='lg:gap-25 flex lg:flex-row flex-col font-alice'>
          {/* <NavLink className="hover:text-shadow-lg/100 hover:text-shadow-taupe-600" to="/">Home</NavLink> */}
          <a className="hover:text-shadow-lg/100 hover:text-shadow-taupe-600 lg:block hidden" href="#projects">Projects</a>
          <a className="hover:text-shadow-lg/100 hover:text-shadow-taupe-600 lg:block hidden" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation