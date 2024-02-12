import axios from 'axios'


const URL ='http://localhost:8080'

export const authRegister=async(data)=>{
    try {
      return await axios.post(`${URL}/register`,data) 
    } catch (error) {
        console.log('error while calling register Api', error)
    }
}



export const authLogin=async(data)=>{
  try {
    return await axios.post(`${URL}/login`,data) 
  } catch (error) {
      console.log('error while calling login Api', error)
      return error.response
  }
}
