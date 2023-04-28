import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import styles from './Create.module.scss'
import { useWorkoutsContext } from "../../services/contexts/WorkoutsContext"
import { CheckIcon } from "./CheckIcon"
import { Exercises } from "./Exercises"


export const Create = ({ setOpenCreate }) => {

  const {toggle} = useWorkoutsContext()

  const [openIcon, setOpenIcon] = useState(false)
  const [openExercises, setOpenExercises] = useState(false)

  const [titleWorkout, setTitleWorkout] = useState()
  const [iconWorkout, setIconWorkout] = useState(
    <div className="_icon-default" />
  )
  const [colorWorkout, setColorWorkout] = useState('rgb(38, 70, 83)')

  const createWorkout = (e) => {
    e.preventDefault()
    const newWorkout = {
      description: 'Возвращает данные o тренировке по id',
      url: "/workout/get_workout",
      response: {
        "id": 2,
        "name": `${titleWorkout}`,
        "color": `${colorWorkout}`,
        "icon": `${iconWorkout}`,
        "initial_break": "initial_break",
        "playlist": "playlist_id",
        "exercise": ["id", 'id']
      },
      request: {
          id: "id"
      }
    }
    toggle(newWorkout)
  }

  return (
    <>
    {
      !openIcon && !openExercises ? openIcon && !openExercises ? 
      <div className={styles.container}>
        <div className={styles.header}>
          <div onClick={() => setOpenCreate(false)} className={styles.back}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
          <h2>Create workout</h2>
        </div>
        <div className={styles.title}>
          <div onClick={() => setOpenIcon(true)} className={styles.logo}>
            {iconWorkout}
          </div>
          <form>
            <div className={styles.form}>
              <input type="text" id="inputTitle" placeholder="Title training" 
                onChange={e => setTitleWorkout(e.target.value)}
                value={titleWorkout}            
              />
              <button type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
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
            <div className={styles.logo}>
              <div className="_icon-add" />
            </div>
          </div>
        </div>
        <div className={styles.listExerxises}>
          <div className={styles.exercise}>
            <div className={styles.logo}>
              <div className="_icon-default" />
            </div>
            <div className={styles.text}>
              <h3>Press</h3>
              <div className={styles.approach}>Approach: 1</div>
            </div>
            <div className={styles.icons}>
              <div className={styles.more}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              <div className={styles.delete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
              </div>
            </div>      
          </div>
          {/* <h5>Add a first exercise</h5> */}
        </div>
        <div className={styles.btn_container}>
          <button onClick={e => {
            createWorkout(e)
            setOpenCreate(false)
          }
          } className={styles.btn_create}>Create workout</button>
        </div>
      </div>
    : <CheckIcon />
    : <Exercises />
    }
    </>
  )
}