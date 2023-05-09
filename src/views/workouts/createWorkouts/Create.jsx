import React, { useState } from "react"

import { useWorkoutsContext } from "../../../services/contexts/WorkoutsContext"
import { IconWorkout } from "./IconWorkout"
import { CreateExercises } from "../createExercise/CreateExercises"
import { Create_html } from './Create_html'
import { EditExercise } from "../edit/EditExercise"


export const Create = ({ 
  setOpenCreate, openEditExercise, setOpenEditExercise, detailExercise, setDetailExercise
}) => {

  const {toggle} = useWorkoutsContext()

  const [openIcon, setOpenIcon] = useState(false)
  const [openExercises, setOpenExercises] = useState(false)

  const [titleWorkout, setTitleWorkout] = useState()
  const [iconWorkout, setIconWorkout] = useState(
    <div className="icon-default" />
  )
  const [colorWorkout, setColorWorkout] = useState('rgb(38, 70, 83)')
  const [listExercises, setListExercises] = useState([])

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
        toggle(newWorkout)
        setOpenCreate(false)
      }
    }

    validation()
    
  }

  return (
    <>
    {
      !openIcon && !openExercises && !openEditExercise ?
      <Create_html setOpenCreate={setOpenCreate} setOpenIcon={setOpenIcon}
      setOpenExercises={setOpenExercises} 
      titleWorkout={titleWorkout} setTitleWorkout={setTitleWorkout}
      iconWorkout={iconWorkout} setIconWorkout={setIconWorkout}
      colorWorkout={colorWorkout} setColorWorkout={setColorWorkout}
      createWorkout={createWorkout} listExercises={listExercises}
      setListExercises={setListExercises} setOpenEditExercise={setOpenEditExercise}
      setDetailExercise={setDetailExercise}
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