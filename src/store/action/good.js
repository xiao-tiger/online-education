import http from './http';


function getGood(id) {
  return function (dispatch) {
    http.post('/lecturer/getgood', {
      article_id: id
    }).then(res => {
      // res={code: 0, gooid: '3624'}
      if (res.data.code === 0) {
        dispatch({
          type: 'GOOD',
          goodid: res.data.gooid
        })
      } else {
        dispatch({
          type: 'CANCEL_GOOD'
        })
      }
    })
  }
}


function setGood(id) {
  return function(dispatch) {
    return http.post('/lecturer/good', {
      article_id: id
    }).then(res => {
      
      if(res.data.code === 0){
        dispatch(getGood(id));
        return true;
      }
    })
  }
}


function cancelGood({id, goodid}) {
  return function(dispatch) {
    return http.post('/lecturer/cancelgood', {
      goodid: goodid,
      article_id: id
    }).then(res => {
      if(res.data.code === 0) {
        dispatch({
            type: "CANCEL_GOOD"
        });
        return true; 
      }
    })
  }
}


export {getGood, setGood, cancelGood};


