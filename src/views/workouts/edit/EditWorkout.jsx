import React, { useState } from "react"

import { EditWorkout_html } from "./EditWorkout_html"
import { IconWorkout } from "../IconWorkout"
import { CreateExercises } from "../CreateExercises"


export const EditWorkout = ({ workout, setOpenEdit, setWorkout }) => {


  const [openIcon, setOpenIcon] = useState(false)
  const [openExercises, setOpenExercises] = useState(false)

  const [titleWorkout, setTitleWorkout] = useState(workout.title)
  const [iconWorkout, setIconWorkout] = useState(workout.icon)
  const [colorWorkout, setColorWorkout] = useState(workout.color)
  const [listExercises, setListExercises] = useState(workout.listExercises)

  const createWorkout = (e) => {
    e.preventDefault()
    const newWorkout = {
      title: titleWorkout,
      icon: iconWorkout,
      color: colorWorkout,
      listExercises: listExercises
    }

    const validation = () => {
      if (newWorkout.title === undefined || newWorkout.title === '') {
        alert('Enter the title')
      } else if (newWorkout.listExercises.length === 0) {
        alert('Add one exercise')
      } else {
        setWorkout(newWorkout)
        setOpenEdit(false)
      }
    }

    validation()
    
  }

  return (
    <>
    {
      !openIcon === true && !openExercises === true ? 
      <EditWorkout_html setOpenEdit={setOpenEdit} setOpenIcon={setOpenIcon}
      setOpenExercises={setOpenExercises} 
      titleWorkout={titleWorkout} setTitleWorkout={setTitleWorkout}
      iconWorkout={iconWorkout} setIconWorkout={setIconWorkout}
      colorWorkout={colorWorkout} setColorWorkout={setColorWorkout}
      createWorkout={createWorkout} listExercises={listExercises}
      setListExercises={setListExercises}
      />
      : openIcon === true ? <IconWorkout setOpenIcon={setOpenIcon} 
      iconWorkout={iconWorkout} setIconWorkout={setIconWorkout} 
      />
      : openExercises === true ? <CreateExercises setOpenExercises={setOpenExercises}
      setListExercises={setListExercises}
      />
      : null
    }
    </>
  )
}