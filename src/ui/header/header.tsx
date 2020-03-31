import React from "react"
import logo from "../../assets/primetek_logo.png"
import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}