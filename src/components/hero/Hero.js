import React from 'react'
import style from './hero.module.css'

import Button from '../../component_utils/Button'

export default function Hero() {
  return (
    <header className={style.container}>
      <div className={style.left}>
        <div className={style.textBox}>
          <h2 className={style.main_header}>Dinner, made easy</h2>
          <h3 className={style.sub_header}>Fresh ingredients from the farm</h3>
          <p className={style.blurb}>
            We deliver easy to follow and delicious recipes, and perfectly pre-portioned fresh ingredients to your door
            every week.
          </p>
        </div>
        <Button value="SELECT MEALS" />
      </div>
      <div className={style.right}>
        <img
          className={style.hero_img}
          src="https://images.ucook.co.za/images/width=1000%7Cencoding=webp/c82cdc3c/c82cdc3c-cc37-4c0c-b4ca-8b97e8d7beeb.webp"
          alt="food items"
        />
      </div>
    </header>
  )
}
