import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import register from '../../store/action/register';


function RegisterBox(props) {
  let [user, setUser] = useState('');
  let [password, setPassword] = useState('');
  let [repassword, setRepassword] = useState('');
  let [vcode, setVcode] = useState('');
  let [vcodeShow, setVcodeShow] = useState(false);
  let [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?'+Date.now());
  
  let dispatch = useDispatch();
  let {setDeg} = props;
  
  function toRegister() {
    dispatch(register({
      verify: vcode,
      username: user,
      password: password,
      repassword: repassword
    })).then(data => {
      alert(data.msg);
      setTimeout(() => {
        if (data.code == 0) {
          setDeg(0) 
        }
        setVcodeSrc('/miaov/user/verify?'+Date.now())
      }, 100)
    })
  }
  return (
    <div>
      <div className="register_box">
        <figure className="user_img">
          <img src={require('../../common/images/user_img.png')} alt="" />
          <figcaption>如有账号，请直接登录</figcaption>
        </figure>
        <div className="register_form">
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
              <input 
                type="password"
                placeholder="请输入密码" 
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </p>
            <p>
              <input 
                type="password"
                placeholder="请输入密码" 
                value={repassword}
                onChange={e => {
                  setRepassword(e.target.value)
                }}
              />
            </p>
            <p className="clearfix">
              <input 
                className="verifyCode"
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
              onClick={toRegister}
            >注册</button>
            <p className="form_tip">已有帐号？<a onClick={() => {setDeg(0)}}>立即登录</a></p>
          </div>
        </div>
      </div>)
    }
    
export default RegisterBox;