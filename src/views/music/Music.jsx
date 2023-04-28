import React from "react";

import styles from './Music.module.scss'
import { Navigation } from '/src/components/display/Navigation.jsx'


export const Music = () => {


  return (
    <>
    <div className={styles.container}>
      <h1>Music</h1>
    </div>
    <Navigation />
    </>
  )
}