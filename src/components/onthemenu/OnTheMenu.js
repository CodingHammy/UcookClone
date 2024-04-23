import React from 'react'
import style from './OnTheMenu.module.css'

import MenuItems from './MenuItems'
import CarouselIndicators from '../../component_utils/CarouselIndicators'

import { onTheMenu_data as data } from '../../data/data'

export default function OnTheMenu() {
  return (
    <main className={style.container}>
      <header className={style.header}>
        <h2 className={style.title}>On the menu this week</h2>
      </header>
      <ul className={style.ul}>
        {data.map((item, i) => (
          <li key={i} className={style.li}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <MenuItems />
      {/* passes number 6 to indicators to map for reuse */}
      <CarouselIndicators numberOfItems={6} />
    </main>
  )
}
