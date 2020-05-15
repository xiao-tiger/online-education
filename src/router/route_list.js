import React from 'react'

import Index from '../view/index/index.js'
import Login from '../view/login/index.js'
import Work from '../view/work/index.js'
import Course from '../view/course/index.js'
import Lecturer from '../view/lecturer/index.js'


const routeList = [
  {
    path: '/',
    name: '首页',
    exact: true,
    render(props) {
      return <Index {...props} />
    }
  }, {
    path: '/login',
    name: '登录',
    exact: true,
    render(props) {
      return <Login {...props} />
    }
  }, {
    path: '/work/:id',
    name: '作评详情',
    exact: true,
    render(props) {
      return <Work {...props} />
    }
  }, {
    path: '/course',
    name: '课程',
    exact: true,
    render(props) {
      return <Course {...props} />
    }
  }, {
    path: '/lecturer',
    name: '讲师',
    exact: true,
    render(props) {
      return <Lecturer {...props} />
    }
  }
]


export default routeList;



