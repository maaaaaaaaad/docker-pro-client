import Api from './interceptor'

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
