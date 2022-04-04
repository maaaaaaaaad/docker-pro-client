import Api from './interceptor'
import { User } from '../_recoil/state'

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const USER = () => {
  return Api({
    method: Method.GET,
    url: 'auth',
  })
}

export const LOGIN = (data: Pick<User, 'email' | 'password'>) => {
  return Api({
    method: Method.POST,
    url: 'auth/login',
    data,
  })
}
