import React from 'react';
import Tab from '../../common/component/Tab';
import Article from './article';
import Good from './good';
import MessageList from './messageList';


function Main(props) {
  let {data} = props;
  return (
    <div className="workDetails">
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





