import React, { useEffect, useState } from 'react'
import { CarouselData } from './CarouselData'
import { MobileCarouselData } from './MobileCarouselData'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Swipe from 'react-easy-swipe'
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [carouselImages, setCarouselImages] = useState(CarouselData)
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size
  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true)
      setCarouselImages(MobileCarouselData)
    } else {
      setIsMobile(false)
      setCarouselImages(CarouselData)
    }
  }, [])

  const nextSlide = () => {
    let newSlide =
      currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  useEffect(() => {
    var handle = setInterval(nextSlide, 2000)
    return () => clearInterval(handle)
  }, [nextSlide])

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }
  return (
    <div className="mt-8 w-full">
      <div className="relative flex h-full w-full max-w-7xl overflow-hidden rounded-lg">
        <AiOutlineLeft
          onClick={prevSlide}
          className="absolute inset-y-1/2 left-0 cursor-pointer text-3xl text-white"
        />

        <Swipe
          className="w-full"
          onSwipeLeft={nextSlide}
          onSwipeRight={prevSlide}
        >
          {carouselImages.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={
                  index === currentSlide
                    ? 'block h-auto w-full object-cover'
                    : 'hidden'
                }
                onMouseEnter={() => {
                  setPaused(true)
                }}
                onMouseLeave={() => {
                  setPaused(false)
                }}
              />
            )
          })}
        </Swipe>
        <div className="absolute bottom-0 hidden w-full justify-center md:flex">
          {carouselImages.map((element, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? 'mx-2 mb-2 h-[6px] w-10 cursor-pointer rounded-lg bg-blue-400'
                    : 'mx-2 mb-2 h-[6px] w-10 cursor-pointer rounded-lg bg-white'
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                }}
              ></div>
            )
          })}
        </div>
        <AiOutlineRight
          onClick={nextSlide}
          className="absolute inset-y-1/2 right-0 cursor-pointer text-3xl text-white"
        />
      </div>
    </div>
  )
}

export default Carousel
