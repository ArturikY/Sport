import React, { useState } from "react"

import { Exercises_html } from "./Exercises_html.jsx"
import { IconExercise } from "./IconExercise.jsx"
import { TypeExercise } from "./TypeExercise.jsx"


export const Exercises = ({ setOpenExercises }) => {

  const [openIcon, setOpenIcon] = useState(false)
  const [openType, setOpenType] = useState(false)

  const [idExercise, setIdExercise] = useState(0)
  const [titleExercise, setTitleExercise] = useState()
  const [iconExercise, setIconExercise] = useState(
    <div className="icon-default" />
  )
  const [typeExercise, setTypeExercise] = useState('repeat')
  const [approachesExercise, setApproachesExercise] = useState([])

  const createExercise = () => {
    setIdExercise(prev => prev + 1)
    const newExercise = {
      id: idExercise,
      title: titleExercise,
      icon: iconExercise,
      type: typeExercise,
      approaches: approachesExercise
    }
  }

  const [approach, setApproach] = useState({
    id: 1,
    count: 1,
    mainParametr: 10,
    weight: 25,
    break: 30
  })

  const createApproach = () => {
    const newApproach = {
      id: approach.id,
      count: approach.count,
      mainParametr: approach.mainParametr,
      weight: approach.weight,
      break: approach.break
    }
  }


  return (
    <>
    {
      !openIcon === true && !openType === true ?
      <Exercises_html setOpenIcon={setOpenIcon} setOpenType={setOpenType}
      setTitleExercise={setTitleExercise} titleExercise={titleExercise}
      iconExercise={iconExercise} setIconExercise={setIconExercise}
      approach={approach} setApproach={setApproach}
      approachesExercise={approachesExercise} setApproachesExercise={setApproachesExercise}
      setOpenExercises={setOpenExercises}
      />
      : openIcon === true ? <IconExercise setOpenIcon={setOpenIcon}
      iconExercise={iconExercise} setIconExercise={setIconExercise}
      />
      : openType === true ? <TypeExercise setOpenType={setOpenType}
      setTypeExercise={setTypeExercise}
      />
      : null
    }
    </> 
  )
}