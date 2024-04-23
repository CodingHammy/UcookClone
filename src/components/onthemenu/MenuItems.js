import React from 'react'
import style from './MenuItems.module.css'

import MenuItem from './MenuItem'
import ArrowBtn from '../../component_utils/ArrowBtn'
import DisabledArrowBtn from '../../component_utils/DisabledArrowBtn'

import { menuItems_data as data } from '../../data/data'

export default function MenuItems() {
  return (
    <section className={style.container}>
      <DisabledArrowBtn />
      <div className={style.MenuItems_container}>
        {data.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <ArrowBtn color="transparent" />
    </section>
  )
}
