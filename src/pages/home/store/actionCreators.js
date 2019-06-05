import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'
const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})
const addHomeList = (result) => ({
  type: constants.ADD_HOME_LIST,
  articleList: fromJS(result.articleList)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result)
      dispatch(action);
    })
  }
}
export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      const action = addHomeList(result)
      dispatch(action);
    })
  }
}

export const setScroll = (result) => ({
  type: constants.SET_SCROLL,
  isShow: fromJS(result)
})