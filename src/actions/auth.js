import * as api from '../api'
export const  signup=(authData,navigate) => async (dispatch)=>{
    try{
        const {data}  = await api.signUp(authData)
          dispatch({type:'AUTH',data})
          
          navigate('/')

    }catch(error){    
      console.log("Le error le le") 
      console.log(error)
    }
}
export const  login=(authData,history) => {}


