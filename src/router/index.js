import React from 'react'
import {Switch, Route} from 'react-router-dom'

import routerList from './route_list.js' 


function IndexRoute(props) {
  return (
    <Switch>
      {
        routerList.map((item, index) => {
          return (<Route 
            path={item.path}
            exact={item.exact}
            render={item.render}
            key={index}
            {...props}
          />)
        })
      }
    </Switch>
  )
}


export default IndexRoute;


