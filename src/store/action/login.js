import http from './http'

function login(data={}) {
  return function (dispatch) {
    return http.post('/user/login', data).then(res => {
      if (res.data.code == 0) {
        dispatch({
          type: 'LOGIN',
          user: data.username
        })
      }
      return res.data
    })
  }
} 

export default login;

