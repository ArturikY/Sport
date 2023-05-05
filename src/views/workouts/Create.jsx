import React, { useState } from "react"

import { useWorkoutsContext } from "../../services/contexts/WorkoutsContext"
import { IconWorkout } from "./IconWorkout"
import { CreateExercises } from "./CreateExercises"
import { Create_html } from './Create_html'


export const Create = ({ setOpenCreate, workout, setWorkout }) => {

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
        setWorkout({...newWorkout})
        console.log(newWorkout);
        toggle(workout)
        setOpenCreate(false)
        console.log(workout);
      }
    }

    validation()
    
  }


  return (
    <>
    {
      !openIcon === true && !openExercises === true ? 
      <Create_html setOpenCreate={setOpenCreate} setOpenIcon={setOpenIcon}
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