import React, {useEffect, useRef} from 'react';


function Article(props) {
  let {data} = props;
  let wrap = useRef(null);

  // 解决better-srcoll滑动卡顿
  // 因为图片加载过慢，没有高度，等图片加载完，better-scroll重新计算高度，所以出现卡顿
  useEffect(() => {
    let img = wrap.current.querySelectorAll('img');
    img.forEach(img => {
      img.onload = function () {
        window.pageScroll.refresh(); 
      };
    })


  }, [data]);  // data更新，页面数据也就更新。
  
  return (
      <article className="miiaov_article" ref={wrap}>
        <h3>
          <span>{data.title}</span>
        </h3>
        <div className="miiaov_txt">
          <div
            dangerouslySetInnerHTML={{
              __html: data.content
            }}
          ></div>
        </div>
      </article>
  )
}

export default Article;
          
          
          
