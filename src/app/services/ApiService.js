import HttpService from "./HttpService";

const githubApiEndpoint = "https://api.github.com/";

export const githubApi = new HttpService({
  baseURL: githubApiEndpoint,
});
