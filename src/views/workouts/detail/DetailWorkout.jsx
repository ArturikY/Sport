import React, { useState } from "react"

import styles from './DetailWorkout.module.scss'
import { EditWorkout } from "../edit/EditWorkout"


export const DetailWorkout = ({ detailWorkout, setOpenDetail, setDetailWorkout }) => {

  const [openEdit, setOpenEdit] = useState(false)

  return (
    <>
    {
      !openEdit ? 
      <div className={styles.container}>
        <div className={styles.header}>
          <div onClick={() => setOpenDetail(false)} className="icon-prev" />
          <div onClick={() => setOpenEdit(true)} className={styles.edit}>
            <h3>Edit</h3>
            <div className="icon-1" />
          </div>
        </div>
        <h1 className={styles.titleWorkout}>{detailWorkout.title}</h1>
        <div className={styles.startWorkout}>
          <button className={styles.btnStart}>Go</button>
        </div>
        <div className={styles.contentWorkout}>
          {
            detailWorkout.listExercises.map((exercise, index) => (
              <div key={index+1} className={styles.exercise}>
                <h4>Exercise {index+1} / Approaches: {exercise.listApproaches.length}</h4>
                <h3 className={styles.titleExercise}>{exercise.title}</h3>
                <div className={styles.listApproaches}>
                  {
                    exercise.listApproaches.map((approach, index) => (
                      <div key={index+1} className={styles.approach}>
                        <div className={styles.headApproach}>
                          <div className="icon-default" />
                          <h3 className={styles.countApp}>Approach {approach.count}</h3>
                        </div>
                        <div className={styles.bodyApproach}>
                          <div className={styles.parameter}>
                            <div className={styles.title}>
                              <div className="icon-1" />
                              <div className={styles.text}>Repeats</div>
                            </div>
                            <div className={styles.count}>{approach.mainParametr}</div>
                          </div>
                          <div className={styles.parameter}>
                            <div className={styles.title}>
                              <div className="icon-2" />
                              <div className={styles.text}>Weight</div>
                            </div>
                            <div className={styles.count}>{approach.weight} kg</div>
                          </div>
                          <div className={styles.parameter}>
                            <div className={styles.title}>
                              <div className="icon-3" />
                              <div className={styles.text}>Pause</div>
                            </div>
                            <div className={styles.count}>{approach.pause} sec</div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      : <EditWorkout workout={detailWorkout} setWorkout={setDetailWorkout}
      setOpenEdit={setOpenEdit}
      />
    }
    </>
  )
}