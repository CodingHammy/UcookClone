import React from 'react'
import styles from './button.module.css'

export default function Button({ value, color }) {
  const buttonColor = color || 'rgb(79 169 112)'
  const buttonStyle = { backgroundColor: buttonColor }

  return (
    <button className={styles.button} style={buttonStyle}>
      {value}
    </button>
  )
}
