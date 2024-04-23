import React from 'react'
import style from './CarouselCard.module.css'

export default function CarouselCard({ data }) {
  const { img, altTag, title, blurb, linkText } = data
  return (
    <div className={style.container}>
      <img className={style.img} src={img} alt={altTag} />
      <div className={style.text_container}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.blurb}>{blurb}</p>
        <a href="#" className={style.link}>
          {linkText}
        </a>
      </div>
    </div>
  )
}
