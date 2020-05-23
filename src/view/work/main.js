import React from 'react';
import Tab from '../../common/component/Tab';
import Article from './article';
import Good from './good';
import MessageList from './messageList';


function Main(props) {
  let {data, setShow} = props;
  let point = {};
  return (
    <div className="workDetails"
      onTouchStart={(e)=>{
        let touch = e.changedTouches[0];
        point.x = touch.pageX;
        point.y = touch.pageY;
      }}
      onTouchEnd={(e)=>{
        let touch = e.changedTouches[0];
        let nowPoint = {
          x: touch.pageX,
          y: touch.pageY
        };
        if(Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5 ){
          console.log('jaha');
          setShow(false);
        }
      }}>
      <Tab 
        data={data.image_path.map(item=>item.path)}
        render={(data) => {
          return (<img src={data} />)
        }}
      />
      <div className="miiaov_box">
        <Article data={data} />
        <article className="miiaov_comment">
          <Good 
            goodNum={data.good} 
            id={data.id}
          />
          <MessageList 
            id={data.id}
          />
        </article> 
      </div>
    </div>
  )
}


export default Main;





