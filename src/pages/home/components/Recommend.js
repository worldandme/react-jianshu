import React, { PureComponent } from 'react';
import {RecommendItem,RecommendWrapper} from '../style';
import {connect} from 'react-redux';
class Recommend extends PureComponent { 
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {list} = this.props;
    return ( 
      <RecommendWrapper>
        {
          list.map((item)=>{
            return(
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                {/* <img className='pic' src={item.get('imgUrl')} alt="Banner s club"/> */}
              </RecommendItem>
            )
          })
        }
        
      </RecommendWrapper>
     );
  }
}
const mapState = (state)=>({
  list: state.getIn(['home','recommendList'])
})
 
export default connect(mapState,null)(Recommend);