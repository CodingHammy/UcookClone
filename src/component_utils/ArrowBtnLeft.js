import React from 'react'
import style from './ArrowBtn.module.css'
import arrow from '../icons/arrow.svg'

export default function ArrowBtnLeft() {
  return (
    <button className={style.button}>
      <img src={arrow} alt="arrow" className={style.arrow} style={{ transform: 'scaleX(-1)' }} />
    </button>
  )
}
