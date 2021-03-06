import axios from 'axios'
import router from '../router'
import { setGlobalLoading } from '../store/global'
import AuthService from './auth'
import UsersServices from './users'

const API_ENVS = {
  local: 'http://localhost:3000',
  production: '',
  development: ''
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

httpClient.interceptors.request.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  const canThrowError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowError) {
    setGlobalLoading(false)
    throw new Error(error.message)
  }
  if (error.request.status === 401) {
    router.push({ name: 'Home' })
  }
  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersServices(httpClient)
}
