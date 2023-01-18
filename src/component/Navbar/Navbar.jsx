// import FontAwesomeIcon
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import {Avatar}  from '../../component/Avatar/Avatar'
import "./Navbar.css"

export const Navbar = () => {
    const [user,set]= useState(null);
    const change=()=>{ set(null)}
        
  return (
    <nav className='mainNav'>
        <div className='navbar'>
        <Link to="/" className='nav-logo nav-btn'>
            <img src={logo} alt="" />
             </Link>
        <Link to="/" className='nav-item nav-btn'>About </Link>
        <Link to="/" className='nav-item nav-btn'>Products </Link>
        <Link to="/" className='nav-item nav-btn'>For Teams </Link>
        <form >
           <input type="text" placeholder='search...'/>
           
           <img src={search} alt="" width="18px" className='search-icon' />
        </form>
        { 
        user==null ? <Link to="/Auth" className='nav-item nav-links'>Log in </Link>:
         <><Link to="/user" style= {{color:"white" ,textDecoration:"none"}}> <Avatar usr={user.charAt(0).toUpperCase()} bgc="#009dff" px="10px" py="7px" bR="50%" color="white"></Avatar></Link>
           <button className='nav-item nav-links'  onClick={change}>Log Out</button>
        </>
        }
        
    
        </div>
    </nav>
    
  )
  
}
