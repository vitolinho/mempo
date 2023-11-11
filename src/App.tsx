import { ParallaxBannerLayer, ParallaxBanner } from "react-scroll-parallax"
import img1 from "/1.png"

function App() {
  return (
    <>
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image={img1} speed={-16} className="z-0"/>
      </ParallaxBanner>
      <div>
        <div className="flex justify-between items-center px-5 py-10 fixed top-0 w-full mix-blend-difference lg:px-[3.25rem] lg:py-15">
            <a href="#" className="button-md text-white mix-blend-difference">mempo</a>
            <div className="flex flex-row gap-x-5 items-center mix-blend-difference lg:gap-x-[3.75rem]">
              <a href="#" className="button-md text-white mix-blend-difference">link 01</a>
              <a href="#" className="button-md text-white mix-blend-difference">link 02</a>
            </div>
        </div>
        <p className="absolute top-72 text-center text-neutral-0 heading-3 lg:heading-1 lg:top-60">Mempo masks</p>
      </div>
    </>
  )
}

export default App
