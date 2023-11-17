import { useState, useEffect } from "react"
import { ParallaxBannerLayer, ParallaxBanner } from "react-scroll-parallax"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import bg1 from "/bg1.png"
import bg2 from "/bg2.png"
import img1 from "/img1.png"
import 'swiper/css';
import Card from "../components/card"
import Input from "../components/input"
import Button from "../components/button"

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
        <ParallaxBannerLayer image={bg1} speed={-16} className="z-0"/>
      </ParallaxBanner>
      <div>
        <div className="flex justify-between items-center px-5 py-10 fixed top-0 z-40 w-full mix-blend-difference lg:px-[3.25rem] lg:py-15">
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
            <img alt="samurai icon" src="/icons/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality two</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="icons/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality three</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="icons/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality one</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="icons/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality two</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="icons/samurai.svg"/>
          </SwiperSlide>
          <SwiperSlide className="heading-7 text-neutral-3 w-full flex justify-center items-end lg:heading-6">
            <p>Quality three</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center">
            <img alt="samurai icon" src="icons/samurai.svg"/>
          </SwiperSlide>
        </Swiper>
    </div>
    <div className="flex flex-col items-center gap-y-10 mb-[10rem] lg:gap-y-20 lg:mb-[12.5rem]">
      <p className="button-md text-neutral-3">メンポマスク</p>
      <div className="w-full flex flex-col items-center gap-y-8 lg:gap-y-5">
        <div className="w-full flex flex-col gap-y-8 px-5 lg:flex-row lg:px-[3.25rem] lg:gap-x-5">
          <Card img="/masks/1.png"/>
          <Card img="/masks/2.png"/>
          <Card img="/masks/3.png"/>
        </div>
        <div className="w-full flex flex-col gap-y-8 px-5 lg:flex-row lg:px-[3.25rem] lg:gap-x-5">
          <Card img="/masks/4.png"/>
          <Card img="/masks/5.png"/>
          <Card img="/masks/1.png"/>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-y-[3.75rem] py-20 mb-[10rem] lg:mb-[12.5rem] lg:py-[6.25rem]">
      <p className="button-md text-neutral-3">メンポマスク</p>
      <div className="w-full flex flex-col justify-center items-center gap-y-10 px-5 lg:px-[3.25rem]">
        <div className="w-full flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:justify-between">
          <p className="heading-3 text-neutral-3 lg:heading-2">Mempo</p>
          <p className="body-sm text-center text-neutral-2 lg:text-left lg:w-[12.5rem]">
            The mempo mask, with its delicate curves and ancient patina, evokes the delectable promise of a visual experience
          </p>
        </div>
        <img src={img1} alt="image of the red and blue mask" className="w-full"/>
      </div>
    </div>
    <div className="flex flex-col gap-y-[3.75rem] px-5 py-20 items-center bg-primary-1 mb-[10rem] lg:mb-[12.5rem] lg:px-[3.25rem] lg:py-[6.25rem]">
      <div className="flex flex-col gap-y-10 items-center">
        <p className="heading-5 text-neutral-0 lg:heading-4">subscribe</p>
        <p className="body-md text-neutral-1 text-center">Be the first to know about new collections and exclusive offers</p>
      </div>
      <Input placeholder="email" className="lg:w-[25rem]"/>
    </div>












    <div className="relative mb-[10rem] lg:mb-[12.5rem]">
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image={bg2} speed={-16} className="z-0 ml-[-50rem] lg:ml-0"/>
      </ParallaxBanner>
      <div className="w-full absolute bg-transparent top-0 h-screen flex flex-col gap-y-[3.75rem] px-5 py-20 justify-center lg:px-[3.25rem] lg:py-[6.25rem] lg: items-">
        <p className="heading-3 text-neutral-0">
          mempo
        </p>
        <p className="body-sm text-neutral-1 lg:w-[15rem]">
          The mempo mask, with its delicate curves and ancient patina, evokes the delectable promise of a visual experience that transcends time, inviting wearers to step into a realm where history and artistry converge, creating a captivating narrative of cultural richness and aesthetic allure.
        </p>
        <Button value="buy" variant="outline" className="lg:w-fit"/>
      </div>
    </div>
    <div className="h-screen bg-blue-200"></div>
    </>
  )
}

export default App
