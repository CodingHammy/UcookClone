import React from 'react'
import style from './HowItWorks.module.css'

import Tiles from '../../component_utils/Tiles'
import { HowItWorks_data as data } from '../../data/data'

export default function HowItWorks() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>How does it work?</h2>
      <Tiles data={data} />
      <p>
        Got more Questions? - check out our <a href="#">FAQ's</a>
      </p>
    </section>
  )
}
