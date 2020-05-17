import http from './http'

function logout() {
  return function(dispatch) {
    http.post('/user/logout').then(res => {
      console.log(res, 'logout')
      dispatch({
        type: 'LOGOUT'
      })
    })
  } 
}

export default logout;
