export default (state = {}, action) => {
  if (action.type === 'start')
    console.log('blerg');
  return state;
}
