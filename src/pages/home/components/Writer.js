import React, { Component } from 'react';
import {WriterWrapper,WriterItem} from '../style';

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <WriterWrapper>
        <WriterItem>
          author
        </WriterItem>
      </WriterWrapper>
     );
  }
}
 
export default Writer;