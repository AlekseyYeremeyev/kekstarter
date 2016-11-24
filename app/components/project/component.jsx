import React, { Component, PropTypes } from 'react';
import { map } from 'lodash';
import style from './style';

export default class ProjectComponent extends Component {
  static propTypes = {
    modifiers: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  }

  renderComponent = () => {
    const { modifiers, type } = this.props;
    const children = type != 'input' ? type : null;

    return map(modifiers, (modifier, name) => {
      const className = name.slice(1);
      const hasDisabledState = modifier.hasOwnProperty('&:disabled');

      const disabledElement = hasDisabledState ? React.DOM[type]({
        className,
        children,
        disabled: true
      }) : null;
      const element = React.DOM[type]({
        className,
        children
      });

      return (
        <div key={ name } className={ style.componentsItem }>
          <h5>{ name }</h5>
          { element }
          <div>
            { disabledElement }
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={ style.components }>
        { this.renderComponent() }
      </div>
    );
  }
}
