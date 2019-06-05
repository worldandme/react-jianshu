// import React from 'react';
import React, { PureComponent } from 'react';
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

// const getListArea = (show) => {
//   if(show){
//     return (
//       <SearchInfo >
//             <SearchInfoTitle>
//               热门搜索
//               <SearchInfoSwitch>换一批</SearchInfoSwitch>
//             </SearchInfoTitle>
//             <SearchInfoList>
//               {
//                 this.props.list.map((item)=>{
//                   return <SearchInfoItem key={item} >{item}</SearchInfoItem>
//                 })
//               }
//               {/* <SearchInfoItem>教育</SearchInfoItem>
//               <SearchInfoItem>教育</SearchInfoItem>
//               <SearchInfoItem>教育</SearchInfoItem>
//               <SearchInfoItem>教育</SearchInfoItem> */}
//             </SearchInfoList>
//           </SearchInfo>
//     )
//   }else{
//     return null
//   }
// }

// const Header = (props) => {
//   return (
//     <HeaderWrapper>
//       <LoGo></LoGo>
//       <Nav>
//         <NavItem className='left active'>首页</NavItem>
//         <NavItem className='left'>下载App</NavItem>
//         <NavItem className='right'>登录</NavItem>
//         <NavItem className='right'>
//           <i className='iconfont'>&#xe636;</i>
//         </NavItem>
//         <SearchWrapper>
//           <CSSTransition
//             in={props.focused}
//             timeout={200}
//             classNames='slide'
//           >
//             <NavSearch 
//               className={props.focused ? 'focused' : ''}
//               onFocus={props.handleInputFocus}
//               onBlur={props.handleInputBlur}
//               >
//             </NavSearch>  
//           </CSSTransition>
//           <i  className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
//           {getListArea(props.focused)}
//         </SearchWrapper>

//       </Nav>
//       <Addition>
//         <Button className='writting'>
//           <i className='iconfont'>&#xe60e;</i>
//           写文章
//         </Button>
//         <Button className='reg'>注册</Button>
//       </Addition>
//     </HeaderWrapper>
//   );
// }

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // focused: false
    }
    // this.handleInputFocus = this.handleInputFocus.bind(this)
    // this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]} >{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe83c;</i>
              换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
              // list.map((item)=>{
              //   return <SearchInfoItem key={item} >{item}</SearchInfoItem>
              // })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
            {this.getListArea()}
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
  // handleInputFocus(){
  //   this.setState({
  //     focused: true
  //   })
  // }
  // handleInputBlur(){
  //   this.setState({
  //     focused: false
  //   })
  // }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    // focused: state.header.get('focused')
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      // const action = {
      //   type:'search_focus'
      // }
      // dispatch(action);
      if (list.size <= 0) {
        dispatch(actionCreators.getList())
      }

      dispatch(actionCreators.searchFocus());

    },
    handleInputBlur: () => {
      // const action = {
      //   type:'search_blur'
      // }
      // dispatch(action);
      dispatch(actionCreators.searchBlur());

    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage: (page, totalPage, spin) => {
      let originAngle = 360 + spin.style.transform.replace(/[^0-9]/ig, '')
      spin.style.transform = 'rotate(' + originAngle + 'deg)'
      dispatch(actionCreators.changePage(page < totalPage ? page + 1 : 1))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);