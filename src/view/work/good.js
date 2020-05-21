import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {getGood, setGood, cancelGood} from '../../store/action/good';


function Good(props) {
  let {goodNum, id} = props;
  let [goodCount, setGoodCount] = useState(parseInt(goodNum));
  let state = useSelector((state) => {
    return state
  });
  let dispatch = useDispatch();
  let history = useHistory();

  let {getUser: user, good: {good, goodid}} = state;
  
  useEffect(() => {
    dispatch(getGood(id));
  }, [user]);

  let point = {};

  return (
    <p className="miiaov_zan">
      <span>有{goodCount}人觉的很赞</span>
      <span 
        className={"iconfont icon-tuijian1 "+ (good? 'good': '')}
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
            // TODO 点赞或者取消
            if (user) {
              if (good) {
                // 取消点赞
                dispatch(cancelGood({
                  id: id,
                  goodid: goodid
                })).then(res => {
                  if (res) {
                    setGoodCount(goodCount - 1);
                  }
                }) 
              } else {
                // 点赞
                dispatch(setGood(id)).then(res => {
                  if(res) {
                    setGoodCount(goodCount + 1);
                  }
                })
              }

            } else {
              history.push('/login');
            }
          }
        }}></span>
    </p>
  )
}


export default Good;


