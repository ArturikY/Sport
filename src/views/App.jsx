import React, { useState } from "react"

import { ListWorkouts } from './workouts/listWorkouts/ListWorkouts'
import { WorkoutsProvider } from "../services/contexts/WorkoutsContext"
import { Create } from "./workouts/createWorkouts/Create"
import { DetailWorkout } from "./workouts/detail/DetailWorkout"


export const App = () => {

  const [workout, setWorkout] = useState({})

  const [openCreate, setOpenCreate] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)

  const [detailWorkout, setDetailWorkout] = useState()
  
  return (
    <>
    <div className="container">
      <WorkoutsProvider>
        {
          !openCreate && !openDetail ? 
          <ListWorkouts setOpenCreate={setOpenCreate} setOpenDetail={setOpenDetail} 
          setDetailWorkout={setDetailWorkout} setWorkout={setWorkout}
          />
          : openCreate ? <Create
          setOpenCreate={setOpenCreate} workout={workout} setWorkout={setWorkout}
          /> 
          : openDetail ? <DetailWorkout detailWorkout={detailWorkout} 
          setOpenDetail={setOpenDetail} setDetailWorkout={setDetailWorkout}
          />
          : null
        }
      </WorkoutsProvider>
    </div>
    <h1 className="limition">Please, change device</h1>
    </>
  )
}