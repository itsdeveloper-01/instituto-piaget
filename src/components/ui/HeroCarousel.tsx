'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const slides = [
  { src: '/images/piaget_demo_1.png', alt: 'Slide 1' },
  { src: '/images/piaget_demo_2.jpg', alt: 'Slide 2' },
  { src: '/images/piaget_demo_3.jpg', alt: 'Slide 3' },
]

export default function HeroCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: { perView: 1 },
    created: (slider) => {
      setInterval(() => {
        slider.next()
      }, 8000)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-md mb-8">
      {slides.map((slide, idx) => (
        <div key={idx} className="keen-slider__slide">
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  )
}
