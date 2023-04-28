import React from "react";

import styles from './Options.module.scss'
import { Navigation } from '/src/components/display/Navigation.jsx'


export const Options = () => {


  return (
    <>
      <div className={styles.container}>
        <h1>Options</h1>
      </div>
      <Navigation />
    </>
  )
}