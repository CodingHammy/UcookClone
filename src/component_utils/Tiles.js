import React from 'react'
import Tile from './Tile'
import style from './Tiles.module.css'

export default function Tiles({ data }) {
  return (
    <section className={style.container}>
      {/* map data passed down to indivdual tiles */}
      {data.map((item) => (
        <Tile key={item.title} info={item} />
      ))}
    </section>
  )
}
