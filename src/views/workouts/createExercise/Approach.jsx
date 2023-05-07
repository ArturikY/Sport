import React, { useState } from "react"

import styles from "./Approach.module.scss"


export const Approach = ({ approach, countApp }) => {


  const [mainParametr, setMainParametr] = useState(approach.mainParametr)
  const [weight, setWeight] = useState(approach.weight)
  const [pause, setPause] = useState(approach.pause)

  const increment = (parameter) => {
    if (parameter === 'mainParametr') {
      setMainParametr(prev => prev + 5)
      approach.mainParametr = mainParametr
    } else if (parameter === 'weight') {
      setWeight(prev => prev + 5)
      approach.weight = weight
    } else if (parameter === 'pause') {
      setPause(prev => prev + 5)
      approach.pause = pause
    }
  }

  const decrement = (parameter) => {
    if (parameter === 'mainParametr') {
      setMainParametr(prev => prev - 5)
      approach.mainParametr = mainParametr
    } else if (parameter === 'weight') {
      setWeight(prev => prev - 5)
      approach.weight = weight
    } else if (parameter === 'pause') {
      setPause(prev => prev - 5)
      approach.pause = pause
    }
  }

  return (
    <div className={styles.approach}>
      <div className={styles.headApproach}>
        <h3>Approach {countApp}</h3>
        <div className={styles.delete}>
          <div className="icon-delete" />
        </div>
      </div>
      <div className={styles.bodyApproach}>
        <div className={styles.parameter}>
          <div className={styles.title}>
            <div className="icon-1" />
            <div className={styles.text}>Repeats</div>
          </div>
          <div className={styles.tuning}>
            <div onClick={() => decrement("mainParametr")} className={styles.minus}>-</div>
            <div className={styles.count}>{mainParametr}</div>
            <div onClick={() => increment("mainParametr")} className={styles.plus}>+</div>
          </div>
        </div>
        <div className={styles.parameter}>
          <div className={styles.title}>
            <div className="icon-2" />
            <div className={styles.text}>Weight</div>
          </div>
          <div className={styles.tuning}>
            <div onClick={() => decrement("weight")} className={styles.minus}>-</div>
            <div className={styles.count}>{weight}</div>
            <div onClick={() => increment("weight")} className={styles.plus}>+</div>
          </div>
        </div>
        <div className={styles.parameter}>
          <div className={styles.title}>
            <div className="icon-3" />
            <div className={styles.text}>Pause</div>
          </div>
          <div className={styles.tuning}>
            <div onClick={() => decrement("pause")} className={styles.minus}>-</div>
            <div className={styles.count}>{pause}</div>
            <div onClick={() => increment("pause")} className={styles.plus}>+</div>
          </div>
        </div>
      </div>
    </div>    
  )
}