import React from "react"

import styles from "./Exercise.module.scss"


export const Exercise = ({ exercise }) => {


  return (
    <div className={styles.exercise}>
      <div className={styles.logo}>
        {exercise.icon}
      </div>
      <div className={styles.text}>
        <h3>{exercise.title}</h3>
        <div className={styles.approach}>Approaches: {exercise.listApproaches.length}</div>
      </div>
      <div className={styles.icons}>
        <div className={styles.more}>
          <div className="icon-next" />
        </div>
        <div className={styles.delete}>
          <div className="icon-delete" />
        </div>
      </div>      
    </div>
  )
}