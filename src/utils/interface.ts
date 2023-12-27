export interface ResultType<T> {
  code: string
  msg: string
  data?: T
}

export interface Http {
  get<T>(url: string, params?: unknown): Promise<ResultType<T>>
  post<T>(url: string, params?: unknown): Promise<ResultType<T>>
  delete<T>(url: string, params?: unknown): Promise<ResultType<T>>
  postByForm<T>(url: string, params?: unknown): Promise<ResultType<T>>
}

