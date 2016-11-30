import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import { createStyleTree, convertToString } from 'helpers/parser';
import projectsSource from 'sources/projects';

@createActions(Alt)
export default class ProjectActions {
  get(id) {
    return (dispatch) => {
      return projectsSource.get(id).then(({ project }) => {
        const { components, modifiers } = createStyleTree(project.data);

        return convertToString(modifiers).then(({ css }) => {
          dispatch({ project, components, css });
        });
      });
    };
  }

  reset() {
    return true;
  }
}
