import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from "../../assets/icon.png"
import { AboutAuth } from '../AboutAuth/AboutAuth'
import { signup,login } from '../../actions/auth'
export const Auth = () => {
  const [isSignup,setIsSignup]=useState(false);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('') 
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const handleSwitch=()=>{setIsSignup(!isSignup)}
  const handleSubmit = (e)=>{
    e.preventDefault()
     if(!email || !password)
     {
      alert("Enter email and password")
     }
     if(isSignup)
     {
      if(name=='')
         {alert("Enter")}
      dispatch(signup({name,email,password}),navigate)
      console.log("mai auth jsx me hu,signup kr diya")
 
     }
     else{
      dispatch( login({name,email,password}),navigate)

     }
  }

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth></AboutAuth>}
      <div className="auth-container">       
        {
          ! isSignup ? <img src={icon} alt=""  className='login-logo'/> 
        
          : <></>
        }
        <form onSubmit={handleSubmit} >
          {
            isSignup && (
              <label htmlFor="name">
            <h4>Name</h4>
            <input type="text" name='name' id='name' onChange={(e)=>{setName(e.target.value)}} />
          </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email'onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div className="pass">
  
            <h4>Password</h4>
            {!isSignup && <p style={{color:"#007ac6"}}>forget password?</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignup && <p style={{color:"rgb(69,69,69)"}}>Lorem ipsum dol laudantium nihil eveniet atque error aspernatur velit modi, dolore hic pariatur nulla ea od.</p> }
          </label>
          {
            isSignup && (
              <label htmlFor="check" className='auth-check'>
            <input type="checkbox" name='checkbox' id='check' />
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem facere quos beatae id sunt! Facilis, ipsam.</p>
          </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ?'Sign up' :'Login'}</button>
        {
          isSignup && (<p style={{color:"rgb(69,69,69)"}}   >Lorem ipsum dolor <span style={{color :"#007ac6"}}>sit amet consectetur</span> adipisicing elit. Delectus consequatur, quas unde praesentium dolor.</p>
        )
        }
        
        </form>
        <div className="auth-bottom">
        <p>{isSignup ?'already have an a account?': "Don't have an account?"}</p>
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ?'Login':'Sign up'  }</button>
        </div>
        </div>    </section>
  )
} 
