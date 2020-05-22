import React from 'react';


function ToDate(props) {
  let {time} = props;

  let old_time = new Date(time).getTime();
  let current_time = Date.now();
  let dis_time = current_time - old_time;

  if(dis_time < 60000){
    return "刚刚";
  } else if(dis_time < 3600000) {
    return parseInt(dis_time / 60000) + "分钟之前";
  } else if(dis_time < 86400000) {
    return parseInt(dis_time / 3600000) + "小时之前";
  } else if(dis_time < 604800000) {
    return parseInt(dis_time / 86400000) + "天之前";
  }
  return time;
}


export default ToDate;
