import config from 'config';
import request from 'lib/request';

export default class PorjectSource {
  static urlRoot = `${config.apiTarget}/projects`;

  static fetch() {
    return request(this.urlRoot, {
      method: 'GET'
    });
  }

  static get(id) {
    return request(`${this.urlRoot}/${id}`, {
      method: 'GET'
    });
  }
}
