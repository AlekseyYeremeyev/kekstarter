import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import connectToStores from 'alt-utils/lib/connectToStores';
import { map } from 'lodash';
import ProjectStore from 'stores/project';
import ProjectActions from 'actions/project';
import ProjectComponent from './component';
import Loading from 'components/loading';
import style from './style';

@connectToStores
export default class ProjectDetail extends Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    css: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    project: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired
  }

  static getStores() {
    return [ProjectStore];
  }

  static getPropsFromStores(props) {
    return ProjectStore.getState();
  }

  componentDidMount() {
    ProjectActions.get(this.props.routeParams.id);
  }

  componentWillUnmount() {
    ProjectActions.reset();
  }

  renderComponents = () => {
    const { components } = this.props;

    return map(components, (modifiers, type, index) => {
      return (
        <div key={ type }>
          <h2>{ type }</h2>
          <ProjectComponent modifiers={ modifiers } type={ type } />
        </div>
      );
    });
  }

  render() {
    const { project, css, isLoading } = this.props;

    return (
      <Loading isLoading={ isLoading }>
        <div>
          <h1 className={ style.projectTitle }>{ project.title }</h1>
            <div className={ style.project }>
              <style>{ css }</style>
              <div className={ style.projectComponents }>
                { this.renderComponents() }
              </div>
              <div>
                <ReactMarkdown source={ `\`\`\`\n${css}` }/>
              </div>
            </div>
        </div>
      </Loading>
    );
  }
}
