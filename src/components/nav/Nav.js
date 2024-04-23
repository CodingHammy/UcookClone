import React from 'react'
import styles from './nav.module.css'

import cart from '../../icons/cart-large-minimalistic-svgrepo-com.svg'

import Button from '../../component_utils/Button'

//imported to keep page clean
import { navLinks } from '../../data/data'

export default function Nav() {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <a href="/">
          <img className={styles.logo} src="https://www.ucook.co.za/logos/large.svg" alt="logo" />
        </a>
        <ul className={styles.ul}>
          {/* loop all navlinks imported from data folder*/}
          {navLinks.map((item, i) => (
            <li key={i}>
              <a className={styles.links} href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.auth}>
          <a className={`${styles.links} ${styles.login}`} href="#">
            Login
          </a>
          <Button value="Sign up" color="rgb(232 117 67)" />
        </div>
        <div className={styles.pipes}></div>
        <button className={styles.cart}>
          <img src={cart} alt="cart" />
          <p className={styles.cart_amount}>0</p>
        </button>
      </div>
    </nav>
  )
}
