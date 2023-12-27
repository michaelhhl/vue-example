import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { Http } from './interface'
import { getToken } from './userOp'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = getToken()
    if (token) {
      // @ts-expect-error not a error
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return error
  },
)

function buildWholeUrl(url: string) {
  return `${import.meta.env.VITE_APP_PATH}${url}`
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(buildWholeUrl(url), { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(buildWholeUrl(url), params)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .delete(buildWholeUrl(url), { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  postByForm(url, formdata) {
    return new Promise((resolve, reject) => {
      axios
        .post(buildWholeUrl(url), formdata)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
}
export default http
