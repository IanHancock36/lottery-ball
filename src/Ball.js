import React, {Component} from 'react';
import './Ball.css';

//no need for a constructor this is a stateless component. 
// we are only using props on this component it is considered a 'dumb' component. (no state)


class Ball extends Component {
    render() {
      return <div className='Ball'>{this.props.num}</div>;
    }
  }






export default Ball; 