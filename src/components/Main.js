import React, { Component, cloneElement } from 'react';
import DevTools from './containers/DevTools';

class Main extends Component {
  render(){
    return(
      <div>
        {cloneElement(this.props.children, this.props)}
        <DevTools />
      </div>
    )
  }
}

export default Main;
