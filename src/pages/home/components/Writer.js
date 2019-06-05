import React, { PureComponent } from 'react';
import {WriterWrapper,WriterItem} from '../style';

class Writer extends PureComponent {
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