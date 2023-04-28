import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"

import styles from './Workouts.module.scss'
import { Navigation } from '/src/components/display/Navigation.jsx'
import { useWorkoutsContext } from "../../services/contexts/WorkoutsContext";
import { ListWorkoutsData } from "../ListWorkoutsData";


export const Workouts = ({ setOpenCreate }) => {

  const {listWorkouts} = useWorkoutsContext()
  
  
  return (
    <>
    <div className={styles.container}>
        <div onClick={() => setOpenCreate(true)} className={styles.addWorkout}>
          <h4>Add</h4>
          <div className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </div>
        </div>
      <h1>Workouts</h1>
      <div className={styles.listWorkout}>
        {
          listWorkouts.map((workout) => (
            <div key={workout.response.id} className={styles.workout}>
              <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </div>
              <div className={styles.text}>
                <h3>{workout.response.name}</h3>
                <div className={styles.exercise}>Approach: {workout.response.exercise.length}</div>
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