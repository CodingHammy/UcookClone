import React from 'react'
import style from './CarouselCards.module.css'

import { CarouselCards_data as data } from '../../data/data'

import DisabledArrowBtn from '../../component_utils/DisabledArrowBtn'
import ArrowBtn from '../../component_utils/ArrowBtn'
import CarouselCard from './CarouselCard'

export default function CarouselCards() {
  return (
    <section className={style.container}>
      <div>
        <DisabledArrowBtn />
      </div>
      <div className={style.carousel}>
        {data.map((item) => (
          <CarouselCard key={item.title} data={item} />
        ))}
      </div>
      <div>
        <ArrowBtn />
      </div>
    </section>
  )
}
