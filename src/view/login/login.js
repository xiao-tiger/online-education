import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import login from '../../store/action/login';
import http from '../../store/action/http';
import {useBack} from '../../common/hook/index';

function LoginBox(props) {
  let [user, setUser] = useState('miaov00');
  let [password, setPassword] = useState('miaov12');
  let [vcode, setVcode] = useState('');
  let [vcodeShow, setVcodeShow] = useState(false);
  let [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?'+Date.now());
  
  let back = useBack(props.history);
  let dispatch = useDispatch();
  
  function toLogin() {
    dispatch(login({
      verify: vcode,
      username: user,
      password: password
    })).then(res => {
      alert(res.msg);
      setTimeout(() => {
        if (res.code != 0) {
          setVcodeSrc('/miaov/user/verify?'+Date.now())
        } else {
          back()
        }
      }, 100)
    })
  }
  return (
    <div>
      <div className="login_box">
        <figure className="user_img">
          <img src="images/user_img.png" alt="" />
          <figcaption>如有账号，请直接登录</figcaption>
        </figure>
        <div className="login_form">
            <p>
              <input 
                type="text" 
                placeholder="用户名" 
                value={user}  
                onChange={e => {
                  setUser(e.target.value)
                }}
              />
            </p>
            <p>
              <input type="password"
                placeholder="请输入密码" 
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </p>
            <p className="clearfix">
              <input 
                className="verifycode"
                type="text" 
                placeholder="请输入验证码" 
                value={vcode}
                onChange={e => {
                  setVcode(e.target.value)
                }}
                onFocus={e => {
                  setVcodeShow(true)
                }}
              />
              {
                vcodeShow?
                <img 
                  className="verify"
                  src={vcodeSrc}
                  onClick={() => {
                    setVcodeSrc('/miaov/user/verify?' + Date.now())
                  }}
                /> : ""
              }
            </p>
            <button 
              className="form_btn"
              onClick={toLogin}
            >登录</button>
            <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
          </div>
        </div>
      </div>)
    }
    
export default LoginBox;