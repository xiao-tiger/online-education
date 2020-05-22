import http from './http';


function putMessage(messageData) {

  return function (dispatch) {
    return http.post('/lecturer/addcomment', messageData).then(res => {
      if(res.data.code !== 0) {
        alert(res.data.msg);
      }

      return true;
    })

  }
}


export default putMessage;

