import React from "react"

import styles from './Create.module.scss'


export const Create_html = ({ setOpenCreate, setOpenIcon, setOpenExercises,
  titleWorkout, setTitleWorkout, iconWorkout, setIconWorkout, colorWorkout,
  setColorWorkout, createWorkout, exercisesWorkout, setExercisesWorkout
  }) => {


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={() => setOpenCreate(false)} className={styles.back}>
          <div className="icon-prev" />
        </div>
        <h2>Create workout</h2>
      </div>
      <div className={styles.title}>
        <div onClick={() => setOpenIcon(true)} className={styles.logo}>
          {iconWorkout}
        </div>
        <form>
          <div className={styles.form}>
            <input type="text" id="inputWorkout" placeholder="Title workout" 
              onChange={e => setTitleWorkout(e.target.value)}
              value={titleWorkout}            
            />
            <button type="reset">
              <div className="icon-cancel" />
            </button>
          </div>
        </form>
      </div>
      <h3 className={styles.titleColor}>Color training in calendar</h3>
      <div className={styles.colors}>
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_1} />
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_2} />
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_3} />
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_4} />
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_5} />
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_6} />
        <div onClick={(e) => setColorWorkout(getComputedStyle(e.target).backgroundColor)} className={styles.circ_7} />
      </div>
      <div className={styles.createExercises}>
        <h3>Exercises</h3>
        <div className={styles.addExercise}>
          <h4>Add</h4>
          <div onClick={() => setOpenExercises(true)} className={styles.logo}>
            <div className="icon-add" />
          </div>
      </div>
      </div>
      <div className={styles.listExerxises}>
        <div className={styles.exercise}>
          <div className={styles.logo}>
            <div className="icon-default" />
          </div>
          <div className={styles.text}>
            <h3>Press</h3>
            <div className={styles.approach}>Approach: 1</div>
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
        {/* <div className={styles.preview}>Add a first exercise</div> */}
      </div>
      <div className={styles.btn_container}>
        <button onClick={e => {
          createWorkout(e)
          setOpenCreate(false)
        }
        } className={styles.btn_create}>Create workout</button>
      </div>
    </div>
  )
}