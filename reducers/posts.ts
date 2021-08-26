const reducer = (posts = [], action: any) => {
  switch (action.Type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return posts
    default:
      return posts
  }
}

export default reducer