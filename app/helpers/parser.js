import postcssJs from 'postcss-js';
import postcss from 'postcss';
import postcssNested from 'postcss-nested';
import { reduce, omit } from 'lodash';

export function convertToString(style) {
  const nesting = postcssJs.sync([postcssNested]);

  return postcss().process(nesting(style), { parser: postcssJs });
}

export function createStyleTree(stylesObject) {
  const components = reduce(stylesObject, (result, modifiers, component) => {
    const componentModifiers = omit(modifiers, ['meta']);
    result[component] = result[component] || {};

    Object.keys(componentModifiers).forEach((name, index) => {
      result[component][`.${component}--${name}`] = {
        ...componentModifiers[name]
      };
    });

    return result;
  }, {});

  const modifiers = Object.keys(components).reduce((result, modifier) => ({
    ...result,
    ...components[modifier]
  }), {});

  return {
    components,
    modifiers
  };
}
