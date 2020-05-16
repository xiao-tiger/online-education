
function getUser(state="", action) {
  switch(action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return ''
  }
  return state
}



export default getUser



