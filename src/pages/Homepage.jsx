import React from 'react'
import Btn from '../components/Btn'
import { Carousel } from 'flowbite-react'
import all from '../assets/img/all.jpg'
import b from '../assets/img/b.jpg'
import c from '../assets/img/c.jpg'
import th from '../assets/img/th.jpg'

const Homepage = () => {
  return (
    <>
     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={all} alt="..." />
        <img src={b} alt="..." />
        <img src={c} alt="..." />
        <img src={th} alt="..." />
        <img src={b} alt="..." />
      </Carousel>
    </div>
  
    </>
  )
}

export default Homepage
