import { useUserInfo } from '@/stores/userinfo'

const userInfo = useUserInfo()

export function getToken() {
  return userInfo.value.token
}

export function setToken(token: string) {
  userInfo.value.token = token
}
