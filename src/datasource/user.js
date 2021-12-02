import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.headers);
  }

  getMe() {
    return this.get('/');
  }

  loginUser(payload) {
    return this.post('/createToken', payload);
  }

  updateTrainee(payload) {
    return this.put('/', payload);
  }

  deleteTrainee(id) {
    return this.delete(`/${id}`);
  }
}
