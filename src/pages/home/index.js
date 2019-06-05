import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeRight,
  HomeLeft,
  BackTop
} from './style'
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleScrollTop(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4671/8fd7b261d35b4e91e2ccec5a2ec5a56f005309a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.show?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
        }
        
      </HomeWrapper>
    );
  }
  //当页面挂载完毕执行，可用于请求页面数据
  componentDidMount() {
    const {changeHomeData} = this.props;
    changeHomeData()
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}


const mapState = (state)=>{
  return {
    show: state.getIn(['home','showScroll'])
  }
}
const mapDispathToProps = (dispatch) => {
  return{
    changeHomeData(){
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
    changeScrollTopShow(e){
      if(document.documentElement.scrollTop>400){
        dispatch(actionCreators.setScroll(true));
      }else{
        dispatch(actionCreators.setScroll(false));
      }
      console.log(document.documentElement.scrollTop)
    }
  }
}

export default connect(mapState,mapDispathToProps)(Home);