import React from 'react'
import style from './Footer.module.css'

import Button from '../../component_utils/Button'

import google from '../../icons/google.svg'
import apple from '../../icons/apple.svg'

import { socialMediaLogo_data } from '../../data/data'
import { contact_data } from '../../data/data'

export default function Footer() {
  return (
    <footer className={style.container}>
      <section className={style.input_container}>
        <div className={style.signUp}>
          <h2 className={style.title}>KEEP IN TOUCH WITH OUR KITCHEN</h2>
          <form className={style.form}>
            <input type="email" placeholder="Enter your email" className={style.input} />
            <Button value="SIGN ME UP" />
          </form>
        </div>
      </section>
      <section className={style.contact_container}>
        <div className={style.contact}>
          {/* looping contact data to keep clean and looping data inside of contact_data.contacts array */}
          {contact_data.map((item, i) => (
            <div key={`${i}${item.title}`} className={style.contact_row}>
              <h4 className={style.contact_title}>{item.title}</h4>
              {item.contacts.map((item) => (
                <p key={item} className={style.contactList}>
                  <a href="#">{item}</a>
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className={style.icon_container}>
          <div className={style.icon_containerTop}>
            <img className={style.store} src={apple} alt="apple store" />
            <img className={style.store} src={google} alt="google play" />
          </div>
          <div className={style.icon_containerBottom}>
            {socialMediaLogo_data.map((item, i) => (
              <a key={`${i}${item.alt}`} href="#">
                <img className={style.img} src={item.src} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className={style.clone}>
        I will open a new tab
        <a target="_black" href="https://www.ucook.co.za/">
          This is the Website I have cloned
        </a>
      </section>
    </footer>
  )
}
