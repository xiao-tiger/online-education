import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
import {useBack} from '../../common/hook/index'


import isLogin from '../../store/action/isLogin'
import logout from '../../store/action/logout'


function Header(props) {
  let history = useHistory();
  let location = useLocation();
  let dispatch = useDispatch();
  let back = useBack(history);
  let state = useSelector(state => {
    return state
  });

  let [isBtnShow, setBtnShow] = useState(false)

  useEffect(() => {
    dispatch(isLogin())
  }, [])  // [] 表示只检测一次，

  let path = location.pathname;
  let user = state.getUser;
  let {changeMenu} = props;
  function getUser() {
    if(path == '/login') {
      return ''
    }
    if(user) {
      return (<span className="header-btn-right">
        <span 
          className="header-user"
          onClick={() => {
            setBtnShow(!isBtnShow)
          }}
        >{user}</span>
        <span 
          className="header-logout-btn" 
          style={{display: isBtnShow?'block': 'none'}}
          onClick={() => {
            dispatch(logout())
          }}
        >退出</span>
      </span>)
    }
    return <Link className="user" to="/login" />
  }

  return (
    <header id="header">
      <nav className="menu">
          {
            path == '/login'? 
            <a 
              className="header-btn-left iconfont icon-back"
              onClick={back}
            ></a>: 
            <a 
              className="header-btn-left iconfont icon-hycaidan"
              onClick={changeMenu}
            ></a>
          }
      </nav>
      <h1 className="logo">miaov.com</h1>
      
      {/* 显示用户名，用户信息的 */}
      {getUser()}

    </header>
  )
}

export default Header;