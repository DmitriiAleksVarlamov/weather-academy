import axios, { AxiosRequestConfig } from 'axios'

export const rootBackendUrl = process.env.REACT_APP_ROOT_BACKEND_URL
const appId = process.env.REACT_APP_API_KEY

export const axiosInstance = axios.create({
  baseURL: rootBackendUrl
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      appid: appId,
      units: 'metric',
      exclude: 'hourly,minutely,alerts'
    }
    return config
  },
  (error) => {
    console.log(error)
  }
)

axiosInstance.interceptors.response.use(
  (axiosResponse) => axiosResponse.data,
  (error) => {
    console.log(error.response)
  }
)
