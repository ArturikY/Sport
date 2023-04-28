import React, { useState } from "react"

import styles from './CheckIcon.module.scss'


export const CheckIcon = ({ setOpenIcon, iconWorkout, setIconWorkout }) => {

  const [icon, setIcon] = useState(iconWorkout)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={() => {
          setIcon(iconWorkout)
          setOpenIcon(false)
        }} className={styles.cancel}>Cancel</div>
        <div onClick={() => {
          setIconWorkout(icon)
          setOpenIcon(false)
        }} className={styles.ready}>Ready</div>
      </div>
      <div className={styles.finally_icon}>
        {icon}
      </div>
      <h3 className={styles.title_page}>Icon workout</h3>
      <div className={styles.diving_line} />
      <div className={styles.icons_container}>
        <div onClick={() => setIcon(
            <div className="_icon-1" />
          )} className={styles.icon}>
            <div className="_icon-1" />
        </div>
        <div onClick={() => setIcon(
            <div className="_icon-2" />
          )} className={styles.icon}>
            <div className="_icon-2" />
        </div>
        <div onClick={() => setIcon(
            <div className="_icon-3" />
          )} className={styles.icon}>
            <div className="_icon-3" />
        </div>
        <div onClick={() => setIcon(
            <div className="_icon-4" />
          )} className={styles.icon}>
            <div className="_icon-4" />
        </div>
        <div onClick={() => setIcon(
            <div className="_icon-5" />
          )} className={styles.icon}>
            <div className="_icon-5" />
        </div>
        <div onClick={() => setIcon(
            <div className="_icon-6" />
          )} className={styles.icon}>
            <div className="_icon-6" />
        </div>
      </div>
    </div>
  )
}