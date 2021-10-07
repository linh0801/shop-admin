/**
 * 公共请求接口封装
 */

import request from '../utils/reuqest'
import { ILoginInfo } from './types/common'

// interface AxiosResponseData<T> {
//   msg: string
//   status: number
//   data: T
// }
export const getLonginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
  // return request.get<AxiosResponseData<ILoginInfo>>('/login/info')
}
