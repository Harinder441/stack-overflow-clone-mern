import React from 'react'
import "./RightSideBar.css"
import { Widgets } from './Widgets'
import { WidgetTags } from './WidgetTags'
export const RightSideBar = () => {
  return (
    <div className="right-sidebar">
        <Widgets></Widgets>
        <WidgetTags></WidgetTags> 
    </div>
  )
}
