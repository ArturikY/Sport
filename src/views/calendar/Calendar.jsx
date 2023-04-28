import React from "react";

import styles from './Calendar.module.scss'
import { Navigation } from '/src/components/display/Navigation.jsx'


export const Calendar = () => {


  return (
    <>
    <div className={styles.container}>
      <h1>Calendar</h1>
    </div>
    <Navigation />
    </>
  )
}