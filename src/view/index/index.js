import React from 'react';
import {connect} from 'react-redux';


import login from '../../store/action/login';


function Index(props) {
  let {dispatch} = props;
  return (
    <div>
      <h1>首页</h1>
      <button onClick={
        () => {
          dispatch(login())
        }
      }>登录</button>
    </div>
  )
}


export default connect(res => {
  return res
})(Index);