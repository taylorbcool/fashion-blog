import axios from 'axios'

const token = localStorage.getItem('token')

const axiosWithAuth = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': token
  }
})

export default axiosWithAuth