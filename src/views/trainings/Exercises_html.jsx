import React from "react"

import styles from './Exercises.module.scss'


export const Exercises_html = ({ titleExercise, setTitleExercise,
  setOpenIcon, setOpenType, iconExercise, approach, setApproach,
  approachesExercise, setApproachesExercise, setOpenExercises
 }) => {


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={setOpenExercises(false)} className={styles.cancel}>
          Cancel
        </div>
        <div className={styles.titlePage}>
          Add exercise
        </div>
        <div className={styles.ready}>
          Ready
        </div>
      </div>
      <div className={styles.titleExercise}>
        <div onClick={() => setOpenIcon(true)} className={styles.logo}>
          {iconExercise}
        </div>
        <form>
          <div className={styles.form}>
            <input type="text" id="inputExercise" placeholder="Title exercise" 
              onChange={e => setTitleExercise(e.target.value)}
              value={titleExercise}
            />
            <button type="reset">
              <div className="icon-cancel" />
            </button>
          </div>
        </form>
      </div>
      <div onClick={() => setOpenType(true)} className={styles.type}>
        <div className={styles.title}>Type exercise</div>
        <div className={styles.text}>
          <div>On repeat</div>
          <div className="icon-next" />
        </div>
      </div>
      <div className={styles.listApproach}>
        {
          approachesExercise.map(approach => {
            <div className={styles.approach}>
              <div className={styles.headApproach}>
                <h3>Approach {approach.count}</h3>
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
                    <div className={styles.minus}>-</div>
                    <div className={styles.count}>{approach.ma}</div>
                    <div className={styles.plus}>+</div>
                  </div>
                </div>
                <div className={styles.parameter}>
                  <div className={styles.title}>
                    <div className="icon-2" />
                    <div className={styles.text}>Weight</div>
                  </div>
                  <div className={styles.tuning}>
                    <div className={styles.minus}>-</div>
                    <div className={styles.count}>{approach.weight}</div>
                    <div className={styles.plus}>+</div>
                  </div>
                </div>
                <div className={styles.parameter}>
                  <div className={styles.title}>
                    <div className="icon-3" />
                    <div className={styles.text}>Break</div>
                  </div>
                  <div className={styles.tuning}>
                    <div className={styles.minus}>-</div>
                    <div className={styles.count}>{approach.break}</div>
                    <div className={styles.plus}>+</div>
                  </div>
                </div>
              </div>
            </div>
          })
        }
        <div onClick={() => {
          setApproachesExercise(prev => [...prev, approach])
          console.log(approachesExercise);
        }} 
        className={styles.addApproach}>Add approach</div>
      </div>
    </div>
  )
}