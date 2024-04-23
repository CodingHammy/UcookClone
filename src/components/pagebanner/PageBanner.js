import React from 'react'
import style from './PageBanner.module.css'
import ArrowBtnLeft from '../../component_utils/ArrowBtnLeft'
import ArrowBtn from '../../component_utils/ArrowBtn'

export default function PageBanner() {
  return (
    <main className={style.container}>
      <div className={style.arrowLeft}>
        <ArrowBtnLeft />
      </div>
      <div className={style.left}>
        <div className={style.textBox}>
          <h2 className={style.title}>Treat yourself!</h2>
          <p className={style.paragraph}>Order your Weekend Box now and get feasting!</p>
          <button className={style.btn}>ORDER NOW</button>
        </div>
      </div>
      <div className={style.right}>
        <img
          className={style.img}
          src="https://images.ucook.co.za/images/width=2048%7Cencoding=webp/61f90e7d/61f90e7d-8bbe-42a7-85e6-a81ec20e1993.webp"
          alt="food"
        />
      </div>
      <div className={style.arrowRight}>
        <ArrowBtn />
      </div>
    </main>
  )
}
