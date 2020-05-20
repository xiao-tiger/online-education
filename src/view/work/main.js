import React from 'react';
import Tab from '../../common/component/Tab';
import Article from './article';

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
      <Article data={data} />
    </div>
  )
}


export default Main;





