import React from 'react'

import LoginBox from './login'

import '../../common/css/login.css'

function Login(props) {
 
  return (
    <div>
      <div id="login_boxWrap">
        <h2 className="login_register"><span>登录&注册</span></h2>
        <div className="login_register_box">
            <div className="box">
              <LoginBox {...props} />
            </div>
        </div>
      </div>
    </div>
  )
}


export default Login;

