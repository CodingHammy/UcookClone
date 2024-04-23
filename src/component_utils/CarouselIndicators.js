import React from 'react'
import style from './CarouselIndicators.module.css'

export default function CarouselIndicators({ numberOfItems }) {
  const itemsArray = Array.from({ length: numberOfItems }, (_, index) => index + 1)
  return (
    <div className={style.container}>
      {itemsArray.map((index) => (
        <div className={style.index} key={index} />
      ))}
    </div>
  )
}
