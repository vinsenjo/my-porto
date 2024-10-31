'use client'
import { useEffect, useState } from "react"
import Profile from "./components/profile"
import Navbar from "./components/navbar";
import GridPattern from "./components/ui/animated-grid-pattern";
import TextRevealByWord from "./components/ui/text-reveal";
import About from "./components/about";
import Perks from "./components/perks";
import SocialMedia from "./components/ui/social";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  const [state, setState] = useState<boolean>(false)
  const [delayedZIndex, setDelayedZIndex] = useState(false);
  const setBanner = () => {
    setState(!state)
  }
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state) {
      timer = setTimeout(() => {
        setDelayedZIndex(true);
      }, 140);
    } else {
      setDelayedZIndex(false);
    }
    return () => clearTimeout(timer);
  }, [state]);
  return (
    <div className="flex   px-5  lg:px-10 justify-center bg-cream">
      <div className="bg-cream w-full scroll-smooth  lg:max-w-[1200px]">
        <Navbar state={state} />
        <div className='text-xl font-raleway  lg:min-h-screen relative  overflow-hidden'>
          <div className="flex lg:flex-row flex-col relative">
            <Profile state={state} setState={setState} />
            <div className={`bg-cream lg:w-1/2 ${state == true ? " lg:translate-x-0 " : "lg:translate-x-full items-center"} w-full flex  justify-center lg:z-30 transition-all ease-out duration-700  lg:h-screen lg:absolute`}>
              <div className="flex flex-col gap-4 items-center text-white">

                <div className={`${state == false ? "lg:hidden" : "lg:block"}`}>
                  <About />
                </div>
         
              </div>
            </div>
            <div className={`${state == true ? `lg:translate-x-full ${delayedZIndex ? 'lg:z-20' : ''}` : "lg:-translate-x-[2%]"} bg-cream lg:w-1/2 mt-4 lg:mt-0 lg:relative duration-1000  lg:h-screen  ease-out`}>
              <Perks state={state} />
            </div>
          </div>
        </div>
        <div id="porto" className="flex items-center justify-center">
          <TextRevealByWord text="PORTFOLIO" />
        </div>
        <Portfolio />
        <Contact/>
      </div>
    </div>
  )
}

export default App
