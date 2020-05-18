import React, {useState, useEffect, useRef} from 'react'

import BScroll from 'better-scroll'

import Header from './Header'
import Menu from './Menu'

import {useInnerHeight} from '../../common/hook/index'

function Frame(props) {
  let [showMenu, setShowMenu] = useState(false);
  let inneH = useInnerHeight();
  let pageScroll = null;

  function changeMenu() {
    setShowMenu(!showMenu)
  }
  function menuHide() {
    setShowMenu(false)
  }

  let wrap = useRef(null);
  useEffect(() => {
    pageScroll = new BScroll(wrap.current)
  }, [])
  return (
    <div>
      <Header changeMenu={changeMenu} />
      <Menu showMenu={showMenu} />
      <div
        id="main"
        onTouchStart={menuHide}
        style={{ height: inneH }}
      >
        <div className="pageWrap" ref={wrap}>
          <div>
            { props.children }
          </div>
        </div>
        
      </div>
    </div>
  )
}


export default Frame;

