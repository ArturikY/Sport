import React, { useState } from "react";

import styles from './Workouts.module.scss'
import { Navigation } from '/src/components/display/Navigation.jsx'
import { useWorkoutsContext } from "../../services/contexts/WorkoutsContext";


export const Workouts = ({ setOpenCreate }) => {

  const {listWorkouts} = useWorkoutsContext()
  
  
  return (
    <>
    <div className={styles.container}>
        <div onClick={() => setOpenCreate(true)} className={styles.addWorkout}>
          <h4>Add</h4>
          <div className={styles.logo}>
            <div className="icon-add" />
          </div>
        </div>
      <h1>Workouts</h1>
      <div className={styles.listWorkout}>
        {
          listWorkouts.map((workout) => (
            <div key={workout.id} className={styles.workout}>
              <div className={styles.logo}>
                <div className="icon-default" />
              </div>
              <div className={styles.text}>
                <h3>{workout.title}</h3>
                <div className={styles.exercise}>Approach: {workout.exercises.length}</div>
              </div>        
            </div>
          ))
        }
      </div>
    </div>
    <Navigation />
    </>
  )
}