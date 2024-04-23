import React from 'react'
import style from './MenuItem.module.css'

export default function MenuItem({ data }) {
  const { img_src, title } = data
  return (
    <div className={style.container}>
      <img className={style.img} src={img_src} alt={title} />
      <p className={style.title}>{title}</p>
    </div>
  )
}
