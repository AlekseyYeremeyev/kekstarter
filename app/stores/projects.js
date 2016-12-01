import Alt from 'altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import ProjectsActions from 'actions/projects';

@createStore(Alt)
export default class ProjectsStore {
  static displayName = 'ProjectsStore'

  constructor() {
    this.projects = [];
    this.isLoading = true;

    this.bindListeners({
      setProject: ProjectsActions.FETCH
    });
  }

  setProject(projects) {
    this.projects = projects;
    this.isLoading = false;
  }
}
