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

// class Http {
//   public static get<T> (
//     url: string,
//     params?: Record<string, any>,
//     config?: Omit<AxiosRequestConfig, 'params'>
//   ): Promise<ResponseDto<T>> {
//     return axiosInstance.get(`${rootBackendUrl}${url}`, {
//       ...config,
//       params
//     })
//   }

//   public static post<T> (
//     url: string,
//     body?: any,
//     config?: AxiosRequestConfig
//   ): Promise<ResponseDto<T>> {
//     return axiosInstance.post(url, body, config)
//   }

//   public static put<T> (
//     url: string,
//     body?: any,
//     config?: AxiosRequestConfig
//   ): Promise<ResponseDto<T>> {
//     return axiosInstance.put(url, body, config)
//   }

//   public static patch<T> (
//     url: string,
//     body?: any,
//     config?: AxiosRequestConfig
//   ): Promise<ResponseDto<T>> {
//     return axiosInstance.patch(url, body)
//   }

//   public static delete<T> (
//     url: string,
//     config?: AxiosRequestConfig
//   ): Promise<ResponseDto<T>> {
//     return axiosInstance.delete(url, config)
//   }
// }

// export type ResponseDto<T> = T

// export default Http
