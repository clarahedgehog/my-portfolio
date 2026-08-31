import Navigation from "./Navigation"
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header className="bg-[url(assets/hero.png)] bg-cover h-full bg-center flex flex-col">
      <Navigation />
      <div className="text-white text-center lg:p-75 text-shadow-shadow-yellow text-shadow-md px-7.5 py-50">
        <h1 className="items-center lg:text-7xl text-6xl">Clara Swahn</h1>
        <TypeAnimation
          className="text-[#EAC3C0]"
          sequence={[
            'Frontend Developer',
            1000,
            'Guinea Pig Enthusiast',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </header>
  )
}

export default Header