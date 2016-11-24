import React, { Component } from 'react';
import { Link } from 'react-router';
import { paths } from 'helpers/routes';
import Layout from 'components/layout';
import style from './styles';

export default class Header extends Component {
  render() {
    return (
      <Layout>
        <Link to={ paths.root() } className={ style.header }>
          Kekstarter
        </Link>
      </Layout>
    );
  }
}
