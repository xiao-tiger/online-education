import React, {useState, useEffect, useRef} from 'react'

import BScroll from 'better-scroll'

import Header from './Header'
import Menu from './Menu'

import {useInnerHeight} from '../../common/hook/index'

function Frame(props) {
  let [showMenu, setShowMenu] = useState(false);
  let inneH = useInnerHeight();
  // let pageScroll = null;
  let {pullUp, getData} = props;

  function changeMenu() {
    setShowMenu(!showMenu)
  }
  function menuHide() {
    setShowMenu(false)
  }

  let wrap = useRef(null);
  useEffect(() => {
    window.pageScroll = new BScroll(wrap.current, {
      // better-scroll默认禁止了一些标签的默认行为
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        className: /(^|\s)work_a(\s|$)/
      },
      pullUpLoad: pullUp?{threshold: 200}: false
    });
    window.pageScroll.on('pullingUp', () => {
      getData().then(res => {
        if (res) {
          window.pageScroll.finishPullUp();
          window.pageScroll.refresh();          
        } else {
          window.pageScroll.closePullUp();
        }
      });
    });

    return () => {
      window.pageScroll = null; 
    }
  }, []);
  return (
    <div>
      <Header changeMenu={changeMenu} />
      <Menu showMenu={showMenu} menuHide={menuHide} />
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

