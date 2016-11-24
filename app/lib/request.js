import 'es6-promise';
import 'whatwg-fetch';
import { pickBy } from 'lodash';
import qs from 'qs';
import deepAssign from 'deep-assign';

function filteredParams(params) {
  const filteredParams = pickBy(params, item => !!item);

  return `?${qs.stringify(filteredParams, { arrayFormat: 'brackets' })}`;
}

function parseJSON(response) {
  return response.json();
}

export default function request(url, params, queryParams) {
  const defaultParams = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (queryParams) {
    url += filteredParams(queryParams);
  }

  return fetch(url, deepAssign({}, defaultParams, params))
    .then(parseJSON);
}
