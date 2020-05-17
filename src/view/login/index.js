import React, {useState} from 'react'

import LoginBox from './login'
import RegisterBox from './register'

import '../../common/css/login.css'

function Login(props) {
  const [deg,setDeg] = useState(0);
  return (
    <div>
      <div id="login_boxWrap">
        <h2 className="login_register"><span>登录&注册</span></h2>
        <div className="login_register_box">
            <div 
              className="box"
              style={{transform: `rotateY(${deg}deg)`}}
            >
              <LoginBox {...props} setDeg={setDeg} />
              <RegisterBox setDeg={setDeg} />
            </div>
        </div>
      </div>
    </div>
  )
}


export default Login;

