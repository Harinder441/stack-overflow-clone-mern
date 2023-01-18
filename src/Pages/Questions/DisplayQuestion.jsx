import React from 'react'
import { LeftSidebar } from '../../component/LeftSidebar/LeftSidebar'
import { RightSideBar } from '../../component/RightSideBar/RightSideBar'
import { QuestionsDetail } from './QuestionsDetail'
export const DisplayQuestion = () => {
  return (
    <div className="Home-container-1" >
      
    <LeftSidebar></LeftSidebar>
    <div className="Home-container-2">
     <QuestionsDetail></QuestionsDetail>
     <RightSideBar></RightSideBar>
    </div>
  </div>
  )
}
