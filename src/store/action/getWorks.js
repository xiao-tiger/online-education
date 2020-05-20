import http from './http';


function getWorks() {
  return function(dispatch, getState) {
    // 正在加载
    dispatch({
      type: 'LOAD'
    });
    let works = getState().works;
    let {page} = works;
    return http.post(`/lecturer/lists?page=${page}&rows=8`, {
      order: 'desc',
      sort: 'sort',
      category_id: 1,
      recommend: 1
    }).then(res => {
      if (!res.data.length) {
        dispatch({
          type: 'LOADEND'
        })
        return false;
      }

      dispatch({
        type: 'LOADOVER',
        data: res.data
      });
      return true;
    })
  }
}


export default getWorks;

