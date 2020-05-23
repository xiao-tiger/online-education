import http from './http';



function getMessageList(id) {
  return function(dispatch, getState) {
    dispatch({
      type: 'MESSAGE_LOAD'
    });

    let {page} = getState().messageList;
    return http.post(`/lecturer/getcomment?page=${page}&rows=10`, {
      article_id: id
    })
    .then(res => {
      // console.log(res.data);
      if(!res.data.length) {
        dispatch({
          type: 'MESSAGE_LOADEND'
        });
        return false;
      }
      dispatch({
        type: 'MESSAGE_LOADOVER',
        messageList: res.data
      });
      return true;
    })
  }

}


export default getMessageList;



