import React from 'react';

export default class GeneratableButton extends React.Component {
  static propTypes = {
    mainClass: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }

  render() {
    const { name, mainClass } = this.props;
    const className = name.substr(1, name.length);
    const baseClass = mainClass.substr(1, mainClass.length);

    return (
      <div>
        <div>ClassName: { name }</div>
        <div className={ `${baseClass} ${className}` }>
          Button
        </div>
      </div>
    );
  }
}
