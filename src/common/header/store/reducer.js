import * as constants from './constants' 
import { fromJS } from 'immutable'
// const defaultState = {
//   focused: false
// };
const defaultState = fromJS({
  focused: false,
  list:[]
});

export default (state = defaultState,action) => {
  if (action.type === constants.SEARCH_FOCUS){
    return state.set('focused',true)
    // return {
    //   focused: true
    // }
  }else if (action.type === constants.SEARCH_BLUR){
    return state.set('focused',false)
    // return {
    //   focused: false
    // }
  }else if (action.type === constants.CHANGE_LIST){
    return state.set('list',action.data)
  }
  return state;
}