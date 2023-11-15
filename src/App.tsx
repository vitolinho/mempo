import { useState, useEffect } from "react"
import { ParallaxBannerLayer, ParallaxBanner } from "react-scroll-parallax"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import img1 from "/1.png"
import 'swiper/css';
import Card from "../components/Card"

function App() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(()=> {
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])
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
      <div className="py-[5rem] swiper-wrapper mb-[10rem] lg:mb-[12.5rem] lg:py-[6.25rem]">
        <Swiper
          slidesPerView={isDesktop ? 6 : 'auto'}
          modules={[Autoplay]}
          speed={8000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality one</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality two</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality three</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality one</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality two</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality three</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="/samurai.svg"/>
          </SwiperSlide>
        </Swiper>
    </div>
    <div className="flex flex-col items-center justify-center gap-y-10 px-5 mb-[10rem] lg:px-[3.25rem] lg:gap-y-20 lg:mb-[12.5rem]">
      <p className="button-md text-neutral-3">メンポマスク</p>
      <div className="w-full flex flex-col gap-y-8 lg:gap-y-[13.438rem]">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
    <div className="h-screen bg-blue-200"></div>
    </>
  )
}

export default App
