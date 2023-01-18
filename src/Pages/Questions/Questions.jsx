import React from 'react'
import { LeftSidebar } from '../../component/LeftSidebar/LeftSidebar'
import { RightSideBar } from '../../component/RightSideBar/RightSideBar'
import { HomeMainBar } from '../../component/HomeMainBar/HomeMainBar'
export const Questions = () => {
  return (
    <div className="Home-container-1" >
      
      <LeftSidebar></LeftSidebar>
      <div className="Home-container-2">
        <HomeMainBar></HomeMainBar>
       <RightSideBar></RightSideBar>
      </div>
    </div>
  )
}
