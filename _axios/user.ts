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

export const REGISTER = (
  data: Pick<User, 'email' | 'password' | 'nickname'>,
) => {
  return Api({
    method: Method.POST,
    url: 'auth/register',
    data,
  })
}

export const UPDATE = (data: Pick<User, 'nickname' | 'password'>) => {
  return Api({
    method: Method.POST,
    url: 'auth/update',
    data,
  })
}

export const UPLOAD_IMAGE = (image: FormData) => {
  return Api({
    method: Method.POST,
    url: 'upload/avatar',
    data: image,
  })
}
