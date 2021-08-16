export default class Interceptor {
  constructor(axiosObject) {
    this.requestInterceptor = null;
    this.responseInterceptor = null;
    this.axiosObject = axiosObject;
  }

  setRequestInterceptor() {
    this.requestInterceptor = this.axiosObject.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );
  }

  setResponseInterceptor() {
    this.responseInterceptor = this.axiosObject.interceptors.response.use(
      (response) => response,
      ({ response: error }) => Promise.reject(error)
    );
  }

  removeRequestInterceptor() {
    this.axiosObject.interceptors.request.eject(this.requestInterceptor);
  }

  removeResponseInterceptor() {
    this.axiosObject.interceptors.response.eject(this.responseInterceptor);
  }
}
