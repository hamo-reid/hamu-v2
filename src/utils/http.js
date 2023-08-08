import axios from "axios";

class Request {
  constructor(config) {
    this.instance = axios.create(config);
  }
  request(config) {
    return new Promise((resolve, reject)=>{
      this.instance.request(config)
      .then((res)=>{
        resolve(res)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }
}

export default Request;