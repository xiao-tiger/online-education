import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Frame from '../../common/component/Frame';
import Tab from '../../common/component/Tab';
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Works from './works';

import getWorks from '../../store/action/getWorks'
import '../../common/css/common.css';
import '../../common/css/index.css';
import { Agent } from 'http';

let imgData = [
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png")
];

function Index() {
  let [page, setPage] = useState(1);
  let dispatch = useDispatch();

  // 函数不需要接收page参数，内部函数会自动调取全局的page
  function getWorksData() {
    let p = dispatch(getWorks(page));
    console.log(page);
    setPage(++page);
    return p
  }
  useEffect(() => {
    getWorksData();
    // dispatch(getWorks(page))
  }, []);
  let works = useSelector(state => {
    return state.works
  });

  return (
    <Frame 
      pullUp={true}
      getData={getWorksData}
    >
      <div>
        <Tab 
          data={imgData}
          render={(data) => {
            return <img src={data} />
          }}
        />
        <section className="index_content">
          <Course />
          <Vip />
          <Miaov />
          <Works works={works} />
        </section>
      </div>
    </Frame>
  )
}


// export default connect(res => {
//   return res
// })(Index);

export default Index;