import React from 'react'
import  {NavLink} from "react-router-dom"
import globe from  "../../assets/Globe.svg"  
import "./LeftSidebar.css"
export const LeftSidebar = () => {
  return (
   
    <div className="LeftSidebar-c">
       <nav className='side-nav '>
            <NavLink to="/" activeClassName="active" className= "side-nav-links" > <p> Home</p></NavLink>
            <div className="side-nav-div">
              <p style={{paddingLeft:"20px", margin:"0"}}>PUBLIC</p> 
            <NavLink to="/questions" activeClassName="active" className= "side-nav-links" > 
            <img src={globe} alt="globe" />
            <p> Questions</p>
            </NavLink>
            <NavLink to="/tags" activeClassName="active" className= "side-nav-links" style={{paddingLeft: "50px"}} > <p>Tags</p></NavLink>
            <NavLink to="/users" activeClassName="active" className= "side-nav-links" style={{paddingLeft: "50px"}} > <p> Users</p></NavLink>
            </div>
            </nav>
    </div>

  )
}
