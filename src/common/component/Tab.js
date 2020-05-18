import React, {useEffect, useRef, useState} from 'react'
import Bscroll from 'better-scroll'


function Tab(props) {
  let bannerWrap = useRef(null);
  let [now, setNow] = useState(0);
  let { data, render } = props;
  let bScroll = null;
  let timer = null;
  useEffect(() => {
    bScroll = new Bscroll(bannerWrap.current, {
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical",
      momentum: false,
      snap: {
        loop: true
      }
    });
    bScroll.on('scrollEnd', () => {
      // pageX 是幻灯片显示第几张图片
      setNow(bScroll.getCurrentPage().pageX);
    });
    timer = setInterval(()=>{
      bScroll.next(200);
    },2000);
    bannerWrap.current.addEventListener("touchstart",()=>{
        clearInterval(timer);
    });
    bannerWrap.current.addEventListener("touchend",()=>{
        timer = setInterval(()=>{
            bScroll.next(200)
        },2000);
    });

    return () => {
      clearInterval(timer);
    }
  }, []);
  return (
    <div className="banner">
      <div className="banner_img" ref={bannerWrap}> 
        <ul className="banner_list clearfix">
          {
            data.map((item, index) => {
              return <li key={index}>{render(item)}</li>
            })
          }
        </ul>
      </div>
      {
        <ul className="banner_nav">
          {
            data.map((item, index) => {
              return (<li key={index} className={index===now?"active":""}></li>)
            })
          }
        </ul>
      }
    </div>
  )
}


export default Tab

