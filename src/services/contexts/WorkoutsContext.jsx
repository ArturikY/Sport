import React, { useContext, useState } from "react"

import { ListWorkoutsData } from "../../views/ListWorkoutsData"


const WorkoutsContext = React.createContext()

export const useWorkoutsContext = () => {
  return useContext(WorkoutsContext)
}


export const WorkoutsProvider = ({ children }) => {

  const [listWorkouts, setListWorkouts] = useState(ListWorkoutsData)

  const toggle = (newWorkout) => setListWorkouts(prev => [newWorkout, ...prev])

  return (
    <WorkoutsContext.Provider value={{
      listWorkouts: listWorkouts,
      toggle: toggle
      }}>
      { children }
    </WorkoutsContext.Provider>
  )
}