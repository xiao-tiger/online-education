import http from './http'


function register(data) {
  return function (dispatch) {
    return http.post('/user/register', data).then(res => {
      if(res.data.code === 0) {
        // alert(res.data.msg);
      }
      return res.data
    })
  }
}

export default register;





