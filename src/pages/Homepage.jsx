import React from 'react'
import Btn from '../components/Btn'
import { Carousel } from 'flowbite-react'
import all from '../assets/img/all.jpg'
import b from '../assets/img/b.jpg'
import c from '../assets/img/c.jpg'
import th from '../assets/img/th.jpg'
import Card from '../components/Card'


const Homepage = () => {
  const card = [
    {
      "id":"2",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"23",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"3",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"4",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"5",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"6",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"7",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
    {
      "id":"8",
      "title":"Dell",
      "price":"Rs. 120000",
      "image":'src/assets/img/dell.jpg',
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi voluptas repudiandae, accusantium error accusamus maiores, nam neque mollitia dolore commodi voluptatibus rerum ipsa nisi ut dignissimos, iure distinctio vel?"
    },
  ]
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
   

    <div className="flex flex-wrap justify-evenly py-10 gap-6 px-20">
   {
    card.map((data)=>(
        <Card data={data}/>
    ))
   }
   </div>
    </>
  )
}

export default Homepage
