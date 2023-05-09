import React, { useState } from "react"

import { EditWorkout_html } from "./EditWorkout_html"
import { IconWorkout } from "../createWorkouts/IconWorkout"
import { CreateExercises } from "../createExercise/CreateExercises"
import { useWorkoutsContext } from "../../../services/contexts/WorkoutsContext"
import { EditExercise } from "./EditExercise"
import { deleteEl } from '../../../services/deleteEl.js'


export const EditWorkout = ({ 
  detailWorkout, setOpenEdit, setDetailWorkout, openEditExercise, setOpenEditExercise, 
  detailExercise, setDetailExercise
}) => {

  const {toggle} = useWorkoutsContext()

  const {listWorkouts} = useWorkoutsContext()

  const [openIcon, setOpenIcon] = useState(false)
  const [openExercises, setOpenExercises] = useState(false)

  const [titleWorkout, setTitleWorkout] = useState(detailWorkout.title)
  const [iconWorkout, setIconWorkout] = useState(detailWorkout.icon)
  const [colorWorkout, setColorWorkout] = useState(detailWorkout.color)
  const [listExercises, setListExercises] = useState(detailWorkout.listExercises)

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
        deleteEl(listWorkouts, detailWorkout)
        toggle(newWorkout)
        setDetailWorkout(newWorkout)
        setOpenEdit(false)
      }
    }

    validation()
    
  }

  return (
    <>
    {
      !openIcon && !openExercises && !openEditExercise ? 
      <EditWorkout_html setOpenEdit={setOpenEdit} setOpenIcon={setOpenIcon}
      setOpenExercises={setOpenExercises} 
      titleWorkout={titleWorkout} setTitleWorkout={setTitleWorkout}
      iconWorkout={iconWorkout} setIconWorkout={setIconWorkout}
      colorWorkout={colorWorkout} setColorWorkout={setColorWorkout}
      createWorkout={createWorkout} listExercises={listExercises}
      setListExercises={setListExercises} setDetailExercise={setDetailExercise}
      setOpenEditExercise={setOpenEditExercise}
      />
      : openIcon ? <IconWorkout setOpenIcon={setOpenIcon} 
      iconWorkout={iconWorkout} setIconWorkout={setIconWorkout} 
      />
      : openExercises ? <CreateExercises setOpenExercises={setOpenExercises}
      setListExercises={setListExercises}
      />
      : openEditExercise ? <EditExercise detailExercise={detailExercise} 
      setListExercises={setListExercises} setOpenEditExercise={setOpenEditExercise}
      listExercises={listExercises}
      />
      : null
    }
    </>
  )
}