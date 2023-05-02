import React, { useState } from "react"

import { useWorkoutsContext } from "../../services/contexts/WorkoutsContext"
import { CheckIcon } from "./CheckIcon"
import { Exercises } from "./Exercises"
import { Create_html } from './Create_html'


export const Create = ({ setOpenCreate }) => {

  const {toggle} = useWorkoutsContext()

  const [openIcon, setOpenIcon] = useState(false)
  const [openExercises, setOpenExercises] = useState(false)

  const [idWorkout, setIdWorkout] = useState(1)
  const [titleWorkout, setTitleWorkout] = useState()
  const [iconWorkout, setIconWorkout] = useState(
    <div className="icon-default" />
  )
  const [colorWorkout, setColorWorkout] = useState('rgb(38, 70, 83)')
  const [exercisesWorkout, setExercisesWorkout] = useState([])

  const createWorkout = (e) => {
    e.preventDefault()
    setIdWorkout(prev => prev + 1)
    const newWorkout = {
      id: idWorkout,
      title: titleWorkout,
      icon: iconWorkout,
      color: colorWorkout,
      exercises: exercisesWorkout
    }
    toggle(newWorkout)
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
      createWorkout={createWorkout} exercisesWorkout={exercisesWorkout}
      setExercisesWorkout={setExercisesWorkout}
      />
      : openIcon === true ? <CheckIcon setOpenIcon={setOpenIcon} 
      iconWorkout={iconWorkout} setIconWorkout={setIconWorkout} 
      />
      : openExercises === true ? <Exercises setOpenExercises={setOpenExercises} />
      : null
    }
    </>
  )
}