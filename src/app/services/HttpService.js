import axios from 'axios';

import Interceptor from './InterceptorService';

class HttpService {
  constructor(options) {
    this.instance = axios.create(options);
    this.interceptor = new Interceptor(this.instance);

    this.interceptor.setRequestInterceptor();
    this.interceptor.setResponseInterceptor();
  }

  async get(url, config) {
    const { data } = await this.instance.get(url, config);
    return data;
  }

  async post(url, payload, config) {
    const { data } = await this.instance.post(url, payload, config);
    return data;
  }
}

export default HttpService;
