import React, { Component, cloneElement } from 'react';

class Main extends Component {
  render(){
    return(
      <div>
        {cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;
