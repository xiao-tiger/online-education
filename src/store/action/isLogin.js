import http from './http'


function isLogin() {
  return function (dispatch) {
    return http.post('/user/islogin')
    .then(res => {
      if(res.data.code === 0) {
        dispatch({
          type: 'LOGIN',
          user: res.data.username
        })
      }
      console.log(res, 'ha')
    })
  }
}


export default isLogin;

// if(res.data.code === 0){
//   dispatch({
//       type: "LOGIN",
//       user: res.data.username
//   });
// }
