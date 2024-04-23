import React from 'react'
import style from './DisabledArrowBtn.module.css'
import arrow from '../icons/arrow-left.svg'

export default function DisabledArrowBtn() {
  return (
    <button className={style.button}>
      <img className={style.arrow} src={arrow} alt="arrow" style={{ transform: 'scaleX(-1)' }} />
    </button>
  )
}
