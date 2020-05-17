import React, {useState} from 'react'

import Header from './Header'
import Menu from './Menu'


function Frame(props) {
  let [showMenu, setShowMenu] = useState(false)
  function changeMenu() {
    setShowMenu(!showMenu)
  }
  return (
    // style={{display: showMenu?'block': 'none'}}
    <div>
      <Header changeMenu={changeMenu} />
      <Menu showMenu={showMenu} />
      <div id="main">
        { props.children }
      </div>
    </div>
  )
}


export default Frame;

