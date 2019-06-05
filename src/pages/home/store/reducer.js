import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'home/CHANGE_HOME_DATA':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case 'home/SET_SCROLL':
      return state.set('showScroll',action.isShow)
    case 'home/ADD_HOME_LIST':
      return state.set('articleList',state.get('articleList').concat(action.articleList))
    default:
      return state;
  }
}