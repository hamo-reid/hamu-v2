import { defineStore } from "pinia";
import { auth } from "../api";

// export const useGlobalStore = defineStore("global", {
//   state: () => {
//     return {
//       isLogin: false,
//     }
//   }
// })

function parseJWT(jwt){
  let parts = jwt.split(".");
  return {
    header: atob(parts[0]),
    payload: atob(parts[1])
  };
}

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    userData: null
  }),
  actions: {
    async login(email, pwd){
      const response = await auth.login(email, pwd);
      if ( response.status !== 200 ) return; // 过滤异常响应
      const body = response.data;
      console.log(body)
      if ( body.code === 0 ) {
        const jwt = body.data.jwt
        console.log(jwt)
        const payload = parseJWT(jwt).payload
        console.log(payload)
        return body
      } else return;
    },
  }
});