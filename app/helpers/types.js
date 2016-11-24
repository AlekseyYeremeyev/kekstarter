import { reduce } from 'lodash';

export function isMediaQuery(rule) {
  return rule.indexOf('@media') !== -1;
}

export function filterMediaQuery(rules) {
  return reduce(rules, (acc, curr, name) => {
    if (isMediaQuery(name)) {
      return {
        ...acc,
        [name]: curr
      };
    }

    return acc;
  }, {});
}
