function work(state={
  data: {},
  loading: true
}, action) {
  switch(action.type) {
    case 'WORK_RESET':
      return {
        data: {},
        loading: true
      };

    case 'WORK_LOADOVER':
      return {
        data: action.data,
        loading: false
      };
  }
  return state;
}


export default work;


