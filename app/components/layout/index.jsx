import React, { Component } from 'react';
import style from './style';

export default class Layout extends Component {
  render() {
    return (
      <div className={ style.container }>
        { this.props.children }
      </div>
    );
  }
}
