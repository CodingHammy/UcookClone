import React from 'react'
import style from './ArrowBtn.module.css'
import arrow from '../icons/arrow.svg'

export default function ArrowBtn() {
  return (
    <button className={style.button}>
      <img src={arrow} alt="arrow" className={style.arrow} />
    </button>
  )
}
