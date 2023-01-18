import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Pages/Home/Home'
import { Auth } from '../Pages/Auth/Auth'
import { Questions } from '../Pages/Questions/Questions'
import { DisplayQuestion } from '../Pages/Questions/DisplayQuestion'
import { AskQuestions } from '../Pages/AskQuestions/AskQuestions'
export const Routess = () => {
  return (
      <Routes>
        <Route exact path='/' element= {<Home/>} > </Route>
        <Route exact path='/Auth' element={<Auth/>}></Route>
        <Route exact path='/questions' element={<Questions/>}></Route>
        <Route exact path='/questions/:id' element={<DisplayQuestion/>}></Route>
        <Route exact path='/askQuestions' element={<AskQuestions/>}></Route>
      </Routes>

  )
}