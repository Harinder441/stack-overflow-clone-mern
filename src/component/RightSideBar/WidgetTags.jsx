import React from 'react'
import './RightSideBar.css'
export const WidgetTags = () => {
   const tags =['c', 'css',  'express', 'firebase', 'html', 'java', 'javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']
    const creat = vari => {
        return (<p className='tags'>{vari}</p>)
    }
    return (
    <div className="widget-tags">
        <h4>Watched Tags</h4>
        <div className="widget-tags-div">
            {
                tags.map(creat)
            }    
        </div>
    </div>
  )
}
