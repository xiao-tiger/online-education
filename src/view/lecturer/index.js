import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Frame from '../../common/component/Frame';
import Tab from '../../common/component/Tab';
import LecturerTab from './tab';
import Join from './join';
import LecturerAlert from './lecturerAlert';
import getLeturers from '../../store/action/getLecturers';


import '../../common/css/teacher.css';

function Lecturer() {
  let [show, setShow] = useState(false);
  let [alertData, setAlertData] = useState(null);
  let dispatch = useDispatch();
  let data = useSelector((state) => {
    return state.lecturers.data;
  });
  useEffect(() => {
    dispatch(getLeturers());
  }, []);

  function showAlert(data) {
    setAlertData(data);
    setShow(true);
  }
  function hideAlert() {
    setShow(false);
  }

  // 将得到的9条数据，分三组
  let newData = [];
  for(let i = 0; i < data.length; i+=3){
    
    let newArr = [];
    let end = i + 3;
    end = end > data.length ? data.length : end;
    // data[i]&&newArr.push(data[i]);
    // data[i+1]&&newArr.push(data[i+1]);
    // data[i+2]&&newArr.push(data[i+2]);
    for(let j = i; j < end; j++){
      newArr.push(data[j]);
    }
    newData.push(newArr);
  }

  return (
    <div>
      <Frame>
        <div className="teacher_banner">
          <h2><span>xx团队</span></h2>
          <LecturerTab 
            data={data}
            newData={newData}
            showAlert={showAlert}
          />

          {/* {data.length<1? 
            "": 
            <Tab 
              data={newData}
              render={(data) => {
                return (<ul className="lecturer_list">
                  {
                    data.map((item, index) => {
                      return (<li key={index}>
                        <img src={item.icon} />
                        <p>{item.title}</p>
                      </li>)
                    })
                  }
                </ul>)
              }}
            />
          } */}
        </div>
        <Join />
        <footer id="footer">
          <div className="link clearfix">
            <a href="#">1497154694@qq.com</a>
            <a href="#">18855683727</a>
          </div>
          <nav className="foot_nav clearfix">
            <a href="#">网站首页</a>
            <a href="#">课程安排</a>
            <a href="#">学员作品</a>
            <a href="#">视频教程</a>
            <a href="#">关于我们</a>
            <a href="#">在线留言</a>
            <a href="#">常见问题</a>
          </nav>
          <p className="copyright">京ICP备xxxxx号-1 xxxxx xxxxxx 版权所有</p>
        </footer>
      </Frame>

      {
        show? <LecturerAlert hideAlert={hideAlert} data={alertData} />: ''
      }
    </div>
  )
}


export default Lecturer;

