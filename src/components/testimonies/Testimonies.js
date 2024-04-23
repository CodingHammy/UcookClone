import React from 'react'
import style from './Testimonies.module.css'

import star from '../../icons/star.svg'

import { testimonies_data as data } from '../../data/data'

export default function Testimonies() {
  const imageIndices = Array.from({ length: 5 }, (_, index) => index)

  return (
    <main className={style.container}>
      <div className={style.testimonies_container}>
        {data.map((item) => (
          <div key={item.name} className={style.testimony}>
            <div className={style.header}>
              <p className={style.name}>{item.name}</p>
              <div className={style.stars}>
                {/* map over star image to make 5 */}
                {imageIndices.map((index) => (
                  <img key={index} src={star} alt={`star ${index + 1}`} />
                ))}
              </div>
            </div>
            <p className={style.blurb}>{item.blurb}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
