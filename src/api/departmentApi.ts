import http from '@/utils/http'

export interface Department {
  deptId: string
  deptname?: string
  creator?: string
  createTime?: string
  updater?: string
  updateTime?: string
}

const BASE_URL = '/department'

export function selectAllDemparment() {
  return http.get<Department[]>(`${BASE_URL}/all`)
}
