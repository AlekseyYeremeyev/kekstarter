import Alt from 'altFlux';
import { createActions } from 'alt-utils/lib/decorators';
import { parseCss, convertToString } from 'helpers/parser';
import { demoVariables, demoButtons } from 'helpers/demo';

@createActions(Alt)
export default class ParserActions {
  setValue(name, value) {
    return { name, value };
  }

  showButtons(styles) {
    return (dispatch) => {
      try {
        const stylesObj = parseCss(styles);
        convertToString(stylesObj).then(({ css }) => {
          dispatch({ stylesObj, css });
        });
      } catch(e) {
        dispatch({ error: `${e.name}. ${e.reason}` });
      }
    };
  }

  showDemo() {
    return (dispatch) => {
      const stylesObj = parseCss(`${demoVariables} ${demoButtons}`);

      convertToString(stylesObj).then(({ css }) => {
        dispatch({ stylesObj, css });
      });
    };
  }
}
