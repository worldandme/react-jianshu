import React, { PureComponent } from 'react';
// 和redux做连接
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';


class Topic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { list } = this.props;

    return ( 
        <TopicWrapper>
          {
            list.map((item)=>{
              return(
                <TopicItem key={item.get('id')}>
                  <img className='topic-pic' src={item.get('imgUrl')} alt={item.get('id')}/>
                  {item.get('title')}
                </TopicItem>
              )
            })
          }
          {/* <TopicItem>
            <img className='topic-pic' src="https://oimagec2.ydstatic.com/image?id=-6091600844855118773&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60" />
            社会热点
          </TopicItem> */}
        </TopicWrapper>
     );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','topicList'])
})
 
export default connect(mapState,null)(Topic);