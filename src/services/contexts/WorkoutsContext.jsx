import React, { useContext, useState } from 'react'

const WorkoutsContext = React.createContext()

export const useWorkoutsContext = () => {
	return useContext(WorkoutsContext)
}

export const WorkoutsProvider = ({ children }) => {
	const [listWorkouts, setListWorkouts] = useState([])

	const [token, setToken] = useState(undefined)

	const toggle = newWorkout => setListWorkouts(prev => [newWorkout, ...prev])

	return (
		<WorkoutsContext.Provider
			value={{
				listWorkouts: listWorkouts,
				setListWorkouts: setListWorkouts,
				toggle: toggle,
			}}
		>
			{children}
		</WorkoutsContext.Provider>
	)
}
