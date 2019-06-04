import React, { Component } from 'react'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'

import {
  HomeWrapper,
  HomeRight,
  HomeLeft
} from './style'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
     <HomeWrapper>
       <HomeLeft>
         <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4671/8fd7b261d35b4e91e2ccec5a2ec5a56f005309a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
          <Topic></Topic>
          <List></List>
       </HomeLeft>
       <HomeRight>
         <Recommend></Recommend>
         <Writer></Writer>
       </HomeRight>
     </HomeWrapper>
    );
  }
}
 
export default Home;