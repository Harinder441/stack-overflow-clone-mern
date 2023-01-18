import React from 'react'
import "./Avatar.css"
export const Avatar = ({usr,bgc,px,py,color,bR,fS,cursor}) => {
  const style={
     backgroundColor:bgc,
     padding:`${py} ${px}`,
     color:color || 'black',
     borderRadius:bR,
     fontSize:fS,
     textAlign:"center",
     cursor:cursor || null,
     width:"14px"
  }
  return (
    <div style={style} >
     {usr}
    </div>

  )
}
