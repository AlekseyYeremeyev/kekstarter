import React, { Component } from 'react';
import Layout from 'components/layout';

export default class ProjectLayout extends Component {
  render() {
    return (
      <Layout>
        { this.props.children }
      </Layout>
    );
  }
}
