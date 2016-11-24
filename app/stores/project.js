import Alt from 'altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import ProjectActions from 'actions/project';

@createStore(Alt)
export default class ProjectStore {
  static displayName = 'ProjectStore'

  constructor() {
    this.project = {};
    this.components = {};
    this.css = "";
    this.isLoading = true;

    this.bindListeners({
      setProject: ProjectActions.GET,
      reset: ProjectActions.RESET
    });
  }

  setProject({ project, components, css }) {
    this.project = project;
    this.components = components;
    this.css = css;
    this.isLoading = false;
  }

  reset() {
    this.isLoading = true;
  }
}
