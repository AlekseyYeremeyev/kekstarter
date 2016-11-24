import Alt from 'altFlux';
import { createStore } from 'alt-utils/lib/decorators';
import ParserActions from 'actions/parser';
import { demoVariables, demoButtons } from 'helpers/demo';

@createStore(Alt)
export default class ParserStore {
  static displayName = 'ParserStore'

  constructor() {
    this.stylesObj = {};
    this.css = '';
    this.styles = '';
    this.variables = '';
    this.error = '';

    this.bindListeners({
      setValue: ParserActions.SET_VALUE,
      showButtons: ParserActions.SHOW_BUTTONS,
      showDemo: ParserActions.SHOW_DEMO
    });
  }

  setValue({ name, value }) {
    this[name] = value;
  }

  setVariables(variables) {
    this.variables = variables;
  }

  showButtons({ stylesObj = {}, css = '', error = '' }) {
    this.stylesObj = stylesObj;
    this.css = css;
    this.error = error;
  }

  showDemo({ stylesObj, css }) {
    this.stylesObj = stylesObj;
    this.css = css;
    this.variables = demoVariables;
    this.styles = demoButtons;
  }
}
