import React from 'react';
import Header from 'components/header';
import styles from './styles';

export default class Application extends React.Component {
  render() {
    return (
      <div className={ styles.layout }>
        <Header/>
        <main className={ styles.wrapper }>
          { this.props.children }
        </main>
      </div>
    );
  }
}
