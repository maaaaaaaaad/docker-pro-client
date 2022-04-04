import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: `http://localhost:8000/api/`,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      }
    }

    return config
  },
  (err) => Promise.reject(err),
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err) => {
    if (err.response.status === 401) {
      const token = localStorage.getItem('access_token')
      if (token) {
        return localStorage.removeItem('access_token')
      }
      return
    }
  },
)

export default instance
