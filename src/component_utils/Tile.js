import React from 'react'
import style from './Tile.module.css'

export default function TopTips({ info }) {
  const { img, alt_tag, title, blurb } = info
  return (
    <section className={style.container}>
      <img className={style.img} src={img} alt={alt_tag} />
      <div className={style.text_container}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.blurb}>{blurb}</p>
      </div>
    </section>
  )
}
