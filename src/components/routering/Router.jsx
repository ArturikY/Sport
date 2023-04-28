import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { App } from "../../views/App"
import { Workouts } from "../../views/trainings/Workouts.jsx"
import { Calendar } from "../../views/calendar/Calendar"
import { Music } from "../../views/music/Music"
import { Options } from "../../views/options/Options"
import { Create } from "../../views/trainings/Create"


export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<App />} path='/' />
      <Route element={<Workouts />} path='/' />
      <Route element={<Calendar />} path='/calendar' />
      <Route element={<Music />} path='/music' />
      <Route element={<Options />} path='/options' />
      <Route element={<h1>Page not found</h1>} path='*' />
    </Routes>
  </BrowserRouter>
}