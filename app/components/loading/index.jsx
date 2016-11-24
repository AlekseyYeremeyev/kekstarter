import React, { Component, PropTypes } from 'react';
import style from './style';

export default class Loading extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  }

  render() {
    const { isLoading, children } = this.props;

    if (isLoading) {
      return (
        <div className={ style.content }>
          <i className={ style.icon } />
        </div>
      );
    }

    return children;
  }
}
