import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Link } from 'react-router';
import { paths } from 'helpers/routes';
import ProjectsActions from 'actions/projects';
import ProjectsStore from 'stores/projects';
import Layout from 'components/layout';
import Loading from 'components/loading';
import style from './style';

@connectToStores
export default class Dashboard extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    projects: PropTypes.array.isRequired
  }

  static getStores() {
    return [ProjectsStore];
  }

  static getPropsFromStores(props) {
    return ProjectsStore.getState();
  }

  componentDidMount() {
    ProjectsActions.fetch();
  }

  renderProjects = () => {
    const { projects } = this.props;

    return projects.map((project) => {
      return (
        <Link
          key={ project.id }
          to={ paths.project(project.id) }
          className={ style.item }
        >
          <div>{ project.title }</div>
          <div className={ style.date }>{ project.date }</div>
        </Link>
      );
    });
  }

  render() {
    const { isLoading } = this.props;

    return (
      <Layout>
        <h2>Projects</h2>
        <Loading isLoading={ isLoading }>
          <div className={ style.dashboard }>
            { this.renderProjects() }
          </div>
        </Loading>
      </Layout>
    );
  }
}
