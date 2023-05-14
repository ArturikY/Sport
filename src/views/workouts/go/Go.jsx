import React, { useState } from "react"
import { Go_html } from "./Go_html"


export const Go = ({ workout, setOpenGo }) => {

  const [progress, setProgress] = useState(0)
  const [titleExercise, setTitleExercise] = useState('Push-up')
  const [countApp, setCountApp] = useState()
  const [type, setType] = useState()
  const [weight, setWeight] = useState()
  const [pause, setPause] = useState()
  const [nextExercise, setNextExercise] = useState()

  const [time, setTime] = useState()
  const [repeats, setRepeats] = useState()

  const [mainParameter, setMainParameter] = useState()

  const [event, setEvent] = useState()


  let socket = new WebSoket("adress")

  // Basic functional
  const defaultFunctional = () => {
    // Get need data
    socket.onmessage = (e) => {
      setEvent('approach')
      setProgress(e.data.progress)
      setTitleExercise(e.data.titleExercise)
      setCountApp(e.data.countApp)
      setType(e.data.type)

      if (type === 'time') {
        setMainParameter('time')
        setTime(e.data.time)
      } else if (type === 'repeats') {
        setMainParameter('repeats')
        setRepeats(e.data.repeats)
      }

      setWeight(e.data.weight)
      setPause(e.data.pause)
      setNextExercise(e.data.nextExercise)
    }
  }

  const toggleComplete = () => {
    socket.send("complete")
    setEvent('pause')
  }

  const toggleSkip = () => {
    socket.send("skip")
    setEvent('pause')
  }

  const togglePause = () => {
    socket.send('next')
    setEvent('approach')
    defaultFunctional()
  }

  // Open connection
  socket.onopen = () => {
    socket.send(workout.id)

    defaultFunctional()


  }


  return (
    <Go_html workout={workout} setOpenGo={setOpenGo} 
    progress={progress} titleExercise={titleExercise}
    countApp={countApp} weight={weight} 
    mainParameter={mainParameter} pause={pause}
    nextExercise={nextExercise} time={time} repeats={repeats}
    toggleComplete={toggleComplete} toggleSkip={toggleSkip}
    even={event} togglePause={togglePause}
    />
  )
}