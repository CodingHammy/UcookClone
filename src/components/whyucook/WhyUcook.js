import React from 'react'
import style from './WhyUcook.module.css'

import Button from '../../component_utils/Button'
import Tiles from '../../component_utils/Tiles'
import CarouselCards from './CarouselCards'
import CarouselIndicators from '../../component_utils/CarouselIndicators'

import { WhyUcook_data as data } from '../../data/data'

export default function WhyUcook() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Why UCOOK?</h2>
      <Tiles data={data} backgroundColor="" />
      <Button value="GET STARTED NOW" color="black" />
      <div className={style.carousel}>
        <h3>Whatever you're craving, we've got you covered</h3>
        <CarouselCards />
        <CarouselIndicators numberOfItems={2} />
      </div>
    </section>
  )
}
