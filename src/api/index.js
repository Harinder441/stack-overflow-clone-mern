
import axios from 'axios'
const API =axios.create({baseURL:"http://localhost:5000"})
export const login =(authData)=>API.post('/user/login',authData)
console.log("mai api me hu")
export const signUp =(authData)=>API.post('/user/signup',authData)
