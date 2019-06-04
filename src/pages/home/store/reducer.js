import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList:[{
    id:1,
    title:'社会热点',
    imgUrl: 'https://oimagec2.ydstatic.com/image?id=-6091600844855118773&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
  },{
    id:2,
    title:'社会小事',
    imgUrl: 'https://oimagec2.ydstatic.com/image?id=-6091600844855118773&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
  }],
  articleList:[{
    id:1,
    title:'社会小事',
    imgUrl: 'https://oimagec2.ydstatic.com/image?id=-6091600844855118773&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60',
    desc: '小编推荐：Fundebug提供JS、微信小程序、微信小游戏，Node.js和Java错误监控。真的是一个很好用的错误监控服务，众多大佬公司都在使...'
  },{
    id:2,
    title:'胡歌',
    imgUrl: 'https://oimagec2.ydstatic.com/image?id=-6091600844855118773&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60',
    desc: '小编推荐：Fundebug提供JS、微信小程序、微信小游戏，Node.js和Java错误监控。真的是一个很好用的错误监控服务，众多大佬公司都在使...'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
}