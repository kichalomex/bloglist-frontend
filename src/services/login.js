import axios from 'axios'
//direccion back
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const loginService = { login }

export default loginService