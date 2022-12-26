import axios from "axios";
// import { getToken, getLanguage } from "./Tokens";
// import { environment } from "src/config";
// export const BASE_URL: string = environment.apiKey;

// Get request Function
export const apiGetRequest = (endpoint, token = null, props = {}) =>
  ApiRequest("GET", endpoint, token, props);

// Post request Function
export const apiPostRequest = (endpoint, payload, token = null) =>
  ApiRequest("POST", endpoint, token, { data: payload });

// Patch request Function
export const apiPatchRequest = (endpoint, payload, token = null) =>
  ApiRequest("PATCH", endpoint, token, { data: payload });

// Put Request Function
export const apiPutRequest = (endpoint, payload, token = null) =>
  ApiRequest("PUT", endpoint, token, { data: payload });

// Delete Request Function
export const apiDeleteRequest = (endpoint, token = null, props = {}) =>
  ApiRequest("DELETE", endpoint, token, props);

// Api Request for all the api methods
export const ApiRequest = (
  method,
  endpoint,
  token = null,
  props = {}
) => {
  if (!token) {
    token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0NUdUMVZqdXBRdzlZMXV4UDZELXVCUGQ4WnZOeDVveUI4MHJJUkZNc00wIn0.eyJleHAiOjE2NzIwOTI4NjUsImlhdCI6MTY3MjA1Njg2NSwianRpIjoiMzllMGE1ZmEtMDljNy00MTUyLWIxNGItZDQxZDM4OTFmNzVlIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvYXV0aC9yZWFsbXMvUHJvZmxvdyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3ZTI1Zjk1NC0xM2I2LTRjYTctODcxNi03OTNkNzIyZmMxN2QiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwcm9mbG93LmF0Iiwic2Vzc2lvbl9zdGF0ZSI6Ijk0NTNlYmFkLTI5OTItNDk0Ni1iOWY0LTNhNTM5NTFhNTc3YiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly93d3cucHJvZmxvdy5hdCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1wcm9mbG93Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI5NDUzZWJhZC0yOTkyLTQ5NDYtYjlmNC0zYTUzOTUxYTU3N2IiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJtdWhhbW1hZC5haXphekBwcm9mbG93LmF0IiwibmFtZSI6Im11aGFtbWFkLmFpemF6QHByb2Zsb3cuYXQgbXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsInByZWZlcnJlZF91c2VybmFtZSI6Im11aGFtbWFkLmFpemF6QHByb2Zsb3cuYXQiLCJnaXZlbl9uYW1lIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsImZhbWlseV9uYW1lIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsImVtYWlsIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsIm8iOlsiQ09NUEFOWTpQcm9mbG93IEdtYkgiLCJDT01QQU5ZSUQ6NjM3MzY0OTYxZjFmZGUwMDAxNzhlZTZmIiwiUE9MSUNZSUQ6NTQ2ZjQ4NTUtM2M3My00NzFiLTllMzYtYzRjMjc5ZWVkNTFjIl19.KgD7rzuSCA_z59BS1kg7OZuIPj9gCjDocRS4muT74K0J5inED89UAr7JIgWI2_uzbCRmYTe7Xj5nXkCGddoFH9jRlJRjfPBhmxsiSKEB29__eOxqSNrXAYX4cT52KQMmXwMkOdVtfusy0GFHes2IZj2b88TrxVj1VHKEsQgDxF5Dd3d_wia8XXFEoJH59elFf7vVwU2AKBDBSGwime0J1Y_oeTe6-gxXt9u6lmi1avz9EgQndvAd6cQzPDbj2OTQb-skwKoOzwslWrGotKpVPb6oiKPUCk81YvtDW5fitMrxoG86zEUwNMJe84v-M6pMvIkuPXuDZ-nIrL6zbSVbqQ"
  }
  const params = {
    method,
    baseURL: "https://proflow.at/rest/api/",
    url: endpoint,
    params:
      method.toLowerCase() === "get" || method.toLowerCase() === "delete"
        ? props
        : undefined,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  return axios(params);
};
