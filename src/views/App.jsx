import React, { useState } from "react"

import { Workouts } from "./trainings/Workouts"
import { WorkoutsProvider } from "../services/contexts/WorkoutsContext"
import { Create } from "./trainings/Create"


export const App = () => {

  const [openCreate, setOpenCreate] = useState(false)

  
  return (
    <>
    <div className="container">
      <WorkoutsProvider>
        {openCreate ? <Create setOpenCreate={setOpenCreate} /> 
        : <Workouts setOpenCreate={setOpenCreate} />}
      </WorkoutsProvider>
    </div>
    <h1 className="limition">Please, change device</h1>
    </>
  )
}