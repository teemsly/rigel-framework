import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { apiServer, authTokenName, apiTimeout } from './app'

/**
 * Axios defaults configuration 
 * You can set the defualt axios configurations 
 */
axios.defaults.baseURL = apiServer;
axios.defaults.timeout = apiTimeout;
// set other axios default configuratios

/**
 * Axios Error Handler
 * @param error The error code or error status
 */
export const axiosErrorHandler = (error: any) => {
  switch (error) {
    case 401:
      // clear authentication or logged out
      break;
    case 403:
      // forbiden action
      break;
    default:
      return;
  }
}

/**
 * Setup Axios Interceptors
 * Handle on request success, response success and error.
 */
const setupAxiosInterceptors = () => {
  
  const onRequestSuccess = (config: AxiosRequestConfig) => {
    // set the authorize token from localStorage or sessionStorage
    let token = localStorage.getItem(authTokenName) || sessionStorage.getItem(authTokenName)
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
  
  const onResponseSuccess = (response: AxiosResponse<any>) => response;
  
  const onResponseError = (err: any) => {
    const status = err?.status || (err?.response ? err?.response?.status : 0);
    axiosErrorHandler(status)
    return Promise.reject(err)
  }

  axios.interceptors.request.use(onRequestSuccess)
  axios.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default setupAxiosInterceptors