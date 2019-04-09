import React from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
// import * as actionCreators from './store/actionCreators'
import { actionCreators } from './store'
import { 
  HeaderWrapper,
  LoGo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

const getListArea = (show) => {
  if(show){
    return (
      <SearchInfo >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
          </SearchInfo>
    )
  }else{
    return null
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      <LoGo></LoGo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch 
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              >
            </NavSearch>  
          </CSSTransition>
          <i  className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
          {getListArea(props.focused)}
        </SearchWrapper>
        
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont'>&#xe60e;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       // focused: false
//      }
//     // this.handleInputFocus = this.handleInputFocus.bind(this)
//     // this.handleInputBlur = this.handleInputBlur.bind(this)
//   }
//   render() { 
//     return (
//       <HeaderWrapper>
//         <LoGo></LoGo>
//         <Nav>
//           <NavItem className='left active'>首页</NavItem>
//           <NavItem className='left'>下载App</NavItem>
//           <NavItem className='right'>登录</NavItem>
//           <NavItem className='right'>
//             <i className='iconfont'>&#xe636;</i>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={this.props.focused}
//               timeout={200}
//               classNames='slide'
//             >
//               <NavSearch 
//                 className={this.props.focused ? 'focused' : ''}
//                 // onFocus={this.handleInputFocus}
//                 // onBlur={this.handleInputBlur}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//                 >
//               </NavSearch>  
//             </CSSTransition>
//             <i  className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
//           </SearchWrapper>
          
//         </Nav>
//         <Addition>
//           <Button className='writting'>
//             <i className='iconfont'>&#xe60e;</i>
//             写文章
//           </Button>
//           <Button className='reg'>注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     );
//   }
//   // handleInputFocus(){
//   //   this.setState({
//   //     focused: true
//   //   })
//   // }
//   // handleInputBlur(){
//   //   this.setState({
//   //     focused: false
//   //   })
//   // }
// }

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    // focused: state.header.get('focused')
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus:() => {
      // const action = {
      //   type:'search_focus'
      // }
      // dispatch(action);
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur:() => {
      // const action = {
      //   type:'search_blur'
      // }
      // dispatch(action);
      dispatch(actionCreators.searchBlur());

    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);