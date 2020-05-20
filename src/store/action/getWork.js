import http from './http';


function getWork(id) {
  return function(dispatch) {

    return http.post('/lecturer/info', {
      article_id: id
    }).then(res => {
      dispatch({
        type: 'WORK_LOADOVER',
        data: res.data
      })
    })
  }

}


export default getWork;








