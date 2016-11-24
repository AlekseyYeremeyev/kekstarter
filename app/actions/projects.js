import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import projectsSource from 'sources/projects';

@createActions(Alt)
export default class ProjectsActions {
  fetch() {
    return (dispatch) => {
      return projectsSource.fetch().then((projects) => {
        dispatch(projects);
      });
    };
  }
}
