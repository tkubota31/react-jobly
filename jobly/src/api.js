import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }


//get a list of all companies using name
  static async getCompanies(name){
    let res = await this.request("companies",{name})
    return res.companies
  }

  //get a list of all jobs using title parameter
  static async getJobs(title){
    let res = await this.request("jobs",{title})
    return res.jobs
  }

  // get current User
  static async getCurrentUser(username){
    let res = await this.request(`user/${username}`);
    return res.user
  }

  static async login(data){
    let res = await this.request(`auth/token`,data,"post");
    return res.token
  }

  static async signup(data){
    let res = await this.request(`auth/register`, data, "post");
    return res.token
  }
}

    export default JoblyApi;
