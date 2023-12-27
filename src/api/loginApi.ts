import http from '@/utils/http'

const BASE_URL = '/login'

export interface LoginUser {
  username: string
  password: string
  token?: string
}

export function login(data: LoginUser) {
  const formdata = new FormData()
  formdata.append('username', data.username)
  formdata.append('password', data.password)

  return http.postByForm<LoginUser>(`${BASE_URL}`, formdata)
}
